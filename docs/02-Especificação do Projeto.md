# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Renato da Silva tem 48 anos, é supervisor de produção em uma fábrica de latas de alumínio. É casado e tem 2 filhos que ainda residem em sua casa. As contas elevadas de energia elétrica são motivos recorrentes de discussões com a família. Costuma dedicar-se bastante à decisões financeiras, sempre fazendo comparações de preço quando deseja comprar algo, ou cotando diversos serviços quando necessário. Não leva muito jeito com questões de informática e costuma pedir ajuda para os filhos para resolver problemas dessa natureza. 

Maria Oliveira tem 38 anos. É arquiteta, casada e mãe de uma menina de 5 anos. Maria é engajada com questões de sustentabilidade, tornando esse o foco principal do seu portfolio e de sua presença profissional nas redes sociais, como facebook e instagram. Tem interesse em fazer parcerias com serviços de construção e instalação de sistemas domiciliares.

Jorge Nascimento, 50 anos, casado. É dono de uma pequena empresa de instalação de placas solares que atua na cidade de São Paulo. É entusiasta de novas tecnologias. Apesar da atual pequena capacidade de investimento está sempre buscando formas de expandir seu negócio e almeja um dia tornar sua empresa em uma liderança nacional no mercado. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Administrador do sistema| Uma forma de cadastrar empresas de instalação de placas solares  | Para que empresas possam contratar e utilizar o nosso serviço  |
|Administrador do sistema| Uma forma de remover o cadastro de empresas  | Para que o sistema não ofereça dados de empresas que deixaram de contratar o nosso serviço  |
|Administrador do sistema| Atualizar os dados cadastrais das empresas  | Para que os dados apresentados pelo sistema sejam fiéis às ofertas das empresas  |
|Dono de uma casa | Simular a economia de consumo de energia que eu teria com a instalação de painéis solares  | Para que eu possa decidir se vale a pena contratar esse serviço  |
|Dono de uma casa  | Sistema simples de acessar, navegar e utilizar  | Para que eu não precise da ajuda de outras pessoas para utilizar o sistema   |
|Dono de uma casa  | Que as informações do sistema sejam mostradas de forma clara e concisa  | Para que eu não tenha dificuldades em encontrar as informações que me interessam  |
|Dono de uma casa  | Que o sistema salve as informações resultantes em um formato de fácil acesso e compartilhamento  | Para que possa consultar e compartilhar os resultados facilmente  |
|Dono de uma casa  | Que os resultados sejam confiáveis e acurados, principalmente quando comparados com sistemas similares ou fórmulas disponíveis  | Para que eu possa ter confiança nas recomendações do sistema |
|Dono de uma casa  | Informações sobre a área necessária para a instalação que atende as minhas demandas  | Para que eu possa planejar efetivamente a instalação  |
|Arquiteta  | Dados sobre sustentabilidade do uso de placas solares  | Para que possa verificar se o uso de placas solares se encaixa nos meus projetos sustentáveis  |
|Arquiteta  | Dados sobre quais empresas atuam nas áreas dos meus projetos  | Para que eu possa saber quais os serviços eu devo contratar ou recomendar para os meus clientes  |
|Arquiteta  | Dados acurados sobre o custo dos serviços oferecidos  | Para que eu possa orçamentar meus projetos com certo grau de precisão  |
|Arquiteta  | Um sistema acessível | Para que eu possa recomendá-lo para clientes e colegas |
|Serviço de instalação de placas solares  | Um meio de atualizar as informações cadastrais da minha empresa  | Para que eu possa manter as informações acuradas caso aconteçam mudanças como área de atendimento ou formas de contato  |
|Serviço de instalação de placas solares  | Um meio de alterar certos valores de custo embutidos nos cálculos  | Para que eu possa manter os resultados do sistema atualizados e fiéis aos preços oferecidos pela minha empresa e ao estado atual das tecnologias que eu ofereço  |
|Serviço de instalação de placas solares  | Dados sobre o uso do sistema  | Para que eu possa saber se o sistema está de fato agregando valor ao meu negócio  |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-------------------------|------------|
|RF-001| Permitir que o usuário faça cotações a respeito dos custos de instalação em seu domicílio | ALTA | 
|RF-002| Permitir que o usuário calcule a economia de médio prazo e o tempo de retorno do investimento | ALTA | 
|RF-003| Permitir o cálculo de redução da pegada de carbono causado pela instalação do sistema  | MÉDIA |
|RF-004| Prover informações sobre os benefícios da instalação de energia solar para o meio-ambiente | MÉDIA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|--------------------------|----------|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| O sistema deve ter um UI simples, a fim de facilitar o uso para o público-alvo |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto não poderá depender de qualquer tipo de orçamento |
|04| Cada etapa do projeto deve ser entregue nos prazos pré-definidos |
|05| O projeto deverá ser desenvolvido apenas pela equipe pré definida |

