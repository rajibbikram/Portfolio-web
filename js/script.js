// Custom JS for portfolio
// Add interactivity as needed 

document.addEventListener('DOMContentLoaded', function() {
  const scrollDown = document.querySelector('.scroll-down-indicator');
  if (scrollDown) {
    scrollDown.style.cursor = 'pointer';
    scrollDown.addEventListener('click', function() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  if (backToTop) {
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Project Modal: Only open when clicking .read-more-btn
  document.querySelectorAll('.read-more-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const card = btn.closest('.project-card-custom');
      const modal = new bootstrap.Modal(document.getElementById('projectModal'));
      document.getElementById('projectModalLabel').textContent = card.getAttribute('data-title') || 'Project Title';
      document.getElementById('projectModalImg').src = card.getAttribute('data-img') || '';
      document.getElementById('projectModalImg').alt = card.getAttribute('data-title') || 'Project Image';
      document.getElementById('projectModalDesc').textContent = card.getAttribute('data-desc') || '';
      document.getElementById('projectModalBadges').innerHTML = card.getAttribute('data-badges') || '';
      document.getElementById('projectModalLive').href = card.getAttribute('data-live') || '#';
      document.getElementById('projectModalGit').href = card.getAttribute('data-git') || '#';
      modal.show();
    });
  });
}); 