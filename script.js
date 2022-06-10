// I need to access the input -> change innerHTML to task entered
// I need a click event on the + button
// when + clicked -> if input value === true -> add the task to tasks list and clear input
console.dir(document);

const tasksInput = document.querySelector("#tasksInputField");
const addTaskBtn = document.querySelector(".tasksInputForm__Btn");
const task = document.querySelector(".tasksList__task");
const tasksList = document.querySelector(".tasksList");
let tasksCount = document.querySelector("#tasksCount");


//ADD A TASK TO THE THE LIST
addTaskBtn.addEventListener("click", () => {
  if (tasksInput.value === "") {
    tasksInput.value = "";
  } else {
    tasksList.innerHTML += `
    <li class="tasksList__item">
      <input id="tasksListCheckbox" type="checkbox" />
      <p class="tasksList__task">${tasksInput.value}</p>
    </li>
  `;
  tasksInput.value = "";
  };
  
    // task.innerHTML = tasksInput;
  // if (tasksInput.value === "") {
  //   tasksInput.innerHTML = "Please enter a task";
  // } else {
  //   tasksList.innerHTML += `
  //     <li class="tasksList__item">
  //       <input id="tasksListCheckbox" type="checkbox" />
  //       <p class="tasksList__task"></p>
  //     </li>
  //   `;
  // }
  //task.innerHTML = tasksInput.innerHTML;
});

// if taskslist is empty -> message, if not empty -> tasks to complete and number
let taskCountMessage = () => {
  if (tasksList.innerHTML === "") {
    tasksCount.innerHTML = "All tasks have been completed. Great job!";
  } else if (tasksList.innerHTML !== "") {
    tasksCount.innerHTML = "Tasks to Complete:";
  };  
};
taskCountMessage();