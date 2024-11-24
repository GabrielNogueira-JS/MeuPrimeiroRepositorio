//Você foi contratado para implementar um sistema básico de gerenciador de tarefas. Seu objetivo é criar um programa que permita ao usuário adicionar, listar e remover tarefas.

/*Requisitos:

O programa deve usar JavaScript puro (sem bibliotecas ou frameworks).
As tarefas devem ser armazenadas em um array.
Deve haver funções para:
Adicionar uma tarefa.
Listar todas as tarefas.
Remover uma tarefa pelo índice.*/
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




