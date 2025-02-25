// JavaScript for scroll-triggered text animations using IntersectionObserver
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = { threshold: 0.1 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with class "animate" and "gucci-text"
  document.querySelectorAll('.animate, .gucci-text').forEach(el => observer.observe(el));

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
