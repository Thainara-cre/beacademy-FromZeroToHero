    Open-Closed Principle

Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação. Se novos comportamentos precisam ser adicionados ao código original.
Poderia-se pensar que apenas mais um if no algoritimo resolveria o problema. Pórem, iríamos modificaar algo que já está funcionando. Alterar uma classe para colocar novos métodos seria arriscado, visto que podemos introduzzir novos 'bugs'.
Por isso, diz-se que a classe seve estar fechada para modificação, mais aberta para extensão.