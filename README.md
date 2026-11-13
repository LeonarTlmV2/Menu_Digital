# Charro Negro – sitio web estático
HTML + CSS + JS, sin dependencias (solo Google Fonts, gratuito).

## Qué editar
- **WhatsApp, correo, zona, redes, mensaje inicial:** `js/main.js` → `CONFIG`. WhatsApp en dígitos con lada (ej. `5212221234567`). Mientras esté vacío, el botón abre `wa.me` sin número y el usuario elige contacto.
- **Menú (fotos, nombres, ingredientes, precios):** `js/main.js` → `MENU`. Ejemplo:
  `"Cócteles": [{foto:"assets/img/margarita.jpg", nombre:"…", descripcion:"…", ingredientes:"…", precio:"$00"}]`
- **Galería:** sube fotos a `assets/img/` y edita `FOTOS` en `js/galeria.js`.
- **Servicios:** textos en `servicios.html`.
- **Colores y tipografías:** variables al inicio de `css/styles.css`.
- Optimiza fotos antes de subir (máx. 1600 px de ancho, JPG ~80 %).

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub (ej. `charro-negro`) y sube todo el contenido de esta carpeta a la raíz.
2. Settings → Pages → Source: *Deploy from a branch* → rama `main`, carpeta `/ (root)` → Save.
3. En 1–2 minutos estará en `https://TU-USUARIO.github.io/charro-negro/`.
