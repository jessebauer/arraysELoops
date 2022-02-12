const numeros = [8, 11, 4, 2];
let maior = null;
let menor = null;

for (let numero of numeros) {
    if (numero > maior) {
        maior = numero;
        menor = numero;
    } else {
        menor = numero;
    }
}


console.log(maior - menor);