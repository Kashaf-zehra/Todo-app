var list=document.getElementById("list")

function addTodo(){
    var todo_item=document.getElementById("todo-item")
    var li=document.createElement("li")
    //var li=document.createElement("hr")
    var listText=document.createTextNode(todo_item.value)
    li.appendChild(listText)
    list.appendChild(li)

    var delBtn=document.createElement("button")
    var delText=document.createTextNode("Delete")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    var editBtn=document.createElement("button")
    var editText=document.createTextNode("Edit")
    editBtn.setAttribute("class","btn")
     editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)

    li.appendChild(editBtn)
    li.appendChild(delBtn)


    todo_item.value=""
    console.log(li)

    // console.log(todo_item.value)
}
function editItem(e){
    var val=e.parentNode.firstChild.nodeValue;
  
    var editValue=prompt("Enter edit value",val)
    e.parentNode.firstChild.nodeValue=editValue;

}

function deleteItem(e){
      e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML=""
}