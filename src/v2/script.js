document.addEventListener('DOMContentLoaded', function(){

    let resultado = document.getElementById('resultado')
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
        resultado: resultado.value,
        contato: false
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
        const checkbox = document.createElement('button')
        checkbox.innerText = 'Contato'
        checkbox.id = 'contato'
        checkbox.style.backgroundColor = 'green'
        checkbox.style.width = '100px'

        if (item.contato === false){
            checkbox.style.backgroundColor = 'red'
        }

        else{
            checkbox.style.backgroundColor = 'green'
        }

        li.textContent = `Nome: ${item.nome}, Email: ${item.email}, Valor da Conta: R$ ${item.valorConta}, Resultado: ${item.resultado}, Cliente Contactado: ${item.contato}`
        dataList.appendChild(li)
        dataList.appendChild(checkbox)
        
        checkbox.addEventListener('click', function(){
            if(item.contato === false){
                item.contato = true
             
                alert('Cliente contactado com sucesso')
            }
            else{
                item.contato = false
                alert('Cliente desmarcado como contactado')
            
            }
            
            localStorage.setItem('data', JSON.stringify(data));
            window.location.reload()
            
            
    }
    )
            
    })
    
    }
function clearData() {
    localStorage.clear()
    alert('Todos os dados foram excluídos do LocalStorage')
    dataList.innerHTML = ''
}
