const buttonAdicionar = document.querySelector('.adcTask');
const inputTask = document.querySelector('input')


 function addTask(){
   
    let task = inputTask.value

    document.querySelector('p').textContent = "Tarefa Adicionada!";


    let tagUl = document.querySelector('ul')
    let newTask = document.createElement('li')
    let close = document.createElement('button')
    if (task !== '') {
        newTask.textContent = task;
        tagUl.appendChild(newTask)
        newTask.appendChild(close)
    } else {
        document.querySelector('p').textContent = "Adicione uma nova tarefa!"
    }

    inputTask.value = '';

    const removerTarefa = close;
    removerTarefa.addEventListener('click', () => {
        newTask.remove()
    })
};
buttonAdicionar.addEventListener( 'click', addTask)
inputTask.addEventListener ('keydown', (e) =>{
    if (e.key === 'Enter') {
        addTask();
    }
})



