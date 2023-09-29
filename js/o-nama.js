$(document).ready(function(){
    let language = "sr";
    $("#en").click(function(){
        language = "en";
        let url = window.location.pathname;
        url = url.replace("/sr/", "/en/");
        window.location = url;
    })
})