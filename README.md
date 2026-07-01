<div align="center">

# 🛍️ Cera Website

### Modern E-Commerce Platform — 2026 Edition

A fully responsive, feature-rich e-commerce experience with dark mode, cart system, quickview modals, and toast notifications — built from scratch with vanilla HTML, CSS & JS.

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
![FontAwesome](https://img.shields.io/badge/FontAwesome-%23339AF0.svg?style=flat&logo=fontawesome&logoColor=white)

<br>

[![Live Demo](https://img.shields.io/badge/-Live_Demo-brightgreen?style=for-the-badge)](https://akhil3145.github.io/Cera_Website/)
[![GitHub Stars](https://img.shields.io/github/stars/akhil3145/Cera_Website?style=for-the-badge&color=yellow)](https://github.com/akhil3145/Cera_Website/stargazers)
[![Forks](https://img.shields.io/github/forks/akhil3145/Cera_Website?style=for-the-badge&color=blue)](https://github.com/akhil3145/Cera_Website/network/members)
[![Issues](https://img.shields.io/github/issues/akhil3145/Cera_Website?style=for-the-badge&color=red)](https://github.com/akhil3145/Cera_Website/issues)

<br>

![Preview](img/hero4.png)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 Design & UI
- 🌗 **Dark / Light Mode** — Toggle with persistent theme via `localStorage`
- 📱 **Fully Responsive** — Fluid layouts for desktop, tablet & mobile
- 🪟 **Glassmorphic Header** — Frosted glass sticky navigation
- ✨ **Micro-Animations** — Hover transitions, scale effects, slide-ins
- 🎯 **Modern Typography** — Inter + Outfit font pairing

</td>
<td width="50%">

### 🛒 E-Commerce Core
- 🛍️ **Slide-in Cart Sidebar** — Add, remove, update quantities
- 🔢 **Cart Badge Counter** — Live count on navbar & mobile nav
- 👁️ **Quickview Modal** — Click any product for size/qty selection
- 🍞 **Toast Notifications** — Animated feedback on cart actions
- 💳 **Checkout Flow** — Subtotal calculation & checkout button

</td>
</tr>
</table>

---

## 🎬 Preview

<table>
<tr>
<td align="center"><b>Light Mode</b></td>
<td align="center"><b>Dark Mode</b></td>
</tr>
<tr>
<td>

![Light Mode](img/banner/b17.jpg)

</td>
<td>

![Dark Mode](img/banner/b10.jpg)

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

```
┌─────────────────┬──────────────────┬────────────────────────────┐
│     Layer       │   Technology     │         Purpose            │
├─────────────────┼──────────────────┼────────────────────────────┤
│  Structure      │  HTML5           │  Semantic markup & layout  │
│  Styling        │  CSS3            │  Flexbox, Grid, Variables  │
│  Interactivity  │  Vanilla JS      │  Cart, Modal, Theme, Toast │
│  Icons          │  FontAwesome 6   │  Vector icons & glyphs     │
│  Fonts          │  Google Fonts    │  Inter + Outfit + Spartan  │
│  VCS            │  Git & GitHub    │  Version control & hosting │
└─────────────────┴──────────────────┴────────────────────────────┘
```

---

## 📂 Project Structure

```
Cera_Website/
├── 📁 img/                    # All image assets
│   ├── 📁 products/           # Product catalog images
│   ├── 📁 banner/             # Promotional banners
│   ├── 📁 blog/               # Blog post thumbnails
│   ├── 📁 people/             # Team / people photos
│   ├── 📁 about/              # About page assets
│   └── 🖼️ hero4.png           # Hero background
├── 🖼️ logo.png                # Brand logo
├── 📄 index.html              # Homepage
├── 📄 shop.html               # Product listing catalog
├── 📄 sproduct.html           # Single product detail page
├── 📄 cart.html               # Shopping cart page
├── 📄 blog.html               # Blog articles listing
├── 📄 about.html              # About company page
├── 📄 contact.html            # Contact form & details
├── 🎨 style.css               # Main stylesheet (dark mode ready)
└── ⚡ script.js               # App logic (cart, modal, theme)
```

---

## 🚀 Getting Started

### Quick Start (3 steps)

```bash
# 1. Clone the repository
git clone https://github.com/akhil3145/Cera_Website.git

# 2. Navigate to project folder
cd Cera_Website/Ecommerce_website

# 3. Open in browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### With Live Server (Recommended)

1. Install [VS Code](https://code.visualstudio.com/)
2. Install [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Right-click `index.html` → **Open with Live Server**

---

## 🧩 Key Implementation Details

### 🌗 Dark Mode
```css
/* CSS Custom Properties for seamless theming */
:root { --bg-primary: #ffffff; --text-primary: #0f172a; }
[data-theme="dark"] { --bg-primary: #0f172a; --text-primary: #f8fafc; }
```

### 🛒 Cart System
- `localStorage` persistence — cart survives page refresh
- Slide-in sidebar with quantity controls
- Live badge updates on navbar

### 🍞 Toast Notifications
- Auto-dismiss after 3 seconds
- Manual close with smooth fade-out animation
- Stacks multiple toasts vertically

---

## 📊 Feature Checklist

| Feature | Status |
|:--------|:------:|
| Responsive Design | ✅ |
| Dark / Light Mode | ✅ |
| Cart Sidebar | ✅ |
| Quickview Modal | ✅ |
| Toast Notifications | ✅ |
| LocalStorage Persistence | ✅ |
| Mobile Navigation | ✅ |
| Product Grid with Hover | ✅ |
| Newsletter Section | ✅ |
| Multi-page Layout | ✅ |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Credits

Built following the **Build and Deploy E-Commerce Website** tutorial by **Tech2etc**. Extended with dark mode, cart system, quickview modal, and toast notifications.

---

<div align="center">

**Made with ❤️ by [Akhil](https://github.com/akhil3145)**

⭐ Star this repo if you find it helpful!

</div>
