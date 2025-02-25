// JavaScript for triggering glitter effect on buttons (except refresh logo)
document.addEventListener("DOMContentLoaded", function() {
  // Select all buttons with class 'btn' that are not inside the .logo element
  const buttons = document.querySelectorAll("a.btn:not(.logo a)");
  
  buttons.forEach(btn => {
    btn.addEventListener("click", function() {
      // Remove glitter class if already present to restart animation
      btn.classList.remove("glitter");
      // Trigger reflow to restart animation
      void btn.offsetWidth;
      btn.classList.add("glitter");
      // Remove glitter class after animation completes (800ms)
      setTimeout(() => {
        btn.classList.remove("glitter");
      }, 800);
    });
  });
});
