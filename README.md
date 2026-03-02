<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Ramen Lab Academy

React + TypeScript + Vite SPA. Live at **[ramenasia.com](https://ramenasia.com)**.

> Original project on AI Studio: https://ai.studio/apps/drive/1ZUED-bMUYaN8nl8aTKiKP5YXxep3mmx0

---

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.local` and fill in your keys:
   ```
   GEMINI_API_KEY=your_gemini_key
   SC_KEY=your_serverchan_sendkey
   ```
3. Start dev server at `http://localhost:8080`:
   ```bash
   npm run dev
   ```

---

## Build

Compile for production into `dist/`:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## Deploy to GitHub Pages

The site is hosted on GitHub Pages with a custom domain (`ramenasia.com`).

### One-command deploy
```bash
npm run deploy
```
This runs `npm run build` first (via the `predeploy` script), then publishes the `dist/` folder to the `gh-pages` branch.

### First-time setup
1. Push the repo to GitHub.
2. Go to **Settings → Pages** on the repo.
3. Under **Source**, select the `gh-pages` branch, root folder → Save.
4. Under **Custom domain**, enter `ramenasia.com` → Save.

### DNS configuration (domain registrar)
Add these records at your registrar to point `ramenasia.com` to GitHub Pages:

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | queeeentin.github.io   |

DNS propagation can take 10 minutes to 48 hours. GitHub will auto-provision an SSL certificate once the domain is verified.

---

## Environment Variables

| Variable        | Description                                      |
|-----------------|--------------------------------------------------|
| `GEMINI_API_KEY`| Google Gemini API key (AI features)              |
| `SC_KEY`        | [Server酱](https://sct.ftqq.com) SendKey — used to push enrollment form submissions to WeChat |

Variables are loaded from `.env.local` (gitignored) via Vite's `loadEnv`.

---

## Feature Flags

Toggle features in [`constants.ts`](constants.ts) without touching component code:

```ts
export const FEATURES = {
  courseOutline: false,  // Show/hide the 课程大纲 button on course cards
};
```

| Flag            | Default | Description                                      |
|-----------------|---------|--------------------------------------------------|
| `courseOutline` | `false` | Shows a 课程大纲 (Course Outline) button on each course card |

**To add a new flag**, add a key to `FEATURES` in `constants.ts`, then gate the UI with:
```tsx
import { FEATURES } from './constants';

{FEATURES.yourFlag && <YourComponent />}
```
