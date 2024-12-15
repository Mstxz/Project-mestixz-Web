window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Get all sections on the page
    const sections = document.querySelectorAll('section');

    // Check if there are at least 3 sections
    if (sections.length >= 3) {
        const section3 = sections[2]; // Third section (index starts at 0)
        const section3Top = section3.offsetTop;

        console.log(`Scroll Position: ${scrollPosition}, Section 3 Top: ${section3Top}`);

        // Change background if scroll position is greater than or equal to the top of Section 3
        if (scrollPosition >= section3Top) {
            document.body.style.backgroundImage = 'linear-gradient(rgba(10, 10, 10, 0.2), rgba(10, 10, 10, 1)), url("./image/Mestixz_MAP.jpg")';
        } else {
            document.body.style.backgroundImage = 'linear-gradient(rgba(10, 10, 10, 0.2), rgba(10, 10, 10, 1)), url("https://i.pinimg.com/1200x/1c/53/d3/1c53d3383cc64042e3308d6abba7753b.jpg")';
        }
    }
});
