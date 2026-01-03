# Smart Water Hardness and Treatment Analyzer

<div align="center">

![Project Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Built with Vite](https://img.shields.io/badge/Built%20with-Vite%2BTypeScript-646CFF)
![React Version](https://img.shields.io/badge/React-18+-61DAFB)
![Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-000000)

**A comprehensive web application for analyzing water hardness, calculating treatment methods, and understanding water quality parameters.**

• [📧 Contact](#contact) • [📄 License](#license)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Usage Guide](#usage-guide)
- [Key Features Explained](#key-features-explained)
- [Chemistry Behind](#chemistry-behind)
- [Project Architecture](#project-architecture)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

**Smart Water Hardness and Treatment Analyzer** is an interactive web-based tool designed to help users understand and manage water hardness. Whether you're dealing with hard water in your home, industrial applications, or environmental studies, this application provides comprehensive analysis, calculation tools, and treatment recommendations.

The application combines water chemistry calculations with an intuitive user interface, making complex water quality analysis accessible to both professionals and enthusiasts.

---

## ✨ Features

### 🔬 Core Analysis Tools

- **Water Hardness Analyzer** - Calculate total, temporary, and permanent hardness based on water sample analysis
  - Support for multiple calculation methods
  - Real-time hardness level classification
  - Visual hardness scale indicators
  
- **EDTA Titration Simulator** - Interactive simulation of EDTA complexometric titration
  - Step-by-step titration process visualization
  - Color change indicators for endpoint detection
  - Educational breakdown of the titration procedure

- **Water Treatment Recommender** - Get personalized treatment suggestions
  - Based on your specific hardness levels
  - Multiple treatment method options (Ion Exchange, RO, Lime-Soda, etc.)
  - Cost-benefit analysis for different approaches
  - Installation and maintenance guidance

- **Boiler Troubles Explainer** - Understand scale formation and corrosion issues
  - Identify common boiler problems
  - Prevention strategies
  - Maintenance recommendations
  - Visual diagrams of scale layers and corrosion patterns

- **Process Visualizations** - Animated visualizations of treatment processes
  - Ion exchange process animation
  - Reverse osmosis membrane filtration
  - Lime-soda softening process
  - Chemical precipitation steps

### 🎨 User Experience Features

- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Interactive Navigation** - Sidebar and breadcrumb navigation
- **Data Visualization** - Charts and graphs for better understanding
- **Accessibility** - WCAG compliant with proper semantic HTML

---

## 🛠️ Technology Stack

### Frontend Framework
- **Vite** - Next generation frontend build tool for lightning-fast development
- **React 18** - UI library for building interactive components
- **TypeScript** - Type-safe JavaScript for better code quality

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality reusable components built on Radix UI
- **CSS Modules** - Scoped styling for components

### Development Tools
- **NPM** - Dependency management
- **PostCSS** - CSS transformations
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting

### Deployment
- **Vercel** - Fast, serverless deployment platform

---

## 📁 Project Structure

```
smart-water-hardness-and-treatment-analyzer/
├── src/
│   ├── components/
│   │   ├── AppHeader.tsx              # Main application header
│   │   ├── AppLayout.tsx              # Root layout wrapper
│   │   ├── AppSidebar.tsx             # Navigation sidebar
│   │   ├── BoilerTroublesExplainer.tsx # Boiler issues component
│   │   ├── EDTASimulator.tsx           # EDTA titration simulator
│   │   ├── HardnessAnalyzer.tsx       # Water hardness calculator
│   │   ├── ProcessVisualizations.tsx   # Treatment process animations
│   │   ├── TreatmentRecommender.tsx   # Treatment suggestion engine
│   │   ├── NavLink.tsx                # Navigation link component
│   │   └── ui/                         # Shadcn UI components library
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── chart.tsx
│   │       ├── dialog.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       └── [30+ additional UI components]
│   ├── lib/
│   │   ├── boilerTroubles.ts           # Boiler trouble data & logic
│   │   ├── treatmentData.ts            # Treatment methods database
│   │   ├── waterCalculations.ts        # Core water chemistry calculations
│   │   └── utils.ts                    # Utility functions
│   ├── pages/
│   │   ├── AnalyzerPage.tsx            # Water hardness analysis page
│   │   ├── BoilerTroublesPage.tsx      # Boiler issues page
│   │   ├── EDTAPage.tsx                # EDTA simulator page
│   │   ├── OverviewPage.tsx            # Dashboard/home page
│   │   ├── ProcessesPage.tsx           # Treatment processes page
│   │   ├── TreatmentsPage.tsx          # Treatment recommendations page
│   │   └── NotFound.tsx                # 404 error page
│   ├── hooks/
│   │   ├── use-mobile.tsx              # Mobile detection hook
│   │   └── use-toast.ts                # Toast notification hook
│   ├── App.tsx                         # Main app component
│   ├── main.tsx                        # Application entry point
│   ├── index.css                       # Global styles
│   └── vite-env.d.ts                   # Vite type definitions
├── public/
│   ├── placeholder.svg                 # SVG assets
│   └── robots.txt                      # SEO robots file
├── package.json                        # Dependencies & scripts
├── package-lock.json                   # Locked dependency versions
├── vite.config.ts                      # Vite configuration
├── tsconfig.json                       # TypeScript root config
├── tsconfig.app.json                   # TypeScript app config
├── tsconfig.node.json                  # TypeScript node config
├── tailwind.config.ts                  # Tailwind CSS config
├── postcss.config.js                   # PostCSS configuration
├── README.md                           # This file
└── .gitignore                          # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v7.0.0 or higher) - Comes with Node.js
- **Git** - For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/smart-water-hardness-and-treatment-analyzer.git
   cd smart-water-hardness-and-treatment-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm run dev
   ```

### Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

**Features during development:**
- ⚡ Fast refresh - Changes reflect instantly
- 🔍 Type checking - TypeScript compilation
- 📦 Optimized bundling - Only loads what you need
- 🎯 Source maps - Easy debugging

### Build

Create an optimized production build:

```bash
npm run build
```

**Build outputs:**
- Minified JavaScript and CSS
- Tree-shaken dependencies
- Optimized images and assets
- Output in `dist/` directory

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally before deployment.

---

## 💡 Usage Guide

### 1. **Water Hardness Analyzer**
   - Navigate to the Analyzer page
   - Input water sample hardness data (in mg/L or ppm)
   - View detailed breakdown of:
     - Total Hardness (TH)
     - Temporary Hardness (TH - Permanent)
     - Permanent Hardness
     - Hardness classification
   - Visual indicators show hardness level at a glance

### 2. **EDTA Titration Simulator**
   - Access the EDTA page
   - Follow step-by-step titration process
   - Adjust parameters and observe color changes
   - Learn the chemistry behind complexometric titration
   - Understand the endpoint detection process

### 3. **Water Treatment Recommender**
   - Enter your water hardness data
   - Select your specific requirements (budget, space, efficiency)
   - Receive tailored treatment recommendations
   - Compare different treatment methods
   - Get installation and maintenance guides

### 4. **Boiler Troubles Investigation**
   - View common boiler problems caused by hard water
   - Understand scale formation mechanisms
   - Learn prevention strategies
   - Identify maintenance requirements
   - Access visual diagrams of issues

### 5. **Process Visualizations**
   - Watch animated visualizations of:
     - Ion exchange resin regeneration
     - Membrane filtration in RO systems
     - Lime-soda softening precipitation
     - Chemical reactions in water treatment
   - Pause and review each step

---

## 🧪 Chemistry Behind

### Water Hardness Calculation

**Total Hardness (TH)** is calculated as:
```
TH (mg/L as CaCO₃) = (Ca²⁺ in mg/L × 2.5) + (Mg²⁺ in mg/L × 4.12)
```

### EDTA Titration Method

The application uses the complexometric titration method:

1. **Indicator:** Eriochrome Black-T (EBT)
2. **Buffer:** Ammonia-Ammonium Chloride (pH 10)
3. **Titrant:** EDTA (Ethylenediaminetetraacetic acid)
4. **Reaction:** M²⁺ + EDTA ⇌ M-EDTA complex

**Hardness Determination:**
```
Hardness (ppm) = (Volume of EDTA × Normality × 50 × 1000) / Sample Volume
```

### Treatment Methods Included

- **Ion Exchange Softening** - Removes Ca²⁺ and Mg²⁺ using resin
- **Reverse Osmosis** - Physical membrane separation
- **Lime-Soda Softening** - Chemical precipitation method
- **Magnetic Water Conditioners** - (Educational reference)
- **Boiling** - Removes temporary hardness

---

## 🏗️ Project Architecture

### Component Hierarchy

```
App
├── AppLayout
│   ├── AppHeader
│   ├── AppSidebar
│   └── Main Content Router
│       ├── OverviewPage
│       ├── AnalyzerPage
│       │   └── HardnessAnalyzer
│       ├── EDTAPage
│       │   └── EDTASimulator
│       ├── TreatmentsPage
│       │   └── TreatmentRecommender
│       ├── ProcessesPage
│       │   └── ProcessVisualizations
│       ├── BoilerTroublesPage
│       │   └── BoilerTroublesExplainer
│       └── NotFound
```

### Data Flow

```
User Input
   ↓
Component State Management
   ↓
Water Calculation Library (waterCalculations.ts)
   ↓
Treatment/Data Lookup (treatmentData.ts)
   ↓
UI Components Rendering
   ↓
Visual Feedback & Results
```

### Key Modules

| Module | Purpose | Key Functions |
|--------|---------|---------------|
| `waterCalculations.ts` | Core chemistry calculations | Hardness calculation, EDTA volume computation |
| `treatmentData.ts` | Treatment database | Treatment methods, costs, specifications |
| `boilerTroubles.ts` | Boiler issue data | Trouble identification, prevention tips |
| `utils.ts` | Helper functions | Formatting, validation, conversion utilities |

---

## 🤝 Contributing

Contributions are welcome! This project is open for improvements.

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Areas for Enhancement

- [ ] Add more water treatment methods
- [ ] Dark Mode Support
- [ ] Implement boiler corrosion prediction
- [ ] Add water quality testing guides
- [ ] Multi-language support
- [ ] Export reports as PDF
- [ ] Mobile app version
- [ ] API integration for real water data
- [ ] Machine learning for treatment recommendations

### Code Standards

- Use TypeScript for type safety
- Follow existing code style and conventions
- Add comments for complex logic
- Test changes before submitting PR
- Update documentation as needed

---

## 📊 Features Roadmap

- ✅ Water hardness calculation
- ✅ EDTA simulation
- ✅ Treatment recommendations
- ✅ Boiler troubleshooting
- ⏳ PDF report generation
- ⏳ Multi-language support (Hindi, Tamil, etc.)
- ⏳ Mobile app (React Native)

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Free to use for:**
- Educational purposes
- Personal projects
- Commercial applications
- Modifications

---

## 📧 Contact

**Author:** Paul Bryton Raj and Pon Vijayalakshmi 
**Institute:** Rajalakshmi Institute of Technology, Chennai  
**Year:** 1st Year, CSE  

### Get in Touch

 **Paul Bryton Raj**
- 📧 Email: [paulbrytonraj18@gmail.com](mailto:paulbrytonraj18@gmail.com)
- 🔗 GitHub: [@PaulBrytonRaj18](https://github.com/@PaulBrytonRaj18)
- 💼 LinkedIn: [Paul Bryton Raj](https://linkedin.com/in/paul-bryton-raj)



---

## 🙏 Acknowledgments

- **Shadcn/UI** - For beautiful, accessible component library
- **Vite** - For blazingly fast build tools
- **React** - For declarative UI framework
- **Tailwind CSS** - For utility-first styling
- **Vercel** - For seamless deployment

---

## 🔐 Security & Privacy

- **No Backend** - All calculations done locally on your device
- **No Data Collection** - Your data is never stored or transmitted
- **Open Source** - Code is transparent and auditable
- **HTTPS Only** - Secure connection to the application

---

<div align="center">

**⭐ If you find this project helpful, please consider giving it a star! ⭐**

---

Made with ❤️ by **Paul Bryton Raj** and **Pon Vijayalakshmi** 

</div>