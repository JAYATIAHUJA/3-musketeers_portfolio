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
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');
    const hamburger = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('#navbarNav');

    // Chatbot Toggle
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.add('active');
        chatToggle.style.display = 'none';
    });

    closeChat.addEventListener('click', () => {
        chatContainer.classList.remove('active');
        chatToggle.style.display = 'flex';
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Send Message Function
    window.sendMessage = function() {
        const message = userInput.value.trim();
        
        if (message !== '') {
            // Add user message
            addMessage(message, 'user-message');
            
            // Clear input
            userInput.value = '';
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            // Simulate bot response
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage(botResponse, 'bot-message');
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }

    // Add Message to Chat
    function addMessage(text, className) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${className}`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
    }

    // Get Bot Response
    function getBotResponse(message) {
        // Simple response logic
        const responses = {
            'hello': 'Hi there! How can I help you today?',
            'hi': 'Hello! What can I do for you?',
            'help': 'I can help you with information about our services, team members, or general inquiries. What would you like to know?',
            'bye': 'Goodbye! Have a great day!',
            'thanks': 'You\'re welcome! Is there anything else I can help you with?',
            'contact': 'You can reach us through the contact form on our website or connect with us on social media.',
            'team': 'Our team consists of Astha Pathak (Frontend Developer), Oshi Sharma (Researcher), and Jayati Ahuja (UI/UX Designer).',
            'services': 'We specialize in web development, research, and UI/UX design. Which area would you like to know more about?'
        };

        // Convert message to lowercase for matching
        message = message.toLowerCase();

        // Check for matching responses
        for (let key in responses) {
            if (message.includes(key)) {
                return responses[key];
            }
        }

        // Default response if no match found
        return "I'm not sure I understand. Could you please rephrase that or ask about our team, services, or contact information?";
    }

    // Handle Enter Key
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
