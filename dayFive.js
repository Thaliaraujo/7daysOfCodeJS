// Inicializa a lista vazia.
let frutas =  [];
let verduras =  [];
let laticinios =  []; 
let proteinas =  [];
let carboidratos =  [];
let limpeza =  [];  
let bebidas =  [];  
let outros =  [];
let produtos = '';
let categorias = '';

let addProduto = 'sim'; // valor inicial como "sim", porque a primeira vez sempre vai entrar no while.
while (addProduto != 'não') {
    addProduto = prompt('Você deseja adicionar um produto na lista de compras? responda "sim" ou "não".').toLowerCase();
    while (addProduto != 'sim' && addProduto != 'não'){
        alert('Operação invalida! Tente novamente.'); //enquanto o texto lido for diferente de "sim" e de "não", exibir que não foi reconhecido e perguntar novamente
        addProduto = prompt('Você deseja adicionar um produto na lista de compras? responda "sim" ou "não".').toLowerCase();
    };
    
    if (addProduto === 'não') {
        break;
    };

    produtos = prompt('Qual produto deseja adicionar?');
    categorias = prompt('Em qual categoria o produto se encaixa? "frutas", "Verduras", "laticinios", "proteinas", "carboidratos", "bebidas", "limpeza", "outros".').toLowerCase();

    if(categorias === 'frutas') {
        frutas.push(produtos);
        } else if (categorias === 'verduras'){
            verduras.push(produtos);
        } else if (categorias === 'laticínios'){
            laticinios.push(produtos);
        } else if (categorias === 'proteinas'){
            proteinas.push(produtos);
        } else if (categorias === 'carboidratos'){
            carboidratos.push(produtos);
        } else if (categorias === 'bebidas'){
            bebidas.push(produtos);
        } else if (categorias === 'limpeza'){
            limpeza.push(produtos);
        } else if (categorias === 'outros'){
            outros.push(produtos);
        } else {
            alert('Essa categoria não foi pré-definida, o produto não será adicionado na lista.')
    };
};

alert(`Lista de compras:\n  Frutas: ${frutas}\n Verduras: ${verduras}\n Laticínios: ${laticinios}\n  Proteinas: ${proteinas}\n  Carboidratos: ${carboidratos}\n Bebidas: ${bebidas}\n Limpeza: ${limpeza}\n Outros: ${outros}`);

