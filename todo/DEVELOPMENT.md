## **Step-by-Step Guide to Developing the VSCode Extension**

This guide walks you through setting up, developing, testing, and running the VSCode extension that extracts code blocks from Markdown files.

---

### **1. Install Prerequisites**
Before developing a VSCode extension, ensure you have the following installed:

#### **1.1 Install Node.js and npm**
VSCode extensions are built using Node.js. Download and install it from [Node.js official website](https://nodejs.org/).

To verify installation, open a terminal and run:
```sh
node -v
npm -v
```
This should print the installed versions of Node.js and npm.

#### **1.2 Install Visual Studio Code**
Download and install **VSCode** from [here](https://code.visualstudio.com/).

#### **1.3 Install Yeoman and VSCode Generator**
Yeoman helps bootstrap projects with preconfigured templates. Install it globally:
```sh
npm install -g yo generator-code
```
This installs:
- `yo` (Yeoman CLI)
- `generator-code` (VSCode extension generator)

---

### **2. Create a New VSCode Extension**
Navigate to your preferred project directory and run:

```sh
yo code
```

It will prompt you with questions:

1. **What type of extension do you want to create?** → Select **New Extension (JavaScript)**
2. **What's the name of your extension?** → Enter: `orgdown`
3. **What identifier do you want to use?** → Enter: `orgdown`
4. **What is the description?** → Enter: `Extracts and tangles code blocks from Markdown files`
5. **Initialize a Git repository?** → Choose `Yes`
6. **Which package manager to use?** → Select `npm`

This will create a new folder `orgdown/` with a basic extension template.

---

### **3. Open the Project in VSCode**
Navigate to the project folder:

```sh
cd orgdown
code .
```

This will open VSCode with the extension's project files.

---

### **4. Understand the Project Structure**
After running `yo code`, the extension folder contains:

```
orgdown/
│── .vscode/            # Debugging configurations
│── src/
│   ├── extension.js    # Main extension logic
│── test/               # Extension tests
│── package.json        # Metadata, commands, and dependencies
│── README.md           # Documentation
│── .gitignore          # Git ignored files
│── vsc-extension-quickstart.md  # Quickstart guide
```

---

### **5. Implement the Markdown Code Extraction Logic**
Edit `src/extension.js` and replace its content with the actual extension logic.

---

### **6. Add Dependencies**
Install necessary npm packages:

```sh
npm install markdown-it
```

---

### **7. Run the Extension in VSCode**
To test the extension:

1. Open VSCode in your project folder.
2. Press `F5` to launch a **new VSCode instance with the extension loaded**.
3. Open a Markdown file with fenced code blocks and run the command:  
   **Press `Ctrl+Shift+P` → Type `Tangle Code Blocks` and run the command.**

---

### **8. Package the Extension**
To publish or distribute the extension:

1. Install `vsce` (VSCode Extension Manager):
   ```sh
   npm install -g vsce
   ```
2. Package the extension:
   ```sh
   vsce package
   ```
   This creates a `.vsix` file which you can install in VSCode manually.

---

### **9. Publish to the VSCode Marketplace**
If you want to share your extension with others:

1. Create a [VSCode publisher account](https://aka.ms/vscode-marketplace-signup).
2. Login using:
   ```sh
   vsce login <your-publisher-name>
   ```
3. Publish:
   ```sh
   vsce publish
   ```

---

