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
