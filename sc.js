// let taskform    = document.getElementById('task_from');
// let taskinput   = document.getElementById('task_input');
// let tasklist    = document.getElementById('task_list');
// let taskfilter  = document.getElementById('filter_task');
// let taskclear   = document.getElementById('clear_task');

// //add task
// taskform.addEventListener('submit', Addtask);
// function Addtask(e){
//     if(taskinput.value === ""){
//         alert("add some task");
//     }
//     else{
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(taskinput.value + " ")) ;
//         let link = document.createElement('a');
//         link.setAttribute('href', '#');
//         link.innerHTML = 'x';
//         li.appendChild(link);
//         tasklist.appendChild(li);


//         storTaskInLocalstorage(taskinput.value)
//         taskinput.value = '';

//     }

//     e.preventDefault();
// }

// //remove task
// tasklist.addEventListener('click',Removetask);
// function Removetask(e){
//     if(e.target.hasAttribute('href')){
//         if(confirm('are you sure remove it')){
//             let ele = e.target.parentElement;
//             ele.remove();
//             removefromls(ele);
//         }
//     }

// }

// //clear task
// taskclear.addEventListener('click', ClearTask)

// function ClearTask(e){
//     if (confirm('are you sure clear all')) {
//         while(tasklist.firstChild){
//             tasklist.removeChild(tasklist.firstChild);
//         }
//         localStorage.clear()
//     }
// }
// //taskfilter
// taskfilter.addEventListener('keyup', Filtertask);
// function Filtertask(e){
//     let utext = e.target.value.toLowerCase();


//     document.querySelectorAll('li').forEach(task => {
//         let item = task.firstChild.textContent.toLowerCase();
        
//         if(item.indexOf(utext) != -1){
//             task.style.display = 'block';
//         }
//         else{
//             task.style.display = 'none';
//         }
//     })
// }



// //stor in local
// function storTaskInLocalstorage(task){
//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     }
//     else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }
//     tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(tasks))
// }

// document.addEventListener('DOMContentLoaded', gettask);

// function gettask(){
//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     }
//     else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.forEach(task => {
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(task + " ")) ;
//         let link = document.createElement('a');
//         link.setAttribute('href', '#');
//         link.innerHTML = 'x';
//         li.appendChild(link);
//         tasklist.appendChild(li);
//     })

// }

// /////
// function removefromls(taskItem){
//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     }
//     else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     let li = taskItem;
//     li.removeChild(li.lastChild);

//     tasks.forEach((task, index) => {
//         if(li.textContent.trim() === task){
//             tasks.splice(index, 1);
//         }
//     });

//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

































