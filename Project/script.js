// Initialize Typed.js for dynamic text animation
const options = {
    strings: ["Frontend Developer", "Web Enthusiast", "Tech Explorer"], // Add more strings as needed
    typeSpeed: 50, // Speed of typing
    backSpeed: 30, // Speed of backspacing
    backDelay: 1000, // Delay before starting to backspace
    loop: true, // Loop the animation
    cursorChar: '|', // Custom cursor character
};

// Create a new Typed instance
const typed = new Typed('.text', options);

// Toggle navbar for mobile view
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the active class on navbar
});

// Close navbar when clicking outside
window.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove('active'); // Remove active class if clicked outside
    }
});
