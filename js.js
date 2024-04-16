function atualizarDiasRestantes() {
    const dataAtual = new Date();
    const dataPrevistaColheita = new Date('2024-07-16');
    let diferencaTempo = dataPrevistaColheita - dataAtual;

    // Verificar se a colheita já aconteceu
    if (diferencaTempo < 0) {
        diferencaTempo = 0;
    }

    const diasRestantes = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

    document.getElementById('dias-restantes').innerHTML = `<strong>Dias restantes:</strong> ${diasRestantes} dias`;
}

atualizarDiasRestantes();

setInterval(atualizarDiasRestantes, 1000 * 60 * 60 * 24);



function atualizarDiasRestantesTomate() {
    const dataAtual = new Date();
    const dataPrevistaColheita = new Date('2024-05-14');
    let diferencaTempo = dataPrevistaColheita - dataAtual;

    // Verificar se a colheita já aconteceu
    if (diferencaTempo < 0) {
        diferencaTempo = 0;
    }

    const diasRestantes = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

    document.getElementById('dias-restantes1').innerHTML = `<strong>Dias restantes:</strong> ${diasRestantes} dias`;
}

atualizarDiasRestantesTomate();

setInterval(atualizarDiasRestantesTomate, 1000 * 60 * 60 * 24); 



function atualizarDiasRestantesBatata() {
    const dataAtual = new Date();
    const dataPrevistaColheita = new Date('2024-07-16');
    let diferencaTempo = dataPrevistaColheita - dataAtual;

    // Verificar se a colheita já aconteceu
    if (diferencaTempo < 0) {
        diferencaTempo = 0;
    }

    const diasRestantes = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

    document.getElementById('dias-restantes2').innerHTML = `<strong>Dias restantes:</strong> ${diasRestantes} dias`;
}

atualizarDiasRestantesBatata();

setInterval(atualizarDiasRestantesBatata, 1000 * 60 * 60 * 24); 


function atualizarDiasRestantesCenoura() {
    const dataAtual = new Date();
    const dataPrevistaColheita = new Date('2024-05-30');
    let diferencaTempo = dataPrevistaColheita - dataAtual;

    // Verificar se a colheita já aconteceu
    if (diferencaTempo < 0) {
        diferencaTempo = 0;
    }

    const diasRestantes = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

    document.getElementById('dias-restantes3').innerHTML = `<strong>Dias restantes:</strong> ${diasRestantes} dias`;
}

atualizarDiasRestantesCenoura();

setInterval(atualizarDiasRestantesCenoura, 1000 * 60 * 60 * 24); 