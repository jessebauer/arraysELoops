const letras = ["A", "a", "B", "C", "E", "e"];
let quantidade = 0;
for (let letraE of letras) {
    if (letraE === "E" || letraE === "e") {
        quantidade++
    }
}

if (quantidade > 0) {
    console.log(`Há ${quantidade} letras e ou E`);
} else {
    console.log('Não há letras e ou E');
}