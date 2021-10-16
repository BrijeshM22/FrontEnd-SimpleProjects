const containerel = document.getElementById("container");
const img = document.querySelector("img");

containerel.addEventListener("mousemove",(e)=>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform =  "scale(2)";
});

containerel.addEventListener("mouseleave",(e)=>{
    img.style.transformOrigin = "center center";
    img.style.transform =  "scale(1)";
});


