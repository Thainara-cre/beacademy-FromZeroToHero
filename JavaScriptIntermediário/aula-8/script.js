class Candidates {
    constructor(firstName, surName, cpf) {
        this.firstName = firstName
        this.surName = surName
        this.cpf = cpf
    }
}

class Masc extends Candidates {
    constructor(firstName, surName, cpf, revista) {
        super(firstName, surName, cpf)
        this.revista = revista
    }
}

const candidate1 = new Masc('Marcelo', 'Vasques', 1233456789, true)
const candidate2 = new Candidates('Maria', 'Fulana', 456123789)
console.log(candidate2)