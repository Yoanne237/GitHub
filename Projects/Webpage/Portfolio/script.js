document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.9)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const text = "Hi, I'm Yoanna Fopa Macheu👋";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

