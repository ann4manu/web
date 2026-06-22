const params = new URLSearchParams(window.location.search);

const nome = params.get("nome");
const email = params.get("email");
const mensagem = params.get("mensagem");

const resultado = document.getElementById("resultado");

if (resultado) {
    resultado.innerHTML =
        "Nome: " + (nome || "") + "<br>" +
        "Email: " + (email || "") + "<br>" +
        "Mensagem: " + (mensagem || "");
}