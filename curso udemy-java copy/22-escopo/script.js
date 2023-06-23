function multiplicartresNumeros(x,y,z){
    return x * y * z;
}
console.log(multiplicartresNumeros);
const mult = multiplicartresNumeros(5,4,8);
console.log("o valor de mult é " + mult)
function podeDirigir(idade, cnh){
    if(idade >=18 && cnh == true){
        console.log("Pode dirigir");
    }else {
        console.log("não pode")
    }
}
console.log(podeDirigir(19,true));
console.log(podeDirigir(25, false));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));
console.log(podeDirigir(17,true))

let a = 10;
function multiplicar(x,y){
    let a = x * y;

if(a > 10){
    let a = 0;
    console.log(a)
}
console.log(a);
}
console.log(a);

multiplicar(3,7);