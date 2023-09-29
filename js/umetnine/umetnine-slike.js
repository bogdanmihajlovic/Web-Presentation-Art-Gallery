
$(document).ready(function(){
    let allImages = [
        [
            {
                "code" : "mona-lisa",
                "naziv" : "Mona Liza",
                "autor" : "Leonardo da Vinči",
                "opis" : "Mona Liza ili Đokonda (ital. Monna Lisa, La Gioconda, franc. La Joconde) je čuveno remek-delo renesansnog slikara Leonarda da Vinčija. Izrađena je uljanom tehnikom na drvenoj ploči od topole. Predstavlja portret mlade firentinske dame, Lize del Đokondo.Danas je portret Mona Lize izložen u Muzeju Luvr, u Parizu. ",
                "godina" : "1517."
                },
                {
                "code" : "zvezdana-noc",
                "naziv" : "Zvezdana noć",
                "autor" : "Vinsent Van Gogh",
                "opis" : "Zvezdana noć je remek-delo postimpresionističkog slikara Van Goga. Naslikano je 1889. godine, tehnikom ulje na platnu. Slika prikazuje pogled sa istočnog prozora njegove azilantske sobe u Sen Remi de Provansu, neposredno pre izlaska sunca, sa dodatkom zamišljenog sela.",
                "godina" : "1889."
                },
                
                {
                "code" : "strazar",
                "naziv" : "Stražar",
                "autor" : "Paja Jovanović",
                "opis" : "Slika nastala u 19. veku. Dimenzija 70x56 cm.",
                "godina" : "1890."
                }
        ],[
            {
                "code" : "mona-lisa",
                "naziv" : "Mona Lisa",
                "autor" : "Leonardo da Vinci",
                "opis" : "The Mona Lisa (/ˌmoʊnə ˈliːsə/ MOH-nə LEE-sə; Italian: Gioconda [dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]; French: Joconde [ʒɔkɔ̃d]) is a half-length portrait painting by Italian artist Leonardo da Vinci.Considered an archetypal masterpiece of the Italian Renaissance, it has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.",
                "godina" : "1517."
                },
                {
                "code" : "zvezdana-noc",
                "naziv" : "The Starry Night",
                "autor" : "Vincent van Gogh",
                "opis" : "The Starry Night (Dutch: De sterrennacht) is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.",
                "godina" : "1889."
                },
                
                {
                "code" : "strazar",
                "naziv" : "Stražar",
                "autor" : "Paja Jovanović",
                "opis" : "Painting from 1890.",
                "godina" : "1890."
                }
        ]

        
    ]
    let lang = window.location.pathname.search("/en/") != -1 ? 1 : 0;

    loadSlike(allImages[lang]);
    $("#imagesOrder").on("click", function(){
        let text = $("#imagesSearch").val().toLowerCase();
        var data = allImages[lang].filter(function(item){
            return item.naziv.toLocaleLowerCase().includes(text) || item.autor.toLocaleLowerCase().includes(text) ;
        });
        let sortBy = $("#sortSelectImages").val();
        if(sortBy == "asc"){
            data.sort((a, b) => (a.naziv > b.naziv) ? 1 : -11);
        }else{
            data.sort((a, b) => (a.naziv > b.naziv) ? -1 : 1);
        }
        loadSlike(data);
    })

    $("#imagesSearch").on("keyup", function(){
        
        let text = $("#imagesSearch").val().toLowerCase();
        var data = allImages[lang].filter(function(item){
            return item.naziv.toLocaleLowerCase().includes(text) || item.autor.toLocaleLowerCase().includes(text) ;
        });

        loadSlike(data);
    });

    function loadSlike(slike){
        let row = $("#umetnine-slike");
        row.empty();
        for(let i = 0; i < slike.length;i++){
            let h5 = $("<h5></h5");
            h5.addClass("card-title");
            h5.text(slike[i].naziv);


            let h6 = $("<h6></h6");
            h6.addClass("card-title");
            h6.text(slike[i].autor);

            let desc = $("<p></p>");
            desc.addClass("card-text")
            .text(slike[i].opis);
           
            let url = "../" + (lang == 0 ? "rs" : "en") + "/umetnine/";

            let link = $("<a></a>");
            link.addClass("btn")
            .addClass("btn-primary")
            .attr("href", url +slike[i].code+".html");
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
            .attr("src", "../images/umetnine/"+slike[i].code+".jpg")
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