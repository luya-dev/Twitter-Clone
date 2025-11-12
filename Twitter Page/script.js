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





// This is for the chatbot icon and modal elements
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotModal = document.getElementById('chatbot-modal');
const closeBtn = document.querySelector('.close');

// This is  for chatbot icon click
chatbotIcon.addEventListener('click', () => {
    chatbotModal.style.display = 'block';
});

// This is for the close button click
closeBtn.addEventListener('click', () => {
    chatbotModal.style.display = 'none';
});

// This is for outside click
window.addEventListener('click', (e) => {
    if (e.target === chatbotModal) {
        chatbotModal.style.display = 'none';
    }
});