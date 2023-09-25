
function iniciarInteracao() {
    let nome = window.prompt('Insira seu nome:')
    let res = window.document.getElementById('resultado')
    
    res.innerHTML = `<p>Olá, <strong>${nome}</strong>! Bem vindo a Playster Entertainment!`
}

