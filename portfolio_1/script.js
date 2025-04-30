// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerHeight = document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});

// Active Section Highlighter
const sections = document.querySelectorAll('section');
const navLinksArray = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Contact Form Simulation
// Contact Form Simulation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // Netlify will handle the actual submission
    setTimeout(() => {
        btn.textContent = 'Message Sent!';
        setTimeout(() => {
            btn.textContent = 'Send Message';
            btn.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 1500);
    
    // Submit the form after the animation
    setTimeout(() => {
        contactForm.submit();
    }, 1500);
});

// Animate Skill Bars
const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillLevel = entry.target.querySelector('.skill-level');
      const percent = skillLevel.getAttribute('data-percent') + '%';
      skillLevel.style.width = percent;
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillLevel = bar.querySelector('.skill-level');
  skillLevel.style.width = '0'; // Reset width to 0 initially
  skillObserver.observe(bar);
});
// Certificate Modal Functionality
const modal = document.querySelector('.certificate-modal');
const modalImg = document.getElementById("modal-image");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll('.certificate-thumbnail').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
