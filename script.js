const texts = [
    "Yo detecto y reporto el Phishing con el botón de Phish Alert",
    "Yo bloqueo mi laptop cuando no la uso (Windows + L)",
    "Mi contraseña es robusta: Am0elcevich3!",
    "Tu clave es como tu cepillo de dientes: mejor no compartirlo y cambiarlo regularmente",
    "Tu clave es como tu ropa interior no la prestes",
    "Tu contraseña es como esa pareja toxic@. No tienes que repetir",
    "Tu contraseña es como la llave de tu casa: si la compartes cualquiera puede ingresar a tu información",
    "Si un extraño te ofrece un caramelo, lo aceptarías? Entonces porque aceptas el premio de un sorteo del que no sabías nada",
    "El phishing es como un amigo imaginario: parece real, pero solo juega con tu información",
    "El Phishing es como Tinder, te engaña con promesas falsas y te roba más que la clave del WIfi",
    "Si el phishing fuera una persona seria un ninja, silencioso, ataca rápidamente y desaparece antes que veas los daños",
    "El phishing es como un Dementor digital: intenta succionar tu información en lugar de tu alma",
    "El malware es como esa persona que aparece en la fiesta sin ser invitada, se coló sin que te des cuenta y causa un desastre en tu equipo",
    "El malware es como esa hamburguesa de carretilla: parece inofensiva pero al final solo enfermas tu sistema (digestivo)",
    "El malware es como esos mosquitos cuando te vas de paseo: te pican y te dejan rascando tu cabeza preguntándote ¿Qué pasó?"
]

// Function to generate a random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
// Function to display a random text
function displayRandomText() {
    const randomIndex = getRandomIndex(texts.length);
    const randomText = texts[randomIndex];
    document.getElementById("random-text").textContent = randomText;
}
// Call the displayRandomText function when the page loads
window.onload = function() {
    displayRandomText();
  };
