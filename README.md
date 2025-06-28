# 🔐 UI Vault

**The ultimate CLI to unlock production-ready, beautifully themed React UI components — instantly.**  
Design faster. Ship smarter. From NeonPulse to Obsidian, one command gives you stunning, responsive components out of the box.

Join **3000+ developers** already using UI Vault to save time, ship faster, and build beautifully styled React UIs with ease.

---

## ✨ Overview

**UI Vault** is a command-line tool designed to supercharge your React development workflow.  
It allows you to install pre-designed, animated, and responsive UI components with one command — without sacrificing control or creativity.

Each component is styled using **Tailwind CSS**, animated with **Framer Motion**, and built with developer ergonomics in mind.  
Whether you're working on a SaaS dashboard, portfolio, blog, or landing page — UI Vault gives you a foundation to build fast and look great doing it.

---

## 🚀 Key Features

- ⚡ **Instant Setup** — Add fully styled UI components using `npx ui-vault` in seconds.
- 🎨 **Themed Designs** — Choose from modern design systems like `NeonPulse`, `Glassmorph`, `Obsidian`, and more.
- 💻 **JSX or TSX Output** — Choose your desired format based on your project.
- 📁 **Clean Output Structure** — All components go to `src/UIvault/`, with clean imports.
- 🎯 **Component API** — Apply themes with a single prop: `<Card theme="Glassmorph" />`
- 🧠 **Autocomplete Ready** — Type-safe props with IDE IntelliSense.
- 🛠️ **Framework Friendly** — Fully compatible with Vite, Next.js, CRA, and other React setups.
- 🌍 **3000+ Devs Trust It** — Actively used in real-world projects across startups, portfolios, and hackathons.

---

## 📦 Installation

```bash
npx ui-vault@latest

## 🧩 Components & Usage

UI Vault currently supports a growing library of essential UI components. Each is built to be responsive, animated, and easily themeable. You can import and use them with just a few lines of code.

---

### 🃏 Card

Display content, images, or call-to-actions in a stylized format.

```tsx
import { Card } from "@/UIvault/card";

<Card
  theme="NeonPulse"
  title="Welcome to UI Vault"
  content="Generate fully styled UI components instantly."
  imageUrl="https://source.unsplash.com/400x300/?technology"
/>
