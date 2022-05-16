// Redux é uma ferramenta para gerenciar o estado de uma aplicação JavaScript . Antes de entender o porquê de utilizar React com Redux , deve-se entender o porquê de utilizarmos uma biblioteca externa para controlar e gerenciar o estado de uma aplicação.
// A maioria das bibliotecas, como React , Angular etc, possuem uma forma interna de gerenciar o estado da aplicação sem o auxílio ou necessidade de uma ferramenta externa. Isto funciona bem para aplicações que possuem poucos componentes mas, à medida que a aplicação cresce, o gerenciamento de estados compartilhados entre componentes torna-se uma tarefa complicada e desgastante.
// Em uma aplicação em que muitos dados são compartilhados entre componentes, pode não ficar muito nítido onde cada dado deve ficar. Além disso, algumas vezes pode-se criar uma implementação que não é ideal. Por exemplo: em uma aplicação onde é necessário compartilhar os dados com vários componentes filhos, necessariamente esse dado deve ficar no componente pai. Aplicações maiores também apresentam a necessidade de compartilhar dados entre componentes que não estão na mesma árvore de componentes. Para esse compartilhamento ser feito, esse dado terá de passar através de muitos componentes até chegar em seu componente alvo.
// Com todos estes exemplos, fica nítido que o gerenciamento de estado torna-se confuso à medida que a aplicação cresce. Por isso, utilizar uma ferramenta externa para gerenciar o estado, como o Redux , facilitará o desenvolvimento e crescimento das aplicações.

// RELEMBRANDO CONCEITOS

// Redux é uma biblioteca que pode ser utilizada com React , Angular , Vue , Ember e JavaScript puro, para dar só alguns exemplos. É muito comum o uso de Redux com React , apesar de serem ferramentas independentes .
// Quando você utiliza Redux com algum UI framework ( User Interface Framework ), é comum usar alguma biblioteca para realizar a conexão ( binding ) entre o Redux e o framework . No caso do React , a biblioteca React Redux é quem faz essa conexão e pode ser instalada em sua aplicação através do comando:

// npm install react-redux <-

// React Redux é a biblioteca oficial para realizar a conexão entre React e Redux

// relembrando conceitos ->
// STORE É onde vamos armazenar todos os dados compartilhados da aplicação e é representado por um objeto JavaScript . O State é armazenado no Store do Redux .
// ACTION É um objeto JavaScript que representa alguma mudança/alteração que precisa acontecer no State .
// REDUCER É uma função JavaScript que recebe o estado atual ( current state ) e a ação corrente ( current action ) e retorna um novo estado ( new state ). É responsabilidade dessa função decidir o que acontecerá com o estado dada uma ação( action ).
// DISPATCH É uma função que envia uma ação ( action ) para processamento.

// Configurando Redux com React
// Agora que relembramos todos estes conceitos, podemos criar e configurar uma aplicação React que utilizará Redux .Primeiro, criamos nossa aplicação React:

// npx create-react-app my-app <-

// 





