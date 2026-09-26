# Flores de Mayo & Santacruzan Heritage 🌸

An educational, interactive 3D spatial website celebrating the cultural heritage, traditions, religious devotion, and community pageantry of the Philippine **Flores de Mayo** and **Santacruzan**.

![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)

---

## ✨ Features

- **Interactive 3D Spatial Gallery (4:3 Ratio Showcase)**:
  - Drag, swipe, or click through three-dimensional 4:3 perspective cards.
  - Interactive 3D flip functionality revealing educational study notes and historical context.
  - Smooth levitation physics, diagonal shimmer lighting, and ambient aura.
- **Traditional Processional Soundscape**:
  - Web Audio API acoustic harp and church bell synthesis playing traditional processional hymns (*"Dios Te Salve"*).
- **The Procession of Sagalas (Santacruzan Hierarchy)**:
  - Complete, detailed guide to biblical, Marian, and historical titles from Reyna Banderada to Reyna Elena.
- **Botanical Floral Altar & Offerings**:
  - Educational showcase on Sampaguita, Ilang-Ilang, Gumamela, Kalachuchi, and traditional bamboo archcraft (*Singkaban*).
- **Processional Calendar & Interactive Quiz**:
  - Timeline of festivities throughout May, alongside a cultural trivia quiz.
- **Fully Responsive & Accessible**:
  - Designed for mobile phones, tablets, and desktop displays with smooth touch gestures.

---

## 🚀 Getting Started on GitHub

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally in Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified in terminal) in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages (Automatic)

This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`.

To deploy your live website on GitHub:

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit of Flores de Mayo website"
   git push origin main
   ```
2. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. **Done!** GitHub will automatically build and publish your website at:
   `https://<your-username>.github.io/<repo-name>/`

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6+
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Audio**: Web Audio API Sound Generator
