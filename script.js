
(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const invite = document.querySelector("#invite-button");
  const help = document.querySelector("#invite-help");

  if (invite) {
    invite.href = "https://discord.com/oauth2/authorize?client_id=1564848270281543721&permissions=268436496&integration_type=0&scope=bot%20applications.commands";
    invite.target = "_blank";
    invite.rel = "noopener noreferrer";
    invite.removeAttribute("aria-disabled");
    invite.textContent = "Inviter Community Builder ↗";
  }

  if (help) {
    help.textContent = "Ajoute Community Builder à ton serveur Discord.";
  }
})();
