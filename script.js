/* ==========================================================================
   Ashraful Alam - Portfolio JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle Functionality ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const body = document.body;

  // Read saved theme from localStorage
  const savedTheme = localStorage.getItem('portfolioTheme');
  
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      const isDark = body.classList.contains('dark-theme');

      if (themeIcon) {
        if (isDark) {
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
        } else {
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
        }
      }

      // Save preference to localStorage
      localStorage.setItem('portfolioTheme', isDark ? 'dark' : 'light');
    });
  }

  // --- Go To Top Button Visibility & Click Handler ---
  const goToTopBtn = document.getElementById('goToTopBtn');

  if (goToTopBtn) {
    window.addEventListener('scroll', () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        goToTopBtn.classList.add('visible');
      } else {
        goToTopBtn.classList.remove('visible');
      }
    });

    goToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
