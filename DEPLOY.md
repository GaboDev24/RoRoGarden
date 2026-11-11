# Guía de Despliegue y Publicación (DEPLOY.md)

Esta guía explica, paso a paso y en lenguaje claro, cómo publicar RoRoGarden en internet de manera 100% gratuita para que la maestra jardinera pueda abrirla e instalarla en su celular.

> **Fecha de consulta y verificación de planes gratuitos:** 11 de noviembre de 2026.
> **Importante:** La app funciona enteramente en el navegador del celular (sin backend ni base de datos remota). Solo se necesita un servidor web estático.

---

## ⚠️ Advertencia de Privacidad antes de Publicar

1. **La carpeta `referencias/` no debe estar en el repositorio público:**
   Si tu repositorio en GitHub es público, las imágenes de referencia visuales en `referencias/` no deben subirse. Ya están agregadas al archivo `.gitignore`. Si alguna vez hiciste un commit con esa carpeta, revisá la sección final de este documento para removerla del historial antes de hacer público el repositorio.
2. **Encabezados de seguridad (CSP):**
   GitHub Pages no permite configurar encabezados HTTP personalizados (como `_headers`). Por esa razón, RoRoGarden ya incluye su política de seguridad estricta (`Content-Security-Policy`, `Referrer-Policy` y `Permissions-Policy`) embebida directamente dentro de `index.html`.

---

## Opción 1: GitHub Pages con GitHub Actions (Recomendada por defecto)

El repositorio ya incluye el archivo de automatización listo en `.github/workflows/deploy.yml`. Cada vez que subas cambios a la rama `main`, GitHub compilará y publicará la app automáticamente.

### Condiciones del Plan Gratuito (GitHub Pages)
- **Costo:** $0 / mes.
- **Límite:** 100 GB de transferencia mensual y 1 GB de almacenamiento (RoRoGarden pesa menos de 1 MB, usa menos del 0.1% del límite).
- **Dominio:** Te da una dirección gratuita tipo `https://tu-usuario.github.io/RoRoGarden/`.

### Pasos para Activar:
1. Subí tu proyecto a un repositorio en **GitHub**.
2. En GitHub, entrá a la pestaña **Settings** (Configuración) de tu repositorio.
3. En el menú de la izquierda, hacé clic en **Pages**.
4. En la sección **Build and deployment** (Compilación y despliegue):
   - En **Source**, seleccioná **GitHub Actions** (en lugar de "Deploy from a branch").
5. Hacé clic en la pestaña **Actions** arriba: verás el proceso llamado **"Despliegue en GitHub Pages"**.
6. Esperá unos 2 minutos a que termine con un tilde verde (✓).
7. Al hacer clic en el proceso terminado, verás el enlace público de tu app.
8. ¡Listo! Ya podés compartir ese enlace con la maestra o abrirlo en el celular.

---

## Opción 2: Cloudflare Pages (Alternativa con soporte completo de cabeceras)

Cloudflare Pages es muy rápido, tiene servidores en todo el mundo y lee automáticamente el archivo `public/_headers` incluido en RoRoGarden.

### Condiciones del Plan Gratuito (Cloudflare Pages)
- **Costo:** $0 / mes.
- **Límite:** 500 compilaciones por mes, ancho de banda ilimitado y sitios ilimitados.
- **Dominio:** Te da una dirección gratuita tipo `https://rorogarden.pages.dev` o podés usar un dominio propio.

### Pasos para Activar:
1. Creá una cuenta gratuita en [cloudflare.com](https://cloudflare.com).
2. En el panel principal, andá a **Workers & Pages** > **Create application** > pestaña **Pages** > **Connect to Git**.
3. Seleccioná tu repositorio de GitHub.
4. En los ajustes de compilación (**Build settings**):
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Hacé clic en **Save and Deploy**.
6. En 1 minuto tu app estará publicada en `https://tu-proyecto.pages.dev`.

---

## Opción 3: Netlify

Netlify también lee automáticamente el archivo `public/_headers` y es muy sencillo de configurar.

### Condiciones del Plan Gratuito (Netlify Starter)
- **Costo:** $0 / mes.
- **Límite:** 100 GB de ancho de banda al mes y 300 minutos de compilación al mes.

### Pasos para Activar:
1. Creá una cuenta gratuita en [netlify.com](https://netlify.com).
2. Hacé clic en **Add new site** > **Import an existing project** > **GitHub**.
3. Seleccioná el repositorio.
4. Parámetros de compilación:
   - **Base directory:** (dejar vacío)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Hacé clic en **Deploy site**.

---

## 🧹 Limpieza del historial de Git si se commiteó `referencias/`

Si el commit inicial incluyó la carpeta `referencias/` y querés hacer público el repositorio en GitHub, podés purgar esa carpeta del historial con una de estas opciones antes de hacer `git push`:

### Opción rápida con git filter-branch (o git-filter-repo):
```bash
git filter-branch --force --index-filter \
  "git rm -r --cached --ignore-unmatch referencias" \
  --prune-empty --tag-name-filter cat -- --all
```
O simplemente mantener el repositorio como **privado** en GitHub: GitHub Pages funciona tanto en repositorios públicos como privados (en cuentas Pro o con Organizations), y Cloudflare Pages / Netlify funcionan con repositorios privados sin ningún costo.

