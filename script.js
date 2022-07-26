
let navScroll = document.querySelector('li');

navScroll.addEventListener('click', function() {
    // onclick home
    let home = document.getElementById("home");
    home.scrollIntoView();
    // onclick planets
    let planets = document.getElementById("contents");
    planets.scrollIntoView();
    // onclick about
    let about = document.getElementById("about");
    about.scrollIntoView();
})
