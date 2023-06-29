let carro = {
    portas: 2,
    portamalas: '100l',
    motor: '2.0'
}
let adicionais = {
    tetosolar: true,
    arcondicionado: true
}
console.log(carro);

Object.assign(carro, adicionais);/*faz herdar as propriedadas do amigo da direita*/

console.log(carro);

/*Keys*/
let obj = {
    'chave1' : 1,
    'chave2' : 2,
    'chave3' : 3,
}
console.log(obj)
console.log(Object.keys(obj))

/*mutabillity*/

let persona = {
    nome: "Matheus"
}
let persona2 = persona;
let persona3 = {
    nome: "Zaza"
}
console.log(persona == persona2)

persona2.nome = "Pedro"
console.log(persona.nome);

persona.nome = "Oago"
console.log(persona.nome)

console.log(persona == persona2);/*true*/
console.log(persona3 == persona);/*false*/
console.log(persona3 == persona2)/*false*/