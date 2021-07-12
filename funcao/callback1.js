const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}.  ${nome}`);
}

//Ocorreu um callback que preencheu automaticamente os parâmetros
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante) )