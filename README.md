# Knjiznica UI

C:\books\
    knjiga1.pdf
    knjiga2.pdf
    knjiga3.pdf

V aplikaciji uporabnik klikne Izberi mapo knjig, izbere C:\books, nato se vse PDF knjige prikažejo v knjižnici. Dodan je tudi Osveži knjige, da lahko kasneje doda nove PDF-je v isto mapo.

Aplikacija si shrani dovoljenje za izbrano mapo, kjer ga brskalnik lahko ponovno uporabi; pri ponovnem obisku lahko zahteva ponovno dovoljenje, če je potrebno. Dostop do lokalne mape temelji na File System Access API, ki zahteva uporabnikovo izbiro/dovoljenje.
