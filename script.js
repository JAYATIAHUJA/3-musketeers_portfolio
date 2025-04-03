document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial state of portfolio cards
    gsap.set('.portfolio-card', {
        opacity: 0,
        y: 100,
        scale: 0.8
    });

    // Animate portfolio cards on scroll
    document.querySelectorAll('.portfolio-card').forEach((card, index) => {
        gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Smooth scroll for navigation links using GSAP
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 70
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // Add hover effect to portfolio cards
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        gsap.to('.hero-section', {
            backgroundPositionY: scrolled * 0.5,
            duration: 0.1
        });
    });

    // Add loading animation
    gsap.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('.hero-section h1', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
    });

    gsap.from('.hero-section p', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power2.out'
    });
});

// DOM Elements for Chatbot
document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-container');
    const closeChat = document.getElementById('close-chat');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const hamburger = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('#navbarNav');

    // Chatbot responses
    const botResponses = {
        'hello': 'Greetings, traveler! How can I assist you today?',
        'hi': 'Hello there! What brings you to our digital realm?',
        'help': 'I can help you with: \n1. Team information\n2. Project details\n3. Contact information\n4. General queries',
        'team': 'We are the Three Musketeers: \n- Astha Pathak (Frontend Developer)\n- Oshi Sharma (Researcher)\n- Jayati Ahuja (UI/UX Designer)',
        'projects': 'Our featured projects include: \n- E-commerce Platform\n- Mobile App Redesign\n- Research Studies\n- Web Development Projects',
        'contact': 'You can reach us at: \n- Location: VIPSTC, Delhi\n- Hours: Mon-Fri, 7AM-8PM\n- Phone: 8888999988',
        'default': 'I\'m not sure I understand. Try asking about our team, projects, or contact information!'
    };

    // Toggle chat visibility
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('active');
    });

    closeChat.addEventListener('click', () => {
        chatContainer.classList.remove('active');
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Send message function
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        // Add user message
        addMessage(message, 'user');

        // Process and get bot response
        const response = getBotResponse(message.toLowerCase());
        setTimeout(() => {
            addMessage(response, 'bot');
        }, 500);

        // Clear input
        userInput.value = '';
    }

    // Get bot response
    function getBotResponse(message) {
        for (const [key, value] of Object.entries(botResponses)) {
            if (message.includes(key)) {
                return value;
            }
        }
        return botResponses.default;
    }

    // Add message to chat
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.innerHTML = `<p class="retro-text">${message}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
