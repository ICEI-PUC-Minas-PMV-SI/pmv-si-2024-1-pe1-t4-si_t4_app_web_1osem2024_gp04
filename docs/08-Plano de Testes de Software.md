# Testes Calculadora de Economia de Consumo de Energia Via Uso de Placas Solares

## Importância da Etapa de testes de um Software
 
A fase de testes de um software é crucial e de suma importância para a qualidade final do produto e do usuário final. É destinada a garantir que o sistema cumpra todos os requisitos especificados no início de seu desenvolvimento, e que funcione corretamente nas mais diversificadas situações possíveis.

Com uma série de metodologias específicas e bem definidas, é possível melhorar a qualidade e usabilidade do sistema, garantindo uma experiência satisfatória para os usuários finais.

## Descrição do Projeto

O objeto alvo dos testes que serão relatados neste documento, será uma aplicação web para promover a transição de fontes de energia tradicional para fontes de energia renovável, servindo como plataforma intermediária entre os moradores as empresas de energia solar no estado de São Paulo.

A aplicação conta com funcionalidades de cálculo de instalação de energia solar e retorno do investimento, cálculo para redução da pegada de carbono, página de serviços disponíveis na cidade de SP, além de promover informações sobre os benefícios da instalação de energia solar para o meio-ambiente através de uma página FAQ.

## Público-alvo

Esta documentação será destinada a todos os desenvolvedores e qualquer outra parte interessada, sendo útil para futuras auditorias e controles de qualidade.

## Requisitos que serão Testados

### Requisitos Funcionais

* Permitir que o usuário faça cotações a respeito dos custos de instalação em seu domicílio.
* Permitir o cálculo da pegada de carbono de acordo com o consumo de uma quantidade de kWh.
* Prover informações sobre os benefícios da instalação de energia solar para o meio-ambiente.
* Prover informações sobre quais são os serviços de instalação disponíveis localmente.
* Permitir que o administrador colete dados dos usuários como nome, email e valor do consumo mensal de energia.
* Permitir que os dados coletados dos usuários possam ser editados e atualizados.
* Permitir que os dados coletados dos usuários sejam apagados.
* Permitir a navegação entre as diferentes páginas da aplicação

### Requisitos Não Funcionais

* O sistema deve ser responsivo para rodar em browsers no modo desktop
* O sistema deve ter uma UI simples, a fim de facilitar o uso para o público-alvo

## Metodologias Utilizadas

<ol>
    <li>Teste de caixa branca: avalia o código fonte, fluxo de dados, condições, ciclos, etc.</li>
    <li>Teste de unidade: testa-se as unidades menores do software. Neste caso, página a página</li>
    <li>Teste de integração: testa-se se todas as unidades funcionam corretamente em conjunto.</li>
    <li>Testes de borda: utiliza-se o limite dos valores permitidos em algumas ocasiões para os testes. </li>
</ol>
