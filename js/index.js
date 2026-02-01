document.addEventListener("DOMContentLoaded", () => {
    // Fade
    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const appearOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));

    const scrollMap = {
        homeBtn: ".home",     
        aboutBtn: ".about", 
        projectsBtn: ".projects", 
        contactBtn: ".footer" 
    };

    Object.keys(scrollMap).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener("click", (e) => {
                e.preventDefault(); 
                const targetSection = document.querySelector(scrollMap[id]);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        }
    });

    // Footer
    fetch('footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    // Slogan
    const sloganSection = document.querySelector(".slogan-section");
    if (sloganSection) {
        const images = sloganSection.querySelectorAll(".cat-img");
        let index = 0;

        images.forEach((img, i) => {
            img.style.display = i === 0 ? "block" : "none";
        });

        setInterval(() => {
            images[index].style.display = "none";
            index = (index + 1) % images.length;
            images[index].style.display = "block";
        }, 1100);
    }

    // Filter Projects
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".projects-card");

    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const filter = button.dataset.filter;

                projectCards.forEach(card => {
                    if (filter === "all" || card.classList.contains(filter)) {
                        card.classList.remove("hidden");
                    } else {
                        card.classList.add("hidden");
                    }
                });
            });
        });
    }
});
