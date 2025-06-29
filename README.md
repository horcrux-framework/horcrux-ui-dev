# Horcrux UI Dev

A ShadCN-powered component development environment for the [Horcrux Framework](https://github.com/dgtalbug).  
This workspace includes:

- 📘 [Storybook](https://storybook.js.org/) for visual component testing
- 🧰 A [shadcn](https://ui.shadcn.com/) CLI-compatible `registry.json`
- 🧪 Component-level testing setup with [Vitest](https://vitest.dev/)
- 🎨 Design system experiments built using Radix UI and TailwindCSS

> This project uses **Storybook v9** and supports registry-driven component sharing across Horcrux apps.

---

## 📦 How to Use

The `shadcn` CLI allows you to import any component by pointing to a registry JSON file.

```bash
npx shadcn@latest add <Registry URL>
```

Example (local development):

```bash
npx shadcn@latest add http://localhost:3000/v2/r/button.json
```

---

## ⚙️ Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/dgtalbug/horcrux-ui-dev.git
cd horcrux-ui-dev
```

### 2. Install Dependencies (using Bun)

```bash
bun install
```

### 3. Start the Dev Server

```bash
bun dev
```

### 4. Run Storybook

```bash
bun storybook
```

---

## 📁 Contributing & Registry

To add or update components and stories:

1. Add or update your component in the `components/` folder  
2. Create a story in `src/stories/`  
3. Update or add the corresponding entry in `src/registry/`  
4. Run the registry builder:

```bash
bun registry:build
```

---

## 🧪 Testing Registry Locally

While the dev server is running:

```bash
npx shadcn@latest add http://localhost:3000/v2/r/your-component.json
```

This simulates consuming your component via the ShadCN CLI using your local registry.

---

## 📚 Documentation

- Horcrux Design System: _(coming soon)_
- ShadCN Registry: [https://ui.shadcn.com/docs/registry](https://ui.shadcn.com/docs/registry)

---

## 🛠 Tech Stack

- [Next.js 15 (Turbopack)](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Storybook 9](https://storybook.js.org/blog/storybook-9/)
- [TailwindCSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Vitest](https://vitest.dev/)
- [Bun](https://bun.sh/)
- [shadcn/ui](https://ui.shadcn.com/)

---

## 📜 License

Horcrux is open-source under the [Apache License 2.0](./LICENSE).  
© 2025 [dgtalbug](https://github.com/dgtalbug)s

