//event handlin
document.addEventListener("DOMContentLoaded",
function(event){

    //unobstrusive event binding
    document.querySelector("button").addEventListener("click",function(){
             //Call server
        $ajaxUtils.sendGetRequest("/AjaxBasics/data/name.txt", 
        function(res){
            var message = 
            res.firstName + " " + res.lastName
            if ( res.whatever) {
                message += "likes whatever";
            }
            else{
                message += "does not like whatever";
            }
            message += " and uses ";
            message += res.number;
            message += " displays for coding.";

            document.querySelector("#content")
            .innerHTML = "<h2>" + message + "</h2>";
        });
    });
});