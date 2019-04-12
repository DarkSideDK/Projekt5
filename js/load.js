var height;
var content;

function makeGray() {
    document.getElementById("udvknap").style.backgroundColor = "white";
    document.getElementById("udvknap").style.border = "4px solid #c0bcbb";
    document.getElementById("udvknap").style.position = "relative";
    document.getElementById("udvknap").style.zIndex = "0";
}

function loadUdviklingssamtale() {
    /*Indsæt højre vindue*/
    document.getElementById("rightbox").innerHTML='<object type="text/html" id="window" data="udviklingssamtale.html"></object>';
    
    /*Højre vindue skal være sammme højde som venstre vindue */
    height = document.getElementById('leftbox').scrollHeight;
    document.getElementById('window').style.height = height + "px";
    
    makeGray();
    
    var udvknap = document.getElementById("udvknap");
    udvknap.style.backgroundColor = "rgba(166,187,117,0.1)";
    udvknap.style.border = "4px solid rgba(166,187,117,1)";
    udvknap.style.position = "relative";
    udvknap.style.zIndex = "1";
    
    var knaptekst = document.getElementById("udvknap").document.getElementsByClassName("box0")[1];
}

function loadKollega() {
    document.getElementById("rightbox").innerHTML = '<object type="text/html" id="window" data="#"></obejct>';
    
    makeGray();
    
    
    
}
