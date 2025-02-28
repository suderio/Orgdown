# Contributing to Orgdown

Thank you for your interest in contributing to **Orgdown**! 🎉 We welcome contributions in various forms, including bug fixes, feature implementations, documentation improvements, and discussions.

## 📌 Table of Contents
- [Contributing to Orgdown](#contributing-to-orgdown)
  - [📌 Table of Contents](#-table-of-contents)
  - [🚀 Getting Started](#-getting-started)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Install Dependencies](#2-install-dependencies)
    - [3. Open in VSCode](#3-open-in-vscode)
    - [4. Run the Extension in Development Mode](#4-run-the-extension-in-development-mode)
  - [🔧 How to Contribute](#-how-to-contribute)
  - [🏗 Development Workflow](#-development-workflow)
  - [📏 Code Style Guidelines](#-code-style-guidelines)
  - [🧪 Testing and Debugging](#-testing-and-debugging)
  - [🐞 Reporting Issues](#-reporting-issues)
  - [💡 Feature Requests](#-feature-requests)
  - [🔀 Pull Request Guidelines](#-pull-request-guidelines)
  - [🤝 Community Guidelines](#-community-guidelines)
  - [📜 License](#-license)

---

## 🚀 Getting Started
### 1. Clone the Repository
```sh
# Fork the repository on GitHub first, then clone it:
git clone https://github.com/suderio/orgdown.git
cd orgdown
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Open in VSCode
```sh
code .
```

### 4. Run the Extension in Development Mode
Press `F5` in VSCode to open a new Extension Development Host window.

---

## 🔧 How to Contribute
There are several ways you can contribute:
- 🐛 **Report bugs** in [GitHub Issues](https://github.com/suderio/orgdown/issues).
- ✨ **Suggest new features** in [GitHub Discussions](https://github.com/suderio/orgdown/discussions).
- 📖 **Improve documentation** by updating `README.md`, `CONTRIBUTING.md`, or adding more examples.
- 🛠 **Fix bugs or implement new features** by submitting a **Pull Request (PR)**.
- 🌎 **Improve localization** by adding language support.

---

## 🏗 Development Workflow
1. **Create a feature branch** for your work:
   ```sh
   git checkout -b feature/my-new-feature
   ```
2. **Write your code and commit your changes**:
   ```sh
   git commit -m "Add feature: My new feature"
   ```
3. **Push the branch and create a Pull Request**:
   ```sh
   git push origin feature/my-new-feature
   ```
4. **Submit the PR on GitHub**, ensuring:
   - The title clearly describes the change.
   - The description explains what was changed and why.
   - The PR is linked to a relevant issue (if applicable).

---

## 📏 Code Style Guidelines
- Use **ESLint and Prettier** for formatting:
  ```sh
  npx eslint .
  npx prettier --write .
  ```
- Use **camelCase** for variable and function names.
- Write **JSDoc comments** for functions and exported modules.
- Keep code **modular and reusable**.

---

## 🧪 Testing and Debugging
- Run **unit tests** before submitting a PR:
  ```sh
  npm test
  ```
- If modifying file writing logic, ensure **proper handling of file paths**.
- Debug using **console logs** and **VSCode Debugger**.

---

## 🐞 Reporting Issues
Before opening a new issue, please:
1. **Check if it already exists** in the [Issues section](https://github.com/suderio/orgdown/issues).
2. Provide **clear reproduction steps**.
3. Include **expected vs actual behavior**.
4. Attach **screenshots or error logs** if applicable.

---

## 💡 Feature Requests
If you have an idea for a new feature:
1. **Check Discussions first** to see if it's already suggested.
2. **Describe the use case** and how it benefits users.
3. Provide **mock-ups or example Markdown files** if relevant.
4. Tag it with `enhancement` in [GitHub Issues](https://github.com/suderio/orgdown/issues).

---

## 🔀 Pull Request Guidelines
✅ Follow these best practices:
- **Keep PRs small and focused** (1 feature per PR).
- **Write meaningful commit messages**.
- **Reference related issues** in PR description.
- **Ensure all tests pass** before requesting a review.
- **Wait for approval** before merging into `main`.

---

## 🤝 Community Guidelines
- Be respectful and inclusive.
- Use constructive feedback.
- Help others by answering questions.
- Report abusive behavior to maintainers.

---

## 📜 License
By contributing, you agree that your contributions will be licensed under the **MIT License**.

**Happy Coding!**