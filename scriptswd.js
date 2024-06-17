// script.js

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function() {
    // Find the button element
    const button = document.getElementById("clickMeButton");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // When the button is clicked, alert a message
        alert("You clicked the button!");

        // Change the background color of the header randomly
        const header = document.querySelector("header");
        const randomColor = getRandomColor();
        header.style.backgroundColor = randomColor;

        // Change the text color of the navigation links randomly
        const navLinks = document.querySelectorAll("nav a");
        navLinks.forEach(link => {
            const randomColor = getRandomColor();
            link.style.color = randomColor;
        });

        // Toggle visibility of the image and paragraph
        const image = document.querySelector("img");
        const paragraph = document.querySelector("p");
        image.classList.toggle("hidden");
        paragraph.classList.toggle("hidden");
    });

    // Function to generate a random color in hex format
    function getRandomColor() {
        return "#" + Math.floor(Math.random()*16777215).toString(16);
    }
});
