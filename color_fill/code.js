const start = document.querySelector("#start");
const stop1 = document.querySelector("#stop");

const color = "123456789ABCDEF";


function choosecolor(){
    let s = "#";
    for(let i=0;i<6;i++){
        randNo = Math.round(Math.random()*10);
        s += color[randNo];
        }   
    return s;
}

let IntervalId;

start.addEventListener("click",function(e){
    e.preventDefault();
    console.log(e);
    IntervalId = setInterval(function(){
                    console.log(choosecolor());
                   document.body.style.backgroundColor = choosecolor();
                },1000)

});

stop1.addEventListener("click",function(e){
        e.preventDefault();
        clearInterval(IntervalId);
});