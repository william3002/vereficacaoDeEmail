function campoVazio() {
    let Email = document.getElementById('inputEmail').value
    let errorSpan = document.getElementById('error')
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailUser = document.getElementById('emailUser')

    emailUser.innerText = Email
    
    if (Email === "") {
        errorSpan.innerText = "Por favor, prencha este campo de email"
        errorSpan.style.fontSize = 'small'
        errorSpan.style.paddingLeft = '40px'
        errorSpan.style.color = 'red'

        document.getElementById('mensagem-sucesso').style.display = 'none';

        return;
    }

    if (!emailRegex.test(Email)) {
        errorSpan.innerText = "Por favor, Insira e-mail válido.";
        errorSpan.style.fontSize = 'small';
        errorSpan.style.paddingLeft = '40px';
        errorSpan.style.color = 'red';
    } else {
        document.getElementById('mensagem-sucesso').style.display = 'block';
        document.getElementById('principal').style.display = 'none';
    }

}

function btnFechaJanela() {
    let principal = document.getElementById('principal')
    let mensagemSucesso = document.getElementById('mensagem-sucesso')
    if (principal && mensagemSucesso) {
        principal.style.display = "block"
        mensagemSucesso.style.display = "none"
    }
}



