document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Verifica se o usuário já tem um tema salvo no navegador
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        toggleButton.textContent = "🌙 Modo Escuro";
    } else {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️ Modo Claro";
    }

    // Alternar entre os temas
    toggleButton.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            body.classList.replace("dark-mode", "light-mode");
            toggleButton.textContent = "🌙 Modo Escuro";
            localStorage.setItem("theme", "light"); // Salvar escolha do usuário
        } else {
            body.classList.replace("light-mode", "dark-mode");
            toggleButton.textContent = "☀️ Modo Claro";
            localStorage.setItem("theme", "dark");
        }
    });
});
