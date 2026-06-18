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

    entrega: ""

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

if(pedido.modelo==""){

alert("Selecione um modelo.");

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

    document.getElementById("rRecheio").innerText=pedido.recheio;

    document.getElementById("rPeso").innerText=pedido.peso;

    document.getElementById("rTema").innerText=pedido.tema;

    document.getElementById("rNome").innerText=pedido.nome;

    document.getElementById("rWhats").innerText=pedido.whatsapp;

    document.getElementById("rEntrega").innerText=pedido.entrega;

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

            sabor:pedido.recheio,

            peso:pedido.peso,

            tema:pedido.tema,

            nome:pedido.nome,

            whatsapp:pedido.whatsapp,

            dataEntrega:pedido.entrega

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

// ======================================

// As funções irTela3(),
// voltarTela2()
// e enviarPedido()
// serão adaptadas para mostrar e enviar
// o novo campo "recheio" em vez de "massa".