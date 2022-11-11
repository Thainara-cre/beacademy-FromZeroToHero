// Declarar

//var name;
//let name2;
//const name3 = 'TESTE';

//name = "Thainara";
//name = 123;
/*
var name = "Luan";
console.log(name);

name = 32;
console.log(name);

name = "Monteiro";
console.log(name);

const name2 = "Luan";
console.log(name2);
*/
// Globais
//Hosting -> var trazer uma variavel pro começo do codigo
// var é uma variavel global 
/*console.log("Variavel name exisite aqui?", name);

{// Scopo (bloco de codigo)
    //local
    var name = "Luan";
}

console.log('Variavel name existe aqui?', name)
*/

//locais


let name = "Luan";

console.log('Variavel name existe aqui?', name);
{// Scopo (bloco de codigo)
    //local
    let name = "Jenifer";
    console.log('Variavel name existe aqui?', name);
}

console.log('Variavel name existe aqui?', name);