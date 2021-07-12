const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem usar callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) [
        notasBaixas1.push(notas[i])
    ]
}
console.log("Sem callback: " + notasBaixas1);

//Usando callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log("Com callback: " + notasBaixas2);

//Usando callback em arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log("Com callback em function arrow: " + notasBaixas3);