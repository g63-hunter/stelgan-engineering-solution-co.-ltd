/* Chatbot Logic */
const chatbotResponses = {
    "greeting": "Hello! Welcome to Stelgan Engineering Solution. I'm your virtual assistant. How can I help you today?",
    "services": "We specialize in several key areas:\n\n1. Electrical Engineering: Design, installation & maintenance.\n2. Construction: Civil works, renovations & structural engineering.\n3. Security: CCTV, Biometrics & Alarm systems.\n4. Architecture: Modern designs & planning.\n\nWhich one are you interested in?",
    "installment": "Yes, we offer flexible payment plans! We allow installment payments for all our projects to make your engineering dreams more accessible. Would you like to speak to a consultant about this?",
    "location": "Our head office is located in Entebbe - Kitoro, P.O. BOX 704242. We operate throughout Uganda!",
    "contact": "You can reach us directly at:\n📞 +256 768 822 733\n📞 +256 748 814 016\n📧 stelganengineeringsolutioncolt@gmail.com",
    "quote": "To get a personalized quote, please provide your project details and your phone number, or visit our Contact page. Would you like me to guide you there?",
    "default": "I'm here to help! You can ask about our services, pricing/installments, location, or how to get a quote."
};

function initChatbot() {
    const chatBtn = document.querySelector('.chat-button');
    const chatWindow = document.querySelector('.chat-window');
    const closeBtn = document.querySelector('.close-chat');
    const sendBtn = document.querySelector('.send-btn');
    const chatInput = document.querySelector('.chat-input');
    const chatBody = document.querySelector('.chat-body');

    if (!chatBtn || !chatWindow) return;

    // Toggle Chat Window
    chatBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            chatInput.focus();
            if (chatBody.children.length === 0) {
                showTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    addMessage("bot", chatbotResponses.greeting);
                }, 1000);
            }
        }
    });

    // Close Button
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            chatWindow.classList.remove('active');
        });
    }

    // Send Message
    const handleSend = () => {
        const text = chatInput.value.trim();
        if (text) {
            addMessage("user", text);
            chatInput.value = '';
            showTypingIndicator();
            setTimeout(() => {
                removeTypingIndicator();
                processResponse(text);
            }, 1000);
        }
    };

    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    // Process Response
    function processResponse(text) {
        const lowerText = text.toLowerCase();
        let response = chatbotResponses.default;

        if (lowerText.includes('service') || lowerText.includes('work') || lowerText.includes('offer') || lowerText.includes('do you do')) {
            response = chatbotResponses.services;
        } else if (lowerText.includes('pay') || lowerText.includes('installment') || lowerText.includes('cost') || lowerText.includes('price')) {
            response = chatbotResponses.installment;
        } else if (lowerText.includes('where') || lowerText.includes('location') || lowerText.includes('office') || lowerText.includes('address')) {
            response = chatbotResponses.location;
        } else if (lowerText.includes('contact') || lowerText.includes('phone') || lowerText.includes('email') || lowerText.includes('call')) {
            response = chatbotResponses.contact;
        } else if (lowerText.includes('quote') || lowerText.includes('estimate') || lowerText.includes('price list')) {
            response = chatbotResponses.quote;
        } else if (lowerText.includes('hi') || lowerText.includes('hello') || lowerText.includes('hey')) {
            response = "Hi there! I'm ready to assist you. What's on your mind?";
        } else if (lowerText.includes('thank')) {
            response = "You're very welcome! Is there anything else I can help you with?";
        }

        addMessage("bot", response);
    }

    // Add Message to UI
    function addMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;

        // Convert newlines to <br> for simple formatting
        msgDiv.innerHTML = text.replace(/\n/g, '<br>');

        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;

        // Add suggestions if bot says greeting or default
        if (text === chatbotResponses.greeting || text === chatbotResponses.default) {
            addSuggestions();
        }
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }

    function addSuggestions() {
        const suggestions = ["Our Services", "Payment Plans", "Get a Quote", "Contact Info"];
        const suggDiv = document.createElement('div');
        suggDiv.className = 'chat-suggestions';

        suggestions.forEach(s => {
            const chip = document.createElement('div');
            chip.className = 'suggestion-chip';
            chip.textContent = s;
            chip.onclick = () => {
                addMessage("user", s);
                showTypingIndicator();
                setTimeout(() => {
                    removeTypingIndicator();
                    processResponse(s);
                }, 800);
            };
            suggDiv.appendChild(chip);
        });

        chatBody.appendChild(suggDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Global scope for component loader
window.initChatbot = initChatbot;
