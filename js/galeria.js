/* Para usar tus fotos: súbelas a assets/img/ y cambia src/alt (pos = encuadre de la miniatura). */
const FOTOS = [
  {src:"assets/img/charro-negro1.jpg",pos:"50% 50%"},
  {src:"assets/img/charro-negro2.jpg",pos:"30% 40%"},
  {src:"assets/img/charro-negro3.jpg",pos:"50% 22%"},
  {src:"assets/img/charro-negro4.jpg",pos:"80% 90%"},
  {src:"assets/img/charro-negro5.jpg",pos:"92% 10%"},
  {src:"assets/img/charro-negro6.jpg",pos:"5% 80%"},
  {src:"assets/img/charro-negro7.jpg",pos:"5% 80%"}
];
const g = document.getElementById("gallery"), lb = document.getElementById("lightbox");
const im = lb.querySelector("img"), cap = lb.querySelector("p"); let i = 0;
g.innerHTML = FOTOS.map((f, n) => `<button data-i="${n}" aria-label="Ampliar: ${f.alt}"><img loading="lazy" src="${f.src}" alt="${f.alt}" style="object-position:${f.pos}"></button>`).join("");
const show = n => { i = (n + FOTOS.length) % FOTOS.length; im.src = FOTOS[i].src; im.alt = FOTOS[i].alt; cap.textContent = `${FOTOS[i].alt} (${i+1}/${FOTOS.length})`; };
g.addEventListener("click", e => { const b = e.target.closest("button"); if (b) { show(+b.dataset.i); lb.showModal(); } });
lb.querySelector("[data-prev]").onclick = () => show(i - 1);
lb.querySelector("[data-next]").onclick = () => show(i + 1);
lb.querySelector("[data-close]").onclick = () => lb.close();
lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") show(i - 1); if (e.key === "ArrowRight") show(i + 1); });
