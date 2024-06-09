document.addEventListener('DOMContentLoaded', function(){

    var resultado = document.getElementById('resultado')
    let formulario = document.getElementById('formulario')
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let dataList = document.getElementById('dataList')
    let legenda = document.getElementById('legenda')


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    calcularConta()
    salvarLocalStorage()

})

function salvarLocalStorage(){
    let potenciasClientes = JSON.parse(localStorage.getItem('data')) || []

    let data ={
        nome: nome.value,
        email: email.value,
        valorConta: valorConta.value,
        resultado: resultado.value
    }
    potenciasClientes.push(data)

    localStorage.setItem('data', JSON.stringify(potenciasClientes))
    
    alert('Dados salvos com sucesso')

    
}


function calcularConta(){
    let conta = document.getElementById('valorConta')
    let valorConta = Number(conta.value)
    let total = valorConta * 26
    console.log(valorConta)
    console.log(resultado)

resultado.removeAttribute('hidden')
legenda.removeAttribute('hidden')
resultado.value = `O investimento será de R$ ${total.toFixed(2)}`
}



})

function displayData() {
    let data = JSON.parse(localStorage.getItem('data')) || []

    dataList.innerHTML = ''

    data.forEach(item => {
        const li = document.createElement('li')
        li.textContent = `Nome: ${item.nome}, Email: ${item.email}, Valor da Conta: ${item.valorConta}, Resultado: ${item.resultado}`
        dataList.appendChild(li)
    });
}

function clearData() {
    localStorage.clear()
    alert('Todos os dados foram excluídos do LocalStorage')
    dataList.innerHTML = ''
}
