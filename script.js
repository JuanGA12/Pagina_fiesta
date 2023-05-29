const texts = [
    "Yo detecto y reporto el Phishing con el botón de Phish Alert",
    "Yo bloqueo mi laptop cuando no la uso (Windows + L)",
    "Mi contraseña es robusta: Am0elcevich3!"
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
