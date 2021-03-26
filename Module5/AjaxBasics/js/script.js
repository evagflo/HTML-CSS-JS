//event handlin
document.addEventListener("DOMContentLoaded",
function(event){

    //unobstrusive event binding
    document.querySelector("button").addEventListener("click",function(){
             //Call server
        $ajaxUtils.sendGetRequest("/AjaxBasics/data/name.txt", 
        function(request){
            var name= request.responseText;
            document.querySelector("#content").innerHTML =
            "<h2> Hello " + name + "! </h2>";
        });
    });
});