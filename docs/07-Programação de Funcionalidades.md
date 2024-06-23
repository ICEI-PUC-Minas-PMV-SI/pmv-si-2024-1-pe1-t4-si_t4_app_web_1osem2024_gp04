# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

## Calculadora de Pegada de Carbono

Permite calcular a quantidade de emissão de carbono gerada na produção de uma determinada quantidade de energia elétrica, levando em consideração a sua fonte original de produção. Atendendo ao requisito funcional RF-003 qual seja, "permitir o cálculo da pegada de carbono de acordo com o consumo de uma quantidade de kWh".

ˋˋˋjavascript
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
ˋˋˋ

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
