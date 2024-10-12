const progress = document.querySelectorAll(".progress") as NodeListOf<HTMLElement>;
let i = 1;

progress.forEach((singleProgress)=>{
    if(i % 2 === 0) {
        singleProgress.style.backgroundColor = "#37bc9b"
    } else {
        singleProgress.style.backgroundColor = "#4a89dc"
    }
    i++;
});