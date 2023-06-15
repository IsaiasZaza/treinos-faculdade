let nome = "Isaias";
for(let i = 0; i < 10; i = i + 1){

if(i == 3){
    nome = "João";
}
if(i == 8 && nome == "João") {
    console.log("O nome é joao, pode parar");
    break;
}
console.log(i)
}