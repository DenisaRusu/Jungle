let text = document.getElementById("text");
let miscare1 = document.getElementById("miscare1");
let miscare2 = document.getElementById("miscare2");
let miscare3 = document.getElementById("miscare3");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    
    text.style.marginTop = value * 1.8 + "px";
    miscare3.style.marginLeft = value * -0.5 + "px";
    // miscare3.style.marginTop = value * 1.5 + "px";
    miscare1.style.marginLeft = value * 0.5 + "px";
});