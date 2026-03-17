document.addEventListener("DOMContentLoaded", () => {
  const mainContent = document.getElementById("main-content");
  const overlay = document.getElementById("intro-overlay");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function showMainContent() {
    if (overlay) {
      overlay.classList.add("hide");
      setTimeout(
        () => {
          overlay.style.display = "none";
        },
        reduceMotion ? 0 : 700,
      );
    }
    if (mainContent) {
      mainContent.classList.add("visible");
    }
  }
  window.showMainContent = showMainContent;

  try {
    if (!localStorage.getItem("visited")) {
      localStorage.setItem("visited", "true");
    } else {
      if (overlay) overlay.style.display = "none";
      if (mainContent) mainContent.classList.add("visible");
    }
  } catch {
    if (overlay) overlay.style.display = "none";
    if (mainContent) mainContent.classList.add("visible");
  }

  const languageSelect = document.getElementById("language-select");
  const translationStatus = document.getElementById("translation-status");

  const setTranslationStatus = (message) => {
    if (translationStatus) translationStatus.textContent = message;
  };

  const tryApplyGoogleLanguage = (lang) => {
    const googleCombo = document.querySelector(".goog-te-combo");
    if (!googleCombo) return false;
    googleCombo.value = lang;
    googleCombo.dispatchEvent(new Event("change"));
    return true;
  };

  if (languageSelect) {
    languageSelect.addEventListener("change", function () {
      const lang = this.value;
      if (tryApplyGoogleLanguage(lang)) {
        setTranslationStatus("Language updated.");
        return;
      }

      setTranslationStatus("Starting translation engine...");
      let tries = 0;
      const retry = window.setInterval(() => {
        tries += 1;
        if (tryApplyGoogleLanguage(lang)) {
          window.clearInterval(retry);
          setTranslationStatus("Language updated.");
          return;
        }

        if (tries >= 12) {
          window.clearInterval(retry);
          setTranslationStatus(
            "Automatic translation is unavailable right now. Try browser translate or reload.",
          );
        }
      }, 350);
    });

    setTimeout(() => {
      if (!document.querySelector(".goog-te-combo")) {
        setTranslationStatus(
          "Translation loads when Google service is available.",
        );
      }
    }, 1800);
  }

  const track = document.querySelector(".carousel-track");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const dotsContainer = document.querySelector(".carousel-dots");

  if (track && prevBtn && nextBtn && dotsContainer) {
    const slides = Array.from(track.children);
    let currentIdx = 0;

    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentIdx * 100}%)`;
      Array.from(dotsContainer.children).forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIdx);
      });
    };

    const makeDots = () => {
      dotsContainer.innerHTML = "";
      slides.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
        dot.addEventListener("click", () => {
          currentIdx = i;
          updateCarousel();
        });
        dotsContainer.appendChild(dot);
      });
    };

    prevBtn.addEventListener("click", () => {
      currentIdx = currentIdx === 0 ? slides.length - 1 : currentIdx - 1;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      currentIdx = (currentIdx + 1) % slides.length;
      updateCarousel();
    });

    makeDots();
    updateCarousel();
  }

  const hamburgerBtn = document.getElementById("hamburger-menu");
  const navList = document.querySelector(".nav-list");
  if (hamburgerBtn && navList) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      hamburgerBtn.classList.toggle("active", isOpen);
      hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".nav-list a, .nav-list select").forEach((el) => {
      el.addEventListener("click", () => {
        navList.classList.remove("open");
        hamburgerBtn.classList.remove("active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const navLinks = document.querySelectorAll("nav .home-btn, nav ul li a");
  const allSections = document.querySelectorAll("main > section");

  const showSection = (sectionID) => {
    allSections.forEach((section) => {
      section.style.display = section.id === sectionID ? "block" : "none";
    });
  };

  const applyActiveNav = (activeHref) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === activeHref);
    });
  };

  const initialHash = window.location.hash || "#home";
  showSection(initialHash.replace("#", ""));
  applyActiveNav(initialHash);

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetHref = link.getAttribute("href");
      if (!targetHref) return;
      showSection(targetHref.replace("#", ""));
      applyActiveNav(targetHref);
      history.replaceState(null, "", targetHref);
    });
  });

  document.querySelectorAll(".js-section-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetHref = link.getAttribute("href");
      if (!targetHref) return;
      showSection(targetHref.replace("#", ""));
      applyActiveNav(targetHref);
      history.replaceState(null, "", targetHref);
    });
  });

  const yearButtons = document.querySelectorAll(".year-btn");
  const yearContents = document.querySelectorAll(".year-content");

  yearContents.forEach((content) => {
    content.style.display = "none";
  });
  if (yearContents[0]) yearContents[0].style.display = "block";

  yearButtons.forEach((button, index) => {
    button.classList.toggle("active", index === 0);
    button.addEventListener("click", () => {
      yearButtons.forEach((btn) => btn.classList.remove("active"));
      yearContents.forEach((content) => {
        content.style.display = "none";
      });
      const target = document.getElementById(button.dataset.target || "");
      if (target) {
        target.style.display = "block";
        button.classList.add("active");
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    });
  });

  const cardState = {};
  const cardGroups = document.querySelectorAll("[data-group][data-index]");
  cardGroups.forEach((card) => {
    const group = card.dataset.group;
    const idx = Number(card.dataset.index);
    if (!group) return;
    if (!cardState[group] || idx < cardState[group]) cardState[group] = idx;
  });

  const renderCardGroup = (group, currentIndex) => {
    document
      .querySelectorAll(`[data-group="${group}"][data-index]`)
      .forEach((card) => {
        const idx = Number(card.dataset.index);
        card.classList.toggle("active", idx === currentIndex);
      });
  };

  document.querySelectorAll("[data-card-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.dataset.group;
      const direction = button.dataset.cardNav;
      if (!group || !direction) return;

      const cards = Array.from(
        document.querySelectorAll(`[data-group="${group}"][data-index]`),
      );
      const max = cards.length;
      const current = cardState[group] || 1;
      let next = current;
      if (direction === "next") next = Math.min(current + 1, max);
      if (direction === "prev") next = Math.max(current - 1, 1);
      cardState[group] = next;
      renderCardGroup(group, next);
    });
  });

  const faders = document.querySelectorAll(".fade-in");
  if (!reduceMotion && "IntersectionObserver" in window) {
    const appearOnScroll = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 },
    );
    faders.forEach((fader) => appearOnScroll.observe(fader));
  } else {
    faders.forEach((fader) => fader.classList.add("visible"));
  }

  const newsletterForm = document.getElementById("newsletter-form");
  const feedback = document.getElementById("newsletter-feedback");
  if (newsletterForm && feedback) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = newsletterForm.querySelector("input[type='email']");
      if (!input) return;
      feedback.textContent =
        "Subscription request received. Thank you for supporting the project.";
      newsletterForm.reset();
    });
  }
});
