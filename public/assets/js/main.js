/**
 * WAHID AHYARUDDIN — PORTFOLIO & VISUAL GALLERY
 * Production-ready Vanilla JS according to specification
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. HERO VIDEO BACKGROUND CONTROL (Exact specification)
  // =========================================================================
  const heroVideo = document.getElementById('heroVideo');

  if (heroVideo) {
    // Force video to start at currentTime = 0
    heroVideo.currentTime = 0;

    // Play video and catch any autoplay prevention errors from the browser
    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started successfully
        })
        .catch((error) => {
          console.warn('Autoplay prevented or video playback error:', error);
          // Fallback if browser requires interaction
          document.body.addEventListener('click', () => {
            if (heroVideo.paused) {
              heroVideo.play().catch(e => console.error(e));
            }
          }, { once: true });
        });
    }

    // Add an ended event listener to log when the video successfully reaches the last frame.
    // Do NOT loop the video as specified.
    heroVideo.addEventListener('ended', () => {
      console.log('Hero video reached the last frame successfully.');
    });
  }

  // =========================================================================
  // 2. MOBILE MENU TOGGLE
  // =========================================================================
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const isOpen = navLinks.classList.contains('mobile-open');
      mobileToggle.innerHTML = isOpen
        ? '<i class="ph ph-x"></i>'
        : '<i class="ph ph-list"></i>';
    });

    // Close mobile menu when clicking nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        mobileToggle.innerHTML = '<i class="ph ph-list"></i>';
      });
    });
  }

  // =========================================================================
  // 3. PROJECT FILTERING
  // =========================================================================
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 4. PHOTO GALLERY & LIGHTBOX MODAL
  // =========================================================================
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxExif = document.getElementById('lightboxExif');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryList = [];
  let currentActiveIndex = 0;

  function updateGalleryList() {
    currentGalleryList = Array.from(galleryItems).filter(item => item.style.display !== 'none');
  }

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      updateGalleryList();
    });
  });

  function openLightbox(index) {
    if (!lightbox || !currentGalleryList[index]) return;
    currentActiveIndex = index;
    const item = currentGalleryList[index];
    const src = item.getAttribute('data-full') || item.querySelector('img').getAttribute('src');
    const title = item.getAttribute('data-title') || 'Photograph';
    const exif = item.getAttribute('data-exif') || '';

    lightboxImg.setAttribute('src', src);
    lightboxTitle.textContent = title;
    lightboxExif.textContent = exif;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextPhoto() {
    if (currentGalleryList.length === 0) return;
    currentActiveIndex = (currentActiveIndex + 1) % currentGalleryList.length;
    openLightbox(currentActiveIndex);
  }

  function prevPhoto() {
    if (currentGalleryList.length === 0) return;
    currentActiveIndex = (currentActiveIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
    openLightbox(currentActiveIndex);
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      updateGalleryList();
      const index = currentGalleryList.indexOf(item);
      if (index !== -1) {
        openLightbox(index);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextPhoto);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevPhoto);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    }
  });

  updateGalleryList();

  // =========================================================================
  // 5. TOAST NOTIFICATIONS & COPY EMAIL
  // =========================================================================
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');

  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  function copyEmail() {
    const email = 'wahidahyaruddin@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email copied: ' + email);
    }).catch(() => {
      showToast('Email: ' + email);
    });
  }

  document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      copyEmail();
    });
  });

  // =========================================================================
  // 6. CONTACT FORM HANDLER
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName')?.value.trim();
      const email = document.getElementById('formEmail')?.value.trim();
      const message = document.getElementById('formMessage')?.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all fields.');
        return;
      }

      const mailtoUrl = `mailto:wahidahyaruddin@gmail.com?subject=Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
      window.location.href = mailtoUrl;

      showToast('Opening your email client to send message...');
      contactForm.reset();
    });
  }
});
