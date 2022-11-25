/* Prototypes */
function Pessoa (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const marcelo = new Pessoa('Marcelo', 44);
console.log(Pessoa.prototype)

const notebook = {
    cor: 'Preta',
    ano: 2022,
    especifications: function(value) {
        rreturn `Este notebook custa R$${value},00; cor ${this.cor}; ano ${this.ano}`
    }
}

const dell = {
    marca: 'Dell'
}

Object.setPrototypeOf(dell, notebook)

console.log(dell.especifications(5000))