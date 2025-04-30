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
// Replace your current form handler with this:
// Netlify Form Submission with Animation
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button');
    const originalText = submitBtn.textContent;
    
    // Visual feedback
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Prepare form data for Netlify
        const formData = new FormData(contactForm);
        const encodedData = new URLSearchParams(formData).toString();
        
        // Submit to Netlify
        const response = await fetch('/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded' 
            },
            body: encodedData
        });
        
        if (response.ok) {
            // Success animation
            submitBtn.textContent = '✓ Sent!';
            contactForm.reset();
            
            // Show temporary success message
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success-message';
            successMsg.textContent = 'Thank you! I\'ll get back to you soon.';
            contactForm.appendChild(successMsg);
            
            // Remove message after delay
            setTimeout(() => {
                successMsg.remove();
            }, 5000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        submitBtn.textContent = '✗ Failed';
        console.error('Form submission error:', error);
    } finally {
        // Reset button after delay
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
    }
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
