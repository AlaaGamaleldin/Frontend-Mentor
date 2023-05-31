let subscrib = document.getElementById("subscrbe-btn");
let main = document.getElementById("main-container");
let success = document.getElementById("success-active");
let dismiss = document.getElementById("dismiss");
let input1 = document.getElementById("sub-btn");
let requerd = document.getElementById("requerd");
function subscribeBtn(e){
     if(input1.value === ""){
        requerd.style.display = "block";
        input1.style.border =  "1px solid red";
        return false;
        
    } else{
        main.style.display = "none";
        success.style.display = "block";
        
        
    }
    
}

/*
    
    
    
    
   
    
    
        */
