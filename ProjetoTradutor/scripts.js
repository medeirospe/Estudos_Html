let inputTexto = document.querySelector(".input_texto")

async function traduzir(){

    let endereco = "https://api.mymemory.translated.net/get?q=" + inputTexto.value
    + "&langpair=pt-BR|en"

    let resposta = await fetch(endereco)
    
    let dados = await resposta.json()

    console.log(dados)
}