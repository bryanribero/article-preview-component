const iconShare = document.getElementById("share");
const divDisplay = document.getElementById("content-display");


iconShare.addEventListener("click", () =>{
    iconShare.classList.toggle("active");
    divDisplay.classList.toggle("visible")
})
