# AV Works System — AVStack

[![Website](https://img.shields.io/badge/Web-avstack.es-8b5cf6?style=flat-square&logo=googlechrome&logoColor=white)](https://avstack.es)
[![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub_Pages-black?style=flat-square&logo=github)](https://systemavworks.github.io)
[![License](https://img.shields.io/badge/License-Apache_2.0-06b6d4?style=flat-square)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-Ready-10b981?style=flat-square)](https://avstack.es/manifest.json)

Sitio web corporativo de **AV Works System / AVStack** — equipo de Desarrollo Web Fullstack y Android con sede en Sevilla, Andalucía. Construido con HTML, CSS y JavaScript puro. Sin frameworks. Sin tracking. Privacidad por diseño.

---

## ⚡ Servicios

| Área | Tecnologías |
|---|---|
| Desarrollo Web | HTML5, CSS3, JavaScript, React, Vue, Next.js |
| Apps Android | Kotlin, Jetpack Compose, Room, Retrofit |
| Backend & APIs | Node.js, Java Spring, REST, PostgreSQL, MongoDB |
| E-commerce & PWAs | WooCommerce, Stripe, Service Workers, IndexedDB |
| Seguridad & Auditoría | OWASP, HTTPS, CSP, DNS Filtering |

---

## 🏗️ Estructura del proyecto

```
systemavworks.github.io/
├── index.html              # Página principal
├── 404.html                # Página de error personalizada
├── manifest.json           # PWA manifest
├── sw.js                   # Service Worker (cache-first + network-first)
├── robots.txt              # SEO + bloqueo bots IA
├── sitemap.xml             # Mapa del sitio
├── CNAME                   # Dominio personalizado → avstack.es
├── _headers                # HTTP Security Headers (Cloudflare Pages)
├── _redirects              # Redirecciones (www → apex)
├── humans.txt              # humanstxt.org
├── .well-known/
│   └── security.txt        # RFC 9116 — contacto de seguridad
├── assets/
│   ├── logo-original.png   # Logo AV Works System (original)
│   ├── logo-avstack.png    # Logo transparente (iconos, PWA)
│   ├── icon-192.png        # PWA icon 192x192
│   ├── icon-512.png        # PWA icon 512x512
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   └── og-image.png        # Open Graph 1200x630
├── css/
│   └── styles.css          # Estilos (vanilla CSS, variables, dark theme)
├── js/
│   └── main.js             # JS puro — scroll, animaciones, PWA register
└── legal/
    ├── aviso-legal.html
    ├── privacidad.html
    └── cookies.html
```

---

## 🚀 Despliegue

| Concepto | Valor |
|---|---|
| Hosting | GitHub Pages |
| Dominio | avstack.es |
| DNS / CDN | Cloudflare |
| SSL | Cloudflare Auto (Full Strict) |
| Caché | Service Worker + Cloudflare Edge |

### Desplegar cambios

```bash
git add .
git commit -m "feat: descripción del cambio"
git push origin main
```

GitHub Pages publica automáticamente en **avstack.es** en ~30 segundos.

### Servidor local

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

---

## 🛠️ Stack técnico

- **Frontend:** HTML5 semántico, CSS3 custom properties, Vanilla JS (ES2020+)
- **PWA:** Service Worker con estrategia Cache-First (assets) + Network-First (HTML)
- **Fuentes:** Inter + JetBrains Mono (Google Fonts)
- **Iconos / assets:** Generados con Python 3 + Pillow
- **Sin dependencias de runtime:** 0 frameworks, 0 librerías JS externas
- **Privacidad:** Sin Google Analytics, sin cookies de terceros, sin tracking de ningún tipo

---

## 🔒 Seguridad

Headers HTTP configurados vía `_headers`:

```
Content-Security-Policy: default-src 'self'; ...
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000; includeSubDomains
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Contacto de seguridad: `contacto@avstack.es` | [security.txt](/.well-known/security.txt)

---

## 📄 Licencia

Copyright 2026 AV Works System / AVStack  
Distribuido bajo licencia **Apache 2.0** — ver [LICENSE](LICENSE).

El logo, marca y nombre "AV Works System" / "AVStack" son propiedad de sus titulares y no están incluidos en la licencia open source.

---

## 📬 Contacto

- 🌐 [avstack.es](https://avstack.es)
- 📧 contacto@avstack.es
- 🐙 [github.com/systemavworks](https://github.com/systemavworks)
- 🛡️ [guardianos.es](https://guardianos.es) — GuardianOS Shield (proyecto open source)

> *Hecho con ❤️ en Sevilla, Andalucía.*
