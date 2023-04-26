let start;

var oldPos=0;
var hypPos=0;
var alphachannel=0;
var ultimateTimer=0;
const mission = [];
mission[0] = {blurAmount:100, 
    shadowY:0,
    startTime:1000,
    delay:25
};
mission[1] = {blurAmount:100, shadowY:0};
mission[2] = {blurAmount:100, shadowY:0};

var animateId;
//window.setInterval(()=>{console.log("timer event called")}, 1000);
myelement = document.getElementsByClassName("blur");
window.requestAnimationFrame(myanimate);

window.addEventListener("load", (event) => {
    
    window.setInterval(function () {ultimateTimer++; 
        //console.log(mission[0].blurAmount);
        if (ultimateTimer>25) {document.getElementById("mission").style="display:block";};
        if (ultimateTimer>25) {blurRadius(mission[0], -5);};
        if (ultimateTimer>45) {blurRadius(mission[1], -5);};
        if (ultimateTimer>70) {blurRadius(mission[2], -5);};
        }, 25);
    //console.log(myelement[1].color);
});

document.addEventListener('scroll', (event) =>{
    var newPos = window.scrollY;
    var delta = window.scrollY - window.oldPos;
    if (delta>=5)
        window.hypPos = delta + window.hypPos;
    var e = document.getElementById("hero");
    
    var b = document.getElementById("nav-container");
    var computed = window.getComputedStyle(b, null);
    
    //console.log(`${a.style.top}`);
    //console.log(`${e}`);
    var newPosition = window.scrollY * 0.5;
    if (newPosition >= 170)
    {
        newPosition = 170;
    }
    //console.log("delta:" + delta);
    //console.log("oldPos:" + window.oldPos);
    //console.log("newPos:" + newPos);
    //console.log("hypPos:" + window.hypPos);
    mission[0].shadowY = Math.floor(newPos*.02);
    mission[1].shadowY = Math.floor(newPos*.02);
    mission[2].shadowY = Math.floor(newPos*.02);
    
    //console.log(mission[0].shadowY);
    e.style.backgroundPosition = `45% ${newPosition}px`;
    //a.style.top = `${window.scrollY * -1.0}px`;
    //app1.style.top = `${740 - window.scrollY * 0.2}px`;
    //app2.style.top = `${740 - window.scrollY * 0.1}px`;
    window.oldPos = window.scrollY;
});

function blurRadius(element, increment)
{
    //radius = Number(getComputedStyle(myelement).textShadow.split(" ")[5].replace(/\D+/g,''));
    if (element.blurAmount>0){
        element.blurAmount = element.blurAmount + increment;
        //console.log(`blurRadius called on ${element}`);
    }
    return;
}

function myanimate(timeStamp) {
    if (start===undefined)
    {
        start=timeStamp;
    }
    const elapsed = timeStamp - start;
    //console.log(elapsed);
    myelement[0].style.textShadow = `0px 0px ${mission[0].blurAmount}px #DFFEE1, 0px ${mission[0].shadowY}px ${mission[0].blurAmount}px #000`;
    myelement[1].style.textShadow = `0px 0px ${mission[1].blurAmount}px #DFFEE1, 0px ${mission[1].shadowY}px ${mission[1].blurAmount}px #000`;
    myelement[2].style.textShadow = `0px 0px ${mission[2].blurAmount}px #DFFEE1, 0px ${mission[2].shadowY}px ${mission[2].blurAmount}px #000`;
    animateId = requestAnimationFrame(myanimate);
}