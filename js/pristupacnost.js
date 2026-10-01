const tekstPrevoda = `{
    "sr": {
        "nazivCentra": "Sportski centar",
        "pocetna": "Početna",
        "oNama": "O nama",
        "usluge": "Usluge",
        "kontakt": "Kontakt",
        "fitnes": "Fitnes",
        "sport": "Sport",
        "informacije": "Informacije",
        "teretana": "Teretana",
        "grupniTreninzi": "Grupni treninzi",
        "personalniTreninzi": "Personalni treninzi",
        "sportskiTereni": "Sportski tereni",
        "skolaSporta": "Škola sporta",
        "takmicenja": "Sportska takmičenja",
        "multimedija": "Multimedija",
        "cenovnik": "Cenovnik",
        "probniTrening": "Probni trening",

        "naslovPocetne": "Dobro došli u naš sportski centar",
        "opisPocetne": "Mesto za trening, rekreaciju i zdrav način života.",
        "naslovSlajdera": "Naš sportski centar",
        "opisSlajdera": "Pogledajte neke od sadržaja koje nudimo našim članovima.",
        "modernaTeretana": "Moderna teretana",
        "opisTeretane": "Prostor opremljen spravama za trening snage i kondicije.",
        "naslovGrupnihTreninga": "Grupni treninzi",
        "opisGrupnihTreninga": "Trenirajte u motivišućoj atmosferi uz podršku stručnih trenera.",
        "naslovSportskihTerena": "Sportski tereni",
        "opisSportskihTerena": "Tereni namenjeni rekreaciji, treninzima i sportskim takmičenjima.",

        "oNasemCentru": "O našem centru",
        "naslovONama": "Sport nas pokreće i povezuje",
        "opisONama": "Naš sportski centar pruža savremene uslove za trening, rekreaciju i kvalitetno provođenje slobodnog vremena.",
        "pogledajteUsluge": "Pogledajte usluge",
        "nasaMisija": "Naša misija",
        "opisMisije": "Želimo da ljudima svih uzrasta pružimo bezbedan i prijatan prostor za fizičku aktivnost i zdrav način života.",
        "naseVrednosti": "Naše vrednosti",
        "zastoIzabratiCentar": "Zašto izabrati naš centar?",
        "strucnost": "Stručnost",
        "opisStrucnosti": "Naš tim čine stručni treneri sa iskustvom u različitim sportovima.",
        "bezbednost": "Bezbednost",
        "opisBezbednosti": "Vodimo računa o pravilnom izvođenju vežbi, higijeni i bezbednosti članova.",
        "zajednistvo": "Zajedništvo",
        "opisZajednistva": "Gradimo pozitivno okruženje u kome članovi podržavaju jedni druge.",
        "godinaIskustva": "godina iskustva",
        "strucnihTrenera": "stručnih trenera",
        "aktivnihClanova": "aktivnih članova",
        "sportskihPrograma": "sportskih programa",
        "cestaPitanja": "Česta pitanja",
        "pitanjePriprema": "Da li je potreban prethodni nivo fizičke pripreme?",
        "odgovorPriprema": "Nije. Programi su prilagođeni početnicima, rekreativcima i iskusnim sportistima.",
        "pitanjeProbniTrening": "Da li postoji probni trening?",
        "odgovorProbniTrening": "Da. Termin probnog treninga može se zakazati preko kontakt stranice.",
        "pitanjeVikend": "Da li centar radi vikendom?",
        "odgovorVikend": "Centar je otvoren svakog dana, uključujući subotu i nedelju.",

        "kontaktNaslov": "Kontaktirajte nas",
        "kontaktOpis": "Popunite formu i prijavite se za besplatan probni trening.",
        "imeIPrezime": "Ime i prezime",
        "adresaEPoste": "Adresa e-pošte",
        "brojTelefona": "Broj telefona",
        "primerTelefona": "Na primer: 064 123 4567",
        "izaberiteUslugu": "Izaberite uslugu",
        "grupniTrening": "Grupni trening",
        "personalniTrening": "Personalni trening",
        "sportskiTeren": "Sportski teren",
        "poruka": "Poruka",
        "porukaPlaceholder": "Napišite najmanje 10 karaktera.",
        "saglasnost": "Saglasan sam sa obradom unetih podataka.",
        "posaljitePrijavu": "Pošaljite prijavu",

        "naslovUsluga": "Naše usluge",
        "opisUsluga": "Sportski centar nudi različite programe za početnike, rekreativce i iskusne sportiste.",
        "opisUslugeTeretana": "Savremena oprema za individualne i vođene treninge snage i kondicije.",
        "opisUslugeGrupniTreninzi": "Različiti programi prilagođeni svim uzrastima i nivoima fizičke pripremljenosti.",
        "opisUslugePersonalniTreninzi": "Individualni treninzi sa stručnim trenerom i programom prilagođenim potrebama, mogućnostima i ciljevima svakog korisnika.",
        "opisUslugeSportskiTereni": "Tereni za rekreativne treninge, timske sportove i organizovanje sportskih takmičenja.",
        "opisSkoleSporta": "Programi za decu koji podstiču pravilan fizički razvoj, koordinaciju, timski duh i upoznavanje različitih sportskih disciplina.",
        "opisTakmicenja": "Organizovanje rekreativnih turnira, liga, sportskih događaja i takmičenja za različite uzraste.",
        "upoznajteCentar": "Upoznajte naš sportski centar",
        "opisMultimedije": "Pogledajte prostor, treninge i sadržaje koje naš sportski centar nudi svojim članovima.",
        "prostorCentra": "Prostor sportskog centra",
        "opisSlikeCentra": "Unutrašnjost sportskog centra sa spravama za vežbanje",
        "promotivniVideo": "Promotivni video",
        "videoNijePodrzan": "Vaš pregledač ne podržava prikaz MP4 video-snimka.",
        "cenovnikUsluga": "Cenovnik usluga",
        "opisCenovnika": "Informacije o članarinama i ostalim uslugama možete pronaći u našem cenovniku.",
        "otvoriteCenovnik": "Otvorite cenovnik",
        "primerTreninga": "Primer sportskog treninga",
        "naslovVideoZapisa": "Video sportskog treninga",
        "nasaLokacija": "Naša lokacija",
        "naslovMape": "Lokacija sportskog centra",

        "pristupacnost": "Pristupačnost",
        "tamnaTema": "Tamna tema",
        "svetlaTema": "Svetla tema",
        "manjiFont": "Manji font",
        "normalanFont": "Normalan font",
        "veciFont": "Veći font",
        "jezik": "Jezik:"
    },

    "en": {
        "nazivCentra": "Sports Center",
        "pocetna": "Home",
        "oNama": "About us",
        "usluge": "Services",
        "kontakt": "Contact",
        "fitnes": "Fitness",
        "sport": "Sport",
        "informacije": "Information",
        "teretana": "Gym",
        "grupniTreninzi": "Group workouts",
        "personalniTreninzi": "Personal training",
        "sportskiTereni": "Sports courts",
        "skolaSporta": "Sports school",
        "takmicenja": "Sports competitions",
        "multimedija": "Multimedia",
        "cenovnik": "Price list",
        "probniTrening": "Trial workout",

        "naslovPocetne": "Welcome to our sports center",
        "opisPocetne": "A place for training, recreation and a healthy lifestyle.",
        "naslovSlajdera": "Our sports center",
        "opisSlajdera": "Take a look at some of the facilities available to our members.",
        "modernaTeretana": "Modern gym",
        "opisTeretane": "A space equipped for strength and conditioning workouts.",
        "naslovGrupnihTreninga": "Group workouts",
        "opisGrupnihTreninga": "Train in a motivating atmosphere with professional coaches.",
        "naslovSportskihTerena": "Sports courts",
        "opisSportskihTerena": "Courts intended for recreation, training and sports competitions.",

        "oNasemCentru": "About our center",
        "naslovONama": "Sport moves us and brings us together",
        "opisONama": "Our sports center provides modern facilities for training, recreation and spending quality leisure time.",
        "pogledajteUsluge": "View our services",
        "nasaMisija": "Our mission",
        "opisMisije": "We want to provide people of all ages with a safe and pleasant place for physical activity and a healthy lifestyle.",
        "naseVrednosti": "Our values",
        "zastoIzabratiCentar": "Why choose our center?",
        "strucnost": "Expertise",
        "opisStrucnosti": "Our team consists of professional coaches with experience in different sports.",
        "bezbednost": "Safety",
        "opisBezbednosti": "We pay close attention to proper exercise technique, hygiene and the safety of our members.",
        "zajednistvo": "Community",
        "opisZajednistva": "We create a positive environment where members support one another.",
        "godinaIskustva": "years of experience",
        "strucnihTrenera": "professional coaches",
        "aktivnihClanova": "active members",
        "sportskihPrograma": "sports programs",
        "cestaPitanja": "Frequently asked questions",
        "pitanjePriprema": "Is previous physical preparation required?",
        "odgovorPriprema": "No. The programs are suitable for beginners, recreational athletes and experienced athletes.",
        "pitanjeProbniTrening": "Is a trial workout available?",
        "odgovorProbniTrening": "Yes. You can schedule a trial workout through the contact page.",
        "pitanjeVikend": "Is the center open on weekends?",
        "odgovorVikend": "The center is open every day, including Saturday and Sunday.",

        "kontaktNaslov": "Contact us",
        "kontaktOpis": "Complete the form and register for a free trial workout.",
        "imeIPrezime": "Full name",
        "adresaEPoste": "Email address",
        "brojTelefona": "Phone number",
        "primerTelefona": "For example: 064 123 4567",
        "izaberiteUslugu": "Select a service",
        "grupniTrening": "Group workout",
        "personalniTrening": "Personal training",
        "sportskiTeren": "Sports court",
        "poruka": "Message",
        "porukaPlaceholder": "Enter at least 10 characters.",
        "saglasnost": "I agree to the processing of the entered data.",
        "posaljitePrijavu": "Submit application",

        "naslovUsluga": "Our services",
        "opisUsluga": "The sports center offers different programs for beginners, recreational athletes and experienced athletes.",
        "opisUslugeTeretana": "Modern equipment for individual and guided strength and conditioning workouts.",
        "opisUslugeGrupniTreninzi": "Different programs suitable for all ages and levels of physical fitness.",
        "opisUslugePersonalniTreninzi": "Individual workouts with a professional coach and a program adapted to each member's needs, abilities and goals.",
        "opisUslugeSportskiTereni": "Courts for recreational training, team sports and the organization of sports competitions.",
        "opisSkoleSporta": "Programs for children that encourage proper physical development, coordination, team spirit and learning about different sports.",
        "opisTakmicenja": "Organization of recreational tournaments, leagues, sporting events and competitions for different age groups.",
        "upoznajteCentar": "Discover our sports center",
        "opisMultimedije": "Take a look at the facilities, workouts and activities that our sports center offers its members.",
        "prostorCentra": "Sports center facilities",
        "opisSlikeCentra": "Interior of the sports center with exercise equipment",
        "promotivniVideo": "Promotional video",
        "videoNijePodrzan": "Your browser does not support MP4 video playback.",
        "cenovnikUsluga": "Service price list",
        "opisCenovnika": "Information about memberships and other services is available in our price list.",
        "otvoriteCenovnik": "Open the price list",
        "primerTreninga": "Example of a sports workout",
        "naslovVideoZapisa": "Sports workout video",
        "nasaLokacija": "Our location",
        "naslovMape": "Sports center location",

        "pristupacnost": "Accessibility",
        "tamnaTema": "Dark theme",
        "svetlaTema": "Light theme",
        "manjiFont": "Smaller font",
        "normalanFont": "Normal font",
        "veciFont": "Larger font",
        "jezik": "Language:"
    }
}`;

