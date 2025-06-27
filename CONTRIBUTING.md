# Contributing to History as Code Community

Thank you for your interest in contributing! This guide will help you get started.

## 🎯 Types of Contributions

### 1. Examples (`/examples`)
Small, focused demonstrations of specific techniques.

**Requirements:**
- Single technique focus
- Under 100 files
- Clear README.md with:
  - Purpose
  - Prerequisites
  - Usage instructions
  - Expected output
- Working code with comments
- Sample data (if applicable)

**Example structure:**
```
examples/your-example/
├── README.md
├── package.json
├── src/
│   └── index.js
├── data/
│   └── sample.txt
└── output/
    └── .gitkeep
```

### 2. Templates (`/templates`)
Complete project starters for common patterns.

**Requirements:**
- Full project structure
- Detailed setup guide
- Configuration files
- CI/CD setup (optional)
- License file
- Example data/content

**Template structure:**
```
templates/your-template/
├── README.md
├── package.json
├── .env.example
├── src/
├── tests/
├── docs/
└── LICENSE
```

### 3. Documentation (`/docs`)
Guides, tutorials, and references.

**Requirements:**
- Markdown format
- Clear headings
- Code examples
- Links to related resources
- Tested instructions

### 4. Packages (`/packages`)
Shared utilities and tools.

**Requirements:**
- TypeScript with types
- Full test coverage
- API documentation
- Semantic versioning
- Published to npm (maintainers only)

## 📋 Submission Process

### 1. Fork & Clone
```bash
# Fork on GitHub, then:
git clone https://github.com/YOUR-USERNAME/community.git
cd community
npm install
```

### 2. Create Feature Branch
```bash
git checkout -b feature/your-contribution
```

### 3. Make Changes
- Follow the structure guidelines above
- Test your code
- Update documentation

### 4. Commit with Conventional Commits
```bash
git commit -m "feat(examples): add parish records OCR example"
git commit -m "docs: update TEI processing guide"
git commit -m "fix(templates): correct build script in archive template"
```

### 5. Submit Pull Request
- Push to your fork
- Create PR with clear description
- Link any related issues

## 🔧 Development Standards

### Code Style
- Use Prettier for formatting
- Follow ESLint rules
- Comment complex logic
- Use meaningful variable names

### Documentation
- Write clear, concise README files
- Include code examples
- Document all configuration options
- Add screenshots for visual tools

### Testing
- Test all code before submitting
- Include test instructions
- Provide sample data
- Document expected outputs

## 🏷️ Commit Message Format

We use Conventional Commits:

- `feat(scope): add new feature`
- `fix(scope): fix bug`
- `docs(scope): update documentation`
- `style(scope): formatting changes`
- `refactor(scope): code restructuring`
- `test(scope): add tests`
- `chore(scope): maintenance tasks`

Scopes: `examples`, `templates`, `docs`, `packages`, `tools`

## ✅ Pull Request Checklist

Before submitting:

- [ ] Code runs without errors
- [ ] Documentation is complete
- [ ] Examples have sample data
- [ ] Commit messages follow convention
- [ ] No sensitive data included
- [ ] License headers added (if required)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on what's best for the community

## 📚 Resources

- [Platform Documentation](https://historyascode.com/docs)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## ❓ Questions?

- Open an issue for bugs/features
- Start a discussion for questions
- Tag maintainers for urgent items

Thank you for contributing to History as Code!