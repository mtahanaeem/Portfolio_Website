# Portfolio — Muhammad Taha Naeem

Generative / Data Aesthetic portfolio built with React + Vite + Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Netlify (Free)

### Option 1 — Auto-deploy from GitHub (recommended)

1. Push this repo to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Connect your GitHub repo.
4. Netlify auto-detects the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**.
6. Every push to the main branch triggers a new deploy.

### Option 2 — Manual drag-and-drop (one-off)

```bash
npm run build
```

Drag the `dist/` folder onto [app.netlify.com](https://app.netlify.com) in the **Sites** tab.

## Netlify Forms

The contact form uses Netlify Forms (free tier):

1. After deploying, go to **Netlify Dashboard → Your Site → Forms**.
2. Submissions appear here automatically — no backend needed.
3. To verify: submit the form on your live site, then check the Forms tab.
4. You can set up email notifications in the Forms settings.

## Editing Content

Edit `src/data/content.js` to update:
- Personal info (name, email, links, resume URL)
- Bio text
- Skills list
- Projects (title, description, tech, GitHub/demo links)
- Experience/education

## Resume PDF

Update the `resumeUrl` in `src/data/content.js` with your Google Drive direct download link.

Format:
```
https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
```
