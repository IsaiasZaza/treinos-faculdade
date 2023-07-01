let nomes = ["Matheus", "Maria", "José"];
let elementoRemover = nomes.pop();
console.log(elementoRemover);
console.log(nomes);
nomes.push('zaza')
console.log(nomes);
/*pop e push, elimina e coloca elementos no final do array*/

let frutas = ["maça", "uva", "pera", "mamão", "banana"];
let removerPrimeiroCarro = frutas.shift()
console.log(removerPrimeiroCarro)
console.log(frutas);

frutas.unshift('Guarana')
console.log(frutas[0])

/*shift e unshift, elimina e coloca elementos no final do array*/

let numes = [0,2,5,8,9,7,2];
console.log(numes.indexOf(2))
console.log(numes.lastIndexOf(2))

/*indexOf e lastIndexOf serve para encontrar o primeiro e ultimo número*/

let nums = [0,1,2,3,4,5,6,7,8,9];
console.log(nums.slice(4,5));/*no slice voce seleciona a variavel que voce quer logo na frente o limitar ou seja a variavel da frente para parar a busca*/
console.log(nums.slice(4,6));

console.log(nums.slice(0))
console.log(nums.slice(-2))/*numeros negativos tambem funcionam*/
console.log(nums.slice(3,-2));

let nome = ["iago", "leandro", "joao", "phillipe"]
nome.forEach(nome =>{
    console.log("o nome é " + nome);
})
/*intera o elemento do array que nos escolhermos*/

/*verifica se o includes array tem um determinado elemento*/
let car = ["Fiat", "Uno", "GTI", "bmw"];
console.log(car.includes("Fiat"));
console.log(car.includes("Ford"));
// if (carros.includes("bmw")) {}

/*reverse inverte o array*/
let arr = [1,2,3,4,5,6,7,8,9,5,1,2,3]
console.log(arr.reverse())

// remove tudo que não é string
let nom = "   Matheus";
let nomCorrigido = nom.trim()
console.log(nom);
console.log(nomCorrigido);

// padstart serve para adicionar caracteristicas
let sku = "34";
console.log(sku.padStart(6, "0"))

let sku2 = "7345";
console.log(sku2.padStart(7,"erro"))

// split Divide uma string por um separador, e retorna um array
let frase = "testando o metodo split";
console.log(frase.split(" "));
let palavras = frase.split(" ");
console.log(palavras)

let produtos = "banana;carro;minhoca;salame;pedra;uva"
console.log(produtos.split(';'));

// junta elementos em uma array em uma frase, por meio de um separador
let novafrase = palavras.join("@");
console.log(novafrase);
console.log(palavras.join(" "));

// repete uma string de acordo com um parametro
let palavs = "repetir";
console.log(palavs.repeat(2))