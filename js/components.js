document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();
    loadFooter();
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
                        <li><i class="fas fa-phone"></i> +256 768 822 733</li>
                        <li><i class="fas fa-phone"></i> +256 748 814 016</li>
                        <li><i class="fas fa-envelope"></i> <a href="mailto:stelganengineeringsolutioncolt@gmail.com" style="color: #CBD5E1;">stelganengineeringsolutioncolt@gmail.com</a></li>
                    </ul>
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
    } else if (page === 'contact.html') {
        document.getElementById('nav-contact')?.classList.add('active');
    }
}
