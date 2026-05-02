# Tioluwanimi Adeagbo — Portfolio

A professional portfolio website built with **Next.js 14**, **Tailwind CSS**, and clean JavaScript.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📸 Adding Your Profile Photo

1. Place your photo file in the `/public/` folder and name it `profile.jpg`
2. Open `components/About.jsx`
3. Find the comment that says `DROP YOUR PHOTO`
4. Uncomment the `<Image>` block and delete the placeholder `<div>` below it

---

## 🌐 Deploying to Vercel

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"** → import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live! 🎉

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.js        # Root layout + metadata + SEO
│   ├── page.js          # Main page (assembles all sections)
│   └── globals.css      # Global styles + fonts + CSS variables
├── components/
│   ├── Navbar.jsx       # Sticky navigation with mobile menu
│   ├── Hero.jsx         # Landing hero section
│   ├── About.jsx        # About me + profile photo
│   ├── Skills.jsx       # Skills with animated progress bars
│   ├── Projects.jsx     # Project cards (top 6)
│   ├── Learning.jsx     # Currently learning section
│   ├── Contact.jsx      # Contact links + copy email
│   └── Footer.jsx       # Footer with socials
├── public/
│   └── profile.jpg      # ← Place your photo here
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## 🎨 Customization

- **Accent color**: Change `#3B6FE8` globally in `globals.css` and component files
- **Projects**: Edit the `projects` array in `components/Projects.jsx`
- **Skills**: Edit the `skillGroups` array in `components/Skills.jsx`
- **Learning**: Edit the `learningItems` array in `components/Learning.jsx`
