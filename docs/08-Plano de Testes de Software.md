# Testes Calculadora de Economia de Consumo de Energia Via Uso de Placas Solares

## 1. Importância da Etapa de testes de um Software
 
A fase de testes de um software é crucial e de suma importância para a qualidade final do produto e do usuário final. É destinada a garantir que o sistema cumpra todos os requisitos especificados no início de seu desenvolvimento, e que funcione corretamente nas mais diversificadas situações possíveis.

Com uma série de metodologias específicas e bem definidas, é possível melhorar a qualidade e usabilidade do sistema, garantindo uma experiência satisfatória para os usuários finais.

## 2. Descrição do Projeto

O objeto alvo dos testes que serão relatados neste documento, será uma aplicação web para promover a transição de fontes de energia tradicional para fontes de energia renovável, servindo como plataforma intermediária entre os moradores as empresas de energia solar no estado de São Paulo.

A aplicação conta com funcionalidades de cálculo de instalação de energia solar e retorno do investimento, cálculo para redução da pegada de carbono, página de serviços disponíveis na cidade de SP, além de promover informações sobre os benefícios da instalação de energia solar para o meio-ambiente através de uma página FAQ.

## 3. Público-alvo

Esta documentação será destinada a todos os desenvolvedores e qualquer outra parte interessada, sendo útil para futuras auditorias e controles de qualidade.

## 4. Requisitos que serão Testados

### 4.1 Requisitos Funcionais

* Permitir que o usuário faça cotações a respeito dos custos de instalação em seu domicílio.
* Permitir que o usuário calcule a economia de médio prazo e o tempo de retorno do investimento.
* Permitir o cálculo de redução da pegada de carbono causado pela instalação do sistema.
* Prover informações sobre os benefícios da instalação de energia solar para o meio-ambiente.

### 4.2 Requisitos Não Funcionais

* O sistema deve ser responsivo para rodar em um dispositivo móvel
* O sistema deve ter um UI simples, a fim de facilitar o uso para o público-alvo

## 5. Metodologias Utilizadas
<ol>
 <li>Teste de caixa branca: avalia o código fonte, fluxo de dados, condições, ciclos, etc.</li>
 <li>Teste de caixa preta: aspectos externos, requisitos funcionais. Avalia se as entradas tiveram as saídas esperadas.</li>
 <li>Teste de unidade: testa-se as unidades menores do software. Neste caso, página a página</li>
 <li>Teste de integração: testa-se se todas as unidades funcionam corretamente em conjunto.</li>
 <li>Teste de Usabilidade: teste com usuários, a fim de avaliar a experiência de usuários externos.</li>
 <li>Testes de borda: utiliza-se o limite dos valores permitidos em algumas ocasiões para os testes. </li>
</ol>

## 6. Execução e Resultados dos Testes

### 6.1 Teste de Caixa Branca

Foram avaliados os códigos-fonte, a indentação, comentários e estruturação das páginas. Os códigos apresentaram estruturação correta, seguindo boas práticas para os padrões HTML, facilitando a indexação das páginas para mecanismos de busca.

### 6.2 Teste de Caixa Preta

Nesta etapa, foram avaliadas as funcionalidades individuais da aplicação web, visando cumprir os requisitos funcionais citados anteriormente.

### 6.2.1 Calculadora de Energia Solar

Tem como objetivo, calcular a quantidade de investimento necessário para zerar a conta de energia. Abaixo, estão listadas as entradas e saídas esperadas para cada grupo de testes.

### Teste com entradas esperadas pelo sistema:

* Nome: Carolina Silva Mendes
* E-mail: carolina.mendes@gmail.com
* Valor da conta de energia: 120

### Saídas:

* O investimento será de R$ 3120.00

### Conclusão:

Com as entradas esperadas pelo sistema, as funcionalidades atendem os requisitos normalmente.

### Teste com números racionais (float):

* Nome: Lucas Oliveira Santos
* E-mail: lucas.santos@hotmail.com
* Valor da conta de energia: 250,40 e 250.40 

### Saídas:

* Utilizando vírgula: O investimento será de R$ NaN
* Utilizando ponto: O investimento será de R$ 6510.40

### Conclusão:

