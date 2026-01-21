document.addEventListener("DOMContentLoaded", () => {
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
                const targetSelector = scrollMap[id];
                const targetSection = document.querySelector(targetSelector);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        }
    });

    // fetch footer
    fetch('footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });


    // slogan
    const sloganSection = document.querySelector(".slogan-section");
    if (sloganSection) {
        const images = sloganSection.querySelectorAll(".cat-img");
        let index = 0;
        images.forEach((img, i) => img.style.display = i === 0 ? "block" : "none");

        setInterval(() => {
            images[index].style.display = "none";
            index = (index + 1) % images.length;
            images[index].style.display = "block";
        }, 1100);
    }
});