
let titles =[];
let notices = [];
load();

 
function notizBlock(){
    let content = document.getElementById('content') ;
    let notescont = document.getElementById('notesCont') ;
    notescont.innerHTML = ``;
    content.innerHTML = ``;
    content.innerHTML = /*html */ `
    <div class="noticeAreaContent">
        <div class="inputArea-content">
            <div >
                <input type="text" placeholder="Title or Day" id="title" class="inputTitle">             
            </div>
    
    
            <div class="notice-content">
                <textarea class="noticeArea" placeholder="Notiz schreiben" id="notice" cols="30" rows="10"></textarea>
    
            </div>   
        </div>
        
        <div >
            <button class="button-style" onclick="addNote()"> Add Notes</button> 
        </div>
    </div>
    
    `;
   
   
        for(i =0 ; i < titles.length; i++){
            
            
            notescont.innerHTML += /*html */ `
            
                <div class="notices">
                <pre id="myTitle${i}"><b>${titles[i]}</b> </pre>
                    <pre id="myNote${i}">${notices[i]}</pre>
                    <button class="delete-button" onclick="deleteNote(${i})">Delete</button>
                    <button class="edit-button" onclick="editNote(${i})">Edit</button>
                    <button class="save-button" onclick="saveNote(${i})">Save</button>
                
                </div>
            
            `; 
            /* </div> */
        }
    
}

function addNote(){
    let title = document.getElementById('title').value;
    let notice = document.getElementById('notice').value;
    if(title && notice){
        titles.push(title);
        notices.push(notice);     
    }
    notizBlock(); 
    save();
}

function deleteNote(position){
    titles.splice(position,1);
    notices.splice(position,1);
    notizBlock();
    save();

}

function save(){
    let titlesAsText = JSON.stringify(titles);
    localStorage.setItem('titles',titlesAsText);

    let noticesAsText = JSON.stringify(notices);
    localStorage.setItem('notices',noticesAsText); 
}

function load(){
    titlesAsText = localStorage.getItem('titles');
    noticesAsText = localStorage.getItem('notices');
    if(titlesAsText && noticesAsText){

        titles = JSON.parse(titlesAsText);
        notices = JSON.parse(noticesAsText);
    }
    
}

function editNote(index){
    
    document.getElementById(`myNote${index}`).contentEditable = true; 
    document.getElementById(`myTitle${index}`).contentEditable = true;    

} 

function saveNote(index){
    document.getElementById(`myNote${index}`).contentEditable = false;
    document.getElementById(`myTitle${index}`).contentEditable = false;   
    let notice = document.getElementById(`myNote${index}`).innerHTML;
    let title = document.getElementById(`myTitle${index}`).innerHTML;
    notices[index] = notice;
    titles[index] = title;
    save();
    load();
} 



 
