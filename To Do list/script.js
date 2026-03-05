let inputBox = document.getElementById("textarea");
let add = document.getElementById("add");
let myList = document.getElementById("myList");

function addTask(){

if(inputBox.value === ""){
alert("You must write something");
return;
}
let li = document.createElement("li");
li.innerHTML = inputBox.value;
let editBtn = document.createElement("span");
editBtn.innerHTML = "✏️";
editBtn.className = "edit";
let cross = document.createElement("span");
cross.innerHTML = "✖";
cross.className = "delete";

li.appendChild(editBtn);
li.appendChild(cross);
myList.appendChild(li)
inputBox.value = "";

saveData();
}

add.addEventListener("click",addTask);

inputBox.addEventListener("keypress",function(e){
if(e.key === "Enter"){
addTask();
}
});

myList.addEventListener("click",function(event){
if(event.target.tagName === "LI"){
event.target.classList.toggle("checked");
saveData();
}

else if(event.target.classList.contains("delete")){
event.target.parentElement.remove();
saveData();
}

else if(event.target.classList.contains("edit")){

let li = event.target.parentElement;
let currentText = li.firstChild.textContent;

let newTask = prompt("Edit your task:",currentText);

if(newTask !== null && newTask !== ""){
li.firstChild.textContent = newTask;
saveData();
}
}

});

/* LOCAL STORAGE */
function saveData(){
localStorage.setItem("tasks",myList.innerHTML);
}

function showTask(){
myList.innerHTML = localStorage.getItem("tasks");
}

showTask();