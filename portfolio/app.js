document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the visibility of the "About Me" section
    function toggleAboutSection() {
        const aboutSection = document.querySelector('.about');
        aboutSection.classList.toggle('hidden');
    }

    // Attach the function to a button click event
    const toggleAboutButton = document.querySelector('.about-text button');
    toggleAboutButton.addEventListener('click', toggleAboutSection);
});