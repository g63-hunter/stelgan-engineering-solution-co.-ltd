document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
    loadChatbot();
});

function loadNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="container nav-container">
            <a href="index.html" class="logo-wrapper">
                <img src="Images/logo.jpg" alt="Stelgan Logo">
                <div class="logo-text">
                    STELGAN<br>ENGINEERING
                </div>
            </a>
            <ul class="nav-links">
                <li><a href="index.html" id="nav-home">Home</a></li>
                <li><a href="about.html" id="nav-about">About Us</a></li>
                <li><a href="services.html" id="nav-services">Services</a></li>
                <li><a href="projects.html" id="nav-projects">Projects</a></li>
                <li><a href="contact.html" id="nav-contact">Contact Us</a></li>
            </ul>
            <a href="contact.html" class="btn btn-primary">Get a Quote</a>
            <div class="mobile-menu-btn" style="display: none;">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    `;
    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
        setActiveLink();
        
        setTimeout(() => {
            const menuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            if (menuBtn && navLinks) {
                menuBtn.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }
        }, 100);
    }
}

function loadFooter() {
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="footer-logo">
                        <img src="Images/logo.jpg" alt="Stelgan Logo" style="height: 60px;">
                    </div>
                    <p style="color: #CBD5E1; margin-bottom: 20px;">
                        Leading engineering solutions in Entebbe. Quality, reliability, and professional excellence in every project.
                    </p>
                    <div class="payment-note" style="color: var(--accent); font-weight: 600; font-size: 0.9rem;">
                        <i class="fas fa-check-circle"></i> We Allow Installment Payments For All Projects
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Our Services</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Our Services</h4>
                    <ul class="footer-links">
                        <li><a href="services.html">Electrical Engineering</a></li>
                        <li><a href="services.html">Construction Works</a></li>
                        <li><a href="services.html">Architecture</a></li>
                        <li><a href="services.html">CCTV & Security</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Info</h4>
                    <ul class="contact-info">
                        <li><i class="fas fa-map-marker-alt"></i> Entebbe - Kitoro, P.O. BOX 704242</li>
                        <li><i class="fas fa-phone"></i> +256768822733 / +256748814016</li>
                        <li><i class="fas fa-envelope"></i> <a href="mailto:stelganengineeringsolutioncolt@gmail.com" style="color: #CBD5E1;">stelganengineeringsolutioncolt@gmail.com</a></li>
                    </ul>
                    <div style="margin-top: 25px; display: flex; align-items: center; gap: 15px; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; gap: 8px; color: #CBD5E1;" title="WhatsApp">
                            <i class="fab fa-whatsapp" style="font-size: 1.5rem;"></i>
                            <span style="font-size: 0.95rem;">0778857786 / 0748814016</span>
                        </div>
                        <a href="https://www.facebook.com/stelganengineeringcompany" target="_blank" title="Facebook" style="color: #CBD5E1; font-size: 1.5rem; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='#CBD5E1'"><i class="fab fa-facebook"></i></a>
                        <a href="https://youtube.com/@stelganengineeringcompany?si=HgPhpSAtnIQWbz9m" target="_blank" title="YouTube" style="color: #CBD5E1; font-size: 1.5rem; transition: color 0.3s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='#CBD5E1'"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} Stelgan Engineering Solution Co. Ltd. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
    const placeholder = document.getElementById('footer-placeholder');
    if (placeholder) {
        placeholder.innerHTML = footerHTML;
    }
}

function setActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    if (page === 'index.html' || page === '') {
        document.getElementById('nav-home')?.classList.add('active');
    } else if (page === 'about.html') {
        document.getElementById('nav-about')?.classList.add('active');
    } else if (page === 'services.html') {
        document.getElementById('nav-services')?.classList.add('active');
    } else if (page === 'projects.html') {
        document.getElementById('nav-projects')?.classList.add('active');
    } else if (page === 'contact.html') {
        document.getElementById('nav-contact')?.classList.add('active');
    }
}
function loadChatbot() {
    // Inject CSS
    if (!document.getElementById('chatbot-css')) {
        const link = document.createElement('link');
        link.id = 'chatbot-css';
        link.rel = 'stylesheet';
        link.href = 'css/chatbot.css';
        document.head.appendChild(link);
    }

    const chatbotHTML = `
    <div class="chatbot-widget">
        <button class="chat-button" aria-label="Open Chat">
            <i class="fas fa-comment-dots"></i>
        </button>
        <div class="chat-window">
            <div class="chat-header">
                <div class="chat-header-info">
                    <div class="chat-avatar">
                        <img src="Images/logo.jpg" alt="Stelgan Logo" style="width: 100%; border-radius: 50%;">
                    </div>
                    <div>
                        <div style="font-weight: 700; font-size: 1rem;">Stelgan Support</div>
                        <div class="chat-status"><i class="fas fa-circle"></i> Online</div>
                    </div>
                </div>
                <button class="close-chat" style="background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem;">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="chat-body"></div>
            <div class="chat-footer">
                <input type="text" class="chat-input" placeholder="Type your message...">
                <button class="send-btn">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    </div>
    `;

    // Create a div if it doesn't exist
    let placeholder = document.getElementById('chatbot-placeholder');
    if (!placeholder) {
        placeholder = document.createElement('div');
        placeholder.id = 'chatbot-placeholder';
        document.body.appendChild(placeholder);
    }
    placeholder.innerHTML = chatbotHTML;

    // Load Script then init
    if (!document.getElementById('chatbot-js')) {
        const script = document.createElement('script');
        script.id = 'chatbot-js';
        script.src = 'js/chatbot.js';
        script.onload = () => {
            if (typeof initChatbot === 'function') {
                initChatbot();
                setupCloseChat();
            }
        };
        document.body.appendChild(script);
    } else {
        if (typeof initChatbot === 'function') {
            initChatbot();
            setupCloseChat();
        }
    }
}

function setupCloseChat() {
    const closeBtn = document.querySelector('.close-chat');
    const chatWindow = document.querySelector('.chat-window');
    if (closeBtn && chatWindow) {
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            chatWindow.classList.remove('active');
        };
    }
}
