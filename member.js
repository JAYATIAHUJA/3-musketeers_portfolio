document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars
    gsap.from('.skill-progress', {
        width: 0,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.skill-bar',
            start: 'top 80%'
        }
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
}); 