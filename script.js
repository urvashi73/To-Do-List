const inputBox = document.getElementById('inputBox');
const tasklist = document.getElementById('taskList');

function addTask(){
    const inputText = inputBox.value.trim();
    if(inputText !== ''){
        const li = document.createElement('li');
        li.innerText = inputText;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';
        deleteButton.addEventListener('click' , removeTask);

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        inputBox.value = '';

    }
}
function removeTask(){
    const listItem = this.parentNode;
    listItem.remove();
}
