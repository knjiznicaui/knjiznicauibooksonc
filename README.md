# Knjiznica UI

C:\books\
    knjiga1.pdf
    knjiga2.pdf
    knjiga3.pdf

V aplikaciji uporabnik klikne Izberi mapo knjig, izbere C:\books, nato se vse PDF knjige prikažejo v knjižnici. Dodan je tudi Osveži knjige, da lahko kasneje doda nove PDF-je v isto mapo.

Aplikacija si shrani dovoljenje za izbrano mapo, kjer ga brskalnik lahko ponovno uporabi; pri ponovnem obisku lahko zahteva ponovno dovoljenje, če je potrebno. Dostop do lokalne mape temelji na File System Access API, ki zahteva uporabnikovo izbiro/dovoljenje.


Ko prvič odpremo aplikacijo, kliknemo »Izberi mapo knjig« in izberemo C:\books.

Potem aplikacija:

C:\books → prebere vse PDF-je → ustvari knjižnico → indeksira PDF-je za iskanje → PDF-je uporablja tudi za AI funkcije.

Podmape znotraj C:\books so prav tako podprte.

Dodana sta tudi »Spremeni mapo« in »Osveži knjige«. Tako lahko kolega doda nove PDF-je v C:\books in nato samo klikne Osveži knjige.

Pomembno: neposreden dostop do lokalne mape je omejen z varnostjo brskalnika; showDirectoryPicker() zahteva uporabniško interakcijo in deluje v varnem kontekstu, kot je HTTPS. Podpora med brskalniki ni popolnoma enaka, zato je za ta projekt najbolj varna izbira Chrome ali Edge. Izbrane FileSystemDirectoryHandle je mogoče shraniti v IndexedDB in jih pozneje ponovno uporabiti, kjer brskalnik ohrani dovoljenje.
