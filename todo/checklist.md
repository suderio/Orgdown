
# **🚀 VSCode Extension Pre-Publication Checklist**

### **📜 Documentation**
✅ **README.md**  
- [ ] Clear usage instructions  
- [ ] Installation guide (`vsix` or Marketplace)  
- [ ] Screenshots or GIFs of extension in action  
- [ ] Command list & keybindings  
- [ ] Configuration options (if applicable)  

✅ **CHANGELOG.md**  
- [ ] Describes new features, bug fixes, and updates  

✅ **CONTRIBUTING.md** *(Optional but recommended)*  
- [ ] Guidelines for contributors  
- [ ] PR review process  

---

### **⚙️ Configuration & Features**
✅ **Settings Integration**  
- [ ] Configurable options added to `package.json`  
- [ ] Default values properly set  
- [ ] Described in `README.md`  

✅ **Keybindings**  
- [ ] Assigned default keybinding (e.g., `Ctrl+Shift+T`)  
- [ ] Documented in `README.md`  

✅ **Error Handling & Edge Cases**  
- [ ] Handles missing `:tangle` paths  
- [ ] Warns for unsupported languages  
- [ ] Prevents file overwrites unless intended  
- [ ] Provides clear user messages (`vscode.window.showErrorMessage()`)  

✅ **Performance Optimization**  
- [ ] Uses asynchronous file handling (`fs.promises`)  
- [ ] Avoids unnecessary I/O operations  
- [ ] Works smoothly with large Markdown files  

---

### **🧪 Testing & Validation**
✅ **Unit Tests**  
- [ ] Covers all core functions (`extractAndTangle`, `writeFiles`, etc.)  
- [ ] Tests for different Markdown scenarios  
- [ ] Tests invalid cases (missing `:tangle`, unknown language)  

✅ **Integration Tests**  
- [ ] Runs within VSCode test environment  
- [ ] Works on different OS (Windows, macOS, Linux)  

✅ **Code Quality**  
- [ ] Runs `npm test` with no failures  
- [ ] Linting enabled (ESLint + Prettier)  
- [ ] Code formatted consistently  

---

### **🛠 Optimization & Cleanup**
✅ **File Organization**  
- [ ] `.vscodeignore` excludes unnecessary files  
- [ ] No redundant dependencies in `package.json`  

✅ **Localization (Optional)**  
- [ ] Uses `package.nls.json` for multi-language support  

✅ **VSCode Marketplace Preparation**  
- [ ] Added an eye-catching `icon.png` (128x128 recommended)  
- [ ] Minimized `package.json` dependencies  
- [ ] Created a `.vsix` package (`vsce package`)  

---

### **🚀 Publishing & Promotion**
✅ **VSCode Marketplace Publishing**  
- [ ] `vsce login <publisher-name>` completed  
- [ ] `vsce publish` ran successfully  

✅ **Community Engagement**  
- [ ] Shared on GitHub  
- [ ] Promoted on Twitter, Reddit, Dev.to  
- [ ] Opened GitHub Issues for user feedback  

✅ **Post-Publication Maintenance**  
- [ ] Monitor feedback and bug reports  
- [ ] Plan future updates based on user requests  

---

