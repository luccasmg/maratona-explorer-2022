const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem que sim",
  "Minhas fontes dizem que não.",
  "Provavelmente.",
  "Não é possível prever agora. Volte mais tarde.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Não.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Absolutamente não.",
  "Absolutamente sim!",
  "Nunca",
  "Jamais!",
  "Nem que a vaca tussa!",
  "Só no dia de São Nunca!",
  "Com certeza!",
  "Que pergunta chata... manda outra!",
  "Não sei e tenho raiva de quem sabe.",
  "Deu até preguiça de responder."
];

const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

function fazerPergunta() {
  if(inputPergunta.value == "") {
    alert("Digite sua pergunta.")
    return
  }
  
  buttonPerguntar.setAttribute("disabled", true)
  const pergunta = "<div>" + inputPergunta.value + "</div>"
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
 
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  elementoResposta.style.opacity = 1
  
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 5000)
}