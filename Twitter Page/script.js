const subMenu  = document.querySelector(".subMenu");


let subHidden = true;

function subMenuToggle(){
    if(subHidden){
        subMenu.classList.add("hidden");
        subHidden = false;
    }
    else{
        subMenu.classList.remove("hidden");
        subHidden = true;
    }
}



document.addEventListener("DOMContentLoaded", subMenuToggle);