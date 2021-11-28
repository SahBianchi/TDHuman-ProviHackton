// 1

// login
// vincular no botão, colocando onclick="logar()"

function logar(){
    // define variáveis pegando os campos(id) do input, definido no html
    
    // email input e label
    let email = document.querySelector('#email')
    let emailLabel = document.querySelector('#emailLabel')
    // senha input e label
    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')
    // mensagem de erro de login, caso queira inserir
    let errorMsg = document.querySelector('#msgError')
    
    let userList = []
    
    let userValid = {
      email: '',
      senha: ''
    }
    // faz o parse para transformar json em js
    userList = JSON.parse(localStorage.getItem('userList'))

    // validação
    userList.forEach((item) => {
      if(email.value == item.emailCad && senha.value == item.senhaCad){
         
        userValid = {
           email: item.emailCad,
           senha: item.senhaCad
         }
        
      }
    })
     
    if(email.value == userValid.email && senha.value == userValid.senha){
    // vai para outra página como logado
      window.location.href = ''
      
    //cria um token de validação para o user
      let mathRandom = Math.random().toString(16).substr(2)
      let token = mathRandom + mathRandom 
      
    //   anexa o token ao login
      localStorage.setItem('token', token)
    //   mais sobre isso na 2-main.js
      localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
      emailLabel.setAttribute('style', 'color: red')
      email.setAttribute('style', 'border-color: red')
      senhaLabel.setAttribute('style', 'color: red')
      senha.setAttribute('style', 'border-color: red')
      errorMsg.setAttribute('style', 'display: block')
      errorMsg.innerHTML = 'Usuário ou senha incorretos'
      email.focus()
    }
}

// 2

// // no inicio da página
// if(localStorage.getItem('token') == null){
//     alert('Você precisa estar logado para acessar esta página')
// }

// colocar no botão de sair
function sair(){
    localStorage.removeItem('token')
    // volta para a tela de login
    window.location.href = 'login.html'
}



// 3

// function para dar funcionalidade ao "olhinho" da senha
// exemplo:

let btn = document.querySelector('#verSenha')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

/* <div id='msgError'></div> */

// #msgError{
//     text-align: center;
//     color: #ff0000;
//     background-color: #ffbbbb;
//     padding: 10px;
//     border-radius: 4px;
//     display: none;
//   }