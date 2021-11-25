/* da para acessar por:
Tag: getElementByTagName()
Id: getElementById()
Nome getElementsByName()
Classe: getElementsByClassName()
seletor: querySelector()
*/

/* declarando as variáveis */
let nome = window.document.getElementById('nome');   /* acessando o nome pelo id = nome */
let email = window.document.querySelector('#email');
let assunto = window.document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa');


nome.style.width = '100%';
email.style.width = '100%';

function validaNome(){
    let txtNome = document.querySelector('#txtNome');   /*peguei a div criada no html*/
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido';
        txtNome.style.color = 'red';  /*pode colocar hexadecimal também*/
    }else{
        txtNome.innerHTML = 'Nome válido';
        txtNome.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    /* se na parte do email o usuário não colocou o '@' ele retorna um erro */
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){    
        txtEmail.innerHTML = 'E-mail inválido';
        txtEmail.style.color = 'red';
    }else{
        txtEmail.innerHTML = 'E-mail válido';
        txtEmail.style.color = 'green';
        emailOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto');
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Você atingiu o limite máximo de caracteres';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
    }else{
        txtAssunto.style.display = 'none';
        assuntoOk = true;
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!');
    }else{
        alert('Preencha o formulário corretamente antes de enviar');
    }
}

function mapaZoom(){
    mapa.style.width = '800px';
    mapa.style.height = '600px';
}

function mapaNormal(){
    mapa.style.width = '450px';
    mapa.style.height = '250px';
}
