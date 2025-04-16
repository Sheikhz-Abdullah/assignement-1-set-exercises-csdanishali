const buttons = document.querySelectorAll('.boxes');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    const file = button.getAttribute('data-audio');
    const audio = new Audio(file);
    audio.play();
  });
});