    Orientação a objetos

Orientação a Objetos é um paradigma utilizado para modelar coisas/objetos do mundo real que queremos representar dentro de uma aplicação.
Em um software, estamos sempre representando de forma abstrata, objetos concretos do mundo real, ex.: um cliente, um aluno, um produto, etc...
Importante salientar que um objeto concreto no mundo real pode apresentar infinitas caracteristicas. Porém, trazemos para nosso software apenas aquelas que fazem sentido para a regra de negócio.
Sendo assim, para um cadastro de um sistema escolar, o tipo sanguíneo ou a altura do aluno (objeto do mundo concreto) não tenha utilidade. Porém, para o cadastro em umma clinica médica, estes elementos devem ser levados em consideração.
Um dos pilares da orientaação a objetos é a classe.
Com ela, podemos criar uma abstração de um objeto do mundo real e a partir desta, instanciar, ou seja, gerar um objeto concreto em nossa aplicação.
É o exemplo do cadastrode alunos em um sistema escolar. 
Obtemos as caraterísticas conforme as regras de negócios de nossa aplicação.
Após isto, podemos instanciar para que o software guarde e nos retorne uma lista de alunos ou um aluno em específico com os dados que precisamos.
Conforme explicado as classes são utilizadas para gerar instâncias de um objeto podendo-se reutilizar código atravé da herança.

    Classes

funções construtoras
São utilizadas para instânciar objetos. Assim, é possível trabalhar com a reutilização do código.

const Foo = function (x) {
    this.x  = x;
}
const foo = new Foo('x')

Classes em JavaScript são instroduzidas no ECMAScript 2015.
Trazem uma maneira mais simples e clara para criar objetos e lidar com herança.
São funções especiais que agem como funções construtoras.

Sintaxe: 
    class Person {
        constructor() {}
    }


    Herança

    
Coma as classes podemos instanciar objetos e também podemos instanciar outras classes. Com isto, teremos classes que são extensões de outra classe.
Então uma classe pode herdar propriedades e métodos da classe "pai".

