# JRS POS – Support Website

Official support website for the **JRS POS** restaurant management application.
Provides a **Contact** page and **Delete Account** page to meet Google Play Store Data Safety requirements.

🌐 **Live:** https://mido2610.github.io/jrs-pos-web/

---

## Pages

| Route | Description |
|---|---|
| `/` | Home – app introduction, features, support contacts |
| `/#/contact` | Contact – send a message to JRS support team |
| `/#/delete-account` | Delete Account – request permanent account deletion (Google Play compliant) |

---

## Tech Stack

### Core
| Package | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | ^19.2.4 | UI framework |
| [TypeScript](https://www.typescriptlang.org) | ~5.9.3 | Type safety |
| [Vite](https://vite.dev) | ^8.0.0 | Build tool & dev server |

### UI
| Package | Version | Purpose |
|---|---|---|
| [@mui/material](https://mui.com) | ^7.3.9 | Material UI component library |
| [@mui/icons-material](https://mui.com/material-ui/material-icons) | ^7.3.9 | MUI icon set |
| [@emotion/react](https://emotion.sh) | ^11.14.0 | CSS-in-JS engine (MUI peer dep) |
| [@emotion/styled](https://emotion.sh) | ^11.14.1 | Styled components (MUI peer dep) |

### Routing
| Package | Version | Purpose |
|---|---|---|
| [react-router-dom](https://reactrouter.com) | ^7.13.1 | Client-side routing (HashRouter for GitHub Pages) |

### Internationalization
| Package | Version | Purpose |
|---|---|---|
| [i18next](https://www.i18next.com) | ^25.8.18 | i18n framework |
| [react-i18next](https://react.i18next.com) | ^16.5.8 | React bindings for i18next |
| [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector) | ^8.2.1 | Auto-detect browser language |

### Dev Tools
| Package | Version | Purpose |
|---|---|---|
| [ESLint](https://eslint.org) | ^9.39.4 | Code linting |
| [typescript-eslint](https://typescript-eslint.io) | ^8.56.1 | TypeScript ESLint rules |

---

## Project Structure

```
src/
├── components/
│   └── layouts/
│       ├── MainLayout.tsx     # Navbar + Outlet + Footer wrapper
│       ├── Navbar.tsx         # Top navigation with language switcher
│       └── Footer.tsx         # Footer with links and contacts
├── pages/
│   ├── Home/
│   │   └── index.tsx          # Landing page
│   ├── Contact/
│   │   └── index.tsx          # Contact form page
│   ├── DeleteAccount/
│   │   └── index.tsx          # Delete account request page
│   └── NotFound/
│       └── index.tsx          # 404 page
├── theme/
│   ├── createTheme.ts         # MUI custom theme (JRS brand colors)
│   └── themeProvider.tsx      # CssVarsProvider wrapper
├── i18n/
│   ├── en/common.json         # English translations
│   ├── ja/common.json         # Japanese translations (default)
│   └── vi/common.json         # Vietnamese translations
├── utils/
│   └── constants.ts           # App name, email, hotline, routes
├── i18n.ts                    # i18next configuration
├── App.tsx                    # Route definitions + ThemeProvider
└── main.tsx                   # React root + HashRouter
```

---

## Supported Languages

| Code | Language | Default |
|---|---|---|
| `ja` | 日本語 (Japanese) | ✅ |
| `vi` | Tiếng Việt (Vietnamese) | |
| `en` | English | |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## CI/CD

Automated deployment via **GitHub Actions** on every push to `main`.

**Workflow:** `.github/workflows/deploy.yml`

```
push to main
  → Build (Node 20, npm ci, npm run build)
  → Upload dist/ as artifact
  → Deploy to GitHub Pages
```

**Required GitHub settings:**
- Settings → Pages → Source → **GitHub Actions**

---

## Google Play Compliance

The Delete Account page (`/#/delete-account`) meets all Google Play Data Safety requirements:

- ✅ Clearly states app name (**JRS POS**) and developer (**JRS**)
- ✅ Lists all data that will be deleted
- ✅ Explains data retained for legal compliance
- ✅ Provides 3 deletion methods (in-app, web form, email/phone)
- ✅ Accessible without login
- ✅ Confirmation flow with 7-day processing SLA

---

## Contact

- 📧 Email: contact@mmenu.vn
- 📞 Phone: +84 947 586 666
- 🌐 Website: https://mmenu.vn
