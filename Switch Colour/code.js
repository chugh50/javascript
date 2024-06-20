const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(buttons);
buttons.forEach(function(button){
        console.log(button);
        button.addEventListener("click",function(eve){
            if(eve.target.id === "grey"){
                body.style.backgroundColor = eve.target.id;
            }
            if(eve.target.id === "white"){
                body.style.backgroundColor = eve.target.id;
            }
            if(eve.target.id === "blue"){
                body.style.backgroundColor = eve.target.id;
            }
            if(eve.target.id === "yellow"){
                body.style.backgroundColor = eve.target.id;
            }
        });   
});
