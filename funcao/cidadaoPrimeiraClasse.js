// Função em Javascript é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { } // Retorno de uma função JS é opcional. Se nada for retornado, a função retornará undefined

// Armazenar em uma variável
const fn2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'opa' }
console.log(obj.falar());

// Passar função como parâmetro
function run(fun) {
    fun()
}
run(function () {console.log('Executando...') })

// Uma função pode retornar/conter outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
} 
soma(2, 3)(5)
                //OU
const cincoMais = soma(2, 3)
cincoMais(5)