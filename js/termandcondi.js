document.addEventListener('DOMContentLoaded', function() {
    const cookieBanners = document.querySelectorAll('.cookie-banner');
    const acceptCookiesButtons = document.querySelectorAll('.accept-cookies');
 
    // Verificar si ya se ha aceptado la cookie
    if (!localStorage.getItem('cookiesAccepted')) {
       cookieBanners.forEach(function(banner) {
          banner.style.display = 'block';
       });
    }
 
    // Evento al hacer clic en el botón "Aceptar"
    acceptCookiesButtons.forEach(function(button) {
       button.addEventListener('click', function() {
          localStorage.setItem('cookiesAccepted', true);
          cookieBanners.forEach(function(banner) {
             banner.style.display = 'none';
          });
       });
    });
 });
 
 