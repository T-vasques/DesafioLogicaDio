let Vitorias = 90
let Derrotas = 9

function SaldoDeVitorias(){
    let cal = Vitorias - Derrotas;

    if (cal <= 10){
        console.log("O Herói tem o saldo de "+cal+" vitorias e está no nível Ferro")
    }else if (cal <=20){
        console.log("O Herói tem o saldo de "+cal+" vitorias e está no nível Bronze")
    }else if (cal <=50){
        console.log("O Herói tem o saldo de "+cal+" vitorias e está no nível Prata")
    }else if (cal <=80){
        console.log("O Herói tem o saldo de "+cal+ " vitorias e está no nível Ouro")
    }else if (cal <=90){
        console.log("O Herói tem o saldo de "+cal+" vitorias e está no nível Platina Diamante")
    }else if (cal <=100){
        console.log("O Herói tem o saldo de "+cal+" vitorias e está no nível lendário")
    }else {
        console.log("O Herói tem o saldo de "+cal+" vitorias e está no nível Imortal")
    }
}

SaldoDeVitorias()