const sviPrevodi = JSON.parse(tekstPrevoda);

document.addEventListener(
    "DOMContentLoaded",
    function () {
        pripremiIzborTeme();
        pripremiIzborVelicineFonta();
        pripremiIzborJezika();
        ucitajSacuvanaPodesavanja();
    }
);


function pripremiIzborTeme() {
    const dugmeTamnaTema =
        document.getElementById(
            "tamna-tema"
        );

    const dugmeSvetlaTema =
        document.getElementById(
            "svetla-tema"
        );

    if (dugmeTamnaTema) {
        dugmeTamnaTema.addEventListener(
            "click",
            function () {
                promeniTemu("tamna");
            }
        );
    }

    if (dugmeSvetlaTema) {
        dugmeSvetlaTema.addEventListener(
            "click",
            function () {
                promeniTemu("svetla");
            }
        );
    }
}


function promeniTemu(tema) {
    document.documentElement.setAttribute(
        "data-tema",
        tema
    );

    document.documentElement.setAttribute(
        "data-bs-theme",
        tema === "tamna"
            ? "dark"
            : "light"
    );

    sacuvajPodesavanje(
        "izabrana-tema",
        tema
    );
}


function pripremiIzborVelicineFonta() {
    const dugmeManjiFont =
        document.getElementById(
            "manji-font"
        );

    const dugmeNormalanFont =
        document.getElementById(
            "normalan-font"
        );

    const dugmeVeciFont =
        document.getElementById(
            "veci-font"
        );

    if (dugmeManjiFont) {
        dugmeManjiFont.addEventListener(
            "click",
            function () {
                promeniVelicinuFonta(
                    "manji"
                );
            }
        );
    }

    if (dugmeNormalanFont) {
        dugmeNormalanFont.addEventListener(
            "click",
            function () {
                promeniVelicinuFonta(
                    "normalan"
                );
            }
        );
    }

    if (dugmeVeciFont) {
        dugmeVeciFont.addEventListener(
            "click",
            function () {
                promeniVelicinuFonta(
                    "veci"
                );
            }
        );
    }
}


