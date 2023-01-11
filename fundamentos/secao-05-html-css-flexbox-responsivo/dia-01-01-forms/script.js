//pegando elementos
const pegandoEnviar = document.getElementById('botao-enviar');
const pegandoInputs = document.querySelectorAll('input');
const pegandoBotaoLimpar = document.getElementById('botao-limpar');
const pegandoCondicao = document.querySelector('#condicao');

//funcoes

const usandoPreventDefault = () => {
    pegandoEnviar.addEventListener('click', (event) => {
        event.preventDefault();
        let nomeCompleto1 = document.getElementById('name').value;
        console.log(`${nomeCompleto1}`);
        checandoQtdCaracteres();
    })
}

const botaoLimparInput = () => {
    pegandoBotaoLimpar.addEventListener('click', () => {
        for (let index = 0; index < pegandoInputs.length; index += 1){
            pegandoInputs[index] = '';
        }
    })
}

const habilitandoBotaoEnviar = () => {
    pegandoCondicao.addEventListener('click', () => {
        pegandoEnviar.disabled = !pegandoCondicao.checked;
    })
}


const checandoQtdCaracteres = () => {
    const email = document.getElementById('e-mail-').value.length;
    const emaill = email > 10 && email < 50;
  
    const name = document.getElementById('name').value.length;
    const nomeCompleto = name > 10 && name < 40;
  
    const reason = document.getElementById('message').value.length;
    const caracteresTextArea = reason < 500;


    if (nomeCompleto && emaill && caracteresTextArea){
        window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    } else {
        window.alert('Dados inválidos')
    }
}

//chamando funcoes

window.onload = () => {
    usandoPreventDefault();
    botaoLimparInput();
    habilitandoBotaoEnviar();
}