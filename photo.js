 const images = ["Silly.jpeg", "Smiling.jpeg", "Eat.jpeg"];
  let currentIndex = 0;

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Increments and loops automatically
    document.getElementById("myImage").src = images[currentIndex];
  }
