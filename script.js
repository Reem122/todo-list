//btn is not disabled when input is entered  
function btnNotDisabled(){
  var input = document.getElementById("input").value;
    var submit = document.getElementById("submit");
    submit.classList.remove("disabled");
    if(input == ""){
      submit.classList.add("disabled")
    }
  
}

// add task
function addTask(){
  var input = document.getElementById("input").value;
  var submit = document.getElementById("submit");
  var tasks = document.getElementById("tasks");
  var task = document.createElement("li");
  task.classList.add("task", "position-relative");
  tasks.appendChild(task);
  task.innerHTML = `<input type="checkbox" class="checkbox form-check-input mb-2 mb-md-0">
                    <p contenteditable="true">${input}</p>
                    <i onclick="this.parentElement.remove()" class="bi bi-x-lg position-absolute"></i>`;
  document.getElementById("input").value = "";
  submit.classList.add("disabled");
  document.querySelector(".checkbox").addEventListener("input", function(){
    this.nextElementSibling.classList.toggle("text-decoration-line-through");
  })
}