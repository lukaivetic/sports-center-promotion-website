document.addEventListener("DOMContentLoaded", function () {
    const sekcije = document.querySelectorAll("section");
    const podnozje = document.querySelector("footer p");
    const kontaktForma =
        document.getElementById("kontakt-forma");

    pripremiAnimacijeSekcija(sekcije);
    postaviTrenutnuGodinu(podnozje);
    pripremiMegaMeni();
    pripremiSlajder();

    if (kontaktForma) {
        pripremiValidacijuForme(kontaktForma);
    }
});

function pripremiAnimacijeSekcija(sekcije) {
    sekcije.forEach(function (sekcija, indeks) {
        setTimeout(function () {
            sekcija.classList.add(
                "prikazan-element"
            );
        }, indeks * 200);
    });
}

function postaviTrenutnuGodinu(podnozje) {
    if (!podnozje) {
        return;
    }

    const trenutnaGodina =
        new Date().getFullYear();

    const jezik = procitajIzabraniJezik();

    const nazivCentra =
        jezik === "en"
            ? "Sports Center"
            : "Sportski centar";

    podnozje.removeAttribute("data-prevod");

    podnozje.textContent =
        "© " +
        trenutnaGodina +
        " " +
        nazivCentra;
}

function pripremiMegaMeni() {
    const dugmeMegaMenija =
        document.querySelector(
            ".dugme-mega-menija"
        );

    const stavkaMegaMenija =
        document.querySelector(
            ".stavka-mega-menija"
        );

    if (!dugmeMegaMenija || !stavkaMegaMenija) {
        return;
    }

    dugmeMegaMenija.addEventListener(
        "click",
        function () {
            const meniJeOtvoren =
                stavkaMegaMenija.classList.toggle(
                    "otvoren-meni"
                );

            dugmeMegaMenija.setAttribute(
                "aria-expanded",
                meniJeOtvoren
            );
        }
    );

    document.addEventListener(
        "click",
        function (dogadjaj) {
            const klikUnutarMenija =
                stavkaMegaMenija.contains(
                    dogadjaj.target
                );

            if (!klikUnutarMenija) {
                zatvoriMegaMeni(
                    stavkaMegaMenija,
                    dugmeMegaMenija
                );
            }
        }
    );

    document.addEventListener(
        "keydown",
        function (dogadjaj) {
            if (dogadjaj.key === "Escape") {
                zatvoriMegaMeni(
                    stavkaMegaMenija,
                    dugmeMegaMenija
                );

                dugmeMegaMenija.focus();
            }
        }
    );

    const vezeMegaMenija =
        stavkaMegaMenija.querySelectorAll(
            ".mega-meni a"
        );

    vezeMegaMenija.forEach(function (veza) {
        veza.addEventListener(
            "click",
            function () {
                zatvoriMegaMeni(
                    stavkaMegaMenija,
                    dugmeMegaMenija
                );
            }
        );
    });
}


function zatvoriMegaMeni(
    stavkaMegaMenija,
    dugmeMegaMenija
) {
    stavkaMegaMenija.classList.remove(
        "otvoren-meni"
    );

    dugmeMegaMenija.setAttribute(
        "aria-expanded",
        "false"
    );
}

