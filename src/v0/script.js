document.addEventListener('DOMContentLoaded', function(){

    var resultado = document.getElementById('resultado')
    let formulario = document.getElementById('formulario')
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    calcularConta()
    salvarLocalStorage()

})

function salvarLocalStorage(){
    let data ={
        nome: nome.value,
        email: email.value,
        valorConta: resultado.value,
        resultado: resultado.value
    }

    localStorage.setItem('data', JSON.stringify(data))
    
    alert('Dados salvos com sucesso')

    
}

function teste(){
    alert('teste')
}
function calcularConta(){
    let conta = document.getElementById('valorConta')
    let valorConta = Number(conta.value)
    let total = valorConta * 26
    console.log(valorConta)
    console.log(resultado)


resultado.value = `O investimento será de R$ ${total.toFixed(2)}`
}

})
