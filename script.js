// ======================================
// RE FESTAS 2.0
// SCRIPT.JS
// ======================================

let pedido = {

    modelo: "",

    fotoModelo: "",

    recheio: "",

    peso: "",

    tema: "",

    nome: "",

    whatsapp: "",

    entrega: "" ,

    endereco: "" ,

};

// ==============================
// DOCINHOS
// ==============================

let docinhos={

    brigadeiro:0,

    beijinho:0,

    cajuzinho:0,

    casadinho:0,

    bichodepe:0,

    olhodesogra:0

};

// ======================================
// LISTA DOS RECHEIOS
// ======================================

const recheios = [

{

nome:"Pêssego com creme",

foto:"img/recheios/pessegoCreme.jpg",

descricao:"Creme suave com pedaços de pêssego."

},

{

nome:"Chocolate com morango",

foto:"img/recheios/chocolateMorango.jpg",

descricao:"Chocolate cremoso com morangos."

},

{

nome:"Abacaxi com creme",

foto:"img/recheios/abacaxiCreme.jpg",

descricao:"Creme especial com abacaxi."

},

{

nome:"Abacaxi com coco",

foto:"img/recheios/abacaxiCoco.jpg",

descricao:"Abacaxi com coco ralado."

},

{

nome:"Dois amores",

foto:"img/recheios/doisAmores.jpg",

descricao:"Brigadeiro branco e preto."

},

{

nome:"Doce de leite",

foto:"img/recheios/doceDeLeite.jpg",

descricao:"Doce de leite cremoso."

},

{

nome:"Coco",

foto:"img/recheios/coco.jpg",

descricao:"Creme de coco."

},

{

nome:"Ninho com morango",

foto:"img/recheios/ninhoMorango.jpg",

descricao:"Leite Ninho com morangos."

},

{

nome:"Chocolate com castanhas",

foto:"img/recheios/chocolateCastanha.jpg",

descricao:"Chocolate e castanhas."

},

{

nome:"Abacaxi com doce de leite",

foto:"img/recheios/abacaxiDoceDeLeite.jpg",

descricao:"Combinação especial."

},

{

nome:"Doce de leite com ameixa",

foto:"img/recheios/doceDeLeiteAmeixa.jpg",

descricao:"Doce de leite com ameixas."

},

{

nome:"Chocolate",

foto:"img/recheios/chocolate.jpg",

descricao:"Chocolate tradicional."

},

{

nome:"Maracujá",

foto:"img/recheios/maracuja.jpg",

descricao:"Creme de maracujá."

}

];

// ======================================

let indice=0;

// ======================================

function atualizarRecheio(){

document.getElementById("imgRecheio").src=recheios[indice].foto;

document.getElementById("nomeRecheio").innerText=recheios[indice].nome;

document.getElementById("descRecheio").innerText=recheios[indice].descricao;

pedido.recheio=recheios[indice].nome;

}

// ======================================

function proximoRecheio(){

indice++;

if(indice>=recheios.length){

indice=0;

}

atualizarRecheio();

}

// ======================================

function anteriorRecheio(){

indice--;

if(indice<0){

indice=recheios.length-1;

}

atualizarRecheio();

}

// ======================================

function selecionarModelo(card,modelo,foto){

document.querySelectorAll(".modelo").forEach(function(c){

c.classList.remove("selecionado");

});

card.classList.add("selecionado");

pedido.modelo=modelo;

pedido.fotoModelo=foto;

}

// ======================================

function irTela2(){

    let totalDocinhos=0;

    totalDocinhos+=docinhos.brigadeiro;
    
    totalDocinhos+=docinhos.beijinho;
    
    totalDocinhos+=docinhos.cajuzinho;
    
    totalDocinhos+=docinhos.casadinho;
    
    totalDocinhos+=docinhos.bichodepe;
    
    totalDocinhos+=docinhos.olhodesogra;
    
    if(pedido.modelo=="" && totalDocinhos==0){
    
        alert("Escolha um bolo ou adicione docinhos.");
    
        return;
    
    }

pedido.peso=document.getElementById("peso").value;

pedido.tema=document.getElementById("tema").value;

document.getElementById("tela1").style.display="none";

document.getElementById("tela2").style.display="block";

document.getElementById("fotoResumo").src=pedido.fotoModelo;

}

// ======================================

function voltarTela1(){

document.getElementById("tela2").style.display="none";

document.getElementById("tela1").style.display="block";

}

// ===============================
// TELA 2 -> TELA 3
// ===============================

