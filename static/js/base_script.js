// responsive navbar massacre

let open_ham = document.querySelector('#openham');
let close_ham = document.querySelector('#closeham');
let navigation_items = document.querySelector(".navigation-items");
let button = "open";

let toggle = (open, close, nav) =>{
    open_ham.style.display = open;
    close_ham.style.display = close;
    navigation_items.style.display = nav;
}

open_ham.addEventListener('click',() => {toggle("none", "inline", "flex"); button="close";});
close_ham.addEventListener('click', ()=> {toggle("inline", "none", "none"); button="open";});



function reset(x){
    console.log("why?")
    if(x.matches){
        open_ham.style.display = "none";
        close_ham.style.display = "none";
        navigation_items.style.display = "flex";
        button = "open";
    }
}

const x = window.matchMedia("(min-width:769px)");
x.addEventListener("change", () => reset(x));

function reset2(y){
    if(y.matches){

        if(button="open"){
            open_ham.style.display = "inline";
            close_ham.style.display = "none";
            navigation_items.style.display = "none";

        }
        else{
            open_ham.style.display = "none";
            close_ham.style.display = "inline";
            navigation_items.style.display = "flex";
        }
    }
}

const y = window.matchMedia("(max-width:768px)");
y.addEventListener("change", () => reset2(y));