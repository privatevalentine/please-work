// Example function that gets called when the score changes
function updateScore(points) {
  score += points;         // Update your global or local score variable
  updateBackground(score); // Update the background image based on the new score
  
  // ... any additional score handling logic (e.g., updating a score display)
} 