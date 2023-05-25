


function dropOpen(){
    
    const contentWrapper = document.getElementById("wrapper-content");
    const mobileOpen = document.getElementById("mobile-btn-open");
    const mobileClose = document.getElementById("mobile-btn-close");
    contentWrapper.style.display = "block";
    mobileClose.style.display = "block";
    mobileOpen.style.display = "none";
    return false;
}
function dropClose(){
    
    const mobileOpen = document.getElementById("mobile-btn-open");
    const contentWrapper = document.getElementById("wrapper-content");
    contentWrapper.style.display = "none";
    mobileOpen.style.display = "block";
    return false;
}