document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const imgs = Array.from(track.children);
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const dotsContainer = document.querySelector(".carousel-dots");
  let currentIdx = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIdx * 100}%)`;
    dotsContainer.childNodes.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIdx);
    });
  }

  function makeDots() {
    dotsContainer.innerHTML = "";
    imgs.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.addEventListener("click", () => {
        currentIdx = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    });
  }

  prevBtn.onclick = () => {
    currentIdx = currentIdx === 0 ? imgs.length - 1 : currentIdx - 1;
    updateCarousel();
  };
  nextBtn.onclick = () => {
    currentIdx = (currentIdx + 1) % imgs.length;
    updateCarousel();
  };

  makeDots();
  updateCarousel();

  // Fade-in on scroll (modern, minimal)
  const faders = document.querySelectorAll(".fade-in");
  const appearOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );
  faders.forEach((fader) => appearOnScroll.observe(fader));

  // Hamburger menu logic
  const hamburgerBtn = document.getElementById("hamburger-menu");
  const navList = document.querySelector(".nav-list");
  if (hamburgerBtn && navList) {
    hamburgerBtn.addEventListener("click", () => {
      navList.classList.toggle("open");
      hamburgerBtn.classList.toggle("active");
    });
    document.querySelectorAll(".nav-list a, .nav-list select").forEach((el) => {
      el.addEventListener("click", () => {
        navList.classList.remove("open");
        hamburgerBtn.classList.remove("active");
      });
    });
  }

  // Section navigation
  const navLinks = document.querySelectorAll("nav .home-btn, nav ul li a");
  const allSections = document.querySelectorAll("main > section");
  function showSection(sectionID) {
    allSections.forEach((s) => {
      s.style.display = s.id === sectionID ? "block" : "none";
    });
  }
  showSection("home");
  navLinks.forEach((l, idx) => l.classList.toggle("active", idx === 0));
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      showSection(link.getAttribute("href").replace("#", ""));
    });
  });

  // Ballon d'Or years (tabs)
  const buttons = document.querySelectorAll(".year-btn");
  const contents = document.querySelectorAll(".year-content");
  contents.forEach((c) => (c.style.display = "none"));
  if (contents[0]) contents[0].style.display = "block";
  buttons.forEach((b, idx) => {
    b.style.backgroundColor = "";
    b.style.color = "";
    if (idx === 0) {
      b.style.backgroundColor = "#1da1f2";
      b.style.color = "#fff";
    }
  });
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      contents.forEach((c) => (c.style.display = "none"));
      buttons.forEach((b) => {
        b.style.backgroundColor = "";
        b.style.color = "";
      });
      const targetId = button.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (target) {
        target.style.display = "block";
        button.style.backgroundColor = "#1da1f2";
        button.style.color = "#fff";
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 12);
      }
    });
  });

  // Video intro transition
  function showMainContent() {
    var overlay = document.getElementById("intro-overlay");
    if (overlay) {
      overlay.classList.add("hide");
      setTimeout(function () {
        overlay.style.display = "none";
        var content = document.getElementById("main-content");
        if (content) content.classList.add("visible");
      }, 800);
    }
  }
  // Only show intro on first visit
  if (!localStorage.getItem("visited")) {
    localStorage.setItem("visited", "true");
    // overlay/frame will run normally
  } else {
    var overlay = document.getElementById("intro-overlay");
    if (overlay) overlay.style.display = "none";
  }
  window.showMainContent = showMainContent; // Ensure it's global for video
});
