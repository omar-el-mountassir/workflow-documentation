# Workflow Documentation

A comprehensive documentation system for our collaborative workflow, built with Docusaurus and TypeScript.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/omar-el-mountassir/workflow-documentation.git
cd workflow-documentation
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000/workflow-documentation/`.

## 📁 Project Structure

```
workflow-documentation/
├── docs/                   # Documentation content
│   ├── intro.md           # Introduction page
│   ├── workflow/          # Workflow documentation
│   ├── collaboration/     # Collaboration frameworks
│   └── projects/          # Project management docs
├── src/                   # Source files
│   ├── css/              # Custom styles
│   └── pages/            # React pages
├── docusaurus.config.ts   # Docusaurus configuration
├── sidebars.ts           # Sidebar configuration
└── tsconfig.json         # TypeScript configuration
```

## 📝 Documentation Structure

### Workflow Section
- **Overview**: High-level view of our collaborative processes
- **Daily Activities**: Common tasks and patterns
- **Weekly Patterns**: Recurring activities and rhythms
- **Tools and Frameworks**: Technologies and methodologies we use

### Collaboration Section
- **Decision Gates**: Our co-decision architecture
- **Risk Management**: Proactive risk identification and mitigation
- **Energy Management**: Sustainable pace practices
- **Communication Patterns**: How we communicate effectively

### Projects Section
- **Project Management**: Standards and practices
- **Change Control**: Managing scope and timeline changes
- **Documentation Standards**: How we maintain quality documentation

## 🛠️ Development

### Building for Production

```bash
npm run build
```

This creates a static build in the `build/` directory.

### Type Checking

```bash
npm run typecheck
```

### Deployment

The documentation is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Ensure type checking passes
4. Submit a pull request

### Writing Documentation

- Use Markdown for all documentation
- Follow the existing structure and style
- Include practical examples
- Keep content up-to-date

## 🔧 Configuration

### Docusaurus Config
Main configuration is in `docusaurus.config.ts`:
- Site metadata
- Theme configuration
- Plugin settings
- Navigation structure

### TypeScript Config
TypeScript settings in `tsconfig.json`:
- Strict mode enabled
- Path aliases configured
- Includes all documentation and source files

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- Styled with [Infima](https://infima.dev/)
- Written in [TypeScript](https://www.typescriptlang.org/)

---

**Repository**: https://github.com/omar-el-mountassir/workflow-documentation