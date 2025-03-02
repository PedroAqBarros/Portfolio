function mout() {
    if (window.currentTyped) {
        window.currentTyped.destroy();
    }
    
    const hora = new Date().getHours();
    let saudacao = '';
    
    if (hora >= 5 && hora < 12) {
        saudacao = 'Bom dia!';
    } else if (hora >= 12 && hora < 18) {
        saudacao = 'Boa tarde!';
    } else {
        saudacao = 'Boa noite!';
    }
    
    window.currentTyped = new Typed("#typing", {
        strings: [
            `${saudacao}`,
            "Me chamo Pedro Aquino",
            "Estudante de Programação",
            "Aprendendo Desenvolvimento Web",
            "Entusiasta de Tecnologia",
            "Em busca de conhecimento"
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

window.onload = mout;

function proj1() {
    if (window.currentTyped) {
        window.currentTyped.destroy();
    }
    window.currentTyped = new Typed("#typing", {
        strings: [
            `Projeto de estudo em JavaScript.<br>Praticando lógica de programação e DOM.`
        ],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        onComplete: function() {
            setTimeout(() => {
                window.currentTyped.destroy();
                mout();
            }, 3000);
        }
    });
}

function proj2() {
    if (window.currentTyped) {
        window.currentTyped.destroy();
    }
    window.currentTyped = new Typed("#typing", {
        strings: [
            `Aprender fazendo é o melhor caminho.<br>Este portfolio é parte da minha jornada.`
        ],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        onComplete: function() {
            setTimeout(() => {
                window.currentTyped.destroy();
                mout();
            }, 3000);
        }
    });
}