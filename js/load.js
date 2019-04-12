var height;
var content;

function loadUdviklingssamtale() {
    /*Indsæt højre vindue*/
    document.getElementById("rightbox").innerHTML='<object type="text/html" id="window" data="udviklingssamtale.html"></object>';
    
    /*Højre vindue skal være sammme højde som venstre vindue */
    height = document.getElementById('leftbox').scrollHeight;
    document.getElementById('window').style.height = height + "px";
    
    document.getElementById("udvknap").style.backgroundColor = "rgba(166,187,117,0.1)";
    document.getElementById("udvknap").style.border = "4px solid rgba(166,187,117,1)";
    document.getElementById("udvknap").style.position = "relative";
    document.getElementById("udvknap").style.zIndex = "1";
    document.getElementById("udvknap").style.color = "rgba(166,187,117,1)";
    document.getElementById("udvknap").style
}
