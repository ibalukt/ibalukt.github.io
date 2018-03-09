var toggle = 1;
document.getElementById("dropdownBar").addEventListener("click", colorSwap);
function colorSwap(){
    if (toggle == 1){
        document.getElementById("tableWrapper").style.display = "inherit";
        toggle = 0
    }
    else{
        document.getElementById("tableWrapper").style.display = "none";
        toggle = 1
    }

}
   