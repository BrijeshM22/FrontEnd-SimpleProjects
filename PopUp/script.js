const openel = document.getElementById("open");
const closeel = document.getElementById("close");
const popel = document.getElementById("popupContainerId");

openel.addEventListener("click",()=>{
    popel.classList.add("active");
});

closeel.addEventListener("click",()=>{
    popel.classList.remove("active");
});
