let tarefas = [];

function adicionarTarefa() {
  //recebe valor do input do usuário
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem");

  // se o valor do input for vazio então mostre uma mensagem de erro
  if (tarefa == "") {
    //mostre uma mensagem de erro
    let mensagemErro = "Digite uma tarefa para adicioná-la na lista!";
    mensagem.textContent = mensagemErro;
  } else {
    //mensagem de tarefa adicionada com sucesso
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso;
    tarefas.push(tarefa);
    renderizarTarefas();
  }

  // Reseta as informações no input
  inputTarefa.value = "";
}

function renderizarTarefas() {
  const listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];

    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerTarefa(i);

    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(i);

    novaTarefa.appendChild(botaoRemover);
    novaTarefa.appendChild(editarTarefa);
    listaTarefas.appendChild(novaTarefa);
  }
}

function removerTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa: ");
  if (tarefaEditada.trim !== "") {
    tarefas[i] = tarefaEditada;
    renderizarTarefas();
  }
}

function limparLista() {
  tarefas.length = 0;
  renderizarTarefas();
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Lista de tarefas limpa com sucesso";
}
