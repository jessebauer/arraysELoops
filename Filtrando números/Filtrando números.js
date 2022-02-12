const original = [5, 7, 13, 17, 26, 34, 118, 245];
let novo = [];
for (let valores of original) {
    if (valores > 10 & valores < 20 || valores > 100) {
        novo.push(valores)
    }
}
console.log(novo);