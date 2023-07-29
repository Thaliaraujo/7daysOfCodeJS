// Criando um objeto para armazenar as categorias e os produtos da lista de compras
let listaDeCompras = {
    frutas: [],
    verduras: [],
    laticinios: [],
    proteinas: [],
    carboidratos: [],
    bebidas: [],
    limpeza: [],
    outros: []
};
  
// Criando uma função para adicionar um produto na lista
function adicionarProduto() {
    while(true) {
        let produtos = prompt("Qual produto deseja adicionar?");
        let categorias = prompt('Em qual categoria o produto se encaixa? "frutas", "Verduras", "laticinios", "proteinas", "carboidratos", "bebidas", "limpeza", "outros".').toLowerCase();
        // Usando um switch case para verificar a categoria e adicionar o produto na lista
        switch (categorias) {
            case "frutas":
                listaDeCompras.frutas.push(produtos);
                break;
            case "verduras":
                listaDeCompras.verduras.push(produtos);
                break;
            case "laticinios":
                listaDeCompras.laticinios.push(produtos);
                break;
            case "proteinas":
                listaDeCompras.proteinas.push(produtos);
                break;
            case "carboidratos":
                listaDeCompras.carboidratos.push(produtos);
                break;
            case "bebidas":
                listaDeCompras.bebidas.push(produtos);
                break;
            case "limpeza":
                listaDeCompras.limpeza.push(produtos);
                break;
            case "outros":
                listaDeCompras.outros.push(produtos);
                break;
            default:
                alert("Essa categoria não foi pré-definida, tente novamente!");
                continue;
        };
        return categorias;
    };
};
  
// Criando uma função para remover um produto da lista
function removerProduto() {
    // Verificando se a lista está vazia
    if (
      listaDeCompras.frutas.length === 0 &&
      listaDeCompras.verduras.length === 0 &&
      listaDeCompras.laticinios.length === 0 &&
      listaDeCompras.proteinas.length === 0 &&
      listaDeCompras.carboidratos.length === 0 &&
      listaDeCompras.bebidas.length === 0 &&
      listaDeCompras.limpeza.length === 0 &&
      listaDeCompras.outros.length === 0
    ) {
      alert("Lista de compras vazia.");
    } else {
        // Pedindo ao usuário o nome do produto que ele quer remover
        let remover = prompt(
            `Lista de Compras:\n Frutas: ${listaDeCompras.frutas}\n Verduras: ${listaDeCompras.verduras}\n Laticinios: ${listaDeCompras.laticinios}\n Proteinas: ${listaDeCompras.proteinas}\n Carboidratos: ${listaDeCompras.carboidratos}\n Bebidas: ${listaDeCompras.bebidas}\n Limpeza: ${listaDeCompras.limpeza}\n Outros: ${listaDeCompras.outros}\n Qual produto você deseja remover?`
        );
        // Usando um loop for para percorrer as categorias da lista
        for (let categoria in listaDeCompras) {
            // Verificando se o produto está na categoria
            if (listaDeCompras[categoria].indexOf(remover) != -1) {
            // Removendo o produto da categoria
            listaDeCompras[categoria].splice(listaDeCompras[categoria].indexOf(remover), 1);
            alert(`O item ${remover} foi removido com sucesso!`);
            return; // Saindo da função depois de remover o produto
            };
        };
        // Se o produto não foi encontrado em nenhuma categoria, avisar ao usuário
        alert(`O item ${remover} não está na lista de compras.`);
    };
};
  
// Criando uma função para mostrar a lista de compras na tela
function mostrarLista() {
    // Verificando se a lista está vazia
    if (
        listaDeCompras.frutas.length === 0 &&
        listaDeCompras.verduras.length === 0 &&
        listaDeCompras.laticinios.length === 0 &&
        listaDeCompras.proteinas.length === 0 &&
        listaDeCompras.carboidratos.length === 0 &&
        listaDeCompras.bebidas.length === 0 &&
        listaDeCompras.limpeza.length === 0 &&
        listaDeCompras.outros.length === 0
    ) {
        alert("Lista de compras vazia.");
    } else {
        // Criando uma variável para armazenar a lista formatada
        let listaFormatada = "Lista de Compras:\n";
        // Usando um loop for para percorrer as categorias da lista
        for (let categoria in listaDeCompras) {
            // Adicionando a categoria e os produtos na lista formatada
            listaFormatada += `${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
        }
        // Mostrando a lista formatada na tela
        alert(listaFormatada);
    };
};
  
// Criando uma variável para armazenar a opção do usuário
let opcao = "";

// Criando um loop while para repetir o programa até o usuário sair
while (opcao != "sair") {
    // Pedindo ao usuário a opção que ele quer executar
    opcao = prompt('O que você deseja fazer? Digite "adicionar", "remover", "mostrar" ou "sair".').toLowerCase();
    // Usando um switch case para verificar a opção do usuário e chamar a função correspondente
    switch (opcao) {
        case "adicionar":
            adicionarProduto();
            break;
        case "remover":
            removerProduto();
            break;
        case "mostrar":
            mostrarLista();
            break;
        case "sair":
            alert("Obrigado por usar o programa. Até mais!");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
    };
};
  