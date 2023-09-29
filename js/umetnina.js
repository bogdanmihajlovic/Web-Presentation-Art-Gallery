$(document).ready(function(){

    let code = getCodeName();
    let allMsg = [{

    }];

    let allOffers = [{

    }];

    let user = localStorage.getItem("logUser");
    let lang = window.location.pathname.search("/en/") != -1 ? 1 : 0;
    if(!user){
        $("#add-comm").prop('disabled', true);
        $("#add-offer").prop('disabled', true);
    }

    
    loadOffers();
    addOffers();
    loadMsg();
    addMsg();


    // dodaj osluskivace 
    $("#add-comm").click(function(){
        let text = $("#comm-value").val();
        $("#comm-value").val("");
        let username = JSON.parse(user).username;
        allMsg.push({
            user : username,
            code : getCodeName(),
            comm : text
        });
        localStorage.setItem("allMsg", JSON.stringify(allMsg));
        addMsg();
        
    })

    
    $("#add-offer").click(function(){
        let off = $("#offer-value").val();
        $("#offer-value").val("");
        let username = JSON.parse(user).username;
        allOffers.push({
            user : username,
            code : getCodeName(),
            offer : off
        });
        localStorage.setItem("allOffers", JSON.stringify(allOffers));
        addOffers();
        
    })



    // ucitava listu poruka
    function loadMsg(){
        let msg = localStorage.getItem("allMsg");
        if(msg){
            allMsg = JSON.parse(msg);
        }else{
            localStorage.setItem("allMsg", JSON.stringify(allMsg));
        }
    }

    // funkcija koja popunjava tabelu sa svim poruka
    function addMsg(){
        let table = $("#" + code + "-poruke");
        let msg = allMsg.filter(function(obj){
            return obj.code == code;
        });

        $("#" + code + "-poruke tr").empty();
        let th1 = $("<th></th>"); 
        if(lang == 0)
            th1.text("Korisnik");
        else
            th1.text("User");

        let th2 = $("<th></th>"); 
        if(lang == 0)
            th2.text("Komentar");
        else
            th2.text("Comment");
        let rh = $("<tr></tr>"); rh.append(th1).append(th2);
        table.append(rh);

        for(let i = 0;i < msg.length;i++){
            let row = $("<tr></tr>");
            let td1 = $("<td></td>").text(msg[i].user);
            let td2 = $("<td></td>").text(msg[i].comm);
            row.append(td1).append(td2);
            table.append(row);
        }   
    }

    // ucitava listu ponuda
    function loadOffers(){
        let offers = localStorage.getItem("allOffers");

        if(offers){
            allOffers = JSON.parse(offers);
        }else{
            localStorage.setItem("allOffers", JSON.stringify(allOffers));
        }
    }

    function addOffers(){
        let table = $("#" + code + "-ponude");
        $("#" + code + "-ponude tr").empty();

        let th1 = $("<th></th>"); 
        if(lang == 0)
            th1.text("Korisnik");
        else
            th1.text("User");

        let th2 = $("<th></th>"); 
        if(lang == 0)
            th2.text("Ponuda");
        else
            th2.text("Offer");

        
        let rh = $("<tr></tr>"); rh.append(th1).append(th2);
        table.append(rh);

        let offers = allOffers.filter(function(obj){
            return obj.code == code;
        });

        for(let i = 0;i < offers.length;i++){
            let row = $("<tr></tr>");
            let td1 = $("<td></td>").text(offers[i].user);
            let td2 = $("<td></td>").text(offers[i].offer);
            row.append(td1).append(td2);
            table.append(row);
        }
        table.addClass("table-striped")   ;
    }
    

    // funckija koja iz url dohvata ime umetnine
    function getCodeName(){
        let pathname = window.location.pathname;
    
        let code = pathname.split("/");
        code = code[code.length - 1];
        code = code.replace(".html", "")
        return code;
    }

        //loadData();
        function loadData(){
            var htmlCode = 
            '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">' +
                '<div class="carousel-inner">' +
                    '<div class="carousel-item active">' +
                        '<img class="d-block w-100" src="../../images/umetnine/'+code+'/1.jpg" alt="First slide">' +
                    '</div>' +
                    '<div class="carousel-item">' +
                    '   <img class="d-block w-100" src="../../images/umetnine/'+code+'/2.jpg" alt="Second slide" width="100%" height="20%">' +
                    '</div>' +
                '</div>' +
                '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">' +
                    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
                    '<span class="sr-only">Previous</span>' +
                '</a>' +
                '<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">' +
                    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
                    '<span class="sr-only">Next</span>' +
                '</a>' +
            '</div>';
        
          $('#content'+code).append(htmlCode);
    
        }
    
})