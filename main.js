var input = document.getElementById('taskInput')
var taskList = document.getElementById('taskList')

function handleClick(){

   if (input.value === ""){
    alert("Pls insert a word?")
   }
   else {
    var li = document.createElement('li')
    li.innerHTML = input.value
    taskList.appendChild(li)
   }
   input.value = ''


}