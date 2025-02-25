// JavaScript for scroll-triggered text animations using IntersectionObserver
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  }, observerOptions);

  // Observe all elements with the class "animate"
  const animateElements = document.querySelectorAll('.animate');
  animateElements.forEach(el => observer.observe(el));

  // Splash Screen
  setTimeout(function(){
    const splash = document.getElementById("splash");
    splash.style.transition = "opacity 0.5s ease";
    splash.style.opacity = "0";
    setTimeout(function(){
      splash.style.display = "none";
      document.getElementById("main-content").style.display = "block";
    }, 500);
  }, 3000);
});
