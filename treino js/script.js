/*let nome = "Isaias"
let sobrenome = "Gonçalves"
let NomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto = `${nome} ${sobrenome} da Silva`;
console.log("Nome: " + nomeCompleto);

let idade = 90;
let idadeString = `${idade + idade} anos`
console.log(idadeString)
let idade = 17;

if (idade >= 17) {  
    console.log("voce é maior de idade")
} else{
    console.log("voce é menor de idade")
}
let idade = 20;

if (idade == 20){
  //  console.log("voce tem 20 anos")
} else{ 
    console.log("voce nao tem 20 anos")
}

let idade = 28
if (idade === 28){
    console.log("voce tem 28 anos");
    idade = idade + 35;
    console.log(idade);
    console.log("voce tem agora muitos anos kk 63")
    
} */
/*let idade = 60;
if (idade >= 18 && idade < 60){/*nunca esqueça da condicional &&*/
/*  console.log("Voce é lindo");
}else if (idade <= 17){
  console.log("Você é feio");
}else if (idade >= 60){
  console.log("Você ta velho");
}*/

/*let x = 10;
let y = 5;
console.log(x > y);

let w = "10";
let z = 10;
console.log(w === z)

let a = 10;
let b = 5;
console.log(a != b)

let preco = 46;
if (preco <= 40.3 && preco < 45){
console.log("muito barato")
}else{
  console.log("a carne ta cara")
}*/
/*let isMember = true;

let shipping = isMember ? 2 : 10;
console.log(isMember ? 'Voce o membro' : 'Voce não é membro')
console.log("Frete: " + shipping)

let age = 50;
let ageidade = ((age > 18 && age < 60) ? 'Voce é adulto' : 'Voce nao é')
console.log(ageidade)

let profession = "atleta"
console.log("profissão: " + profession)
switch (profession) {
  case 'fiscal':
    console.log('Sua camisa sera Verde')
    break;
  case ' bombeiro':
    console.log('Voce e lindo')
    break;
  case 'policial' :
  console.log('voce e policial')
    break;
  default:
    console.log('sua camisa sera preta')
    break;
}
function somar(n1, n2) {
  let resultado = n1 + n2;
  console.log('Resultado: ' + resultado)
}
somar(10, 15);

function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}
let completo = nomeCompleto("Zaza", "Goncalves")
console.log('Completo: ' + completo)
*/

/*function maiordeidade(idade){
  if(idade >= 18) {
    return true;
  } else {
    return false;
  }
}
let idade = 10;
let verificacao = maiordeidade(idade)

if (verificacao){
  console.log("e maior de idade")
} else {
  console.log("nao é maior de idade")
}*/
/*unction calcPct(n2, n1){
  let pct = (n1 / n2) *100;
  return pct;
}
let x = 80;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`)
*/
/*function validar(usuario, senha){
  if(usuario === 'Isaias' && senha === '123'){
    return true;
  }else{
    return false;
  }
}
let usuario = "Isaias";
let senha = "1234";
let validacao = validar (usuario, senha);
if (validacao){
  console.log('Acesso concedido');
} else {
  console.log ('acesso negado');
}

const somar = (x, y) => x + y;
console.log(somar(10,5));
*/
/*function add(){
  let count = 0;
  count ++;

}
let count = 0;
add();
add();
console.log(count);
*/
/*function calc(a, b) {
  return a * b;
}

console.log(calc(50, 2))
function addcalc(c, d) {
  return calc(c) + calc(d);
}
console.log(calc(50, 10))
*/
let names = ['pedro', ['isaias', 'gusta']]
console.log(names[1][0]);
