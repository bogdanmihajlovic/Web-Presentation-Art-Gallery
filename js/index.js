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

    let allArtists = [
        [
            {
            "code" : "umetnik1",
            "ime" : "Da Vinci",
            "opis" : "Leonardo di ser Pjero da Vinči (ital. Leonardo di ser Piero da Vinci,[a] Vinči, 15. april 1452 — Amboaz, 2. maj 1519), poznat kao Leonardo da Vinči, bio je italijanski renesansni arhitekta, pronalazač, inženjer, vajar i slikar. Za života slavljen zbog svojih slikarskih dela, nakon smrti postaje poznat široj publici i po svojim sveskama, u kojima je crtao i pisao beleške o raznim temama, uključujući anatomiju, astronomiju, botaniku, kartografiju, slikarstvo i paleontologiju. Leonardov genije je oličenje renesansnog humanističkog ideala, a njegovo ukupno delo je doprinos kasnijim generacijama umetnika koji se može meriti samo sa doprinosom njegovog mlađeg savremenika, Mikelanđela",
            "dela" : ["Tajna vecera", "Mona Liza"]
            },
            {
            "code" : "pajajovanovic",
            "ime" : "Paja Jovanovic",
            "opis" : "Paja Jovanović je rođen u Vršcu 16. juna 1859. godine. Bio je najstariji sin Stevana Jovanovića, fotografa i trgovca, i Ernestine Deot. Majka mu je rano umrla, a otac se ponovo oženio. Imao je jednu sestru i petoro braće. Još kao dete je pokazivao sklonost ka crtanju i slikanju. To i nije bilo toliko čudno s obzirom na to da je njegov otac, takođe, umeo veoma lepo da slika. Paja je sam učio da crta tako što je kopirao crkvene slike. Tako se saznaje za njegov talenat i već sa četrnaest godina slika po porudžbini za crkvu. To mu je omogućilo da studira slikarstvo u Beču.",
            "dela" : ["Strazar"]
            },
            {
                "code" : "mikelandjelo",
                "ime" : "Mikelandjelo Buonaroti",
                "opis" : "Michelangelo di Lodovico Buonarroti Simoni (Caprese Michelangelo, 6. mart 1475. – Rim, 18. februara 1564.) je bio renesansni slikar, vajar, arhitekt i pesnik. Njegovi veliki poduhvati u svim umetnostima učinili su ga idolom mnogih generacija umetnika. Opisuju ga kao genija božanskog nadahnuća, nadljudske moći, koja je podarena samo malom broju rijetkih pojedinaca i koja djeluje preko njihove osobe. ",
                "dela" : ["David"]
            }       
        ],
        [
            {
            "code" : "umetnik1",
            "ime" : "Leonardo di ser Piero da Vinci",
            "opis" : "Leonardo di ser Piero da Vinci[b] (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he also became known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, astronomy, botany, cartography, painting, and paleontology. Leonardo is widely regarded to have been a genius who epitomized the Renaissance humanist ideal,[4] and his collective works comprise a contribution to later generations of artists matched only by that of his younger contemporary, Michelangelo",
            "dela" : ["Mona Lisa"]
            },
            {
            "code" : "pajajovanovic",
            "ime" : "Paja Jovanovic",
            "opis" : "Pavle \"Paja\" Jovanović (Serbian Cyrillic: Павле \"Паја\" Јовановић; IPA: [pâʋlɛ pǎːja jɔʋǎːnɔʋit͡ɕ]; 16 June 1859 – 30 November 1957) was a Serbian realist painter who painted more than 1,100 works including:[1][2] The Wounded Montenegrin (1882), Decorating of the Bride (1886), The Takovo Uprising (1894), Migration of the Serbs (1896) and The Proclamation of Dušan's Law Codex (1900). ",
            "dela" : ["Strazar"]
            },
            {
                "code" : "mikelandjelo",
                "ime" : "Michelangelo di Lodovico Buonarroti",
                "opis" : "Michelangelo di Lodovico Buonarroti Simoni (Italian: [mikeˈlandʒelo di lodoˈviːko ˌbwɔnarˈrɔːti siˈmoːni]; 6 March 1475 – 18 February 1564), known as Michelangelo (English: /ˌmaɪkəlˈændʒəloʊ, ˌmɪk-/), was an Italian sculptor, painter, architect,[2] and poet of the High Renaissance. ",
                "dela" : ["David"]
            }
        ]

        
    ]
    let allOffers = [];
    let lang = window.location.pathname.search("/en/") != -1 ? 1 : 0;


    loadSlike(allImages[lang]);
    loadArtists(allArtists[lang]);
    loadOffers();
    function loadSlike(slike){
        
        let row = $("#novoSlike");

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

    function loadArtists(artists){
        let row = $("#novoUmetnici");
        

        for(let i = 0; i < artists.length;i++){
            let h5 = $("<h5></h5");
            h5.addClass("card-title");
            h5.text(artists[i].ime);

            let desc = $("<p></p>");
            desc.addClass("card-text")
            .text(artists[i].opis);
           
            let link = $("<a></a>");
            link.addClass("btn")
            .addClass("btn-primary")
            .addClass("pdf")
            .attr("id", "umetnik" + i)
            .attr("href", "#");
            if(lang == 0){
                link.text("Dela");
            }else{
                link.text("Works");
            }

            let divCardBody = $("<div></div>");
            divCardBody.addClass("card-body");

            divCardBody.append(h5)
        
            .append(desc)
            .append(link);

            let divCard = $("<div></div>");
            divCard.addClass("card")
            .css("width", "18rem");
            
            let img = $("<img>");
            img.addClass("card-img-top")
            .attr("src", "../images/umetnici/"+artists[i].code+".jpg")
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

    function loadOffers(){
        let offers = localStorage.getItem("allOffers");
        if(!offers){
            return;
        }

        allOffers = JSON.parse(offers);
        let table = $("#novoPonude");
        
        let th1 = $("<th></th>"); 
        if(lang == 0)
            th1.text("Korisnik");
        else
            th1.text("User");

        let th2 = $("<th></th>"); th2.text("Link");
        let th3 = $("<th></td>");
        if(lang == 0)
            th3.text("Ponuda");
        else
            th3.text("Offer");

        let rh = $("<tr></tr>"); rh.append(th1).append(th2).append(th3);
        table.append(rh);
        allOffers = allOffers.slice(-3);
        for(let i = 0;i < allOffers.length;i++){
            let row = $("<tr></tr>");
            let td1 = $("<td></td>");
            let td2 = $("<td></td>");
            let td3 = $("<td></td>");
            td1.text(allOffers[i].user);
            let link = $("<a></a>");
            let url = "../" + ((lang == 0) ? "rs" : "en") + "/umetnine/" + allOffers[i].code + ".html";
            link.text("Link");
            link.attr("href", url);
            td2.append(link);
            td3.text(allOffers[i].offer);
            row.append(td1).append(td2).append(td3);
            table.append(row);
        } 

        if(allOffers.length == 0){
            let td;
            if(lang == 0)
                td = $("<td colspan='3' class='text-center'><h4>Nema ponuda</h4></td>");
            else
                td = $("<td colspan='3' class='text-center'><h4>No offers</h4></td>");
            $("#novoPonude tr").empty();
            let tr = $("<tr></tr>");
            tr.append(td);
            table.append(tr);
        }
        
    }
    
    $(".pdf").click(function(){
        var doc = new jsPDF();
        let id = $(this).attr("id").replace("umetnik", "");
        id = parseInt(id);
        let artist = allArtists[lang][id];
        if(lang == 0){
            doc.text("Dela " + artist.ime + ":",10, 10);
        }else{
            doc.text("Works " + artist.ime + ":",10, 10);
        }
        
        for(let i = 0;i < artist.dela.length;i++){
            doc.text(artist.dela[i], 15, 10 + ((i+1) * 10));
        }
        
        if(lang == 0){
            doc.save("dela-"+artist.code);
        }else{
            doc.save("works-"+artist.code);

        }
    })

})