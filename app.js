// JavaScript for handling form submissions

// Reservation form
document.getElementById('reservation-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Reservation submitted! We will contact you soon.');
});

// Contact form
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! We will get back to you shortly.');
});
