# Programação de Funcionalidades

<br>

## [RF-001] Permitir que o usuário faça cotações a respeito dos custos de instalação em seu domicílio

Função a qual recebe os valores digitados pelo usuários em um formulário html e renderiza o cálcalo na página para usuário

~~~javascript
let legenda = document.getElementById('legenda')
let resultado = document.getElementById('resultado')

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

~~~

~~~html

<div class="cont">
        <div class="box">
               <h2>Calculadora de Energia Solar</h2>
               <img src="solar-panel.png" alt="">
               <form action="" id="formulario">
                <div class="mb-3">
                    <label for="" class="form-label">Digite seu nome</label>
                    <input type="text" name="nome" id="nome" class="form-control" placeholder="">
                    <label for="" class="form-label">Informe seu e-mail</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="exemplo@contato.com.br">
                    <label for="" class="form-label">Qual o valor da sua conta de energia?</label>
                    <input type="text" class="form-control" id="valorConta", placeholder="R$ 0,00">
                   
                    
                </div>

                <button type="submit" class="" onclick="calcularConta()">Calcular</button>
                <br>
                    <label for="" class="form-label" hidden id="legenda">Investimento Necessário para zerar a conta!</label>
                    <input type="text" name="" id="resultado"  class="form-control" disabled hidden>
               
               </form>
            </div>
        </div>
    </div>

~~~

<br>

## [RF-002] Permitir o cálculo da pegada de carbono de acordo com o consumo de uma quantidade de kWh

**Calculadora de Pegada de Carbono**

Permite calcular a quantidade de emissão de carbono gerada na produção de uma determinada quantidade de energia elétrica, levando em consideração a sua fonte original de produção. Atendendo ao requisito funcional RF-003 qual seja, "permitir o cálculo da pegada de carbono de acordo com o consumo de uma quantidade de kWh".

[co2-script.js](..src/v2/co2-script.js)

~~~javascript
function calculateCO2() {
    var energyInput = document.getElementById("energyConsumption").value;

    if (energyInput === "" || isNaN(energyInput)) {
        alert("Por favor, digite um valor válido.");
        return;
    }

    var energyConsumption = parseFloat(energyInput);

    var coalEmission = energyConsumption * 1;
    var oilEmission = energyConsumption * 0.8;
    var gasEmission = energyConsumption * 0.5;
    var hydroEmission = energyConsumption * 0.1;

    document.getElementById("CO2results").innerHTML = 
        "<p>Se proveniente de carvão: " + coalEmission.toFixed(2) + " kg de CO².</p>" +
        "<p>Se proveniente de petróleo: " + oilEmission.toFixed(2) + " kg de CO².</p>" +
        "<p>Se proveniente de gás natural: " + gasEmission.toFixed(2) + " kg de CO².</p>" +
        "<p>Se proveniente de energia hidrelétrica: " + hydroEmission.toFixed(2) + " kg de CO².</p>";
}
~~~  

<br>

## [RF-003] Prover informações sobre os benefícios da instalação de energia solar para o meio-ambiente

A página de perguntas frequentes oferece estas informações.

[faq.html](..src/v2/faq.html)

~~~html

