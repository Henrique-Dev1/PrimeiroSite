//VARIAVEIS => um espaço da memoria do computator que gardamos algo
//Função=> um trecho de cosigo que so é executado quando é chamado

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"

}


async function buscarCidade(cidade){
    let dados = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave +
    "&lang=pt_br" +
    "&units=metric")
    .then(resposta => resposta.json())
    
    colocarNaTela(dados)
}



function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

buscarCidade(cidade)
}


