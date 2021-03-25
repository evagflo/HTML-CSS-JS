document.addEventListener("DOMContentLoaded",
function (event){
//1
document.querySelector("button").addEventListener("click",sayHello);
//document.querySelector("button").onclick = sayHello;
//2
document.querySelector("body").addEventListener("mousemove",
function(event){
    if (event.shiftKey === true){
        console.log("x is : " + event.clientX);
        console.log("y is : " +event.clientY);
    }
    

}
);

})
 
// DOM MANIPULATION
//console.log(document.getElementById("title"));
//var nom = document.getElementById("name");
//console.log(document instanceof HTMLDocument);


//unobstrucing event binding --onclick="sayHello();"
function sayHello(event){
    console.log(event);
    this.textContent= "Said it!";
    
    var userName = document.getElementById("name").value;
    var message = "<h2>Hello " + userName + "!</h2>";

    //document.getElementById("content").textContent = message;
    document.getElementById("content").innerHTML = message;
    
    if (userName ==="student"){
        var title= document.querySelector("#title").textContent;

        title += " & Lovin' it!";

        document.querySelector("h1").textContent = title;

    }
}