function pripremiSlajder() {
    const slajder =
        document.getElementById(
            "slajder-slika"
        );

    if (!slajder) {
        return;
    }

    const slajdovi =
        slajder.querySelectorAll(".slajd");

    const pokazivaci =
        document.querySelectorAll(
            ".pokazivac"
        );

    const prethodnoDugme =
        slajder.querySelector(
            ".prethodni-slajd"
        );

    const sledeceDugme =
        slajder.querySelector(
            ".sledeci-slajd"
        );

    if (
        slajdovi.length === 0 ||
        !prethodnoDugme ||
        !sledeceDugme
    ) {
        return;
    }

    let trenutniSlajd = 0;
    let automatskaPromena;

    function prikaziSlajd(brojSlajda) {
        slajdovi.forEach(function (slajd) {
            slajd.classList.remove(
                "aktivan-slajd"
            );
        });

        pokazivaci.forEach(
            function (pokazivac) {
                pokazivac.classList.remove(
                    "aktivan-pokazivac"
                );
            }
        );

        trenutniSlajd = brojSlajda;

        if (trenutniSlajd >= slajdovi.length) {
            trenutniSlajd = 0;
        }

        if (trenutniSlajd < 0) {
            trenutniSlajd =
                slajdovi.length - 1;
        }

        slajdovi[trenutniSlajd].classList.add(
            "aktivan-slajd"
        );

        if (pokazivaci[trenutniSlajd]) {
            pokazivaci[
                trenutniSlajd
            ].classList.add(
                "aktivan-pokazivac"
            );
        }
    }

    function pokreniAutomatskuPromenu() {
        clearInterval(automatskaPromena);

        automatskaPromena =
            setInterval(function () {
                prikaziSlajd(
                    trenutniSlajd + 1
                );
            }, 5000);
    }

    function zaustaviAutomatskuPromenu() {
        clearInterval(automatskaPromena);
    }

    prethodnoDugme.addEventListener(
        "click",
        function () {
            prikaziSlajd(
                trenutniSlajd - 1
            );

            pokreniAutomatskuPromenu();
        }
    );

    sledeceDugme.addEventListener(
        "click",
        function () {
            prikaziSlajd(
                trenutniSlajd + 1
            );

            pokreniAutomatskuPromenu();
        }
    );

    pokazivaci.forEach(function (pokazivac) {
        pokazivac.addEventListener(
            "click",
            function () {
                const brojSlajda =
                    Number(
                        pokazivac.dataset
                            .brojSlajda
                    );

                prikaziSlajd(brojSlajda);
                pokreniAutomatskuPromenu();
            }
        );
    });

    slajder.addEventListener(
        "mouseenter",
        function () {
            zaustaviAutomatskuPromenu();
        }
    );

    slajder.addEventListener(
        "mouseleave",
        function () {
            pokreniAutomatskuPromenu();
        }
    );

    slajder.addEventListener(
        "focusin",
        function () {
            zaustaviAutomatskuPromenu();
        }
    );

    slajder.addEventListener(
        "focusout",
        function () {
            pokreniAutomatskuPromenu();
        }
    );

    prikaziSlajd(trenutniSlajd);
    pokreniAutomatskuPromenu();
}

function procitajIzabraniJezik() {
    try {
        return (
            localStorage.getItem(
                "izabrani-jezik"
            ) || "sr"
        );
    } catch (greska) {
        console.warn(
            "Izabrani jezik nije moguće učitati.",
            greska
        );

        return "sr";
    }
}

function preuzmiPorukeValidacije() {
    const jezik = procitajIzabraniJezik();

    const poruke = {
        sr: {
            greskaIme:
                "Ime i prezime moraju imati " +
                "najmanje 3 karaktera.",

            greskaEPosta:
                "Unesite ispravnu adresu e-pošte.",

            greskaTelefon:
                "Unesite ispravan broj telefona.",

            greskaUsluga:
                "Izaberite jednu uslugu.",

            greskaPoruka:
                "Poruka mora imati najmanje " +
                "10 karaktera.",

            greskaSaglasnost:
                "Morate prihvatiti obradu podataka.",

            porukaUspeha:
                "Prijava je uspešno poslata. " +
                "Kontaktiraćemo vas uskoro."
        },

        en: {
            greskaIme:
                "The full name must contain at least " +
                "3 characters.",

            greskaEPosta:
                "Enter a valid email address.",

            greskaTelefon:
                "Enter a valid phone number.",

            greskaUsluga:
                "Select one service.",

            greskaPoruka:
                "The message must contain at least " +
                "10 characters.",

            greskaSaglasnost:
                "You must agree to the processing " +
                "of your data.",

            porukaUspeha:
                "Your application was submitted " +
                "successfully. We will contact you soon."
        }
    };

    return poruke[jezik] || poruke.sr;
}

