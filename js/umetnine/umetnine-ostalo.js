$(document).ready(function(){
    let allOther = [
        [
        {
            "code" : "cilim",
            "naziv" : "Ćilim",
            "autor" : "Nepoznat autor",
            "opis" : "Ćilim (od turske riječi Kilim od perzijskog گلیم‎ Gelim) vrsta je tkanih sagova ili tapiserije. Proizvode se u određenim područjima Kavkaza, Irana, Male Azije i .. ",
            "godina" : "1905."
            },
            {
            "code" : "trash",
            "naziv" : "Haljina od otpada",
            "autor" : "Marina DeBris",
            "opis" : "Haljina napravljena od djubreta",
            "godina" : "2021."
            },
            
            {
            "code" : "sofa",
            "naziv" : "Sofa u obliku usne Mej Vest",
            "autor" : "Salvador Dali",
            "opis" : "Ovo nadrealistična skulptura napravljena u obliku usne.",
            "godina" : "1972."
            }
        ],
        [
        {
            "code" : "cilim",
            "naziv" : "Ćilim",
            "autor" : "Unknown author",
            "opis" : "A kilim (Azerbaijani: Kilim کیلیم; Turkish: Kilim; Turkmen: Kilim; Persian: گلیم Gilīm) is a flat tapestry-woven carpet or rug traditionally produced in countries of the former Persian Empire, including Iran, the Balkans and the Turkic countries.",
            "godina" : "1905"
            },
            {
            "code" : "trash",
            "naziv" : "Dress from trash",
            "autor" : "Marina DeBris",
            "opis" : "Dress made of trash",
            "godina" : "2021"
            },
            
            {
            "code" : "sofa",
            "naziv" : "Mae West Lips Sofa",
            "autor" : "Salvador Dalí",
            "opis" : "The Mae West Lips Sofa is a surrealist sculpture in the form of a sofa by Salvador Dalí. The light red, 110 cm × 183 cm × 81.5 cm (43 in × 72 in × 32 in) sized seating furniture made of polyurethane foam coated with a red polidur coating was shaped in 1972 after the lips of actress Mae West, whom Dalí apparently found fascinating",
            "godina" : "1972"
            }
        ]

        
    ]
    let lang = window.location.pathname.search("/en/") != -1 ? 1 : 0;

    loadOther(allOther[lang]);
    $("#otherOrder").on("click", function(){
        let text = $("#otherSearch").text().toLowerCase();
        var data = allOther[lang].filter(function(item){
            return item.naziv.toLocaleLowerCase().includes(text) || item.autor.toLocaleLowerCase().includes(text) ;
        });
        let sortBy = $("#sortSelectOther").val();
        if(sortBy == "asc"){
            data.sort((a, b) => (a.naziv > b.naziv) ? 1 : -11);
        }else{
            data.sort((a, b) => (a.naziv > b.naziv) ? -1 : 1);
        }
        loadOther(data);
    })

    $("#otherSearch").on("keyup", function(){
        
        let text = $("#otherSearch").val().toLowerCase();
        var data = allOther[lang].filter(function(item){
            return item.naziv.toLocaleLowerCase().includes(text) || item.autor.toLocaleLowerCase().includes(text) ;
        });
        loadOther(data);
    });

    function loadOther(data){
        let row = $("#umetnine-ostalo");
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