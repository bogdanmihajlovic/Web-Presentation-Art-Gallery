$(document).ready(function(){
    let user = localStorage.getItem("logUser");
    let allMsg = [];
    let allOffers = [];
    let lang = window.location.pathname.search("/en/") != -1 ? 1 : 0;

    if(!user){
        $("#myUsername").text("/");
        $("#myName").text("/");

    }else{
        loadName();
        loadData();
        listMsg();
        listOffers();
        $(".removeMsg").click(function(){
            let username = JSON.parse(user).username;
            let id = $(this).attr("id");
            $(this).attr("disabled", true);
            let index = parseInt(id.replace("buttonMsg", ""));
            let myMsg = allMsg.filter(m => m.user == username);
            let elem = myMsg[index];
            index = allMsg.indexOf(elem);
            allMsg.splice(index, 1);
            localStorage.setItem("allMsg", JSON.stringify(allMsg));
        
        });

        $(".removeOffer").click(function(){
            let username = JSON.parse(user).username;
            let id = $(this).attr("id");
            $(this).attr("disabled", true);
            let index = parseInt(id.replace("buttonOffer", ""));
            let myOffers = allOffers.filter(o => o.user == username);
            let elem = myOffers[index];
            index = allOffers.indexOf(elem);
            allOffers.splice(index, 1);
            localStorage.setItem("allOffers", JSON.stringify(allOffers));
        });
        
        
    }
    
    function loadName(){
        let username = JSON.parse(user).username;
        $("#myUsername").text(username);
        let name = JSON.parse(user).name;
        $("#myName").text(name);
    }

    function loadData(){
        let msg = localStorage.getItem("allMsg");
        if(msg){
            allMsg = JSON.parse(msg);
        }

        let off = localStorage.getItem("allOffers");
        if(off){
            allOffers = JSON.parse(off);
        }
    }

    function listMsg(){
        let username = JSON.parse(user).username;
        let table = $("#myMsg");
        let myMsg = allMsg.filter(m => m.user == username);

        $("#myMsg tr").empty();

        let th1 = $("<th></th>"); 
        if(lang == 0)
            th1.text("Komentar");
        else
            th1.text("Comment");

        let th2 = $("<th></th>"); th2.text("Link");
        let th3 = $("<th></td>");
        let rh = $("<tr></tr>"); rh.append(th1).append(th2).append(th3);
        table.append(rh);

        for(let i = 0; i < myMsg.length;i++){
            let row = $("<tr></tr>");
            let td1 = $("<td></td>");
            let td2 = $("<td></td>");
            let td3 = $("<td></td>");
            let button = $("<button></button>");
            button.attr("id", "buttonMsg" + i)
            .addClass("removeMsg")
            .addClass("btn")
            .addClass("btn-light");
            if(lang == 0)
                button.text("Obriši");
            else
                button.text("Remove");
           
            let link = $("<a></a>");
            let url = "../" + ((lang == 0) ? "rs" : "en") + "/umetnine/" + myMsg[i].code + ".html";
            link.text("Link");
            link.attr("href", url);
            td2.append(link);
            td3.append(button);
            td1.text(myMsg[i].comm);
            row.append(td1).append(td2).append(td3);
            table.append(row);
        }
    }

    function listOffers(){
        let username = JSON.parse(user).username;
        let table = $("#myOffers");
        let myOffers = allOffers.filter(o => o.user == username);

        $("#myOffers tr").empty();
        let th1 = $("<th></th>");
        if(lang == 0)
            th1.text("Ponuda");
        else
            th1.text("Offer");
        let th2 = $("<th></th>"); th2.text("Link");
        let th3 = $("<th></td>");
        let rh = $("<tr></tr>"); rh.append(th1).append(th2).append(th3);
        table.append(rh);
        for(let i = 0; i < myOffers.length;i++){
            let row = $("<tr></tr>");
            let td1 = $("<td></td>");
            let td2 = $("<td></td>");
            let td3 = $("<td></td>");
            let button = $("<button></button>");
            button.attr("id", "buttonOffer" + i)
            .addClass("removeOffer")
            .addClass("btn")
            .addClass("btn-light");
            if(lang == 0)
                button.text("Obriši");
            else
                button.text("Remove");
           
            let link = $("<a></a>");
            let url = "../" + ((lang == 0) ? "rs" : "en") + "/umetnine/" + myOffers[i].code + ".html";
            link.text("Link");
            link.attr("href", url);
            td2.append(link);
            td3.append(button);
            td1.text(myOffers[i].offer);
            row.append(td1).append(td2).append(td3);
            table.append(row);
        }
    }

})