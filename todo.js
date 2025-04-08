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
    li.textContent = element;
    listvalue.append(li);
  });
}
