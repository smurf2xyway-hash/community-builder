(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const id = String(window.COMMUNITY_BUILDER_CONFIG?.applicationId || "").trim();
  const invite = document.querySelector("#invite-button");
  const help = document.querySelector("#invite-help");
  if (invite && /^\d{17,20}$/.test(id)) {
    invite.href = `https://discord.com/oauth2/authorize?client_id=${encodeURIComponent(id)}&permissions=0&scope=bot%20applications.commands`;
    invite.removeAttribute("aria-disabled");
    invite.innerHTML = 'Ajouter Community Builder <span>↗</span>';
    if (help) help.textContent = "Vérifie les permissions demandées par ton bot avant de confirmer l’invitation.";
    invite.addEventListener("click", () => invite.blur());
  } else if (invite) {
    invite.addEventListener("click", event => event.preventDefault());
  }
})();