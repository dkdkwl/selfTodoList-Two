// 유저가 값을 입력한다. ok
// +버튼을 클릭하면, 할일이 추가된다. none
// delete버튼을 누르면 할일이 삭제된다.
// check버튼을 누르면 할일이 끝나면서 밑줄이 간다.
// 1. check 버튼을 클릭하는 순간 true 
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기 
// 3. false 이면 안끄ㅌ난걸로 알고 간주하고 보야주기  
// 진행중 끝남 탭을 누르면, 언더바가 이동한다. 
// 끝남탭은, 끝난아이템만, 진행중탭은 진행중인 아이템만 
// 전체탭을 누르면 다시 전체아이템으로 돌아옴


let taskInput = document.querySelector(".task-input");
let buttonAdd = document.querySelector(".button-add");
let taskBoard = document.querySelector("#task-board");
let taskList = [];

buttonAdd.addEventListener("click",taskAdd)

function taskAdd(){
    let userValue = taskInput.value;
    task = {
        id : randomIDGenerate(),
        content : userValue,
        isComplete : false
    }
    taskList.push(task);
    render();
}

function render(){
    let taskContent = "";

    for(let i = 0; i < taskList.length; i++){

        if(taskList[i].isComplete == true){
            taskContent += `<div class="task task-done">
                <span>${taskList[i].content}</span>
                <div class="button-box">
                <button onClick="taskCheck('${taskList[i].id}')"><i class="fa fa-check" aria-hidden="true"></i></button>
                <button onClick="taskDelete('${taskList[i].id}')"><i" class="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </div>`
        }else{
            taskContent += `<div class="task">
                <span>${taskList[i].content}</span>
                <div class="button-box">
                <button onClick="taskCheck('${taskList[i].id}')"><i class="fa fa-check" aria-hidden="true"></i></button>
                <button onClick="taskDelete('${taskList[i].id}')"><i" class="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </div>`
        }
    }
    taskBoard.innerHTML = taskContent;
}

function taskDelete(id){
    for(let i=0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
        }
    }
    render();
}

function taskCheck(id){
    for(let i=0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;            
        }
    }
    console.log(taskList);
    render();
}

function randomIDGenerate(){
    return "_" + Math.random().toString(36).substr(2, 9);
}

    
    