var ajouterButton = document.getElementById("addTaskBtn");

ajouterButton.addEventListener('click', function(){
    var InputValue = document.getElementById("taskInput").value;
    var taskList = document.getElementById("taskList");

    if (InputValue == '' || InputValue == ' ' ) {
        window.alert("Please Fill The Field");
    } else {
        let InputValueWithNoSpace = removeSpaces(InputValue);

        taskList.insertAdjacentHTML('beforeend', `<li id='${InputValueWithNoSpace}' style="padding:12px; background:#f8f9fa; margin:10px 0; border-radius:5px; box-shadow:0 2px 4px rgba(0, 0, 0, 0.1); display:flex; justify-content:space-between; align-items:center; transition:transform 0.2s ease, box-shadow 0.2s ease;">${InputValue}<div><button style="background-color:#28a745; border:none; color:white; padding:5px 10px; border-radius:5px; cursor:pointer; font-size:0.9rem; transition:background-color 0.3s ease; margin-right:8px;" onclick='tacheTerminer(${InputValueWithNoSpace})'>Terminer</button><button style="background-color:#dc3545; border:none; color:white; padding:5px 10px; border-radius:5px; cursor:pointer; font-size:0.9rem; transition:background-color 0.3s ease;" onclick='tacheSupprimer(${InputValueWithNoSpace})'>Supprimer</button></div></li>`);
    }
    

    document.getElementById("taskInput").value = ''; 

   
});

function removeSpaces(InputValue){
    
    var array = [];
    for(let i = 0; i < InputValue.length; i++){
        if(InputValue[i] == ' '){
            continue;
        }
        array[i] = InputValue[i];  
    }

    var finalString = '';
    for (let j = 0; j < array.length; j++) {
        if(array[j] == undefined){
            continue;
            
        }
        finalString = finalString + array[j];    
    }

    return finalString;
}


function tacheTerminer(idTerminer){
    idTerminer.style.textDecoration = "line-through";
    idTerminer.style.color = "#6c757d"; 
    idTerminer.style.backgroundColor = "#e9ecef"; 
    idTerminer.style.opacity = "0.8";     
}

function tacheSupprimer(idTerminer){
    idTerminer.remove();
       
}