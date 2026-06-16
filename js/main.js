document.addEventListener('DOMContentLoaded', () => {
  // Menu Mobile
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isActive);
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Efeito de Scroll no Header
  const header = document.querySelector('.header');
  if (header) {
    const checkScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('glass-panel');
        header.style.backgroundColor = 'rgba(8, 7, 16, 0.85)';
        header.style.borderBottom = '1px solid var(--necxus-color-border)';
      } else {
        header.classList.remove('glass-panel');
        header.style.backgroundColor = 'transparent';
        header.style.borderBottom = 'none';
      }
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  }

  // Active Link Highlighter
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html') || (currentPath.endsWith('/') && href === 'index.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
