let submit = document.getElementById("input-btn");



function submiting(){
let first = document.getElementById("input-First-name");
let last = document.getElementById("input-last-name");
let email = document.getElementById("input-email");
let password = document.getElementById("input-password");

    if (first.value === ""){
        document.getElementById("name1").innerHTML = "First name can not be empty";
        first.style.border =  "1px solid red";
        return false;
    }
    if (last.value === ""){
            
        document.getElementById("name2").innerHTML = "last name con not be empty";
        last.style.border =  "1px solid red";
        return false;
    }
    if (email.value === ""){
        document.getElementById("name3").innerHTML = "looks like this is not email";
        email.style.border = "1px solid red";
        return false;
    }
    if (password.value === ""){
        document.getElementById("name4").innerHTML = "Password can not be empty"
        password.style.border = "1px solid red";
        return false;
    }   
}

 

    