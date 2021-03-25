// DOM MANIPULATION
//console.log(document.getElementById("title"));
//var nom = document.getElementById("name");
//console.log(document instanceof HTMLDocument);

function sayHello(){
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