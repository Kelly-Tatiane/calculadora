const prompt = require ("prompt-sync")();
function adicao(num1,num2){
    return num1 + num2;
}
function subtracao(num1,num2){
    return num1 - num2;
}
function multiplicacao(num1,num2){ 
    return num1 * num2;
}
function divisao(num1,num2){
    return num1 / num2;
}
function porcentagem(num1,num2){
    return (num1/100) * num2;
}
let opcao
while(opcao!=0){
    console.log("1-adição \n2-subtração, \n3- multiplicação, \n4- divisão, \n5- porcentagem, \n0- sair");
    opcao = prompt("Digite o que deseja fazer:");
    if (isNaN(Number(opcao))) {
        console.log("Digite um NÚMERO");
    } else {
        opcao = Number(opcao)
        let numero1,numero2;
        switch (opcao) {
            case 1:
                numero1 = +prompt("Digite o primeiro número");
                if (isNaN(Number(numero1))) {
                    console.log("Digite um NÚMERO");
                } else {
                    numero2 = +prompt("Digite o segundo número");
                    if (isNaN(Number(numero2))) {
                    console.log("Digite um NÚMERO");

                    } else {
                        console.log("Resposta:"+ adicao(numero1, numero2))
                    }
                }
                break;
            case 2:
                numero1 = +prompt("Digite o primeiro número");
                if (isNaN(Number(numero1))) {
                    console.log("Digite um NÚMERO");
                } else {
                    numero2 = +prompt("Digite o segundo número");
                    if (isNaN(Number(numero2))) {
                    console.log("Digite um NÚMERO");
                    } else {
                        console.log("Resposta:"+subtracao(numero1, numero2))
                    }
                }
                break;
            case 3:
                numero1 = +prompt("Digite o primeiro número");
                if (isNaN(Number(numero1))) {
                    console.log("Digite um NÚMERO");
                } else {
                    numero2 = +prompt("Digite o segundo número");
                    if (isNaN(Number(numero2))) {
                    console.log("Digite um NÚMERO");
                    } else {
                        console.log("Resposta:"+multiplicacao(numero1, numero2))
                    }
                }
                break;
            case 4:
                numero1 = +prompt("Digite o primeiro número");
                if (isNaN(Number(numero1))) {
                    console.log("Digite um NÚMERO");
                } else {
                    numero2 = +prompt("Digite o segundo número");
                    if (isNaN(Number(numero2))) {
                    console.log("Digite um NÚMERO");
                    } else {
                        console.log("Resposta:"+divisao(numero1, numero2))
                    }
                }
                break;
            case 5:
                numero1 = +prompt("Digite a porcentagem");
                if (isNaN(Number(numero1))) {
                    console.log("Digite um NÚMERO");
                } else {
                    numero2 = +prompt("Digite o número");
                    if (isNaN(Number(numero2))) {
                    console.log("Digite um NÚMERO");
                    } else {
                        console.log("Resposta:"+porcentagem(numero1, numero2)+" por cento")
                    }
                }
                break;
            case 0:
                console.log("encerrando programa");
                break;
            default:
                console.log("Escolha uma das opções válidas");
                break;
        }
    }
}