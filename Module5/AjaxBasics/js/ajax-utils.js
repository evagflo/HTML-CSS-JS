(function(global){

    //setup a namespace for our utility

    var ajaxUtils ={};

    //return an http reques object

    function getRequesObject(){
        if (window.XMLHttpRequest){
            return (new XMLHttpRequest());
        }
        else if (window.ActiveXObject){
            // for very old IE browsers(optional)
            return (new ActiveXObject("Micrsoft.XMLHTTP"));
        }
        else{
            global.alert("Ajax is not supported")
            return (null);
        }
    }

    // Makes an ajax GET request 'requestUrl'
    ajaxUtils.sendGetRequest =
    function( requestUrl, responseHandler){
        var request= getRequesObject();
        request.onreadystatechange =
        
        function() {
            handleResponse(request,responseHandler);
        };

        request.open("GET",requestUrl,true);
        request.send(null); //for POST only-> instead of null set the string or object to be passed
    };

    //only calls users provide 'responseHandler'
    //function if response is ready
    // and not an error

    function handleResponse(request,responseHandler){
        if ((request.readyState  ==4) && (request.status == 200))
        {
            responseHandler(request);
        }

    }
    //expose itulity to the global object
    global.$ajaxUtils = ajaxUtils;
    
})(window)