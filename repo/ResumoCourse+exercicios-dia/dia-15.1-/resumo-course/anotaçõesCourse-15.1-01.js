Como dito anteriormente, Redux é uma biblioteca que pode ser utilizada com algum framework front-end ou com javascript puro (também conhecido como Vanilla JS). Hoje vamos focar em entender o Redux , por isso vamos usar o javascript puro, mas não se preocupe, nos próximos dias vamos aprender como integrar o Redux e o React .
É importante dizer que o Redux vem para resolver problemas de fluxo de informação dentro da sua aplicação, assim como o gerenciamento de seus dados. Você verá que ele ajuda na comunicação entre componentes.

// vid.

Assim como na vida cotidiana ou no trabalho existem vários fluxos e rotinas que podemos chamar de "modelo de negócio". Por exemplo, quando você vai à padaria, quais são os processos que ocorrem desde a hora que você entra no estabelecimento até sair? Existe todo um fluxo de ações e divisões de responsabilidades das pessoas funcionárias e clientes, correto?
Por essa perspectiva, podemos dizer que existe muita similaridade entre as nossas rotinas e os fluxos de uma aplicação. Cada componente, estado e função têm seus papéis e demandas que precisam ser executadas conforme o "modelo de negócio" do sistema. Isso envolve transmissão de informação - de componentes pais para componentes filhos, filhos dos filhos, filhos para pais, enfim! Nós já vimos que, quando nossa aplicação cresce, a transmissão de informações começa a ficar complicada de se fazer, não é mesmo?
O Redux existe para auxiliar o fluxo de dados dentro da sua aplicação! Com ele você consegue ter, além do estado local de cada componente, um estado global , acessível a todos os componentes , onde se pode armazenar e recuperar informações que precisam ser compartilhadas. Essa ferramenta pode ser dividida em três partes principais - actions , stores e reducers .
Podemos dizer que cada parte tem suas responsabilidades bem definidas, vamos explicar brevemente uma a uma e depois faremos uma analogia para ficar mais fácil compreender.
Actions
As actions , como o nome indica, são as possíveis ações que seu sistema pode executar na store . Elas atuam como uma regra de negócio para manter os dados dos estados da aplicação e as suas mudanças previsíveis e consistentes. É bem comum ouvirmos que as actions são intenções (grave esse termo) de mudança de estado (para usar um termo mais técnico).
Store
A store é onde o estado da sua aplicação fica registrado e protegido. As mudanças ou consultas feitas na store precisam estar definidas anteriormente numa action . Isso garante a integridade dos dados, como explicado anteriormente.
Reducers
Os reducers são responsáveis por manipular a store seguindo as regras definidas pelas actions . Os reducers são importantes para evitar a manipulação direta da store e facilitam a manutenção do código.
