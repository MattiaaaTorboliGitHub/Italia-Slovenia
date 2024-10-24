document.addEventListener('DOMContentLoaded', function() {
    var scroll = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
        scroll.style.display = 'block';
      } else {
        scroll.style.display = 'none';
      }
    });
  });  