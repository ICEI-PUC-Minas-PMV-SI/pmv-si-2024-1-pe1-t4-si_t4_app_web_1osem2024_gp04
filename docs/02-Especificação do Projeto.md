# Especificações do Projeto

Nosso projeto será uma aplicação web que terá como objetivo prover informações importantes sobre o uso de placas solares para suplementar o fornecimento de energia em domicílios, estimulando a adoção desta tecnologia sustentável. Para este fim, nossa aplicação oferecerá ferramentas como: 

- **Calculadora de Energia Solar**: permitirá ao usuário calcular o investimento necessário para a adoção das placas solares mediante o seu consumo médio mensal de energia.
- **Calculadora de Pegada de Carbono**: permitirá ao usuário calcular o impacto ambiental que o seu consumo de energia mensal produz.
- **Lista de Serviços**: uma página que irá listar os serviços locais de instalação de placas solares.
- **Perguntas Frequentes**: uma página que mostrará respostas a certas perguntas frequentes sobre o tópico de energia sustentável.

A aplicação também permitirá que o administrador do sistema colete e organize dados voluntariados pelos usuários.


## Personas

Renato da Silva tem 48 anos, é supervisor de produção em uma fábrica de latas de alumínio. É casado e tem 2 filhos que ainda residem em sua casa. As contas elevadas de energia elétrica são motivos recorrentes de discussões com a família. Costuma dedicar-se bastante à decisões financeiras, sempre fazendo comparações de preço quando deseja comprar algo, ou cotando diversos serviços quando necessário. Não leva muito jeito com questões de informática e costuma pedir ajuda para os filhos para resolver problemas dessa natureza. 

Maria Oliveira tem 38 anos. É arquiteta, casada e mãe de uma menina de 5 anos. Maria é engajada com questões de sustentabilidade, tornando esse o foco principal do seu portfolio e de sua presença profissional nas redes sociais, como facebook e instagram. Tem interesse em fazer parcerias com serviços de construção e instalação de sistemas domiciliares.

Jorge Nascimento, 28 anos, casado. É o administrador do sistema. É formado em Engenharia de Energias Sustentáveis e tem 4 anos de experiência na área. É apaixonado por divulgação científica e está sempre procurando formas de engajar o público com a causa da sustentabilidade ambiental. 

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Administrador do sistema| Uma forma de obter dados de pessoas interessadas em energia solar  | Para que eu possa utilizar esses dados em outros empreendimentos |
|Administrador do sistema| Uma forma de atualizar os dados dos usuários  | Para que eu possa organizar os dados coletados  |
|Administrador do sistema| Uma forma de apagar os dados dos usuários  | Para que eu possa organizar os dados coletados | 
|Proprietário de casa | Simular a economia de consumo de energia que eu teria com a instalação de painéis solares  | Para que eu possa decidir se vale a pena contratar esse serviço  |
|Proprietário de casa  | Sistema simples de acessar, navegar e utilizar  | Para que eu não precise da ajuda de outras pessoas para utilizar o sistema   |
|Proprietário de casa  | Que as informações do sistema sejam mostradas de forma clara e concisa  | Para que eu não tenha dificuldades em encontrar as informações que me interessam  |
|Proprietário de casa  | Que os resultados sejam confiáveis e acurados, principalmente quando comparados com sistemas similares ou fórmulas disponíveis  | Para que eu possa ter confiança nas recomendações do sistema |
|Arquiteta  | Dados sobre sustentabilidade do uso de placas solares  | Para que possa verificar se o uso de placas solares se encaixa nos meus projetos sustentáveis  |
|Arquiteta  | Dados sobre quais empresas atuam nas áreas dos meus projetos  | Para que eu possa saber quais os serviços eu devo contratar ou recomendar para os meus clientes  |
|Arquiteta  | Dados acurados sobre o custo dos serviços oferecidos  | Para que eu possa orçamentar meus projetos com certo grau de precisão  |
|Arquiteta  | Um sistema acessível | Para que eu possa recomendá-lo para clientes e colegas |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-------------------------|------------|
|RF-001| Permitir que o usuário faça cotações a respeito dos custos de instalação em seu domicílio | ALTA | 
|RF-002| Permitir o cálculo da pegada de carbono de acordo com o consumo de uma quantidade de kWh | ALTA |
|RF-003| Prover informações sobre os benefícios da instalação de energia solar para o meio-ambiente | ALTA |
|RF-004| Prover informações sobre quais são os serviços de instalação disponíveis localmente | ALTA |
|RF-005| Permitir que o administrador colete dados dos usuários como nome, email e valor do consumo mensal de energia | MÉDIA |
|RF-006| Permitir que os dados coletados dos usuários possam ser editados e atualizados  | MÉDIA |
|RF-007| Permitir que os dados coletados dos usuários sejam apagados | MÉDIA |
|RF-008| Prover informações sobre os desenvolvedores do sistema | MÉDIA |
|RF-009| Permitir a navegação entre as diferentes páginas da aplicação | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|--------------------------|----------|
|RNF-001| O sistema deve ser responsivo para rodar em browsers no modo desktop | ALTA | 
|RNF-002| O sistema deve ter uma UI simples, a fim de facilitar o uso para o público-alvo | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O projeto não poderá depender de qualquer tipo de orçamento |
|04| Cada etapa do projeto deve ser entregue nos prazos pré-definidos |
|05| O projeto deverá ser desenvolvido apenas pela equipe pré definida |

