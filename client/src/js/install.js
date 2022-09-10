const installBtn = document.getElementById("buttonInstall");



// This will add listeners for the install button and if you click the install button you will be prompted to install the app.
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




