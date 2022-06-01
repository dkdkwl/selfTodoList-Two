// 유저가 값을 입력한다. ok
// +버튼을 클릭하면, 할일이 추가된다. none
// delete버튼을 누르면 할일이 삭제된다. ok 
// check버튼을 누르면 할일이 끝나면서 밑줄이 간다.ok none
// 1. check 버튼을 클릭하는 순간 true ok
// 2. true이면 끝난걸로 간주하고 밑줄 보여주기 none
// 3. false 이면 안끄ㅌ난걸로 알고 간주하고 보야주기  ok
// 진행중 끝남 탭을 누르면, 언더바가 이동한다. 
// 끝남탭은, 끝난아이템만, 진행중탭은 진행중인 아이템만 
// 전체탭을 누르면 다시 전체아이템으로 돌아옴


let taskInput = document.querySelector(".task-input");
let buttonAdd = document.querySelector(".button-add");
let taskBoard = document.querySelector("#task-board");
let tabType = document.querySelectorAll(".tab-type > div");
let firstSort = "tab-all";
let currentId = "";
let taskList = [];
let completeList = [];

buttonAdd.addEventListener("click",taskAdd);
for(let i = 0; i < tabType.length; i++){
    tabType[i].addEventListener("click",(e)=>{
        tabSort(e);
    });
}

function taskAdd(){
    let userValue = taskInput.value;
    task = {
        id : randomIDGenerate(),
        content : userValue,
        isComplete : false
    }
    taskList.push(task);
    render(firstSort);
}

function render(sort){
    
    let taskContent = "";

    console.log(sort)
    debugger;
    if(sort == "tab-all"){
        console.log("전체보기")
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
    }else if(sort ="tab-not-done"){
        for(let i = 0; i < completeList.length; i++){
            if(completeList[i].isComplete == true){
                taskContent += `<div class="task task-done">
                    <span>${completeList[i].content}</span>
                    <div class="button-box">
                    <button onClick="taskCheck('${completeList[i].id}')"><i class="fa fa-check" aria-hidden="true"></i></button>
                    <button onClick="taskDelete('${completeList[i].id}')"><i" class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>`
            }else{
                taskContent += `<div class="task">
                    <span>${completeList[i].content}</span>
                    <div class="button-box">
                    <button onClick="taskCheck('${completeList[i].id}')"><i class="fa fa-check" aria-hidden="true"></i></button>
                    <button onClick="taskDelete('${completeList[i].id}')"><i" class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>`
            }
        }
        
    }
    console.log(taskContent);
    taskBoard.innerHTML = taskContent;


    console.log(taskList)
}

function taskDelete(id){
    for(let i=0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList.splice(i,1);
        }
    }
    render(currentId);
}

function taskCheck(id){
    for(let i=0; i < taskList.length; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete;            
        }
    }
    //console.log(taskList);
    render(currentId);
}

function tabSort(e){
    currentId = e.currentTarget.id;
    completeList = [];

    if(currentId == "tab-all"){
        render(currentId);
    }else if(currentId == "tab-not-done"){
        for(let i = 0; i < taskList.length; i++){
            if(taskList[i].isComplete == true){
                completeList.push(taskList[i])
            }
        }        
    }
    render(currentId);
}


function randomIDGenerate(){
    return "_" + Math.random().toString(36).substr(2, 9);
}
   