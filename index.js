let statusImgEl = document.getElementById("statusImg");
let togglerEl = document.getElementById("toggler");

let isLiked = true;

 function onStatusChange(){
    if(isLiked){
        statusImgEl.src="https://tse3.mm.bing.net/th/id/OIP.AkrjWCFM2PAj9F2nRsFuJgHaE8?r=0&pid=Api&h=220&P=0";
        togglerEl.textContent = "unlike";
        togglerEl.classList.remove("btn-primary");
        togglerEl.classList.add("btn-danger");

        isLiked = false;
    }
    else{
        statusImgEl.src = "https://tse4.mm.bing.net/th/id/OIP.1Tf-Yl3R9rA-PqgSzcH7lAHaE8?r=0&pid=Api&h=220&P=0";
        togglerEl.textContent = "like";
        togglerEl.classList.remove("btn-danger");
        togglerEl.classList.add("btn-primary");
        isLiked = true;
    }

 }

