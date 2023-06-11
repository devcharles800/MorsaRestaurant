function changeMenuImage(menuBtn) {
    var image = document.getElementById('menu-img');
    image.style.opacity = 0; // Fade out the image
      setTimeout(function() {
        image.src = menuBtn.href; // Change the image source
        image.style.opacity = 1; // Fade in the new image
      }, 500); // Wait for 500 milliseconds (0.5 seconds)
    return false;
}
