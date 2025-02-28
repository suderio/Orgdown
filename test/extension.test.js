const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { extractAndTangle, getExtension, writeFiles } = require('../extension');

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
const vscode = require('vscode');
// const myExtension = require('../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});
});

/**
 * Mocking a VSCode TextDocument
 */
class MockTextDocument {
	constructor(text, fileName = 'test.md') {
		this.text = text;
		this.fileName = fileName;
		this.languageId = 'markdown';
	}
	getText() {
		return this.text;
	}
}

/**
 * Test: Get file extension for various languages
 */
describe('getExtension', () => {
	it('should return .js for javascript', () => {
		assert.strictEqual(getExtension('javascript'), '.js');
	});
	it('should return .py for python', () => {
		assert.strictEqual(getExtension('python'), '.py');
	});
	it('should return empty string for unknown language', () => {
		assert.strictEqual(getExtension('unknownlang'), '');
	});
});

/**
 * Test: Extract and Tangle Markdown Code Blocks
 */
describe('extractAndTangle', () => {
	it('should extract a code block with tangle directive', () => {
		const markdown = '```javascript :tangle=test.js\nconsole.log(\"Hello World\");\n```';
		const mockDocument = new MockTextDocument(markdown);
		
		let extractedFiles = {};
		const writeFilesMock = (document, codeBlocks) => { extractedFiles = codeBlocks; };
		
		extractAndTangle(mockDocument);
		
		assert.strictEqual(Object.keys(extractedFiles).length, 1);
		assert.strictEqual(extractedFiles['test.js'][0], 'console.log("Hello World");');
	});
});

/**
 * Test: Write Files Function
 */
describe('writeFiles', () => {
	it('should write extracted content to a file', () => {
		const tempDir = fs.mkdtempSync(path.join(__dirname, 'temp-'));
		const testFilePath = path.join(tempDir, 'output.js');
		const codeBlocks = { 'output.js': ['console.log("Test");'] };
		
		writeFiles({ fileName: path.join(tempDir, 'dummy.md') }, codeBlocks);
		
		assert(fs.existsSync(testFilePath));
		assert.strictEqual(fs.readFileSync(testFilePath, 'utf8'), 'console.log("Test");');
		
		fs.rmSync(tempDir, { recursive: true, force: true });
	});
});