function pripremiValidacijuForme(kontaktForma) {
    const imeIPrezime =
        document.getElementById(
            "ime-i-prezime"
        );

    const adresaEPoste =
        document.getElementById(
            "adresa-e-poste"
        );

    const brojTelefona =
        document.getElementById(
            "broj-telefona"
        );

    const izabranaUsluga =
        document.getElementById(
            "izabrana-usluga"
        );

    const porukaKorisnika =
        document.getElementById(
            "poruka-korisnika"
        );

    const saglasnost =
        document.getElementById(
            "saglasnost"
        );

    kontaktForma.addEventListener(
        "submit",
        function (dogadjaj) {
            dogadjaj.preventDefault();

            obrisiSveGreske();

            const poruke =
                preuzmiPorukeValidacije();

            let formaJeIspravna = true;

            if (
                imeIPrezime.value.trim().length < 3
            ) {
                prikaziGresku(
                    imeIPrezime,
                    "greska-ime",
                    poruke.greskaIme
                );

                formaJeIspravna = false;
            }

            if (
                !proveriAdresuEPoste(
                    adresaEPoste.value
                )
            ) {
                prikaziGresku(
                    adresaEPoste,
                    "greska-e-posta",
                    poruke.greskaEPosta
                );

                formaJeIspravna = false;
            }

            if (
                !proveriBrojTelefona(
                    brojTelefona.value
                )
            ) {
                prikaziGresku(
                    brojTelefona,
                    "greska-telefon",
                    poruke.greskaTelefon
                );

                formaJeIspravna = false;
            }

            if (izabranaUsluga.value === "") {
                prikaziGresku(
                    izabranaUsluga,
                    "greska-usluga",
                    poruke.greskaUsluga
                );

                formaJeIspravna = false;
            }

            if (
                porukaKorisnika.value
                    .trim().length < 10
            ) {
                prikaziGresku(
                    porukaKorisnika,
                    "greska-poruka",
                    poruke.greskaPoruka
                );

                formaJeIspravna = false;
            }

            if (!saglasnost.checked) {
                prikaziGresku(
                    saglasnost,
                    "greska-saglasnost",
                    poruke.greskaSaglasnost
                );

                formaJeIspravna = false;
            }

            if (formaJeIspravna) {
                prikaziPorukuUspeha(
                    poruke.porukaUspeha
                );

                kontaktForma.reset();
            }
        }
    );

    pripremiBrisanjeGresaka(
        kontaktForma
    );
}


function proveriAdresuEPoste(adresaEPoste) {
    const obrazacEPoste =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return obrazacEPoste.test(
        adresaEPoste.trim()
    );
}


function proveriBrojTelefona(brojTelefona) {
    const obrazacTelefona =
        /^[0-9 +()-]{7,20}$/;

    return obrazacTelefona.test(
        brojTelefona.trim()
    );
}


function prikaziGresku(
    polje,
    oznakaGreske,
    poruka
) {
    const elementGreske =
        document.getElementById(
            oznakaGreske
        );

    polje.classList.add(
        "neispravno-polje"
    );

    if (elementGreske) {
        elementGreske.textContent = poruka;
    }
}


function obrisiSveGreske() {
    const neispravnaPolja =
        document.querySelectorAll(
            ".neispravno-polje"
        );

    const porukeGresaka =
        document.querySelectorAll(
            ".poruka-greske"
        );

    const porukaUspeha =
        document.getElementById(
            "poruka-uspesnog-slanja"
        );

    neispravnaPolja.forEach(function (polje) {
        polje.classList.remove(
            "neispravno-polje"
        );
    });

    porukeGresaka.forEach(function (poruka) {
        poruka.textContent = "";
    });

    if (porukaUspeha) {
        porukaUspeha.textContent = "";
    }
}


function pripremiBrisanjeGresaka(
    kontaktForma
) {
    const poljaForme =
        kontaktForma.querySelectorAll(
            "input, select, textarea"
        );

    poljaForme.forEach(function (polje) {
        polje.addEventListener(
            "input",
            function () {
                polje.classList.remove(
                    "neispravno-polje"
                );
            }
        );

        polje.addEventListener(
            "change",
            function () {
                polje.classList.remove(
                    "neispravno-polje"
                );
            }
        );
    });
}


function prikaziPorukuUspeha(poruka) {
    const porukaUspeha =
        document.getElementById(
            "poruka-uspesnog-slanja"
        );

    if (!porukaUspeha) {
        return;
    }

    porukaUspeha.textContent = poruka;
}