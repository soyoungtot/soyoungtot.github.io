import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const productionOrigin = "https://soyounghan.com";
const releaseMode = process.argv.includes("--release");
const registryPath = resolve("src/data/papers.json");
const registry = JSON.parse(await readFile(registryPath, "utf8"));
const errors = [];
const canonicalPaths = new Set();
const sourceFiles = new Set();

for (const [paperId, paper] of Object.entries(registry)) {
  const expectedCanonicalPath = `/papers/${paperId}.pdf`;
  const expectedSourceFile = `public${expectedCanonicalPath}`;

  if (paper.canonicalPath !== expectedCanonicalPath) {
    errors.push(
      `${paperId}: canonicalPath must be ${expectedCanonicalPath}`,
    );
  }

  if (paper.sourceFile !== expectedSourceFile) {
    errors.push(`${paperId}: sourceFile must be ${expectedSourceFile}`);
  }

  if (!new Set(["coming-soon", "ready"]).has(paper.status)) {
    errors.push(`${paperId}: status must be coming-soon or ready`);
  }

  if (canonicalPaths.has(paper.canonicalPath)) {
    errors.push(`${paperId}: canonicalPath is duplicated`);
  }

  if (sourceFiles.has(paper.sourceFile)) {
    errors.push(`${paperId}: sourceFile is duplicated`);
  }

  canonicalPaths.add(paper.canonicalPath);
  sourceFiles.add(paper.sourceFile);

  if (paper.status === "ready") {
    try {
      const filePath = resolve(paper.sourceFile);
      const fileStats = await stat(filePath);
      const file = await readFile(filePath);

      if (!fileStats.isFile() || file.subarray(0, 5).toString() !== "%PDF-") {
        errors.push(`${paperId}: sourceFile is not a valid PDF file`);
      }
    } catch {
      errors.push(`${paperId}: ready sourceFile does not exist`);
    }
  }

  if (releaseMode && paper.status === "coming-soon") {
    try {
      await stat(resolve(paper.sourceFile));
      errors.push(`${paperId}: coming-soon sourceFile must not exist in a release`);
    } catch {
      // A coming-soon paper must not be publicly addressable yet.
    }
  }

  console.log(`${paperId}: ${new URL(paper.canonicalPath, productionOrigin)}`);
}

if (errors.length > 0) {
  console.error("\nPaper registry validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("\nPaper registry validation passed.");
}