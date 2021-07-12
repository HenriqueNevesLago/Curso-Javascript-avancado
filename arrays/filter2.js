//O que o filter faz por "baixo dos panos"
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], this.length, i++)) {
            newArray.push(this[i])
        }
    }
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
]
console.log(produtos.filter(function(p) {
    return p.preco >= 500 && p.fragil
}));