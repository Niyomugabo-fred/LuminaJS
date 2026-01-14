# Contributing to LuminaJS

Thank you for your interest in contributing to LuminaJS! We welcome contributions from the community to help improve this minimal React-based SSR framework.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)

## Code of Conduct

This project and everyone participating in it is governed by a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- Use the bug report template
- Provide a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Include your environment details (OS, Node.js version, LuminaJS version)
- Include relevant code samples or error messages

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use the feature request template
- Provide a clear and descriptive title
- Explain the expected behavior and why this enhancement would be useful
- Include examples of how the enhancement would be used

### Pull Requests

1. Fork the repository and create your branch from `main`
2. Make your changes following our style guidelines
3. Test your changes thoroughly
4. Update documentation if needed
5. Submit a pull request using the PR template

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Niyomugabo-fred/LuminaJS.git
   cd LuminaJS
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Test your changes:
   ```bash
   npm run build
   npm run start
   ```

## Style Guidelines

### JavaScript Style Guide

- Use ES6+ features
- Use `const` and `let` instead of `var`
- Use meaningful variable and function names
- Keep functions small and focused
- Add comments for complex logic

### File Structure

- Place React pages in `pages/` directory
- Place API routes in `pages/api/` directory
- Place framework code in `packages/` directory
- Use `.jsx` extension for React components
- Use `.js` extension for API routes and utility functions

## Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Start with a capital letter
- Keep the first line under 72 characters
- Reference issues and pull requests liberally

Examples:
- `Add support for nested dynamic routes`
- `Fix SSR rendering for dynamic pages`
- `Update documentation for API routes`

## Areas We Welcome Contributions

LuminaJS is a community-driven project. We especially welcome contributions in these areas:

- **Dynamic Route Handling**: Improvements to the dynamic routing system
- **TypeScript Support**: Adding TypeScript definitions and support
- **Static Site Generation**: Enhancing SSG capabilities for dynamic pages
- **Vite/HMR Integration**: Improvements to hot module replacement
- **Backend Proxy**: Enhanced proxy support for PHP and other backends
- **Documentation**: Improving guides, examples, and API documentation
- **Testing**: Adding unit and integration tests
- **Performance**: Optimizations for build and runtime performance

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

Thank you for contributing to LuminaJS! 🚀
