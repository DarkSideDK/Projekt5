function listeFunktion() { /*funktionen bliver diklereret */
    var input, filter, ul, li, a, i, txtValue; /*var kategoriserer de punkter der står efter */
    input = document.getElementById("medarbejderSoegListe"); /*input kategoriseres som... */
    filter = input.value.toUpperCase();
    ul = document.getElementById("medarbejderListen");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) { /*der laves et loop, her benyttes "For" loop, som betyder at den looper igennem en del kode, altså array/liste af navne */
        a = li[i].getElementsByTagName("a")[0]; /*"a" bliver kategoriseret */
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

/* desværre kan jeg ikke få det til at fungere */