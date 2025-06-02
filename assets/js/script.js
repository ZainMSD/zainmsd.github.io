document.addEventListener("DOMContentLoaded", function () {
    let savedColor = localStorage.getItem("selectedColor");
    if (savedColor) {
        document.documentElement.style.setProperty("--white", savedColor);
    }
});

document.getElementById("colorToggle").addEventListener("click", function () {
    let root = document.documentElement;
    let currentColor = getComputedStyle(root).getPropertyValue("--white").trim();
    let newColor = currentColor === "#faf2e4" ? "#ffffff" : "#faf2e4";

    root.style.setProperty("--white", newColor);
    localStorage.setItem("selectedColor", newColor);
});

document.querySelectorAll(".color").forEach((color, index) => {
    color.addEventListener("click", function () {
        let selectedColor = this.getAttribute("data-color");

        if (index === 0) {
            selectedColor = "#FFFFFF";
        }

        document.documentElement.style.setProperty("--white", selectedColor);
        localStorage.setItem("selectedColor", selectedColor);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20, // Ajuste selon le besoin
                behavior: "smooth"
            });
        }
    });
});
