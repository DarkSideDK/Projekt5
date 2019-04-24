function listeFunktion() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("medarbejderSoegListe");
    filter = input.value.toUpperCase();
    /*console.log("nu skal vi finde vores liste");
    console.log(document.getElementById("medarbejderListen"));
    if(document.getElementById("medarbejderListen"))
       {
            console.log("vi fandt vores liste");
       }
    else
        {
            console.log("vi kunne ikke finde vores liste");
        }*/
    ul = document.getElementById("medarbejderListen");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}