function irTela3(){

    pedido.nome=document.getElementById("nome").value;

    pedido.whatsapp=document.getElementById("whats").value;
    
    pedido.endereco=document.getElementById("endereco").value;

    pedido.entrega=document.getElementById("entrega").value;

    if(pedido.nome==""){

        alert("Informe o nome.");

        return;

    }

    if(pedido.whatsapp==""){

        alert("Informe o WhatsApp.");

        return;

    }

    if(pedido.entrega==""){

        alert("Informe a data de entrega.");

        return;

    }

    document.getElementById("tela2").style.display="none";

    document.getElementById("tela3").style.display="block";

    document.getElementById("fotoFinal").src=pedido.fotoModelo;

    document.getElementById("rModelo").innerText=pedido.modelo;

    if(pedido.modelo==""){
    
        document.getElementById("rRecheio").innerText="";
    
        document.getElementById("rPeso").innerText="";
    
    }else{
    
        document.getElementById("rRecheio").innerText=pedido.recheio;
    
        document.getElementById("rPeso").innerText=pedido.peso;
    
    }

    document.getElementById("rTema").innerText=pedido.tema;

    document.getElementById("rNome").innerText=pedido.nome;

    document.getElementById("rWhats").innerText=pedido.whatsapp;

    document.getElementById("rEndereco").innerText=pedido.endereco;

    document.getElementById("rEntrega").innerText=pedido.entrega;

    let resumoDocinhos="";

    if(docinhos.brigadeiro>0){
    
        resumoDocinhos+="<p><b>Brigadeiro:</b> "+docinhos.brigadeiro+" un</p>";
    
    }
    
    if(docinhos.beijinho>0){
    
        resumoDocinhos+="<p><b>Beijinho:</b> "+docinhos.beijinho+" un</p>";
    
    }
    
    if(docinhos.cajuzinho>0){
    
        resumoDocinhos+="<p><b>Cajuzinho:</b> "+docinhos.cajuzinho+" un</p>";
    
    }
    
    if(docinhos.casadinho>0){
    
        resumoDocinhos+="<p><b>Casadinho:</b> "+docinhos.casadinho+" un</p>";
    
    }
    
    if(docinhos.bichodepe>0){
    
        resumoDocinhos+="<p><b>Bicho de Pé:</b> "+docinhos.bichodepe+" un</p>";
    
    }
    
    if(docinhos.olhodesogra>0){
    
        resumoDocinhos+="<p><b>Olho de Sogra:</b> "+docinhos.olhodesogra+" un</p>";
    
    }
    
    document.getElementById("listaDocinhosResumo").innerHTML=resumoDocinhos;

}

// ===============================
// VOLTAR TELA 3 -> TELA 2
// ===============================

function voltarTela2(){

    document.getElementById("tela3").style.display="none";

    document.getElementById("tela2").style.display="block";

}

// ======================================

window.onload=function(){

atualizarRecheio();

};

// ==============================
// ENVIAR PEDIDO
// ==============================

function enviarPedido(){

    const url="https://script.google.com/macros/s/AKfycbwK1-R1w0PH6hjsL3CIWpjBym4ZvVEY2xfKV44q607ZJJB4dQ0VwKBwoeVd7-q5w5Jm/exec";

    fetch(url,{

        method:"POST",

        body:JSON.stringify({

            bolo:pedido.modelo,
        
            peso:(pedido.modelo=="" ? "" : pedido.peso),
        
            sabor:(pedido.modelo=="" ? "" : pedido.recheio),
        
            tema:pedido.tema,
        
            nome:pedido.nome,
        
            whatsapp:pedido.whatsapp,
        
            endereco:pedido.endereco,
        
            dataEntrega:pedido.entrega,
        
            brigadeiro:docinhos.brigadeiro,
        
            beijinho:docinhos.beijinho,
        
            cajuzinho:docinhos.cajuzinho,
        
            casadinho:docinhos.casadinho,
        
            bichodepe:docinhos.bichodepe,
        
            olhodesogra:docinhos.olhodesogra
        
        })

    })

    .then(response=>response.text())

    .then(function(){

        document.getElementById("tela3").style.display="none";

        document.getElementById("tela4").style.display="block";

    })

    .catch(function(erro){

        console.log(erro);

        alert("Erro ao enviar o pedido.");

    });

}

// ==============================
// ABRIR DOCINHOS
// ==============================

function abrirDocinhos(){

    document.getElementById("tela1").style.display="none";

    document.getElementById("telaDocinhos").style.display="block";

}

// ==============================
// FECHAR DOCINHOS
// ==============================

function fecharDocinhos(){

    document.getElementById("telaDocinhos").style.display="none";

    document.getElementById("tela1").style.display="block";

}

// ==============================
// SOMAR
// ==============================

function mais(nome){

    docinhos[nome]+=20;

    document.getElementById(nome).innerHTML=docinhos[nome];

}

// ==============================
// DIMINUIR
// ==============================

function menos(nome){

    if(docinhos[nome]>=20){

        docinhos[nome]-=20;

    }

    document.getElementById(nome).innerHTML=docinhos[nome];

}

// ==============================
// SALVAR
// ==============================

function salvarDocinhos(){

    let total=0;

    total+=docinhos.brigadeiro;

    total+=docinhos.beijinho;

    total+=docinhos.cajuzinho;

    total+=docinhos.casadinho;

    total+=docinhos.bichodepe;

    total+=docinhos.olhodesogra;

    let btn=document.getElementById("btnDocinhos");

    if(total>0){

        btn.innerHTML="✅ Docinhos ("+total+" un)";

    }else{

        btn.innerHTML="🍬 Adicionar Docinhos";

    }

    document.getElementById("telaDocinhos").style.display="none";

    document.getElementById("tela1").style.display="block";

}

// ======================================

// As funções irTela3(),
// voltarTela2()
// e enviarPedido()
// serão adaptadas para mostrar e enviar
// o novo campo "recheio" em vez de "massa".