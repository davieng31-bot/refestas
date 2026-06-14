let pedido = {
    modelo: "",
    foto: "",
    peso: "",
    massa: "",
    tema: "",
    nome: "",
    whatsapp: "",
    entrega: ""
};

// Seleciona o modelo do bolo
function selecionarModelo(card, modelo, foto) {

    document.querySelectorAll(".card").forEach(function(c) {
        c.classList.remove("selecionado");
    });

    card.classList.add("selecionado");

    pedido.modelo = modelo;
    pedido.foto = foto;
}

// Vai para a tela 2
function irTela2() {

    if (pedido.modelo == "") {
        alert("Selecione um modelo de bolo.");
        return;
    }

    pedido.peso = document.getElementById("peso").value;
    pedido.massa = document.getElementById("massa").value;
    pedido.tema = document.getElementById("tema").value;

    document.getElementById("tela1").style.display = "none";
    document.getElementById("tela2").style.display = "block";

    document.getElementById("fotoResumo").src = pedido.foto;
}

// Volta para tela 1
function voltarTela1() {

    document.getElementById("tela2").style.display = "none";
    document.getElementById("tela1").style.display = "block";
}

// Vai para tela 3
function irTela3() {

    pedido.nome = document.getElementById("nome").value;
    pedido.whatsapp = document.getElementById("whats").value;
    pedido.entrega = document.getElementById("entrega").value;

    if (pedido.nome.trim() == "") {
        alert("Informe o nome.");
        return;
    }

    if (pedido.whatsapp.trim() == "") {
        alert("Informe o WhatsApp.");
        return;
    }

    if (pedido.entrega == "") {
        alert("Informe a data de entrega.");
        return;
    }

    document.getElementById("tela2").style.display = "none";
    document.getElementById("tela3").style.display = "block";

    document.getElementById("fotoFinal").src = pedido.foto;

    document.getElementById("rModelo").innerText = pedido.modelo;
    document.getElementById("rPeso").innerText = pedido.peso;
    document.getElementById("rMassa").innerText = pedido.massa;
    document.getElementById("rTema").innerText = pedido.tema;
    document.getElementById("rNome").innerText = pedido.nome;
    document.getElementById("rWhats").innerText = pedido.whatsapp;
    document.getElementById("rEntrega").innerText = pedido.entrega;
}

// Volta para tela 2
function voltarTela2() {

    document.getElementById("tela3").style.display = "none";
    document.getElementById("tela2").style.display = "block";
}

// Envia para o Google Sheets
function enviarPedido() {

    const url = "https://script.google.com/macros/s/AKfycbwK1-R1w0PH6hjsL3CIWpjBym4ZvVEY2xfKV44q607ZJJB4dQ0VwKBwoeVd7-q5w5Jm/exec";

    fetch(url, {

        method: "POST",

        body: JSON.stringify(pedido)

    })
    .then(response => response.text())
    .then(function(retorno){

        document.getElementById("tela3").style.display = "none";
    
        document.getElementById("tela4").style.display = "block";
    
    })

/*

    .then(function(retorno){

        let mensagem =
    `Olá!
    
    Acabei de fazer um pedido na Re Festas.
    
    🍰 Modelo: ${pedido.modelo}
    ⚖️ Peso: ${pedido.peso}
    🎂 Massa: ${pedido.massa}
    🎨 Tema: ${pedido.tema}
    👤 Nome: ${pedido.nome}
    📅 Entrega: ${pedido.entrega}`;
    
        let numero = "5511999999999"; // coloque o WhatsApp da confeitaria
    
        let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
    
        document.getElementById("tela3").style.display = "none";
        document.getElementById("tela4").style.display = "block";
    
        setTimeout(function(){
    
            window.open(url, "_blank");
    
        }, 1500);
    
    })

    */

    .catch(function(erro) {

        console.log(erro);

        alert("Erro ao enviar o pedido.");

    });

}