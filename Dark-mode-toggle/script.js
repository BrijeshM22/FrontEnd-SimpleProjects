const toggleel = document.getElementById("toggleid");

toggleel.addEventListener("change",(e)=>{
    document.body.classList.toggle("dark",e.target.checked);
});