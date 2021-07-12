function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
    } else {
        return area
    }
}

//Funciona
console.log(area(2, 2));
// Não dá erro, porem retorna NaN 
console.log(area(2));
console.log(area());
console.log(2,3,4,5,6);

// Retorna undefined porque é >20
console.log(area(5,5));