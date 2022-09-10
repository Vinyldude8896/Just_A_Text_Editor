const installBtn = document.getElementById("buttonInstall");

// Logic for installing the PWA
// ADDED: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener("beforeinstallprompt", (event) => {
// });

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installBtn.style.visibility = "visible";

  installBtn.addEventListener("click", () => {
    event.prompt();
    installBtn.setAttribute("disabled", true);
    installBtn.textContent = "Installed!";
  });
});

window.addEventListener("appinstalled", (event) => {
  console.log("👍", "appinstalled", event);
});

// ADDED: Implement a click event handler on the `butInstall` element
// installBtn.addEventListener('click', async () => {});

// ADDED: Add an handler for the `appinstalled` event
// window.addEventListener("appinstalled", (event) => {
//   console.log("👍", "appinstalled", event);
// });
