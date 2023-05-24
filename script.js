const randomTexts = 'abcdefghijklmnopqrstuvwxyz'.split('');
// Function to generate a random index
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
// Function to display a random text
function displayRandomText() {
    const randomIndex = getRandomIndex(randomTexts.length);
    const randomText = randomTexts[randomIndex];
    document.getElementById("random-text").textContent = randomText;
}
// Call the displayRandomText function when the page loads
window.onload = function() {
    displayRandomText();
  };