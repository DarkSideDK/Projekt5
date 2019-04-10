var height;
var content;

function loadUdviklingssamtale() {
    /*Indsæt højre vindue*/
    document.getElementById("rightbox").innerHTML='<object type="text/html" id="window" data="udviklingssamtale.html"></object>';
    
    /*Højre vindue skal være sammme højde som venstre vindue */
    height = document.getElementById('leftbox').scrollHeight;
    document.getElementById('window').style.height = height + "px";
    
}
