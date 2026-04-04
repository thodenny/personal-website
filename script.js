/* ============================================================
   THOMAS DENNY — Personal Site
   script.js — interactivity, animations, classic web widgets
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     VISITOR COUNTER
     Counts up to a target from a start value, animates
     in a Courier/digital-clock style. Purely decorative.
  ---------------------------------------------------------- */
  const counterEl = document.querySelector('.vc-count');
  if (counterEl) {
    const TARGET = 4521;
    const START  = TARGET - 180;
    const DURATION = 1600; // ms

    const startTime = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function formatCount(n) {
      // Pad to 6 digits, then format as 000,000
      return String(n).padStart(6, '0').replace(/(\d{3})(\d{3})/, '$1,$2');
    }

    function tickCounter(now) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased    = easeOutCubic(progress);
      const current  = Math.floor(START + (TARGET - START) * eased);

      counterEl.textContent = formatCount(current);

      if (progress < 1) {
        requestAnimationFrame(tickCounter);
      }
    }

    // Small delay so it doesn't fire before page renders
    setTimeout(() => requestAnimationFrame(tickCounter), 300);
  }

  /* ----------------------------------------------------------
     ACTIVE NAV LINK HIGHLIGHT
     Compares current filename to nav link href and adds
     the 'active' class. Handles index.html / root path.
  ---------------------------------------------------------- */
  const currentPath = window.location.pathname;
  const currentFile = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  document.querySelectorAll('nav.main-nav a.nav-link').forEach(function (link) {
    const linkFile = link.getAttribute('href');
    if (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
     TOP 8 TILES — subtle pulse on hover
     Just a small enhancement on top of the CSS transition.
  ---------------------------------------------------------- */
  document.querySelectorAll('.top8-tile').forEach(function (tile) {
    tile.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.18s ease';
    });
    tile.addEventListener('mouseleave', function () {
      this.style.transition = 'all 0.3s ease';
    });
  });

  /* ----------------------------------------------------------
     MYSPACE-STYLE PLAYER
     Play button toggles the YouTube iframe open/closed.
     Equalizer speeds up when playing (via CSS class on card).
  ---------------------------------------------------------- */
  /* ----------------------------------------------------------
     MUSIC PLAYER — wired to local MP3 via HTML5 Audio API
     Play/pause button controls the audio element directly.
     Equalizer speeds up when playing, idles when paused.
     Song resets to beginning when it ends.
  ---------------------------------------------------------- */
  const playBtn    = document.getElementById('ms-play-btn');
  const playerCard = playBtn ? playBtn.closest('.ms-player-card') : null;
  const audio      = document.getElementById('ms-audio');

  if (playBtn && playerCard && audio) {

    // Play button click — toggle play/pause
    playBtn.addEventListener('click', function () {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });

    // Audio started playing
    audio.addEventListener('play', function () {
      playBtn.textContent = '⏸';
      playBtn.classList.add('playing');
      playerCard.classList.add('is-playing');
    });

    // Audio paused
    audio.addEventListener('pause', function () {
      playBtn.textContent = '▶';
      playBtn.classList.remove('playing');
      playerCard.classList.remove('is-playing');
    });

    // Song finished — reset to beginning
    audio.addEventListener('ended', function () {
      playBtn.textContent = '▶';
      playBtn.classList.remove('playing');
      playerCard.classList.remove('is-playing');
      audio.currentTime = 0;
    });

  }

  /* ----------------------------------------------------------
     PROFILE PHOTO — subtle click easter egg
     Three clicks reveals a console message. Classic.
  ---------------------------------------------------------- */
  const profilePhoto = document.querySelector('.profile-photo-wrap img');
  if (profilePhoto) {
    let clickCount = 0;
    profilePhoto.addEventListener('click', function () {
      clickCount++;
      if (clickCount === 3) {
        console.log('%c 👋 Hey. You found the easter egg. That\'s the kind of curious I respect. — Thomas', 'color: #00CED1; font-size: 14px; font-family: Verdana;');
        clickCount = 0;
      }
    });
  }

  /* ----------------------------------------------------------
     LAST LOGIN DATE — dynamically writes "Today" if
     visiting same day as hardcoded date, otherwise formats
     the actual date. This keeps it feeling "live."
  ---------------------------------------------------------- */
  const lastLoginEl = document.querySelector('.last-login-value');
  if (lastLoginEl) {
    // Always show Today — this is a static site so it's always "now"
    const today = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    lastLoginEl.textContent = today.toLocaleDateString('en-US', options);
  }

});
