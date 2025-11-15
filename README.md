# 🎲 Tenzies Game — Built with React + Vite

Welcome to **Tenzies**, a fast-paced dice game built using **React**, **Vite**, and **modern UI/UX practices**.  
The goal is simple: **Roll the dice until all numbers match!**  
Click a die to “hold” it so its value doesn’t change during the next roll.

🌐 **Live Demo:** https://tenzies-game-apra.netlify.app/

---
## ✨ Features

### 🎮 Core Gameplay
- Roll 10 dice until all values match  
- Click a die to toggle its **hold** state  
- Held dice keep their value between rolls  
- Win detection shows **confetti**, win message & “New Game” button  

### 🎨 UI / UX Enhancements
- Smooth **3D dice rolling animation**
- Hover bounce effect for dice  
- Animated win celebration  
- Gradient background  
- Clean stat cards showing:
  - 🎯 Roll Count
  - 🏆 Best Score (lowest rolls) saved in **localStorage**

### ♿ Accessibility (A11y)
This project includes multiple improvements for screen-reader users:
- **aria-live** region announces win status
- **aria-pressed** for dice buttons to announce held/unheld state  
- Semantic HTML + proper button roles  
- Screen-reader only (`sr-only`) win message  
- High contrast colors for held dice  

### ⚛️ Technical Features
- Built using **React + Vite** for fast performance  
- `useState`, `useEffect`, and `useRef` hooks  
- Custom dice generator with unique IDs using **nanoid**  
- Confetti animation using `react-confetti`  
- Responsive grid layout  
- Optimized audio handling to prevent repeat-glitches  

---
## 📸 Screenshot

<img width="1117" height="817" alt="image" src="https://github.com/user-attachments/assets/9622262c-5a43-4262-9d00-4e93ad21bf97" />

## 🙌 Inspiration & Credits

This project was inspired by the **Tenzies Game project** taught by  
**Bob Ziroll** in the **Scrimba Learn React Course**.





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
