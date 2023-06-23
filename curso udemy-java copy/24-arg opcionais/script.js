function soma(a,b){
    if(a == undefined || b == undefined){
        console.log("essa funçao ta errada");
    }else {
        return a + b
    }
}
console.log(soma(1));
console.log(soma(1,2));
function saudacao(nome, idade){
    if(idade === undefined){
        console.log("Olá " + nome);
    }else {
        console.log("olá " + nome + " voce tem " + idade + " anos");
    }
}
saudacao("matheus")
saudacao(59, "Igor")
saudacao("Isaias", 80)
function potencial(base, exp=2){
    return Math.pow(base, exp);
}
console.log(potencial(2))
console.log(potencial(2,2));
console.log(potencial(2,3))