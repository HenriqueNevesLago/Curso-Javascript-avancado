let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2* a
}

dobro = a => 2 * a // já indica que a function retorna alguma coisa, não precisa escrever return 
console.log(dobro(Math.PI));

let ola = function () {
    return 'olá'
}

//Podem ser escritas das seguintes formas: 
ola = () => 'Olá'
ola = _ => 'Olá'