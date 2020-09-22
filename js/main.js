//Var


function clicou(){
    document.getElementById("thanks").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    window.open("https://www.twitch.tv/");
    window.location.href = "https://www.twitch.tv/";
}

function trocar(elemento){
    elemento.innerHTML = "Se fodeu"
}

function voltar(elemento){
    elemento.innerHTML ="Passe o mouse no meu pau"
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}