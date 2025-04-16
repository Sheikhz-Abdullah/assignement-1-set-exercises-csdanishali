// Select all the boxes buttons on the page
const buttons = document.querySelectorAll('.boxes');

// Loop through each button and add a click event
buttons.forEach(function(button) {
  button.addEventListener('click', function() {

    // Get the audio file name from the button's data attribute
    const file = button.getAttribute('data-audio');

    // Create a new Audio object with the file path
    const audio = new Audio(file);

    // Play the audio
    audio.play();
  });
});