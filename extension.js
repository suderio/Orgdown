const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

/**
 * Activates the extension.
 * @param {vscode.ExtensionContext} context - The VSCode extension context.
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('extension.tangleCodeBlocks', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No active Markdown file.');
			return;
		}
		
		const document = editor.document;
		if (document.languageId !== 'markdown') {
			vscode.window.showErrorMessage('This command only works with Markdown files.');
			return;
		}
		
		extractAndTangle(document);
	});
	
	context.subscriptions.push(disposable);
}

/**
 * Parses the Markdown document, extracts code blocks, and writes them to files.
 * @param {vscode.TextDocument} document - The active Markdown document.
 */
function extractAndTangle(document) {
	const mdParser = markdownIt();
	const content = document.getText();
	const tokens = mdParser.parse(content, {});
	
	let codeBlocks = {};

	for (let i = 0; i < tokens.length; i++) {
		let token = tokens[i];
		if (token.type === 'fence') {
			let info = token.info.trim();
			let match = info.match(/^([^\s]+)\s*:tangle=([^\s]+)/);
			let currentLang, currentFile;
			
			if (match) {
				currentLang = match[1];
				currentFile = match[2];
			} else {
				currentLang = info;
				currentFile = path.basename(document.fileName, '.md') + getExtension(currentLang);
			}
			
			if (!codeBlocks[currentFile]) {
				codeBlocks[currentFile] = [];
			}
			codeBlocks[currentFile].push(token.content);
		}
	}

	writeFiles(document, codeBlocks);
}


/**
 * Determines the file extension based on the language.
 * @param {string} lang - The detected programming language.
 * @returns {string} - The corresponding file extension.
 */
function getExtension(lang) {
	const extensions = {
		javascript: '.js',
		typescript: '.ts',
		python: '.py',
		rust: '.rs',
		cpp: '.cpp',
		c: '.c',
		java: '.java',
		go: '.go',
		html: '.html',
		css: '.css',
		json: '.json',
		yaml: '.yaml',
		shell: '.sh'
	};
	return extensions[lang] || '';  // Default to no extension if unknown
}

/**
 * Writes extracted code blocks to their respective files.
 * @param {vscode.TextDocument} document - The original Markdown document.
 * @param {Object} codeBlocks - A map of file names to extracted code blocks.
 */
function writeFiles(document, codeBlocks) {
	const baseDir = path.dirname(document.fileName);
	
	Object.keys(codeBlocks).forEach(filename => {
		const filePath = path.join(baseDir, filename);
		fs.writeFileSync(filePath, codeBlocks[filename].join('\n'), 'utf8');
		vscode.window.showInformationMessage(`Extracted: ${filePath}`);
	});
}

/**
 * Deactivates the extension.
 */
function deactivate() {}

module.exports = {
    activate,
    deactivate,
    extractAndTangle,
    getExtension,
    writeFiles
};


