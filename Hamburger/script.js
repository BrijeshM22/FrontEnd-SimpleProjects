const btnel =  document.getElementById("btnid");
const navel =  document.getElementById("navid");

btnel.addEventListener("click", ()=> {
    navel.classList.toggle("active");
    btnel.classList.toggle("active");    
});