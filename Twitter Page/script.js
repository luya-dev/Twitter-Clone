const subMenu  = document.querySelector(".subMenu");
const toggle = document.querySelector("#menuToggle");

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

document.addEventListener("click", e=>{
    if(!subMenu.contains(e.target) && !toggle.contains(e.target)){
        subMenu.classList.add("hidden");
        subHidden = false;
    }

})


document.addEventListener("DOMContentLoaded", subMenuToggle);