const input = document.getElementById("listItem");
const button = document.getElementById("addItem");
const taskList = document.getElementById("taskList");

// empty array
let taskArray = [];

button.addEventListener("click", () => {
    let task = input.value;
    taskArray.push(task);  // Add task to the array
    console.log(taskArray);  // Log the array 

    // new list item 
    let li = document.createElement('li');
    li.innerText = task;

//remove button
    let removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    li.appendChild(removeButton);


    let editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    li.appendChild(editButton);


    taskList.appendChild(li);


    removeButton.addEventListener('click', () => {
        li.remove();
    });

    //edit button
    editButton.addEventListener('click', () => {
        let newTask = ("Edit your task:", task);
        

        if (newTask !== null) {
            task = newTask; 
            li.innerText = task;
            li.appendChild(removeButton);
            li.appendChild(editButton);
        }
    });
});