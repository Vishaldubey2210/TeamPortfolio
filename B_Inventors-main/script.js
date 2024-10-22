document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
    darkModeToggle.id = 'dark-mode-toggle';
    document.body.appendChild(darkModeToggle);

    const body = document.body;

    // Check for saved theme preference and apply it
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; // Sun icon for light mode
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️'; // Switch to sun icon for light mode
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeToggle.textContent = '🌙'; // Switch to moon icon for dark mode
            localStorage.setItem('theme', 'light');
        }
    });

    // Smooth scrolling to different sections
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Marquee effect for project cards
    const marquee = document.querySelector('.marquee');
    let isMoving = true;
    let scrollAmount = 1; // Change this to increase/decrease speed

    function moveMarquee() {
        if (isMoving) {
            marquee.scrollLeft += scrollAmount;
        }
    }

    let marqueeInterval = setInterval(moveMarquee, 30);

    marquee.addEventListener('mouseover', () => {
        isMoving = false;
    });

    marquee.addEventListener('mouseout', () => {
        isMoving = true;
    });

    // Handle "Reach out to me" button click
    const reachOutButton = document.getElementById('b-button');
    reachOutButton.addEventListener('click', function() {
        alert('Thanks for reaching out! I will get back to you soon.');
    });

    // Handle "See my Projects" button click
    const seeProjectsButton = document.getElementById('y2-button');
    seeProjectsButton.addEventListener('click', function() {
        window.location.href = 'work.html';  // Redirect to work page
    });
});