O cálculo não forneceu as saídas esperadas, ao informar um valor float utilizando vírgula, porém utilizando ponto o cálculo foi processado normalmente.

### Teste alterando os valores dos campos Nome e e-mail:

* Nome: 192837465
* E-mail: mariana.lima.com e mariana.lima@gmail.com
* Valor da conta de energia: 178

### Saídas:

* Inclua um "@" no endereço de e-mail. "mariana.lima.com" está com um "@" faltando.

### Conclusão:

O sistema identificou que o e-mail informado era inválido, e não prosseguiu com o cálculo. Ao informar o e-mail correto, o cálculo foi realizado normalmente.

### Teste com informações faltando:

* Nome:
* E-mail: 
* Valor da conta de energia: 300

Saídas:

* O investimento será de R$ 7800.00
* 
## 6.3 Teste de integração
*	Foi feito o teste de integração na calculadora, e o resultado foi positivo com todas as 5 paginas dentro dela funcionando perfeitamente. 
*	Paginas: Calculadora. Pegada de carbono. Serviços. Perguntas Frequentes. Quem Somos.
## 6.4 Teste de usabilidade
*	Marcos De Pula foi um voluntario para fazer o teste de usabilidade, e seu feedback foi: ‘ calculadora pratica e eficiente, um bom projeto para saber a economia do consumo de energia.’
*	Contato do voluntario: mv199209@gmail.com
## 6.5 Testes de borda
*	Valor de entrada de R$ 0.00 reais
Saida: O investimento sera de R$ 0.00 reais
*	Valor de entrada de R$ 0.50 reais
Saida: o investimento sera de R$ 13.00 reais
*	Valor de entrada de R$ 1.75 reais
Saida: o investimento sera de R$ 45.50 reais
*	Valor de entrada de R$ 2.00 reais 
Saida: o investimento sera de R$ 52.00 reais
*	Valor de entrada de R$ 23.00 reais
Saida: o investimento sera de R$ 598.00 reais
*	Valor de entrada de R$ 99.00 reais
Saida: o investimento sera de R$ 2574.00 reais
*	Valor de entrada de R$ 574.00 reais
Saida: o investimento sera de R$ 14924.00 reais
*	Valor de entrada de R$ 1000.00
Saida: o investimento sera de R$ 26000.00 reais



### Conclusão:

O sistema não validou a falta dos campos Nome e E-mail, processando o cálculo de investimento apesar da falta de informações.

### 6.2.2 Calculadora de Emissão de CO²

Tem como objetivo calcular a pegada de carbono proveniente de diferentes matrizes energéticas.

Foram realizados três tipos de teste: valores inteiros, valores reais utilizando vírgula ou ponto e outros valores não numéricos.

### Saídas:

* Utilizando valores inteiros: os cálculos foram realizados corretamente.
* Utilizando números reais com vírgula: o sistema não realizou o cálculo.
* Utilizando números reais com ponto: o sistema realizou o cálculo corretamente.

## 6.3 Teste de Unidade

### 6.3.1 Calculadora de Energia Solar

Conforme demonstrado no Teste de Caixa Preta, a unidade de cálculo de energia solar apresentou algumas inconsistências em função dos dados informados, mas por outro lado cumpre com o objetivo principal de informar o valor do investimento necessário para zerar o valor da conta de energia do usuário.

### 6.3.2 Calculadora de Emissão de CO²

Conforme demonstrado no Teste de Caixa Preta, a unidade de cálculo da pegada de carbono em função do tipo de matriz energética apresentou algumas inconsistências em função dos dados informados, mas por outro lado cumpre com o objetivo principal de informar a pegada de carbono ao informar o consumo mensal de energia elétrica.

### 6.3.3 Serviços

O objetivo principal da página é servir de intermédio entre o usuário final e empresas que fornecem serviços de instalação de fontes de energia renovável.

A página não possui necessidade de tratamento de dados provenientes de uma entrada fornecida pelo usuário, e cumpre com o objetivo principal.

### 6.3.4 Perguntas Frequentes

O objetivo principal da página é responder perguntas frequentes sobre os impactos positivos da implementação de fontes de energia renovável 

A página não possui necessidade de tratamento de dados provenientes de uma entrada fornecida pelo usuário, e cumpre com o objetivo principal.
