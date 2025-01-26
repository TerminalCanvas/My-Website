document.addEventListener("DOMContentLoaded", function () {
  console.log("Website is loaded and ready!");
});

// Create a <link> element
const link = document.createElement('link');

// Set attributes for the Google Font
link.href = "https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap"; // Replace with your font URL
link.rel = 'stylesheet';

// Append the <link> element to the <head>
document.head.appendChild(link);

// Set the font-family globally for the body
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.fontFamily = "'Fira Sans', serif"; // Replace with your chosen font
});

