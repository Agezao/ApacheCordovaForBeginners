// Variaveis para armazenar os itens
var items = [];
var itemsSelecionados = [];

function MostraItems() {
    // Limpando a lista de itens da tela
    document.getElementById("items").innerHTML = ""
    // Percorrendo lista de itens e renderizando os itens na tela
    for (var i in items) {
        // Criando o botão que irá selecionar o item
        var botaoSelecionaItem = document.createElement('button');
        botaoSelecionaItem.setAttribute("itemIndex", i);
        botaoSelecionaItem.setAttribute("id", "itemButton" + i);
        botaoSelecionaItem.innerHTML = "ok";

        // Criando o item da lista para ser adicionado na listagem
        var domItem = document.createElement('div');
        domItem.setAttribute("class", "shopItem");
        domItem.setAttribute("itemIndex", i);
        domItem.appendChild(botaoSelecionaItem); // Adicionando o botão no item
        domItem.innerHTML += items[i];

        document.getElementById("items").appendChild(domItem); // Adicionando o item na listagem de itens

        botaoSelecionaItem = document.getElementById("itemButton" + i); // Resgatando o nosso botão que irá selecionar o item do DOM
        botaoSelecionaItem.addEventListener('click', SelecionaItem); // Atribuindo chamada da função que irá selecionar o item ao clicar no botão de seleção
    }
    // Percorrendo lista de itens já selecionados e renderizando os itens na tela
    for (var i in itemsSelecionados) {
        // Criando o item da lista para ser adicionado na listagem
        var domItem = document.createElement('div');
        domItem.setAttribute("class", "shopItem");
        domItem.setAttribute("selecionado", "true"); // Dizendo que este item está selecionado através de uma propriedade
        domItem.setAttribute("itemIndex", i);
        domItem.innerHTML = itemsSelecionados[i];

        document.getElementById("items").appendChild(domItem); // Adicionando o item na listagem de itens
    }
}

function AdicionarItem() {
    var item = document.getElementById("novoItem").value; // Pegando o valor do item do campo 
    document.getElementById("novoItem").value = ""; // Limpando o campo de volta
    items.push(item); // Adicionando o item na nossa lista de itens
    //saveData();
    MostraItems(); // Re-listar os itens na tela, chamando a nossa função para “renderizar” a lista de itens.
}

function SelecionaItem() {
    var index = this.attributes["itemIndex"].value; // Pegando a posição do item que foi selecionado
    itemsSelecionados.push(items[index]); // Adicionando o item que foi selecionado na lista de itens selecionados
    items.splice(index, 1); // Removendo o item selecionado da lista de itens não-selecionados
    //saveData();
    MostraItems(); // Re-listar os itens na tela, chamando a nossa função para “renderizar” a lista de itens.
}

function Limpar() {
    if (!confirm("Deseja realmente limpar?")) // Exibindo mensagem de confirmação para o usuário
        return false;

    items = []; // Esvaziando a lista de itens "pendentes"
    itemsSelecionados = []; // Esvaziando a lista de itens selecionados
    //saveData();
    MostraItems(); // Re-listar os itens na tela. Como as listas estão vazias o App estará "como novo".
}

// Atrelando eventos aos botões e mostrando a lista a primeira vez depois de carregar.
MostraItems();
document.getElementById('btnAddItem').addEventListener('click', AdicionarItem);
document.getElementById('btnLimpar').addEventListener('click', Limpar);
