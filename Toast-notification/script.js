const btnel = document.getElementById("btnid");
const containerel = document.getElementById("containerid");

btnel.addEventListener("click",()=>{
creatnotification();
});

function creatnotification() {
  const notif = document.createElement("div");
  notif.classList.add("notify");
  notif.innerHTML = "This is notification";
  containerel.appendChild(notif);

  setTimeout(() => 
  { 
      notif.remove();
  },3000)
};