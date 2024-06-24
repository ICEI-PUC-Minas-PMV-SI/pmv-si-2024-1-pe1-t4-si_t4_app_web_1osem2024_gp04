# Execução e Resultados dos Testes

## Teste de Caixa Branca

### Itens avaliados

Foram avaliados: códigos-fonte, indentação, comentários e estruturação das páginas.

### Resultados

Os códigos apresentaram estruturação correta, seguindo boas práticas para os padrões HTML, facilitando a indexação das páginas para mecanismos de busca.

## Teste de Unidade

### Itens avaliados

Nesta etapa foram avaliadas as funcionalidades individuais da aplicação web, visando cumprir os requisitos funcionais citados anteriormente.

#### 1. Calculadora de Energia Solar

Tem como objetivo calcular a quantidade de investimento necessário para zerar a conta de energia. Abaixo, estão listadas as entradas e saídas esperadas para cada grupo de testes.

#### 2. Calculadora de Emissão de CO²

Tem como objetivo calcular a pegada de carbono proveniente de diferentes matrizes energéticas.

#### 3. Serviços

O objetivo principal da página é servir de intermédio entre o usuário final e empresas que fornecem serviços de instalação de fontes de energia renovável.

#### 4. Perguntas Frequentes (FAQ)

O objetivo principal da página é responder perguntas frequentes sobre os impactos positivos da implementação de fontes de energia renovável.

#### 5. Informações Institucionais

### Resultados

1. Calculadora de Energia Solar: cumpre com o objetivo principal de informar o valor do investimento necessário para zerar o valor da conta de energia do usuário.

2. Calculadora de Emissão de CO²: cumpre com o objetivo principal de informar a pegada de carbono ao informar o consumo mensal de energia elétrica.

3. Serviços: A página não possui necessidade de tratamento de dados provenientes de uma entrada fornecida pelo usuário, e cumpre com o objetivo principal.

4. Perguntas Frequentes (FAQ): A página não possui necessidade de tratamento de dados provenientes de uma entrada fornecida pelo usuário, e cumpre com o objetivo principal.

5. Informações Institucionais: A página não possui necessidade de tratamento de dados provenientes de uma entrada fornecida pelo usuário, e cumpre com o objetivo principal.

As páginas avaliadas tiveram o resultado esperado utilizando as entradas esperadas. Contudo, algumas inconsistências, que serão melhor descritas no teste de borda, foram identificadas.

## Testes de borda

### Itens avaliados

Foram avaliadas as páginas de Calculadora de Investimentos e Calculadora da Pagada de Carbono. As demais páginas não possuem necessidade de tratamento de dados provenientes de uma entrada fornecida pelo usuário.

### 1. Calculadora de Investimentos

#### 1.1. Teste com entradas esperadas pelo sistema

Entradas:

* Nome: Carolina Silva Mendes
* E-mail: carolina.mendes@gmail.com
* Valor da conta de energia: 120

Saídas:

A saída emitida pela aplicação foi: "O investimento será de R$ 3120.00"

Conclusão:

Com as entradas esperadas pelo sistema, as funcionalidades atendem os requisitos normalmente.

#### 1.2. Teste com números racionais (float)

Entradas:

* Nome: Lucas Oliveira Santos
* E-mail: lucas.santos@hotmail.com
* Valor da conta de energia: 250,40 e 250.40 

Saídas:

* Utilizando vírgula: "O investimento será de R$ NaN"
* Utilizando ponto: "O investimento será de R$ 6510.40"

Conclusão:

O cálculo não forneceu as saídas esperadas, ao informar um valor float utilizando vírgula, porém utilizando ponto o cálculo foi processado normalmente.

#### 1.3. Teste alterando os valores dos campos Nome e e-mail

Entradas:

* Nome: 192837465
* E-mail: mariana.lima.com e mariana.lima@gmail.com
* Valor da conta de energia: 178

Saídas:

A saída emitida pela aplicação foi: "Inclua um "@" no endereço de e-mail. "mariana.lima.com" está com um "@" faltando."

Conclusão:

O sistema identificou que o e-mail informado era inválido, e não prosseguiu com o cálculo. Ao informar o e-mail correto, o cálculo foi realizado normalmente.

#### 1.4. Teste com informações faltando

* Nome:
* E-mail: 
* Valor da conta de energia: 300

Saídas:

A saída emitida pela aplicação foi: "O investimento será de R$ 7800.00"

Conclusão:

O sistema não validou a falta de preenchimento dos campos Nome e E-mail. Contudo, o cálculo foi realizado corretamente.

### 2. Calculadora de Emissão de CO²

Entradas:

Foram realizados três tipos de teste: valores inteiros, valores reais utilizando vírgula ou ponto e outros valores não numéricos.

Saídas:

* Utilizando valores inteiros: os cálculos foram realizados corretamente.
* Utilizando números reais com vírgula: o sistema não realizou o cálculo.
* Utilizando números reais com ponto: o sistema realizou o cálculo corretamente.

Conclusão:

A página avaliada teve o resultado esperado utilizando as entradas esperadas pelo sistema. Contudo, algumas inconsistências foram identificadas utilizando vírgula.

## Teste de integração

### Itens avaliados

Nesta etapa, a integração de todas as páginas foram avaliadas, visando avaliar a aplicação como um todo.

### Resultados

Todas as páginas possuem integração entre sí. Nenhum erro ou falha foram identificados.

## Conclusão Geral

De modo geral, a aplicação permite que o usuário faça uma cotação aproximada do investimento necessário para instalação de energia via placas solares, permite o cálculo da pegada de carbono de acordo com a matriz energética, baseado no consumo em kWh, promove informações sobre os benefícios da instalação de energia solar para o meio-ambiente, promove informações sobre quais os serviços de instalação estão disponíveis localmente.

Nas parte de administração, permite que o administradore colete dados dos usuários, como nome, e-mail e valor do consumo mensal de energia e os edite conforme necessário. Também permite que estes dados sejam apagados, de acordo com a necessidade.

Portanto, os requisitos funcionais e não funcionais são cumpridos, conforme proposto.
