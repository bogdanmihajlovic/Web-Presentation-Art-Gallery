$(document).ready(function(){
    let allUsers = [{
        name : "Pera Peric",
        username : "peraperic",
        password : "123"
    }];

    $("#buttonSubmit").click(function(){
        let username = $("#username").val();
        let password = $("#password").val();

        $("#errorMsg").text("");
        let user = allUsers.find(u => u.username == username);
        if(!user){
            $("#errorMsg").text("Not valid username");
            return;
        }
        if(user.password != password){
            $("#errorMsg").text("Not valid password");
            return;
        }
        localStorage.setItem("logUser", JSON.stringify(user));

        let url = window.location.pathname;
    
        let path = url.split("/");
        path.splice(path.length - 1, 1);
        url = path.join("/") + "/rs/index.html";
        window.location = url;
    })
    
    
})

