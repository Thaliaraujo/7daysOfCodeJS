// Lógica JS 5/7: Arrays e coleções
// Lógica JS 6/7: Remoção de Arrays

let frutas = [];
let verduras = [];
let laticinios = [];
let proteinas = [];
let carboidratos = [];
let bebidas = [];
let limpeza = [];
let outros = [];
let produtos = '';
let categorias = '';

let addProduto = 'sim';
while (addProduto != 'não') {
    if(frutas.length === 0 && verduras.length === 0 && laticinios.length === 0 && proteinas.length === 0 && carboidratos.length === 0 && bebidas.length === 0 && limpeza.length === 0 && outros.length === 0) {
        addProduto = prompt('Você deseja adicionar um produto na lista de compras? responda "sim" ou "não"').toLowerCase();
    } else {
        addProduto = prompt('Você deseja adicionar ou remover um produto da lista de compras? responda "sim", "não" ou "remover"').toLowerCase();
    };

    while (addProduto != 'sim' && addProduto != 'não' && addProduto != 'remover') {
        alert('Operação invalida! Tente novamente.');
        addProduto = prompt('Você deseja adicionar ou remover um produto da lista de compras? responda "sim", "não" ou "remover"').toLowerCase();
   };

   if(addProduto === 'não') {
    break;
   };

   if (addProduto === 'sim') {
    produtos = prompt('Qual produto deseja adicionar?');
    categorias = prompt('Em qual categoria o produto se encaixa? "frutas", "Verduras", "laticinios", "proteinas", "carboidratos", "bebidas", "limpeza", "outros".').toLowerCase();
    
        if (categorias === 'frutas') {
            frutas.push(produtos)
        } else if (categorias === 'verduras') {
            verduras.push(produtos)
        } else if (categorias === 'laticinios') {
            laticinios.push(produtos)
        } else if (categorias === 'proteinas') {
            proteinas.push(produtos)
        } else if (categorias === 'carboidratos') {
            carboidratos.push(produtos)
        } else if (categorias === 'bebidas') {
            bebidas.push(produtos)
        } else if (categorias === 'limpeza') {
            limpeza.push(produtos)
        } else if (categorias === 'outros') {
            outros.push(produtos)
        } else {
            alert('Essa categoria não foi pré-definida, o produto não será adicionado na lista.')
        }
    } else if (addProduto === 'remover') {
        if(frutas.length === 0 && verduras.length === 0 && laticinios.length === 0 && proteinas.length === 0 && carboidratos.length === 0 && bebidas.length === 0 && limpeza.length === 0 && outros.length === 0) {
            alert('Lista de compras vazia.');
        } else {
            remover = prompt(`Lista de Compras:\n Frutas: ${frutas}\n Verduras: ${verduras}\n Laticinios: ${laticinios}\n Proteinas: ${proteinas}\n Carboidratos: ${carboidratos}\n Bebidas: ${bebidas}\n Limpeza: ${limpeza}\n Outros: ${outros}\n Qual produto você deseja remover?`);
            if(frutas.indexOf(remover) != -1){
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(verduras.indexOf(remover) != -1){
                verduras.splice(verduras.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(laticinios.indexOf(remover) != -1){
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(proteinas.indexOf(remover) != -1){
                proteinas.splice(proteinas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(carboidratos.indexOf(remover) != -1){
                carboidratos.splice(carboidratos.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(bebidas.indexOf(remover) != -1){
                bebidas.splice(bebidas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(limpeza.indexOf(remover) != -1){
                limpeza.splice(limpeza.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else if(outros.indexOf(remover) != -1){
                outros.splice(outros.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso!`)
            } else {
                alert(`Não foi possível encontrar o item dentro da lista!`)
            }
        }
    }
};

alert(`Lista de Compras:\n Frutas: ${frutas}\n Verduras: ${verduras}\n Laticinios: ${laticinios}\n Proteinas: ${proteinas}\n Carboidratos: ${carboidratos}\n Bebidas: ${bebidas}\n Limpeza: ${limpeza}\n Outros: ${outros}\n`);
