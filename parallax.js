//setting a function with three parts : element, distance and speed
/*  
function parallax(element, distance, speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY($(distance * speed)px)`;
}

window.addEventListener("scroll",function() {
    parallax("header", window.scrollY, 1);
    parallax(".ballons", window.scrollY, 0.8);
    parallax(".dance", window.scrollY, 0.4);
    parallax(".bell", window.scrollY, 0.6);
});

*/

const parallax = document.getElementById("parallax");   

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
});



