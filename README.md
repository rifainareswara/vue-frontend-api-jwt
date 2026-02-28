# Vue Frontend API JWT

A modern frontend application built with **Vue 3**, **TypeScript**, and **Vite**. This template is specifically designed for handling secure API requests and JSON Web Tokens (JWT) authentication, supported by robust HTTP clients and cookie managers.

## 🚀 Tech Stack & Dependencies

### Core Technologies

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API & `<script setup>`)
- **Build Tool**: [Vite](https://vitejs.dev/) - Blazing fast frontend build tool.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - For strict typing and scalable code.

### Dependencies (Production)

- **`@tanstack/vue-query`**: Powerful data fetching, caching, and state management for Vue.
- **`axios`**: Used for robust API communication (HTTP Client).
- **`js-cookie`**: Used for easily reading and writing authentication tokens (JWT) to browser cookies.
- **`vue`**: The core progressive JavaScript framework.
- **`vue-router`**: The official, widely used routing system for Vue.js.

### Dependencies (Development)

- **`nodemon`**: Utility that monitors for any changes in your source and automatically restarts your server (often used for backend, added here as a dev tool).
- **`typescript` & `@vue/tsconfig`**: For TypeScript language support and configurations.
- **`@types/js-cookie`**: TypeScript definitions for `js-cookie`.
- **`vite` & `@vitejs/plugin-vue`**: The build tool and its Vue integration.
- **`vue-tsc`**: TypeScript type-checker for Vue SFCs (Single File Components).

## 🗺️ Alur Proyek (Project Flow)

Untuk melacak progres langkah-demi-langkah pembuatan project ini, silakan baca dokumentasi alur kerja di:
👉 **[dokumentasi/alur.md](dokumentasi/alur.md)**

## 📦 Prerequisites

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/) (Recommended version 18.x or newer)
- npm, yarn, pnpm or bun.

## 🛠️ Installation & Setup

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone https://github.com/rifainareswara/vue-frontend-api-jwt.git
   cd vue-frontend-api-jwt
   ```

2. **Install all dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   > 💡 Note: Vite has built-in Hot Module Replacement (HMR). You don't need Nodemon to restart the frontend. Save your file, and the browser will automatically update.

## 📜 Available Scripts

In your project directory, you can run:

| Command           | Description                                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`     | Runs the app in development mode using Vite. Open `http://localhost:5173` to view it in the browser.                                         |
| `npm run build`   | Builds the app for production to the `dist` folder. Automatically checks TypeScript errors before building.                                  |
| `npm run preview` | Boots up a local static web server that serves the files from the `dist` folder. It's an easy way to check if the production build looks OK. |

## 📚 Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volun](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

---

_Generated directly for your project configuration._
