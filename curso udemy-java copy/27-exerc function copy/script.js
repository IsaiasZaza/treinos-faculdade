function imprimirIdade(idade){
    if(idade >= 18){
        console.log("voce pode entrar")
    }else {
        console.log("Voce não pode")
    }
}

imprimirIdade(65);
imprimirIdade(35)
imprimirIdade(17)
imprimirIdade(18)

function lerNome(nome){
    if(nome === "Isaias"){
        console.log("Seu nome ta certo");
    } else {
        console.log("Iago");
    }
}
lerNome("Isaia")

function lerTipo(dado){
    if(typeof dado === 'string'){
        console.log("voce é uma string");
    }else if(typeof dado === 'number'){
        console.log("voce é um number");
    }else if(typeof dado === 'boolean'){
        console.log("voce é um boolean")
    }
}
lerTipo(65);
lerTipo("eae");
lerTipo(true);

function checarTamanhoTexto(texto) {
    if(texto.length > 10){
        console.log("Texto muito longo");
    }else {
        console.log("Texto tranquilamente !");
    }
    console.log(texto.length);
}
checarTamanhoTexto("kkkkkkkkkkkk");
checarTamanhoTexto("e");
checarTamanhoTexto("kkkkkkkkkkklk");
