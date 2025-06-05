function openLightbox(src) {
    const lb = document.getElementById("lightbox");
    document.getElementById("lightbox-img").src = src;
    lb.style.display = "flex";
    setTimeout(() => lb.classList.add('show'), 10);
  }
  
  function closeLightbox() {
    const lb = document.getElementById("lightbox");
    lb.classList.remove('show');
    setTimeout(() => lb.style.display = "none", 300);
  }
  
