const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

console.log(initialTasks);

// Initializing data

const todoTaskContainer = document.getElementById("task-container-todo");
const doingTaskContainer = document.getElementById("task-container-doing");
const doneTaskContainer = document.getElementById("task-container-done");
const modal = document.getElementById("myModal");

// Search task object status for "todo", "doing" and "done" (counter added for the numbers in the column headings)

let todoCount = 0;
let doingCount = 0;
let doneCount = 0;

initialTasks.forEach((task) => {
  if (task.status === "todo") {
    let newTodoTask = document.createElement("div");
    newTodoTask.innerText = task.title;
    newTodoTask.classList.add("task-div");
    newTodoTask.addEventListener("click", (e) => {
      document.getElementById("modal-task-title").innerText = task.title;
      document.getElementById("modal-task-description").innerText =
        task.description;
      modal.style.display = "block";
    });
    todoTaskContainer.appendChild(newTodoTask);
    todoCount++;
  }

  if (task.status === "doing") {
    let newDoingTask = document.createElement("div");
    newDoingTask.innerText = task.title;
    newDoingTask.classList.add("task-div");
    doingTaskContainer.appendChild(newDoingTask);
    doingCount++;
  }

  if (task.status === "done") {
    let newDoneTask = document.createElement("div");
    newDoneTask.innerText = task.title;
    newDoneTask.classList.add("task-div");
    doneTaskContainer.appendChild(newDoneTask);
    doneCount++;
  }
});

document.getElementById("todo-column-header").innerText =
  "TODO (" + todoCount + ")";
document.getElementById("doing-column-header").innerText =
  "DOING (" + doingCount + ")";
document.getElementById("done-column-header").innerText =
  "DONE (" + doneCount + ")";

//

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
