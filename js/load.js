var height;
var content;

function makeGray() {
    var udvknap = document.getElementById("udvknap");
    var kollegaknap = document.getElementById("kollegaknap");
    var opretknap = document.getElementById("opretknap");
    
    udvknap.style.backgroundColor = "white";
    udvknap.style.border = "4px solid #c0bcbb";
    udvknap.style.position = "relative";
    udvknap.style.zIndex = "0";
    kollegaknap.style.backgroundColor = "white";
    kollegaknap.style.border = "4px solid #c0bcbb";
    kollegaknap.style.position = "relative";
    kollegaknap.style.zIndex = "0";
    opretknap.style.backgroundColor = "white";
    opretknap.style.border = "4px solid #c0bcbb";
    opretknap.style.position = "relative";
    opretknap.style.zIndex = "0";
    
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
    document.getElementById("rightbox").innerHTML = '<object type="text/html" id="window" data="kollega.html"></obejct>';
	
	height = document.getElementById('leftbox').scrollHeight;
    document.getElementById('window').style.height = height + "px";
    
    makeGray();
    var kollegaknap = document.getElementById("kollegaknap");
    kollegaknap.style.backgroundColor = "rgba(166,187,117,0.1)";
    kollegaknap.style.border = "4px solid rgba(166,187,117,1)";
    kollegaknap.style.position = "relative";
    kollegaknap.style.zIndex = "1";
    
}

function loadOpretSam() {
    document.getElementById("rightbox").innerHTML = '<object type="text/html" id="window" data="opretsam.html"></object>';
	
	height = document.getElementById('leftbox').scrollHeight;
    document.getElementById('window').style.height = height + "px";
    
    makeGray();
    var opretknap = document.getElementById("opretknap");
    opretknap.style.backgroundColor = "rgba(166,187,117,0.1)";
    opretknap.style.border = "4px solid rgba(166,187,117,1)";
    opretknap.style.position = "relative";
    opretknap.style.zIndex = "1";
}