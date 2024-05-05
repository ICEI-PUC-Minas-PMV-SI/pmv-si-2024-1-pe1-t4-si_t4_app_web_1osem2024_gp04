document.addEventListener('DOMContentLoaded', function(){

    var resultado = document.getElementById('resultado')
    let formulario = document.getElementById('formulario')


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    calcularConta()

})


function calcularConta(){
    let conta = document.getElementById('valorConta')
    let valorConta = Number(conta.value)
    let total = valorConta * 26
    console.log(valorConta)
    console.log(resultado)


resultado.value = `O investimento será de R$ ${total.toFixed(2)}`
}

})
