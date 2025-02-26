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
            `${saudacao}`
        ],
        typeSpeed: 50, // Velocidade de digitação em milissegundos
        showCursor: true, // Mostra o cursor piscando
        cursorChar: '|' // Caractere usado como cursor
    });
}
  window.onload = mout()
  function proj1() {
      if (window.currentTyped) {
          window.currentTyped.destroy();
      }
      window.currentTyped = new Typed("#typing", {
          strings: [
              `Esses são meus projetos <br> de design gráfico.`
          ],
          typeSpeed: 50,
          showCursor: true,
          cursorChar: '|',
          onComplete: function() {
              setTimeout(() => {
                  window.currentTyped.destroy();
                  mout();
              }, 1500);
          }
      });
  }
  function proj2() {
    if (window.currentTyped) {
        window.currentTyped.destroy();
    }
    window.currentTyped = new Typed("#typing", {
        strings: [
            `Esses são meus projetos <br> como desenvolvedor.`
        ],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: '|',
        onComplete: function() {
            setTimeout(() => {
                window.currentTyped.destroy();
                mout();
            }, 1500);
        }
    });
}