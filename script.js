function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");

    var pos1 = Math.floor(Math.random() * 500);
    var pos2 = Math.floor(Math.random() * 400);
    bola.setAttribute("style", "left:"+pos1+"px;top:"+pos2+"px;");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}

function estourar(obj){
    document.body.removeChild(obj);
    addBola();
}
function iniciar(){
    setInterval(addBola, 1000);
}