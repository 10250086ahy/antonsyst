function openWhatsApp() {
  const phone = "519XXXXXXXX"; // TU NÚMERO
  const msg = "Hola, deseo información sobre el sistema de asistencia inteligente.";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("ANTSYS PWA lista"))
    .catch(err => console.log("Error PWA:", err));
}

}