function promeniVelicinuFonta(velicina) {
    document.documentElement.setAttribute(
        "data-velicina-fonta",
        velicina
    );

    if (velicina === "manji") {
        document.documentElement.style.fontSize =
            "87.5%";
    } else if (velicina === "veci") {
        document.documentElement.style.fontSize =
            "112.5%";
    } else {
        document.documentElement.style.fontSize =
            "100%";
    }

    sacuvajPodesavanje(
        "izabrana-velicina-fonta",
        velicina
    );
}


function pripremiIzborJezika() {
    const izborJezika =
        document.getElementById(
            "izbor-jezika"
        );

    if (!izborJezika) {
        return;
    }

    izborJezika.addEventListener(
        "change",
        function () {
            const izabraniJezik =
                izborJezika.value;

            sacuvajPodesavanje(
                "izabrani-jezik",
                izabraniJezik
            );

            ucitajPrevode(
                izabraniJezik
            );
        }
    );
}


function ucitajSacuvanaPodesavanja() {
    const sacuvanaTema =
        procitajPodesavanje(
            "izabrana-tema",
            "tamna"
        );

    const sacuvanaVelicinaFonta =
        procitajPodesavanje(
            "izabrana-velicina-fonta",
            "normalan"
        );

    const sacuvaniJezik =
        procitajPodesavanje(
            "izabrani-jezik",
            "sr"
        );

    promeniTemu(sacuvanaTema);

    promeniVelicinuFonta(
        sacuvanaVelicinaFonta
    );

    const izborJezika =
        document.getElementById(
            "izbor-jezika"
        );

    if (izborJezika) {
        izborJezika.value =
            sacuvaniJezik;
    }

    ucitajPrevode(sacuvaniJezik);
}