<!--Main -->
  <main class="container custom-background py-5">

    <div class="cont">
      <div class="box">
          <ul id = "acordeon">
              <h2>Perguntas Frequentes sobre Energia Solar e Meio Ambiente</h2>
              <BR></BR>
              <li>
                  <label for = "pergunta_1"><strong>Como a energia solar beneficia o meio ambiente?</strong> <span>&#x3e</span></label>
                  <input type = "radio" name = "acordeon" id = "pergunta_1" checked>
                  <div class = "resposta">
                      <p>
                          A energia solar é uma fonte de energia limpa e renovável. Sua geração não emite gases de efeito estufa, o que contribui para reduzir o impacto das mudanças climáticas. Além disso, a instalação de sistemas solares fotovoltaicos reduz a dependência de combustíveis fósseis, que são finitos e poluentes.
                      </p>
                  </div>
              </li>
              <li>
                  <label for = "pergunta_2"><strong>Qual é o impacto da energia solar na redução da poluição?</strong><span>&#x3e</span></label>
                  <input type = "radio" name = "acordeon" id = "pergunta_2" >
                  <div class = "resposta">
                      <p>
                          A geração de energia solar não produz poluentes atmosféricos, como dióxido de enxofre, óxidos de nitrogênio e partículas de fuligem, que são emitidos por usinas termelétricas e veículos movidos a combustíveis fósseis. Portanto, ao optar pela energia solar, contribuímos para reduzir a poluição do ar e melhorar a qualidade do ar que respiramos.
                      </p>
                  </div>
              </li>
              <li>
                  <label for = "pergunta_3"><strong>A energia solar ajuda a preservar os recursos naturais?</strong><span>&#x3e</span></label>
                  <input type = "radio" name = "acordeon" id = "pergunta_3" >
                  <div class = "resposta">
                      <p>
                          Sim, a energia solar contribui para a preservação dos recursos naturais. Ao utilizar a energia do sol para gerar eletricidade, reduzimos a necessidade de explorar e extrair recursos naturais, como carvão, petróleo e gás natural, que são não renováveis e causam danos ambientais significativos durante sua extração e queima.
                      </p>
                  </div>
              </li>
              <li>
                  <label for = "pergunta_4"><strong>A energia solar ajuda a proteger os ecossistemas?</strong><span>&#x3e</span></label>
                  <input type = "radio" name = "acordeon" id = "pergunta_4" >
                  <div class = "resposta">
                      <p>
                          Sim, a energia solar ajuda a proteger os ecossistemas ao reduzir a pressão sobre os recursos naturais e ao minimizar os impactos ambientais associados à geração de energia convencional, como a destruição de habitats naturais causada pela mineração de carvão e pela construção de represas hidrelétricas.
                      </p>
                  </div>
              </li>
              <li>
                  <label for = "pergunta_5"><strong>Quais são outros benefícios da energia solar para o meio ambiente?</strong><span>&#x3e</span></label>
                  <input type = "radio" name = "acordeon" id = "pergunta_5" >
                  <div class = "resposta">
                      <p>
                          Além dos benefícios mencionados, a energia solar também contribui para a conservação da água, uma vez que não requer água para sua operação, ao contrário das usinas termelétricas e hidrelétricas. Além disso, a energia solar é uma fonte de energia descentralizada, o que aumenta a resiliência do sistema elétrico e reduz a vulnerabilidade a falhas e interrupções.
                      </p>
                  </div>
              </li>
          </ul>                
      </div>
    </div>
    
  </main>

~~~

<br>

## [RF-004]	Prover informações sobre quais são os serviços de instalação disponíveis localmente

A página de serviços mostra uma lista de serviços de instalação de placas solares cadastrados no sistema (salvos em um arquivo JSON).
Um script lê o arquivo JSON com os cadastros e utiliza as informações para popular uma lista de cards (utilizando Bootstrap) que será exibida na página de serviços.

[servicos.js](..src/v2/servicos.js)

~~~javascript

