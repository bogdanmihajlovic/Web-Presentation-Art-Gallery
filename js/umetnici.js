$(document).ready(function(){
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
            },
            {
                "code" : "van-gog",
                "ime" : "Vinsent van Gog",
                "opis" : "Njegova dela su zapažena po svojoj gruboj lepoti, emotivnoj iskrenosti i hrabrim bojama, te je zahvaljujući tome postao jedan od vodećih umetnika 19. veka. Nakon dugog i bolnog problema sa anksioznošću i učestalim problemima mentalnih bolesti, umro je od prostrelne rane metkom u svojoj 37. godini. Opšte je prihvaćeno mišljenje da je izvršio samoubistvo, iako pištolj iz koga je pucano, nikada nije pronađen",
                "dela" : ["Zvezdana noc"]
    
            },
            {
                "code" : "miron",
                "ime" : "Miron",
                "opis" : "Radio je skoro isključivo u bronzi. Pravio je statue bogova i heroja, ali se proslavio prikazima atletičara zbog uvođenja naglašenog pokreta. On je oslobodio pokret - figura se kreće po vertikalnom planu i ima torziju do kraja sprovedenu u jednom pravcu, kao da treba da počne odmotavanje.",
                "dela" : ["Bacac diska"] 
            },
            {
                "code" : "benvenuto",
                "ime" : "Benvenuto Čelini",
                "opis" : "Imao je veoma težak i buran život, koji je opisao u svojoj autobiografiji Moj život koja se smatra jednom od najvažnijih autobiografija renesanse. U Pariz se odselio 1538. godine gde je počeo da radi kod kralja. Bio je majstor svoga vremena za sitne zlatarske predmete za kraljevske i plemićke kuće. ",
                "dela" : ["Persej sa Meduzinom glavom"] 
            },
            {
                "code" : "dali",
                "ime" : "Salvador Dali",
                "dela" : ["Sofa u obliku usne MejVest"],
                "opis" : "On je jedan od najznačajnijih umetnika 20. veka, a često ga nazivaju i velikim majstorom nadrealizma. Njegova umetnička dela pokazala su da je on jedan od najkreativnijih slikara svog vremena. Dalijeva česta tematika je svet prostora, pijanstva, groznice i religije. "
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
            },
            {
                "code" : "van-gog",
                "ime" : "Vincent van Gogh",
                "opis" : "Vincent Willem van Gogh (Dutch: [ˈvɪnsɛnt ˈʋɪləm vɑŋ ˈɣɔx] (listen);[note 1] 30 March 1853 – 29 July 1890) was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history. In a period of 10 years, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life. ",
                "dela" : ["The Starry Night"]
    
            },
            {
                "code" : "miron",
                "ime" : "Myron",
                "opis" : "Myron of Eleutherae (Ancient Greek: Μύρων, Myrōn [mý.rɔːn]), working c. 480–440 BC, was an Athenian sculptor from the mid-5th century BC. He was born in Eleutherae on the borders of Boeotia and Attica. According to Pliny's Natural History, Ageladas of Argos was his teacher.",
                "dela" : ["Discobolus"] 
            },
            {
                "code" : "benvenuto",
                "ime" : "Benvenuto Cellini",
                "opis" : "Benvenuto Cellini (/ˌbɛnvəˈnjuːtoʊ tʃɪˈliːni, tʃɛˈ-/, Italian: [beɱveˈnuːto tʃelˈliːni]; 3 November 1500 – 13 February 1571) was an Italian goldsmith, sculptor, and author. His best-known extant works include the Cellini Salt Cellar, the sculpture of Perseus with the Head of Medusa, and his autobiography, which has been described as \"one of the most important documents of the 16th century\", ",
                "dela" : ["Perseus with the Head of Medusa"] 
            },
            {
                "code" : "dali",
                "ime" : "Salvador Dalí",
                "dela" : ["Mae West Lips Sofa"],
                "opis" : "Salvador Domingo Felipe Jacinto Dalí i Domènech, Marquess of Dalí of Púbol[a] gcYC (11 May 1904 – 23 January 1989), known as Salvador Dalí (/ˈdɑːli, dɑːˈliː/ DAH-lee, dah-LEE,[1] Catalan: [səlβəˈðo ðəˈli], Spanish: [salβaˈðoɾ ðaˈli]), was a Spanish surrealist artist renowned for his technical skill, precise draftsmanship, and the striking and bizarre images in his work."
            }
        ]

        
    ]


    let lang = window.location.pathname.search("/en/") != -1 ? 1 : 0;

    loadArtists(allArtists[lang]);

    

    $("#artistsSearch").on("keyup", function(){   
        
        let text = $("#artistsSearch").val().toLowerCase();
        var data = allArtists[lang].filter(function(item){
            return item.ime.toLocaleLowerCase().includes(text);
        });

        loadArtists(data);
    });
    

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

    function loadArtists(artists){
        let row = $("#artists");
        row.empty();

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
    



})