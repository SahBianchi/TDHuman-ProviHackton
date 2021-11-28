// 1
// senha e senha de confirmação de cadastro
// famoso olhinho da senha, para ver a string
let btn = document.querySelector('#verSenha')
let btnConfirmarSenha = document.querySelector('#verSenha2')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirmarSenha.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha2')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

// 2
// adicionar onClick ao cadastro e definir esta função à ela

// email input e label
let email = document.querySelector('#email')
let emailLabel = document.querySelector('#emailLabel')
let validEmail = false
// senha input e label
let senha = document.querySelector('#senha')
let senhaLabel = document.querySelector('#senhaLabel')
let validSenha = false

let confirmaSenha = document.querySelector('#confirmaSenha')
let confirmaSenhaLabel = document.querySelector('#confirmaSenhaLabel')
let validConfirmSenha = false

email.addEventListener('keyup', () =>{
    if(email.value.length <= 2){
        emailLabel.setAttribute('style', 'color: red')
        emailLabel.innerHTML = 'Email *Insira, no mínimo, 3 caractéres'
        email.setAttribute('style','border-color: red')
        validEmail = false
    }else{
        emailLabel.setAttribute('style', 'color: green')
        emailLabel.innerHTML = 'Email'
        email.setAttribute('style','border-color: green')
        validEmail = true
    }
})

senha.addEventListener('keyup', () =>{
    if(senha.value.length <= 5){
        senhaLabel.setAttribute('style', 'color: red')
        senhaLabel.innerHTML = 'Senha *Insira, no mínimo, 6 caractéres'
        senha.setAttribute('style','border-color: red')
        validSenha = false
    }else{
        senhaLabel.setAttribute('style', 'color: green')
        senhaLabel.innerHTML = 'Senha'
        senha.setAttribute('style','border-color: green')
        validSenha = true
    }
})

confirmaSenha.addEventListener('keyup', () =>{
    if(senha.value != confirmaSenha.value){
        confirmaSenhaLabel.setAttribute('style', 'color: red')
        confirmaSenhaLabel.innerHTML = 'Confirmar Senha *As senhas não conferem.'
        confirmaSenha.setAttribute('style','border-color: red')
        validConfirmSenha = false
    }else{
        confirmaSenhaLabel.setAttribute('style', 'color: green')
        confirmaSenhaLabel.innerHTML = 'Confirmar Senha'
        confirmaSenha.setAttribute('style','border-color: green')
        validConfirmSenha = true
    }
})

function cadastrar(){
    if(validEmail && validSenha && validConfirmSenha){
        let userList = JSON.parse(localStorage.getItem('userList') || '[]')
        
        // adiciona os valores ao aray que ficará no localStorage 
        userList.push({
            email: email.value,
            senha: senha.value
        })
        localStorage.setItem('userList', JSON.stringify(userList))

        // os comentários abaixo são exemplos para caso queiram definir uma mensagem de erro/sucesso ao cadastrar

        // successMsg.setAttribute('style', 'display:block')
        // successMsg.innerHTML = '<strong>Cadastrado com sucesso...</strong>'
        // errorMsg.setAttribute('style', 'display:email')
        // errorMsg.innerHTML = ''

        setTimeout(()=>{
            window.location.href='login.html'
        }, 3000)
    }else{
        // errorMsg.setAttribute('style','display: block')
        // errorMsg.innerHTML= '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    }
}
