// Fade-in animation on scroll (modern, minimal)
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });
faders.forEach(fader => appearOnScroll.observe(fader));

// Função para mostrar conteúdo principal após vídeo
function showMainContent() {
  // Suaviza o fade-out do overlay
  var overlay = document.getElementById('intro-overlay');
  overlay.classList.add('hide');
  // Aguarda o fade-out antes de mostrar o conteúdo
  setTimeout(function() {
    overlay.style.display = 'none';
    var content = document.getElementById('main-content');
    content.classList.add('visible');
  }, 800); // corresponde ao tempo do transition do overlay
}

if (!localStorage.getItem("visited")) {
  localStorage.setItem("visited", "true");
  // Faz nada, overlay visível + vídeo mostra normalmente
} else {
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('intro-overlay').style.display = 'none';
  });
}


document.addEventListener('DOMContentLoaded', () => {
     // Seleciona todos os links da nav
  const navLinks = document.querySelectorAll('nav ul li a');
  // Seleciona todas as sections
  const allSections = document.querySelectorAll('main > section');
  
  // Função para mostrar só a section relacionada e esconder todas as outras
  function showSection(sectionID) {
    allSections.forEach(s => {
      if (s.id === sectionID) {
        s.style.display = 'block';
      } else {
        s.style.display = 'none';
      }
    });
  }

  // Inicializa: mostra só Ballon d'Or, destaca só o primeiro link
  showSection('home');
  navLinks.forEach((l, idx) => {
    l.classList.toggle('active', idx === 0);
  });

  // Adiciona o evento de click ao menu superior
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      // Remove highlight de todos
      navLinks.forEach(l => l.classList.remove('active'));
      // Adiciona highlight ao clicado
      link.classList.add('active');
      // Mostra a section correspondente
      const sectionID = link.getAttribute('href').replace('#', '');
      showSection(sectionID);
    });
  });

        const buttons = document.querySelectorAll('.year-btn');
        const contents = document.querySelectorAll('.year-content');
        contents.forEach(c => c.style.display = 'none');
        contents[0].style.display = 'block';
        buttons.forEach(b => b.style.backgroundColor = '');
        buttons[0].style.backgroundColor = '#1da1f2';
        buttons[0].style.color = '#fff';
        
       buttons.forEach(button => {
        button.addEventListener('click', () => {
            contents.forEach(c => c.style.display = 'none');
            buttons.forEach(b => {
            b.style.backgroundColor = '';
            b.style.color = '';
            });
            const targetId = button.getAttribute('data-target');
            const target = document.getElementById(targetId);
            target.style.display = 'block';
            button.style.backgroundColor = '#1da1f2';
            button.style.color = '#fff';

            setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 10);
        });
        });
 
});