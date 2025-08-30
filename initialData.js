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

// Search task object status for "todo", "doing" and "done"

initialTasks.forEach((task) => {
  if (task.status === "todo") {
    let newTodoTask = document.createElement("div");
    newTodoTask.innerText = task.title;
    newTodoTask.classList.add("task-div");
    todoTaskContainer.appendChild(newTodoTask);
  }
});
