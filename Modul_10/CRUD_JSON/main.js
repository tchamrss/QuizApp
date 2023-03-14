
let allTasks = [];

/**
 * 
 * this function is used to add a task to the list and save it in the local storage
 */
function addTask(){
    let description = document.getElementById('description');
    let category = document.getElementById('category');

    let task = {
        'description': description.value,
        'category': category.value,
        'createAt':new Date().getTime()
    };

    allTasks.push(task);
    console.log('pushed Tasks:', allTasks);
    let allTaskAsText = JSON.stringify(allTasks);
    localStorage.setItem('allTasks', allTaskAsText);
    console.log('after save Tasks:', allTasks);
    
}


function loadAllTasks(){
     let allTaskAsText = localStorage.getItem('allTasks');
     allTasks = JSON.parse(allTaskAsText);

     /* if(allTaskAsText){
        allTasks = JSON.parse(allTaskAsText);
    } */
    
    console.log('loaded All Tasks:', allTasks);

}