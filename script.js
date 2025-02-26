document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle functionality
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleButton.textContent = "🌙 Modo Escuro";
    } else {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Modo Claro";
    }

    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.replace("dark-mode", "light-mode");
            toggleButton.textContent = "🌙 Modo Escuro";
            localStorage.setItem("theme", "light");
        } else {
            body.classList.replace("light-mode", "dark-mode");
            toggleButton.textContent = "☀️ Modo Claro";
            localStorage.setItem("theme", "dark");
        }
    });

    // Project details and selector functionality
    const projetos = document.querySelectorAll(".projeto");
    const projetoSelector = document.getElementById("projeto-selector");
    const projetoContents = document.querySelectorAll(".projeto-content");

    // Hide all project contents initially
    projetoContents.forEach(content => {
        content.style.display = "none";
    });

    projetoSelector.addEventListener("click", function(e) {
        e.stopPropagation();
    });

    projetoSelector.addEventListener("change", function() {
        projetoContents.forEach(content => {
            content.style.display = "none";
            content.classList.remove("active");
        });

        const selectedValue = this.value;
        if (selectedValue) {
            const selectedContent = document.getElementById(selectedValue);
            if (selectedContent) {
                selectedContent.style.display = "block";
                selectedContent.classList.add("active");
            }
        }
    });

    projetos.forEach(projeto => {
        projeto.addEventListener("click", function (e) {
            // Don't close if clicking game elements
            if (e.target.matches('.cell, .button, #game-container, .board')) {
                return;
            }
            
            const detalhes = this.querySelector(".detalhes");
            if (detalhes.style.display === "block") {
                detalhes.style.display = "none";
            } else {
                detalhes.style.display = "block";
            }
        });
    });
});
