document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    const project = projects.find(p => p.id === projectId);

    if (!project) {
        document.querySelector('.project-detail-container').innerHTML = "<p>Project not found.</p>";
        return;
    }

    const imagesDiv = document.getElementById("project-images");
    project.images.forEach((src, i) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "project-img" + (i === 0 ? " active" : "");
        imagesDiv.insertBefore(img, imagesDiv.querySelector(".prev"));
    });

    const infoDiv = document.getElementById("project-info");
    infoDiv.innerHTML = `
        <h2 class="project-title">${project.title}</h2>
        <p class="project-category">${project.category}</p>
        <div class="description-box">
            <h3 class="description-header">Description</h3>
            <p class="description-text">${project.description}</p>
        </div>
        ${project.github ? `<a href="${project.github}" class="view--btn"><i class="fa-brands fa-github"></i> View on Github</a>` : ""}
    `;

    const detailsDiv = document.getElementById("project-details");
    detailsDiv.innerHTML = `
        <div class="tools-section">
            <h2 class="section-title">Project Details</h2>
            <h3 class="tools-subtitle">Highlights / Features</h3>
            <ul class="project-highlights">
                ${project.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
            <div class="tools-grid">
                ${project.tools.map(t => `<div class="project-tool">${t}</div>`).join('')}
            </div>
        </div>
    `;
});

// Image slider
document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("img-btn")) return;

    const container = e.target.closest(".project-image");
    if (!container) return;

    const images = container.querySelectorAll(".project-img");
    let index = parseInt(container.dataset.index) || 0;

    index = e.target.classList.contains("next")
        ? (index + 1) % images.length
        : (index - 1 + images.length) % images.length;

    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");

    container.dataset.index = index;
});