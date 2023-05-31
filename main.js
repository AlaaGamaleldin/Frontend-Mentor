let subscrib = document.getElementById("#subscrbe-btn");

let input1 = document.getElementById("#sub-btn");
let requerd = document.getElementById("#requerd");
function subscribeBtn(e){

     if(input1.value === ""){
        requerd.style.display = "block";
        input1.style.border =  "1px solid red";
        return false;
        
    }
    e.preventDefault();
}

/*
    let main = document.getElementsByClassName(".main-container");
    let success = document.getElementsByClassName(".success-active");
    
    let dismiss = document.getElementById("#dismiss");

    
    
    
   
    
    
        */
