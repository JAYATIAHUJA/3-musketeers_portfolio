document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Create a GSAP timeline for skills animation
    const skillsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top center',
            once: true
        }
    });

    // Animate each skill bar
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        skillsTimeline.to(bar, {
            width: `${progress}%`,
            duration: 1.5,
            ease: 'power2.out'
        }, '-=1');
    });

    // Animate profile image
    gsap.from('.member-profile img', {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out'
    });

    // Animate project cards
    gsap.from('.project-card', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.project-card',
            start: 'top 80%'
        }
    });

    // Add hover sound effect
    const buttons = document.querySelectorAll('.know-more-btn, .nav-link');
    const hoverSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                y: -3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}); 