function sacuvajPodesavanje(
    naziv,
    vrednost
) {
    try {
        localStorage.setItem(
            naziv,
            vrednost
        );
    } catch (greska) {
        console.warn(
            "Podešavanje nije sačuvano.",
            greska
        );
    }
}


function procitajPodesavanje(
    naziv,
    podrazumevanaVrednost
) {
    try {
        return (
            localStorage.getItem(naziv) ||
            podrazumevanaVrednost
        );
    } catch (greska) {
        console.warn(
            "Podešavanje nije učitano.",
            greska
        );

        return podrazumevanaVrednost;
    }
}


function ucitajPrevode(jezik) {
    const prevodi =
        sviPrevodi[jezik] ||
        sviPrevodi.sr;

    primeniPrevode(
        prevodi,
        jezik
    );
}


function primeniPrevode(prevodi, jezik) {
    const elementiZaPrevod =
        document.querySelectorAll(
            "[data-prevod]"
        );

    elementiZaPrevod.forEach(
        function (element) {
            const oznakaPrevoda =
                element.dataset.prevod;

            if (prevodi[oznakaPrevoda]) {
                element.textContent =
                    prevodi[oznakaPrevoda];
            }
        }
    );

    const elementiSaPlaceholderom =
        document.querySelectorAll(
            "[data-prevod-placeholder]"
        );

    elementiSaPlaceholderom.forEach(
        function (element) {
            const oznakaPrevoda =
                element.dataset
                    .prevodPlaceholder;

            if (prevodi[oznakaPrevoda]) {
                element.placeholder =
                    prevodi[oznakaPrevoda];
            }
        }
    );

    const elementiSaAlternativnimTekstom =
        document.querySelectorAll(
            "[data-prevod-alt]"
        );

    elementiSaAlternativnimTekstom.forEach(
        function (element) {
            const oznakaPrevoda =
                element.dataset.prevodAlt;

            if (prevodi[oznakaPrevoda]) {
                element.alt =
                    prevodi[oznakaPrevoda];
            }
        }
    );

    const elementiSaNaslovom =
        document.querySelectorAll(
            "[data-prevod-title]"
        );

    elementiSaNaslovom.forEach(
        function (element) {
            const oznakaPrevoda =
                element.dataset.prevodTitle;

            if (prevodi[oznakaPrevoda]) {
                element.title =
                    prevodi[oznakaPrevoda];
            }
        }
    );

    document.documentElement.lang =
        jezik === "en"
            ? "en"
            : "sr-Latn";
}