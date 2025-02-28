// automation.js - Automates packaging, testing, and publishing for your VSCode extension

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCommand(command, description) {
    console.log(`\n🚀 ${description}...`);
    try {
        execSync(command, { stdio: 'inherit' });
        console.log(`✅ ${description} completed!\n`);
    } catch (error) {
        console.error(`❌ Error: ${description} failed!\n`, error);
        process.exit(1);
    }
}

// Step 1: Run Tests
runCommand('npm test', 'Running tests');

// Step 2: Linting
runCommand('npx eslint .', 'Linting code');

// Step 3: Build Package
runCommand('vsce package', 'Packaging the extension');

// Step 4: Publish to VSCode Marketplace
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const publisher = packageJson.publisher;

if (!publisher) {
    console.error('❌ Error: No publisher found in package.json. Ensure you have a publisher set before publishing.');
    process.exit(1);
}

runCommand(`vsce publish`, 'Publishing to VSCode Marketplace');

console.log('\n🎉 All steps completed successfully! Your extension is now live.');
