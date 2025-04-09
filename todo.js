// document.getElementById("btnsave").addEventListener("click", function () {
//   //localStorage.clear();
//   let input = document.getElementById("input");
//   let title = input.value.trim();

//   if (title === "") {
//     return (input.value = "");
//   }
//   let task = JSON.parse(localStorage.getItem("task")) || [];
//   task.push(title);
//   localStorage.setItem("task", JSON.stringify(task));
//   input.value = "";
//   displayValues();
// });

// function displayValues() {
//   let task = JSON.parse(localStorage.getItem("task")) || [];

//   let listvalue = document.getElementById("taskList");
//   listvalue.innerHTML = "";

//   task.forEach((element, index) => {
//     let li = document.createElement("li");
//     li.textContent = element + " ";
//     let deletebutton = document.createElement("button");
//     deletebutton.textContent = "Delete";
//     deletebutton.addEventListener("click", function () {
//       removetask(index);
//     });
//     li.append(deletebutton);
//     listvalue.append(li);
//   });
// }

// function removetask(index) {
//   let task = JSON.parse(localStorage.getItem("task")) || [];
//   task.splice(index, 1);
//   localStorage.setItem("task", JSON.stringify(task));
//   displayValues();
// }

document.getElementById("btnsave").addEventListener("click", function () {
  //localStorage.clear();
  let todoinput = document.getElementById("todoinput");
  let todotext = document.getElementById("todotext");
  let todoinputtrim = todoinput.value.trim();
  let todotexttrim = todotext.value.trim();

  if (todoinputtrim === "" && todotexttrim === "") {
    todoinput.value = "";
    todotext.value = "";
    return;
  }

  let inputvalue = JSON.parse(localStorage.getItem("inputvalue")) || [];
  inputvalue.push(todoinputtrim);
  localStorage.setItem("inputvalue", JSON.stringify(inputvalue));
  todoinput.value = "";

  let textvalue = JSON.parse(localStorage.getItem("textvalue")) || [];
  textvalue.push(todotexttrim);
  localStorage.setItem("textvalue", JSON.stringify(textvalue));
  todotext.value = "";

  console.log(todoinputtrim);
  console.log(todotexttrim);

  displayvalues();
});

function displayvalues() {
  let inputvalue = JSON.parse(localStorage.getItem("inputvalue")) || [];
  let textvalue = JSON.parse(localStorage.getItem("textvalue")) || [];

  let todolist = document.getElementById("todolist");
  todolist.innerHTML = "";

  inputvalue.forEach((element, index) => {
    let wrapper = document.createElement("div");

    let input = document.createElement("input");
    input.value = element;
    input.disabled = true;

    let textarea = document.createElement("textarea");
    textarea.value = textvalue[index] || "";
    textarea.disabled = true;

    let deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.addEventListener("click", function () {
      deletelist(index);
    });

    wrapper.appendChild(input);
    wrapper.appendChild(document.createElement("br"));
    wrapper.appendChild(textarea);
    wrapper.appendChild(document.createElement("br"));
    wrapper.appendChild(deletebutton);

    todolist.appendChild(wrapper);
  });
}

function deletelist(index) {
  let inputvalue = JSON.parse(localStorage.getItem("inputvalue")) || [];
  let textvalue = JSON.parse(localStorage.getItem("textvalue")) || [];

  inputvalue.splice(index, 1);
  textvalue.splice(index, 1);
  localStorage.setItem("inputvalue", JSON.stringify(inputvalue));
  localStorage.setItem("textvalue", JSON.stringify(textvalue));
  displayvalues();
}
