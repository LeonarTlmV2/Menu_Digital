/* ===== CONFIGURACIÓN: edita aquí los datos reales ===== */
const CONFIG = {
  whatsapp: "2225366024",            // Dígitos con lada país. Ej: "5212221234567". Vacío = pendiente
  mensaje: "Hola Charro Negro, me gustaría solicitar una cotización para mi evento.",
  zona: "Puebla y zona metropolitana",                // Ej: "Puebla y zona metropolitana"
  redes: [ /* { nombre: "Instagram", url: "https://instagram.com/tu_cuenta" } */ ]
};
const PENDIENTE = "Pendiente de proporcionar";
/* ===== MENÚ: agrega productos { foto, nombre, descripcion, ingredientes, precio } ===== */
const MENU = {
  "Cócteles": [], "Bebidas preparadas": [], "Bebidas sin alcohol": [], "Botanas": [], "Otros productos": []
};
const wa = () => "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(CONFIG.mensaje);
const PAGES = [["index.html","Inicio"],["menu.html","Menú"],["servicios.html","Servicios"],["galeria.html","Galería"],["contacto.html","Contacto"]];
const here = location.pathname.split("/").pop() || "index.html";
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

document.body.insertAdjacentHTML("afterbegin", `<a class="skip" href="#main">Saltar al contenido</a>
<header class="site-header"><div class="wrap bar">
<a class="brand" href="index.html" aria-label="Charro Negro, inicio">Charro Negro</a>
<button class="nav-toggle" aria-expanded="false" aria-controls="nav-list">Menú</button>
<nav aria-label="Principal"><ul id="nav-list">${PAGES.map(([h,t]) =>
`<li><a href="${h}"${h===here?' aria-current="page"':''}>${t}</a></li>`).join("")}</ul></nav></div></header>`);
document.body.insertAdjacentHTML("beforeend", `<footer class="site-footer"><div class="wrap">
<div><strong class="brand" style="font-size:1.2rem">Charro Negro</strong><br>Drinks &amp; Shots · Barra, bebidas y botanas para eventos</div>
<ul>${PAGES.map(([h,t]) => `<li><a href="${h}">${t}</a></li>`).join("")}</ul>
<small>© ${new Date().getFullYear()} Charro Negro</small></div></footer>`);

const nav = document.querySelector("nav"), tg = document.querySelector(".nav-toggle");
tg.addEventListener("click", () => tg.setAttribute("aria-expanded", nav.classList.toggle("open")));
document.querySelectorAll("[data-wa]").forEach(a => a.href = wa());

const mr = document.getElementById("menu-root");
if (mr) mr.innerHTML = Object.entries(MENU).map(([cat, items]) =>
 `<section class="cat" aria-label="${esc(cat)}"><h2>${esc(cat)}</h2><div class="grid">` +
 (items.length ? items : [{}]).map(p => `<article class="card"><div class="ph">${p.foto ? `<img loading="lazy" src="${esc(p.foto)}" alt="${esc(p.nombre||"")}">` : "Fotografía pendiente"}</div>
 <div class="body"><h3>${esc(p.nombre||PENDIENTE)}</h3>
 <p class="${p.descripcion?"":"pending"}">${esc(p.descripcion||"Descripción pendiente de proporcionar")}</p>
 ${p.ingredientes?`<p><small>Ingredientes: ${esc(p.ingredientes)}</small></p>`:""}
 <p class="price ${p.precio?"":"pending"}">${p.precio?esc(p.precio):"Precio pendiente"}</p></div></article>`).join("") + `</div></section>`).join("");

const ct = document.getElementById("contact-list");
if (ct) {
  const row = (t, v) => `<li><strong>${t}:</strong> ${v}</li>`, pend = `<span class="pending">${PENDIENTE}</span>`;
  ct.innerHTML = row("WhatsApp", CONFIG.whatsapp ? `<a href="${wa()}">+${esc(CONFIG.whatsapp)}</a>` : pend) +
   row("Correo", CONFIG.email ? `<a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a>` : pend) +
   row("Zona de cobertura", CONFIG.zona ? esc(CONFIG.zona) : pend) +
   row("Redes sociales", CONFIG.redes.length ? CONFIG.redes.map(r => `<a href="${esc(r.url)}" rel="noopener" target="_blank">${esc(r.nombre)}</a>`).join(", ") : pend);
}
