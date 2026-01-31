console.log("script.js cargó ✅");

function loadIdiomateWidget() {
  console.log("Widget cargado ✅");

  const root = document.getElementById("idiomateWidgetBrand");
  if (!root) return;

  const CONFIG = {
    waLink: "https://wa.me/5491100000000?text=Hola%20Idiomate%2C%20quiero%20info%20sobre%20cursos",
    languages: [
      {
        name: "Inglés",
        flag: "🇺🇸",
        mode: "Online",
        level: "Inicial a Avanzado",
        desc: "Conversación + estructura. Plan según objetivo (trabajo, viaje o exámenes)."
      },
      {
        name: "Italiano",
        flag: "🇮🇹",
        mode: "Online",
        level: "Inicial",
        desc: "Desde cero, sin conocimientos previos. Comprensión, pronunciación y conversación guiada."
      },
      {
        name: "Portugués",
        flag: "🇧🇷",
        mode: "Online",
        level: "Inicial",
        desc: "Ideal para viajar o laburo. Mucha práctica y vocabulario útil para situaciones reales."
      },
      {
        name: "Francés",
        flag: "🇫🇷",
        mode: "Online",
        level: "Inicial",
        desc: "Pronunciación, comprensión y conversación con material claro, paso a paso."
      },
      {
        name: "Alemán",
        flag: "🇩🇪",
        mode: "Online",
        level: "Inicial",
        desc: "Base sólida desde cero, con ejercicios prácticos y progreso guiado."
      },
      {
        name: "Ruso",
        flag: "🇷🇺",
        mode: "Online",
        level: "Inicial",
        desc: "Desde cero, sin conocimientos previos. Lectura y escritura en cirílico, gramática clara y comunicación oral guiada."
      }
    ]
  };

  // CTA WhatsApp
  root.querySelectorAll("[data-cta]").forEach(btn => {
    btn.addEventListener("click", () =>
      window.open(CONFIG.waLink, "_blank", "noopener")
    );
  });

  // scroll interno
  root.querySelectorAll("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", () => {
      const sel = btn.getAttribute("data-scroll");
      const el = root.querySelector(sel);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // render idiomas
  const grid = root.querySelector("[data-lang-grid]");
  if (grid) {
    grid.innerHTML = "";
    CONFIG.languages.forEach(l => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="cardTop">
          <div class="langName">
            <span class="langFlag">${l.flag}</span>
            <span>${l.name}</span>
          </div>

          <div class="pillRow">
            <span class="pill">${l.mode}</span>
            <span class="pill level">${l.level}</span>
          </div>
        </div>

        <p class="langDesc">${l.desc}</p>

        <div class="cardActions">
          <button class="miniBtn" type="button" data-cta>Ver detalles</button>
        </div>
      `;

      card.querySelector("[data-cta]").addEventListener("click", () =>
        window.open(CONFIG.waLink, "_blank", "noopener")
      );

      grid.appendChild(card);
    });
  }

  // FAQ acordeón (abre 1 y cierra el resto)
  const faqItems = root.querySelectorAll("details.faqItem");
  faqItems.forEach(d => {
    d.addEventListener("toggle", () => {
      if (!d.open) return;
      faqItems.forEach(o => {
        if (o !== d) o.open = false;
      });
    });
  });
}

// Arranque robusto (sirve con y sin defer)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadIdiomateWidget);
} else {
  loadIdiomateWidget();
}

