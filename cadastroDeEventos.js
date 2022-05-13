
let entrada = require("readline-sync");
let moment = require("moment");

let dataDoEvento
let idade
let quantidade

dataDoEvento = entrada.question("Digite a data do evento: ");
idade = entrada.question("Digite a sua idade: ");
quantidade = entrada.question ("Digite o numero de participantes: ");


if (dataDoEvento < moment.moment) {
console.log ("Data invalida")
    }  else{
        console.log("Insere dados do participante")
    }

if (idade > 18){
    console.log("Listar participantes")
    }   else {
        console.log("Cadastro não permitido pela idade")
    } 

    if (quantidade < 100){
    console.log("Finalizar Cadastro")
    }
      else{
            console.log("Quantidade de participantes excedida")
        }









   