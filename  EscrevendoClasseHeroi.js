class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque
        switch (this.tipo) {
            case "Mago":
                ataque = "usou magia"
                break
            case "Guerreiro":
                ataque = "usou espada"
                break
            case "Monge":
                ataque = "usou artes marciais"
                break
            case "Ninja":
                ataque = "usou shuriken"
                break
            default:
                console.error("Classe  de herói inválida!")
                console.log("Escolha as seguintes classes: Mago, Guerreiro, Monge, Ninja")
                return
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}


let heroi = new Heroi("Aragorn", 30, "Ninja")
heroi.atacar()
