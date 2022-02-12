const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomescomAlist = [];
for (let nomesComA of nomes) {
    if (nomesComA[0] === "a" || nomesComA[0] === "A") {
        nomescomAlist.push(nomesComA);
    }
}
console.log(nomescomAlist);