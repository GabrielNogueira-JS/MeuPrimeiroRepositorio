
let listaDeTarefas = [];
let nomes = [];
adicionarElementoLIsta(listaDeTarefas , "Varrer");
adicionarElementoLIsta(listaDeTarefas , "limparbanheiro");
exibirLista(listaDeTarefas); 
listaDeTarefas.pop([0]);

adicionarElementoLIsta(nomes , "Maria");
adicionarElementoLIsta(nomes , "João");
console.log(nomes);



function exibirLista(lista){
    console.log(lista);
}

function adicionarElementoLIsta(lista , elemento){
    lista.push(elemento);
}


function excluirElementoLista(lista,indice){
    lista.pop([indice]);
}




