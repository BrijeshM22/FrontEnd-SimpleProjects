const btnel =  document.getElementById("btnid");

btnel.addEventListener("click",()=>{
    document.body.style.background = randombg();
});

function randombg(){
    hueval = (Math.floor(Math.random()*360));
    return `hsl(${hueval}, 100%, 50%)`;
}