const original = [1, 4, 12, 21, 53, 88, 112];
let secundario = [];
for (let pares of original) {
    if (pares % 2 === 0) {
        secundario.push(pares)
    }
}
console.log(secundario)