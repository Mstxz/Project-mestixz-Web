window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const section3 = document.getElementById('games'); // Assuming you have an element with id "section-3"
    
    // Get the top offset of Section 3
    const section3Top = section3.offsetTop;

    // Change background if scroll position is greater than or equal to the top of Section 3
    if (scrollPosition >= section3Top) {
        document.body.style.backgroundImage = 'linear-gradient(rgba(10, 10, 10, 0.2), rgba(10, 10, 10, 1)), url("https://i.pinimg.com/1200x/41/5b/9c/415b9c7f0c3eec0b328b53be94b1fc6c.jpg")';
    } else {
        document.body.style.backgroundImage = 'linear-gradient(rgba(10, 10, 10, 0.2), rgba(10, 10, 10, 1)), url("https://i.pinimg.com/originals/dc/03/d6/dc03d6e820f9ade4dd39a32a36fa23ba.jpg")';
    }
});
