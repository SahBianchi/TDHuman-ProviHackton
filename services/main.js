// 1
// Não temos uma página inicial, se não a de login, mas caso tenhamos, está function seria útil para testar autenticação
// esta function redireciona o usuario para a pagina de login caso não esteja autenticado.
// minha ideia é anexar ao botão de login no index.html, para redirecionar automaticamente.

// exemplo: Se colocarmos na index.html, ele vai redirecionar automaticamente para a login.html


function logado(){
    var logado = false;

    if(localStorage.getItem("acesso") == "true"){
        logado = true;
    }
    if(logado != true){
        alert("Você não está autenticado");
        window.location.href="login.html";
    }
}

// 2
// na função logar em logar.js, é trazido este array
let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector('#logado')
// logado.innerHTML = `Olá ${userLogado.email}`

if(localStorage.getItem('token') == null){
    alert('Acesso negado. Por favor, efetue o login.')
}