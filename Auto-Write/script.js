const text = "Hi, have a wonderful day! :)"

let idx = 0

function autotext(){
    document.body.innerHTML = text.slice(0,idx);
    idx++;

    if (idx > text.length) {
        idx=0;
    }
};

setInterval(autotext,150);