$(function (){//same as Document.addEventListener("DOMContentLoaded"...
    
    // same as document.querySelector("#navbarToggle").addEvenetListener("blur"))    // 
    $("#navbarToggle").blur(function(event){
        var screenWidth = window.innerWidth;
        if(screenWidth < 768){
            $("#collapsable-nav").collapse('hide');
        }
    });
});
