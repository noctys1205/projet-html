document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth scroll pour les liens internes
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href').substring(1);
      const targetElem = document.getElementById(targetId);
      if(targetElem) {
        e.preventDefault();
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 2. Fade-in des .patrimoine-item au scroll
  const patrimoineItems = document.querySelectorAll('.patrimoine-item');
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    patrimoineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if(itemTop < triggerBottom) {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      }
    });
  };
  patrimoineItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
  });
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // 3. Animation shadow sur les images à l'intérieur de patrimoine-item
  patrimoineItems.forEach(item => {
    const img = item.querySelector('img');
    if(img){
      img.style.transition = 'box-shadow 0.3s ease';
      img.addEventListener('mouseenter', () => {
        img.style.boxShadow = '0 15px 35px rgba(217, 119, 6, 0.7)';
        img.style.transform = 'scale(1.05)';
      });
      img.addEventListener('mouseleave', () => {
        img.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)';
        img.style.transform = 'scale(1)';
      });
    }
  });

  // 4. Menu sticky : changement de couleur au scroll
  const stickyMenu = document.querySelector('.sticky-menu');
  if(stickyMenu){
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        stickyMenu.style.background = 'rgba(40, 40, 40, 0.85)';
        stickyMenu.style.backdropFilter = 'blur(10px)';
        stickyMenu.querySelectorAll('li a').forEach(link => {
          link.style.color = '#d97706'; // couleur dorée
          link.style.fontWeight = '700';
          link.style.textShadow = '0 0 5px #d97706';
        });
      } else {
        stickyMenu.style.background = 'rgba(0, 0, 0, 0.3)';
        stickyMenu.style.backdropFilter = 'blur(6px)';
        stickyMenu.querySelectorAll('li a').forEach(link => {
          link.style.color = 'rgba(0, 0, 0, 0.7)';
          link.style.fontWeight = '600';
          link.style.textShadow = 'none';
        });
      }
    });
  }

  // 5. Bouton "Back to Top"
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '↑ Top';
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '30px';
  backToTopBtn.style.right = '30px';
  backToTopBtn.style.padding = '10px 15px';
  backToTopBtn.style.fontSize = '1.2rem';
  backToTopBtn.style.background = '#d97706';
  backToTopBtn.style.color = '#fff';
  backToTopBtn.style.border = 'none';
  backToTopBtn.style.borderRadius = '10px';
  backToTopBtn.style.cursor = 'pointer';
  backToTopBtn.style.boxShadow = '0 6px 18px rgba(217, 119, 6, 0.5)';
  backToTopBtn.style.opacity = '0';
  backToTopBtn.style.transition = 'opacity 0.3s ease';
  backToTopBtn.style.zIndex = '10000';
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
      backToTopBtn.style.opacity = '1';
    } else {
      backToTopBtn.style.opacity = '0';
    }
  });
});
