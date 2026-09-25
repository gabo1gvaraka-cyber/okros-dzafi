const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


document.getElementById("year").textContent = new Date().getFullYear();


const revealElements = document.querySelectorAll(
    ".service-card, .about-content, .about-visual, .contact-card, .map"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("hidden-element");

    observer.observe(element);

});


const style = document.createElement("style");

style.innerHTML = `

    .hidden-element {
        opacity: 0;
        transform: translateY(25px);
        transition:
            opacity 0.7s ease,
            transform 0.7s ease;
    }

    .hidden-element.show {
        opacity: 1;
        transform: translateY(0);
    }

`;

document.head.appendChild(style);