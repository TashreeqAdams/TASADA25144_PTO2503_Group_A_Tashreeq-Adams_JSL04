// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var task1 = document.getElementById("taskDiv1");
var task2 = document.getElementById("taskDiv2");
var task3 = document.getElementById("taskDiv3");
var task4 = document.getElementById("taskDiv4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
task1.onclick = function () {
  modal.style.display = "block";
};

task2.onclick = function () {
  modal.style.display = "block";
};

task3.onclick = function () {
  modal.style.display = "block";
};

task4.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
