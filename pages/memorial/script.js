document.getElementById('burger').addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open");
});

const openPopUp = document.getElementById("cityy");
const closePopUp = document.getElementById("popUp-close");
const popUp = document.getElementById("modal");
openPopUp.addEventListener('click', function(){
    popUp.style.display='block';
});

closePopUp.addEventListener('click', function(){
    popUp.style.display='none';
});
window.addEventListener('click', closeModal);

function closeModal(event){
    if(event.target== modal){
        modal.style.display='none';
    }
}
