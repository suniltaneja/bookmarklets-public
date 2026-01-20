javascript: (() => {
  // Prevent double injection
  if (window.__HEADINGS_UI__) return;
  window.__HEADINGS_UI__ = true;

  const styles = {
    h1: "2px solid #e53935",
    h2: "2px solid #fb8c00",
    h3: "2px solid #fdd835",
    h4: "2px solid #43a047",
    h5: "2px solid #1e88e5",
    h6: "2px solid #8e24aa"
  };

  const panel = document.createElement("div");
  panel.style.cssText = `
    position:fixed;
    top:20px;
    right:20px;
    z-index:999999;
    background:#111;
    color:#fff;
    font-family:system-ui,-apple-system,sans-serif;
    font-size:12px;
    padding:10px;
    border-radius:8px;
    box-shadow:0 6px 20px rgba(0,0,0,.3);
  `;

  const colors = {
    h1: "#e53935",
    h2: "#fb8c00",
    h3: "#fdd835",
    h4: "#43a047",
    h5: "#1e88e5",
    h6: "#8e24aa"
  };

  panel.innerHTML = `
    <strong style="display:block;margin-bottom:6px">Headings</strong>
    ${["h1","h2","h3","h4","h5","h6"].map(h => `
      <label style="display:flex;align-items:center;cursor:pointer;gap:6px">
        <input type="checkbox" data-h="${h}" checked>
        <span style="width:12px;height:12px;background:${colors[h]};border-radius:2px;flex-shrink:0"></span>
        ${h.toUpperCase()} (${document.querySelectorAll(h).length})
      </label>
    `).join("")}
  `;

  document.body.appendChild(panel);

  function update() {
    Object.keys(styles).forEach(h => {
      document.querySelectorAll(h).forEach(el => {
        const checked = panel.querySelector(`input[data-h="${h}"]`).checked;
        el.style.outline = checked ? styles[h] : "";
      });
    });
  }

  panel.addEventListener("change", update);
  update();
})();