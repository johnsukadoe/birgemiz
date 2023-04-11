document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('burger').addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open");
    });

    

});
const openPopUp = document.getElementById("cityy");
const closePopUp = document.getElementById("popUp-close");
const popUp = document.getElementById("complexes-in-city");
openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('openPopUp');
});

closePopUp.addEventListener('click', function(){
    popUp.classList.remove('openPopUp');
});
