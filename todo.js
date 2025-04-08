document.getElementById("btnsave").addEventListener("click", function () {
  //localStorage.clear();
  let input = document.getElementById("input");
  let title = input.value.trim();

  if (title === "") {
    return (input.value = "");
  }
  let task = JSON.parse(localStorage.getItem("task")) || [];
  task.push(title);
  localStorage.setItem("task", JSON.stringify(task));
  input.value = "";
  displayValues();
});

function displayValues() {
  let task = JSON.parse(localStorage.getItem("task")) || [];

  let listvalue = document.getElementById("taskList");
  listvalue.innerHTML = "";

  task.forEach((element, index) => {
    let li = document.createElement("li");
    li.textContent = element + " ";
    let deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.addEventListener("click", function () {
      removetask(index);
    });
    li.append(deletebutton);
    listvalue.append(li);
  });
}

function removetask(index) {
  let task = JSON.parse(localStorage.getItem("task")) || [];
  task.splice(index, 1);
  localStorage.setItem("task", JSON.stringify(task));
  displayValues();
}
