# Markdown Tangle - VSCode Extension

![Build Status](https://github.com/suderio/orgdown/actions/workflows/ci.yml/badge.svg)

## 🚀 Overview
Orgdown is a **VSCode extension** that extracts code blocks from Markdown files and saves them into separate files based on their language. This allows for literate programming and better code organization.

## 📥 Installation
### From VSCode Marketplace
1. Open VSCode.
2. Go to **Extensions** (`Ctrl+Shift+X`).
3. Search for **Markdown Tangle**.
4. Click **Install**.

### Manual Installation
1. Download the `.vsix` file from [Releases](https://github.com/suderio/orgdown/releases).
2. Open VSCode and run:
   ```sh
   code --install-extension markdown-tangle.vsix
   ```

## 🛠 Usage
### Extracting Code Blocks
1. Open a Markdown file containing fenced code blocks.
2. Run the command **Tangle Code Blocks**:
   - Open the **Command Palette** (`Ctrl+Shift+P` on Windows/Linux, `Cmd+Shift+P` on Mac).
   - Type `Tangle Code Blocks` and select the command.
3. Code blocks are saved as files based on their language or `:tangle` directive.

### Example Markdown File
```markdown
# Example

```javascript :tangle=script.js
console.log("Hello, world!");
```

```python :tangle=script.py
print("Hello, world!")
```
```

Running **Tangle Code Blocks** will create `script.js` and `script.py` with their respective contents.

## ⌨️ Commands & Keybindings
| Command               | Description                     | Default Keybinding |
|----------------------|---------------------------------|--------------------|
| `Tangle Code Blocks` | Extracts and saves code blocks | `Ctrl+Shift+T`     |

## ⚙️ Configuration Options
You can customize the behavior of this extension via VSCode settings:

| Setting                          | Type   | Default Value | Description                                  |
|----------------------------------|--------|--------------|----------------------------------------------|
| `markdownTangle.outputDirectory` | string | `tangled`    | Specifies the directory to save tangled files |

Modify settings in `settings.json`:
```json
{
  "markdownTangle.outputDirectory": "src/generated"
}
```

## 🏗 Development & Contributing
1. Clone the repository:
   ```sh
   git clone https://github.com/suderio/orgdown.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the extension in VSCode:
   ```sh
   code .
   npm run test
   ```
4. Submit a pull request with improvements!

## 🛠 Troubleshooting
### Code blocks are not extracted
- Ensure that your Markdown file contains **fenced code blocks** (```` ``` ```` format).
- Check if the `:tangle` directive is correctly formatted.
- Verify that the **Markdown file is saved** before running the command.
- Ensure that the correct **output directory** is set in the settings.

### Files are not appearing in the expected directory
- By default, files are saved in the `tangled/` directory inside the Markdown file's location.
- If using a custom output directory, check `markdownTangle.outputDirectory` in VSCode settings.
- Ensure that VSCode has **write permissions** to the directory.

### Extension is not working or throwing errors
- Restart VSCode and try again.
- Check the **VSCode Output Panel** (`View > Output`) and select **Markdown Tangle** from the dropdown for logs.
- Run `npm test` to verify any issues in the extension.
- Update VSCode to the latest version.

## ❓ Frequently Asked Questions (FAQs)
### **Q: Does this extension support all programming languages?**
**A:** It supports most common languages like JavaScript, Python, Rust, C++, Go, and more. If a language is missing, you can request support by opening an issue.

### **Q: Can I append multiple code blocks to the same file?**
**A:** Yes! If multiple fenced code blocks have the same `:tangle` filename, they will be appended in order of appearance.

### **Q: Can I use this extension for literate programming?**
**A:** Absolutely! This extension is designed for literate programming workflows.

### **Q: How do I report a bug or request a feature?**
**A:** Open an issue on the [GitHub repository](https://github.com/suderio/orgdown/issues) with details.

## 📜 License
This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---
### 🚀 Happy Coding with Markdown Tangle! 🎉