// Função pra gerar cards dinamicamente
function createCards(numCards) {

    var cardContainer = document.getElementById("cardContainer");

    cardContainer.innerHTML = "";

    fetch('servicos.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })

        .then(data => {
            for (var i = 0; i < data.length; i++) {
                var card = document.createElement("div");
       
                card.innerHTML = `
                    <div class="card mb-3" style="width:100%;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src=${data[i].img_src} class="img-fluid rounded-start" alt="..." style="height: 100%;">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${data[i].name}</h5>
                                    <p class="card-text">Contato 1: ${data[i].number_1} <br> Contato 2: ${data[i].number_2} </p>
                                    <p class="card-text"><small class="text-body-secondary"><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">${data[i].website}</a></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                cardContainer.appendChild(card);
            }
        })
        
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

}

~~~

[servicos.html](..src/v2/servicos.html)

~~~html

<!--Main -->
  <main class="container custom-background py-5">

    <div class="container" id="box-1">
      <form class="p-4 p-md-5 border rounded-3 bgcolor-1" id="box-2">
          <h3 >Serviços de Instalação Disponíveis na Cidade de São Paulo</h3>
          <br>
          <div class="" id="cardContainer" style="width: 600px;" >
            <!-- Cards will be dynamically generated here -->
            <script> createCards(3); </script>
          </div>
      </form>
    </div>
    
  </main>

~~~

<br>

## [RF-005]	Permitir que o administrador colete dados dos usuários como nome, email e valor do consumo mensal de energia

Função que armazena no localstorage as informações inseridas pelo usuário no formulário de cotação

~~~javascript 

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

~~~

<br>

## [RF-006]	Permitir que os dados coletados dos usuários possam ser editados e atualizados

Função que permite visualização e manipulação dos dados salvos no localstorage

~~~javascript 

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

~~~

<br>

## [RF-007]	Permitir que os dados coletados dos usuários sejam apagados

~~~javascript

Função que permite deletar os dados do localstorage

function clearData() {
    localStorage.clear()
    alert('Todos os dados foram excluídos do LocalStorage')
    dataList.innerHTML = ''
}

~~~

<br>

## [RF-008]	Prover informações sobre os desenvolvedores do sistema

A página institucional apresenta o texto com informações sobre os alunos que elaboraram o projeto e sobre o orientador.

[institucional.html](../src/v2/institucional.html)

~~~html

<!--Main -->
  <main class="container custom-background py-5">

    <div class="container">
      <form class="p-4 p-md-5 border rounded-3 bgcolor-1">
        <div class="form-floating mb-3 text-center">
          <h2>Quem Somos</h2>
          <BR></BR>
          <div class="container text-start">
            <p>A Calculadora de Economia de Consumo de Energia via Uso de Placas Solares foi fundada no primeiro semestre de 2024 como parte de um projeto acadêmico para o curso de Sistemas de Informação da PUC-Minas.</p>
            <p>Nosso objetivo é fornecer uma ferramenta prática e eficiente para ajudar os usuários a calcular a economia de energia e os benefícios financeiros advindos do uso de placas solares.</p>
            <br>
            <p><b>Nossa Equipe</b></p>
            <p>Somos alunos da PUC Minas do primeiro semestre do curso de Sistemas de Informação. Nosso time é composto por indivíduos dedicados e apaixonados por tecnologia e sustentabilidade, trabalhando juntos para criar uma solução que promova o uso de energia renovável e contribua para um futuro mais sustentável.</p>
            <br>
            <p><b>Nossos Colaboradores:</b></p>
            <p>
              Fabrício Júnio da Silva<br>
              José Alexandre Santos Barbosa<br>
              Kelvin Cevidanes Coutinho<br>
              Luís Márcio de Oliveira Santos<br>
              Ricardo Gaede Nogueira
            </p>
            <br>
            <p><b>Orientador:</b></p>
            <p>Professor Nesley Jesus Daher de Oliveira</p>
          </div>
          
        </div>
      </form>
    </div>
    
  </main>

~~~

<br>

## [RF-009]	Permitir a navegação entre as diferentes páginas da aplicação

No template utilizado em todas as páginas (com excessão da página de admin) foram inclusas: 

1 - Uma barra de navegação no topo da página contendo links para todas as páginas da aplicação.

[new-template.html](../src/v2/new-template.html)
    
~~~html
<!-- Navbar -->
    <div class="container p-0">
      <nav class="navbar navbar-expand-md bgcolor-2">
        <div class="container">
          <a class="navbar-brand" href="#"></a>
          <div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Calculadora</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="co2.html">|&nbsp;&nbsp;&nbsp;Pegada de Carbono</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="servicos.html">|&nbsp;&nbsp;&nbsp;Serviços</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="faq.html">|&nbsp;&nbsp;&nbsp;Perguntas Frequentes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="institucional.html">|&nbsp;&nbsp;&nbsp;Quem Somos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
~~~

2 - Links para todas as páginas (inlcuindo a página de admin) no rodapé da página.

[new-template.html](../src/v2/new-template.html)

~~~html

<!-- Footer -->
  <footer class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 py-5 border-top bgcolor-3 fcolor-1">
      
      <div class="col mb-3 d-flex ps-4 align-items-center">
        <h3 class="fcolor-1">Calculadora de Energia Solar</h3>
      </div>
      
      <div class="col">
        <div class="row float-end">
          <div class="col mb-3 me-5">
            <h5>Ferramentas</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 fcolor-1 ws-nowrap">Calculadora</a></li>
              <li class="nav-item mb-2"><a href="co2.html" class="nav-link p-0 fcolor-1 ws-nowrap">Pegada de Carbono</a></li>
            </ul>
          </div>
      
          <div class="col mb-3 me-3" >
            <h5>Informações</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="servicos.html" class="nav-link p-0 fcolor-1 ws-nowrap">Serviços em São Paulo</a></li>
              <li class="nav-item mb-2"><a href="faq.html" class="nav-link p-0 fcolor-1 ws-nowrap">Perguntas Frequentes</a></li>
              <li class="nav-item mb-2"><a href="institucional.html" class="nav-link p-0 fcolor-1 ws-nowrap">Quem Somos</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row bgcolor-1">
      <div class="col">
        <span> © 2024 | Grupo 04 - Absolutamente Nenhum Direito Reservado</span>
      </div>
      
      <div class="col text-end">
        <a href="admin.html">
          <img src="gear_icon.png" alt="Icon">
        </a>
      </div>
    </div>

  </footer>

~~~   
