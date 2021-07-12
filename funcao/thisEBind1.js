const pessoa = {
    saudacao: 'Bom dia!!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() // funciona
const falar = pessoa.falar // isso não funciona com this, conflito de paradigma: fincional e OO
falar()

const falarDePessoa = pessoa.falar.bind(pessoa) // funciona por causa do bind
falarDePessoa()