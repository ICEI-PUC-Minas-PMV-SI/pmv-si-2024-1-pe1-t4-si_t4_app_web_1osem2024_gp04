# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

A solução é uma aplicação web estática, composta por HTML, CSS e JavaScript, que permite visualizar serviços de instalação solar disponíveis na cidade de São Paulo. A lógica da aplicação é gerenciada no front-end, com dados de serviços carregados dinamicamente de um arquivo JSON e do LocalStorage. 


## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura XX.


A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
 


## Tecnologias Utilizadas

HTML: Estrutura básica da aplicação web.
CSS: Estilos aplicados via arquivos externos (servicos-style.css, new-style.css, styles.css, faq-styles.css, co2-style.css) e o framework Bootstrap.
JavaScript: Lógica da aplicação, manipulação do DOM, fetch de dados de um arquivo JSON, gerenciamento de dados do LocalStrage


## Hospedagem

A aplicação pode ser hospedada em um serviço de hospedagem estática. Atualmente estamos utilizando o como GitHub Pages
> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)