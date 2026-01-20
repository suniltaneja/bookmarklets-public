// my-bookmarklet.js
(() => {
  const links = [...document.querySelectorAll("a")];

  if (!links.length) {
    alert("No links found on this page.");
    return;
  }

  links.forEach(a => {
    a.style.outline = "2px solid red";
    a.style.backgroundColor = "rgba(255,0,0,0.15)";
  });

  console.log(`Highlighted ${links.length} links`);
})();