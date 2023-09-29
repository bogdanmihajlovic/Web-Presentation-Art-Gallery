$(document).ready(function(){
    let allSculptures = [
        [
        {
            "code" : "david",
            "naziv" : "David",
            "autor" : "Mikelandjelo",
            "opis" : "Michelangelov David rađen od 1500. to 1504., remek-djelo je kiparstva renesanse i jedno od Michelangelova dva najveća kiparska djela, zajedno s Pietom. Sám David smatra se jednim od najprepoznatljivijih kiparskih djela na svijetu, a postao je važnim simbolom...",
            "godina" : "1504."
            },
            {
            "code" : "bacac-diska",
            "naziv" : "Bacač diska",
            "autor" : "Miron",
            "opis" : "Najpoznatiji je svakako kip grčkog kipara Mirona iz sredine...",
            "godina" : "450. pne"
            },
            
            {
            "code" : "persus-meduza",
            "naziv" : "Persej sa Meduzinom glavom",
            "autor" : "Benvenuto Čelini",
            "opis" : "Persej s Meduzinom glavom je remek-delo ujedno i najslavnije delo vajara Benvenuta Čelinija.",
            "godina" : "1545."
            }
        ],
        [
        {
            "code" : "david",
            "naziv" : "David",
            "autor" : "Michelangelo",
            "opis" : "David is a masterpiece of Renaissance sculpture, created from 1501 to 1504 by the Italian artist Michelangelo. With a height of 5.17-metre (17 ft 0 in), the David was the first colossal marble statue after antiquity, a precedent for the 16th century and beyond. ",
            "godina" : "1504"
            },
            {
            "code" : "bacac-diska",
            "naziv" : "Discobolus",
            "autor" : "Myron",
            "opis" : "The Discobolus by Myron ('discus thrower', Greek: Δισκοβόλος, Diskobólos) is an Ancient Greek sculpture completed at the start of the Classical period at around 460–450 BC. The sculpture depicts a youthful male athlete throwing a discus.",
            "godina" : "450 BC"
            },
            
            {
            "code" : "persus-meduza",
            "naziv" : "Perseus with the Head of Medusa",
            "autor" : "Benvenuto Cellini",
            "opis" : "Perseus with the Head of Medusa is a bronze sculpture made by Benvenuto Cellini in the period 1545–1554. The sculpture stands on a square base which has bronze relief panels depicting the story of Perseus and Andromeda, similar to a predella on an altarpiece",
            "godina" : "1545"
            }
        ]

    ]
    let lang = window.location.pathname.search("/en/") != -1 ? 1 : 0;

    loadSculptures(allSculptures[lang]);
    $("#sculpturesOrder").on("click", function(){
        let text = $("#sculpturesSearch").text().toLowerCase();
        var data = allSculptures[lang].filter(function(item){
            return item.naziv.toLocaleLowerCase().includes(text) || item.autor.toLocaleLowerCase().includes(text) ;
        });
        let sortBy = $("#sortSelectSculptures").val();
        if(sortBy == "asc"){
            data.sort((a, b) => (a.naziv > b.naziv) ? 1 : -11);
        }else{
            data.sort((a, b) => (a.naziv > b.naziv) ? -1 : 1);
        }
        loadSculptures(data);
    })

    $("#sculpturesSearch").on("keyup", function(){
        
        let text = $("#sculpturesSearch").val().toLowerCase();
        var data = allSculptures[lang].filter(function(item){
            return item.naziv.toLocaleLowerCase().includes(text) || item.autor.toLocaleLowerCase().includes(text) ;
        });

        loadSculptures(data);
    });

    function loadSculptures(data){
        let row = $("#umetnine-skulpture");
        row.empty();
        for(let i = 0; i < data.length;i++){
            let h5 = $("<h5></h5");
            h5.addClass("card-title");
            h5.text(data[i].naziv);


            let h6 = $("<h6></h6");
            h6.addClass("card-title");
            h6.text(data[i].autor);

            let desc = $("<p></p>");
            desc.addClass("card-text")
            .text(data[i].opis);
           
            let url = "../" + (lang == 0 ? "rs" : "en") + "/umetnine/";

            let link = $("<a></a>");
            link.addClass("btn")
            .addClass("btn-primary")
            .attr("href", url+data[i].code+".html");
            if(lang == 0)
                link.text("Detaljnije");
            else
                link.text("More details");

            let divCardBody = $("<div></div>");
            divCardBody.addClass("card-body");

            divCardBody.append(h5)
            .append(h6)
            .append(desc)
            .append(link);

            let divCard = $("<div></div>");
            divCard.addClass("card")
            .css("width", "18rem");
            
            let img = $("<img>");
            img.addClass("card-img-top")
            .attr("src", "../images/umetnine/"+data[i].code+".jpg")
            .attr("alt", "Card image cap");

            divCard.append(img)
            .append(divCardBody);

            let col = $("<div></div>");
            col.addClass("col-md-4")
            .addClass("mt-3");

            col.append(divCard);

            
            row.append(col);
        }
    }

})