document.addEventListener("DOMContentLoaded", function () {
    // Navegação responsiva
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle nav
            nav.classList.toggle('active');
            
            // Animar links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger animation
            burger.classList.toggle('toggle');
        });
    }
    
    // Navegação suave ao clicar nos links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Fecha o menu mobile se estiver aberto
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                burger.classList.remove('toggle');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animações ao scroll
    const fadeInElements = document.querySelectorAll('.project-card, .skill-item, .timeline-item, .contact-item');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeInElements.forEach(element => {
        element.classList.add('fade-out');
        fadeInObserver.observe(element);
    });

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você adicionaria a lógica para enviar o formulário
            // Por enquanto, apenas simularemos uma resposta
            
            const formElements = contactForm.elements;
            let isValid = true;
            
            // Validação básica
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].required && !formElements[i].value.trim()) {
                    formElements[i].classList.add('error');
                    isValid = false;
                } else if (formElements[i].type === 'email' && formElements[i].value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(formElements[i].value)) {
                        formElements[i].classList.add('error');
                        isValid = false;
                    } else {
                        formElements[i].classList.remove('error');
                    }
                } else {
                    formElements[i].classList.remove('error');
                }
            }
            
            if (isValid) {
                // Simulação de envio
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
                
                setTimeout(() => {
                    contactForm.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i><h3>Mensagem Enviada!</h3><p>Obrigado pelo contato. Responderei o mais breve possível.</p></div>';
                }, 1500);
            }
        });
    }

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
