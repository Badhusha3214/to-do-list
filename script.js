const input = document.getElementById("myInput")
const list = document.getElementById("list")
function addTask(){
    if(input.value === ''){
        alert('Please add a task');
    }
    else {
        let li = document.createElement("li");
        // li.className="list-group-item";
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span); 
    }
    input.value = "";
    saveDate();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }
}, false);

function saveDate(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();