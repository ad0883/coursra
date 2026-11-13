// Coursera Exact Replica Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.getElementById('exploreBtn');
  const exploreMenu = document.getElementById('exploreMenu');
  const searchInput = document.getElementById('searchInput');
  const searchSubmit = document.getElementById('searchSubmit');
  const certFrame = document.getElementById('certFrame');
  const certModal = document.getElementById('certModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const copyVerifyBtn = document.getElementById('copyVerifyBtn');
  const printCertBtn = document.getElementById('printCertBtn');
  const toastNotice = document.getElementById('toastNotice');
  const enrollBtn = document.getElementById('enrollBtn');
  const joinBtn = document.getElementById('joinBtn');
  const loginBtn = document.getElementById('loginBtn');
  const courseLink = document.getElementById('courseLink');

  // Helper: Show toast notification
  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  }

  // Explore button dropdown toggle
  if (exploreBtn && exploreMenu) {
    exploreBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = exploreMenu.classList.toggle('open');
      exploreBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!exploreMenu.contains(e.target) && !exploreBtn.contains(e.target)) {
        exploreMenu.classList.remove('open');
        exploreBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Search action
  function handleSearch() {
    const query = searchInput.value.trim();
    if (query) {
      showToast(`Searching Coursera for: "${query}"`);
    } else {
      searchInput.focus();
    }
  }

  if (searchSubmit) {
    searchSubmit.addEventListener('click', handleSearch);
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    });
  }

  // Certificate Modal Lightbox
  if (certFrame && certModal) {
    certFrame.addEventListener('click', () => {
      certModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (courseLink && certModal) {
    courseLink.addEventListener('click', (e) => {
      e.preventDefault();
      certModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeModal() {
    if (certModal) {
      certModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeAuthModal();
      if (exploreMenu) {
        exploreMenu.classList.remove('open');
      }
    }
  });

  // Copy Verification URL
  if (copyVerifyBtn) {
    copyVerifyBtn.addEventListener('click', () => {
      const verifyUrl = 'https://coursera.org/verify/775601XXDEM4';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(verifyUrl).then(() => {
          showToast('Copied verification URL to clipboard!');
        }).catch(() => {
          showToast('Link: ' + verifyUrl);
        });
      } else {
        showToast('Link: ' + verifyUrl);
      }
    });
  }

  // Print Certificate action
  if (printCertBtn) {
    printCertBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Enroll Button action -> opens Auth Modal
  if (enrollBtn) {
    enrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openAuthModal();
    });
  }

  // Auth Modal (Log in or create account)
  const authModal = document.getElementById('authModal');
  const authCloseBtn = document.getElementById('authCloseBtn');
  const authForm = document.getElementById('authForm');
  const authEmailInput = document.getElementById('authEmailInput');
  const googleAuthBtn = document.getElementById('googleAuthBtn');
  const facebookAuthBtn = document.getElementById('facebookAuthBtn');
  const appleAuthBtn = document.getElementById('appleAuthBtn');

  function openAuthModal() {
    if (authModal) {
      authModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (authEmailInput) {
        setTimeout(() => authEmailInput.focus(), 50);
      }
    }
  }

  function closeAuthModal() {
    if (authModal) {
      authModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // Join for Free button action -> opens Auth Modal
  if (joinBtn) {
    joinBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openAuthModal();
    });
  }

  // Log In link action -> opens Auth Modal
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openAuthModal();
    });
  }

  if (authCloseBtn) {
    authCloseBtn.addEventListener('click', closeAuthModal);
  }

  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) {
        closeAuthModal();
      }
    });
  }

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = authEmailInput ? authEmailInput.value.trim() : '';
      if (email) {
        showToast(`Continuing with ${email}...`);
        closeAuthModal();
      }
    });
  }

  if (googleAuthBtn) {
    googleAuthBtn.addEventListener('click', () => {
      showToast('Continuing with Google account...');
    });
  }

  if (facebookAuthBtn) {
    facebookAuthBtn.addEventListener('click', () => {
      showToast('Continuing with Facebook account...');
    });
  }

  if (appleAuthBtn) {
    appleAuthBtn.addEventListener('click', () => {
      showToast('Continuing with Apple ID...');
    });
  }

  // Skills pills interaction
  const pills = document.querySelectorAll('.skill-tag-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      showToast(`Skill: ${pill.textContent}`);
    });
  });
});
