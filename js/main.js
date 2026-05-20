// Global Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Form submission handling (AJAX)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            try {
                const response = await fetch('contact.php', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.text();
                
                if (response.ok) {
                    alert('Thank you! Your message has been sent to Stelgan Engineering.');
                    contactForm.reset();
                } else {
                    const cleanResult = result.trim().startsWith('<') 
                        ? 'Internal server error or mail configuration issue. Please contact the site owner.' 
                        : result;
                    alert('Error: ' + cleanResult);
                }
            } catch (error) {
                alert('Connection error. Please try again later.');
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        // observer.observe(section);
    });

    // Process logos to be transparent
    setTimeout(processLogos, 100);
});

function processLogos() {
    const logos = document.querySelectorAll('img[src*="logo.jpg"]');
    logos.forEach(img => {
        if (img.complete) {
            makeTransparent(img);
        } else {
            img.onload = () => makeTransparent(img);
        }
    });
}

function makeTransparent(img) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    
    ctx.drawImage(img, 0, 0);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    // Threshold for black
    const threshold = 40; 
    
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // If the pixel is very dark, make it transparent
        if (r < threshold && g < threshold && b < threshold) {
            data[i + 3] = 0;
        }
    }
    
    ctx.putImageData(imageData, 0, 0);
    img.src = canvas.toDataURL();
}
