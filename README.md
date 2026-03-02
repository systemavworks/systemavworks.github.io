# AV Works System — AVStack

[![Website](https://img.shields.io/badge/Web-avstack.es-8b5cf6?style=flat-square&logo=googlechrome&logoColor=white)](https://avstack.es)
[![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub_Pages-black?style=flat-square&logo=github)](https://systemavworks.github.io)
[![License](https://img.shields.io/badge/License-Apache_2.0-06b6d4?style=flat-square)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-Ready-10b981?style=flat-square)](https://avstack.es/manifest.json)
[![Performance](https://img.shields.io/badge/Assets-Optimizados-10b981?style=flat-square)](#-assets--rendimiento)

Sitio web corporativo de **AV Works System / AVStack** — equipo de Desarrollo Web Fullstack y Android con sede en Andalucía, España. Construido con HTML, CSS y JavaScript puro. Sin frameworks. Sin tracking. Privacidad por diseño.

---

## ⚡ Servicios

| Área | Tecnologías |
|---|---|
| Desarrollo Web Corporativa | HTML5, CSS3, JavaScript, React, Node.js, SEO técnico |
| E-commerce & PWAs | WooCommerce, Stripe, Service Workers, offline-first |
| Apps Android Nativas | Kotlin, Jetpack Compose, Room, Coroutines, Flow |
| Fullstack Android + Backend | Kotlin + Node.js/Java Spring, API REST, PostgreSQL, auth JWT |
| Backend & APIs | Node.js, Java Spring Boot, REST, GraphQL, PostgreSQL |
| Pentesting & Ciberseguridad | OWASP Top 10, SQLi, XSS, auditoría, hardening |
| Diseño de Marca & Identidad | Naming, logotipo, paleta, tipografía, guía de estilo |
| Plataforma Digital PYMEs | Web multi-sector, PWA, gestión online, multi-local |
| Mantenimiento & Soporte | Monitorización, actualizaciones, soporte post-lanzamiento |

## 💼 Proyectos destacados

### 🤖 Apps Android Nativas & Fullstack
**Tipo:** App Android + Backend completo  
**Stack:** Kotlin, Jetpack Compose, Room, Coroutines/Flow + Node.js / Java Spring Boot, REST API, PostgreSQL, JWT  
Desarrollo fullstack completo: app Android nativa conectada a un backend robusto y seguro. Arquitectura limpia (Clean Architecture + MVVM), testing, CI/CD con GitHub Actions y despliegue en producción. El cliente recibe el código fuente completo, tanto del móvil como del servidor.

---

### 🛡️ GuardianOS Shield
**Tipo:** App Android nativa · Open Source  
**Stack:** Kotlin, Jetpack Compose, Room, DNS-over-HTTPS  
Aplicación de control parental con filtrado DNS local. Privacidad 100%, sin tracking, sin servidores externos. Distribuida bajo licencia **Apache 2.0**.  
🔗 [guardianos.es](https://guardianos.es) · [github.com/systemavworks](https://github.com/systemavworks)

---

### 🏢 Plataforma Digital para PYMEs
**Tipo:** Web multi-sector a medida  
**Stack:** HTML5, CSS3, JavaScript / React, Node.js, PWA  
Solución web adaptable a cualquier sector: hostelería, mecánica, marketing, ventas, agencias de viaje, etc. Incluye gestión online, presencia profesional y PWA offline-first adaptada al negocio.

---

### 🌐 Webs Corporativas
**Tipo:** Sitios web profesionales  
**Stack:** React, Node.js, SEO técnico, diseño responsive  
Desarrollo de webs corporativas, landings y portales para empresas. Optimizadas para SEO, rápidas y adaptables a cualquier dispositivo.

---

### 📲 Apps Web Progresivas (PWA)
**Tipo:** Aplicaciones web instalables  
**Stack:** Service Workers, IndexedDB, Web App Manifest, Fullstack  
Aplicaciones web instalables que funcionan sin conexión. Experiencia nativa en móvil y escritorio sin pasar por las tiendas. Actualizaciones transparentes y rendimiento extremo.

---

### 🔐 Pentesting & Ciberseguridad Web
**Tipo:** Auditoría de seguridad ofensiva  
**Stack:** OWASP Top 10, Burp Suite, SQLi, XSS, auth bypasses, hardening  
Simulación de ataques reales sobre webs y aplicaciones para detectar vulnerabilidades antes que un atacante. Informe técnico detallado y plan de remediación. Cumplimiento RGPD y normativa aplicable.

---

### 🎨 Diseño de Marca & Identidad Visual
**Tipo:** Branding completo  
Creación de identidad visual desde cero: naming, logotipo, paleta de color, tipografía y guía de estilo. Marca coherente y profesional que transmite confianza en cada punto de contacto con el cliente.

---



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
│   ├── logo-original.png   # Logo AV Works System — 242 KB / 500×500px (optimizado)
│   ├── logo-avstack.png    # Logo transparente (iconos, PWA) — 166 KB / 400×400px (optimizado)
│   ├── icon-192.png        # PWA icon 192x192
│   ├── icon-512.png        # PWA icon 512x512
│   ├── favicon-16.png
│   ├── favicon-32.png
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

## 🖼️ Assets & Rendimiento

| Asset | Tamaño original | Tamaño optimizado | Dimensiones |
|---|---|---|---|
| `logo-original.png` | 2.6 MB | **242 KB** | 500×500 px |
| `logo-avstack.png` | 3.4 MB | **166 KB** | 400×400 px |
| `icon-192.png` | — | 67 KB | 192×192 px |
| `icon-512.png` | — | 445 KB | 512×512 px |

Los logos se muestran en la web a ~52px (CSS: `3.25rem`). La resolución actual es más que suficiente para pantallas Retina/HiDPI. La optimización se realizó con Python 3 + Pillow (Lanczos, compress_level=9).

Backups de los originales disponibles localmente en `assets/*_orig_backup.png` (no incluidos en el repositorio).

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

> *Hecho con ❤️ en Andalucía, España.*
