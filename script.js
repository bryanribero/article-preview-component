const iconShare = document.getElementById("share");
const divDisplay = document.getElementById("content-display");


iconShare.addEventListener("click", () =>{
    iconShare.classList.toggle("share-main");
    iconShare.classList.toggle("share-second");
    if(iconShare.classList.contains("share-second")){
        
    }
})
