alert("Olá,seja bem vinda(o)!")



let nome = (prompt("Coloque seu nome."))
console.log(nome)

const intro =  prompt(nome  + ","  + "  você gostaria de jogar um jogo? \n Digite 1: para sim ou digite 2: para não. \nSe sim,responda as perguntas com número de 1 a 3! ")
if(intro == 2){
 alert("Esperamos você na próxima!") 
} else{
    alert("Vamos começar o jogo!")

        const questao1 = prompt("1- Java é a mesma coisa do que javaScript? \n Digite 1 se sua resposta for: sim \n Digite 2  se sua resposta for: não \n Digite 3 se sua resposta for: em alguns países")


        const questao2 = prompt("2- Html é uma linguagem de programação? \n Digite 1 se sua resposta for: sim \n Digite 2 se sua resposta for: não \n Digite 3 se sua resposta for: sim, em alguns editores de código" )


        const questao3 = prompt("3-Undefined é igual a Null? \n Digite 1 se sua resposta for: não \n Digite 2 se sua resposta for: sim \n Digite 3 se sua resposta for: Depende da linguagem.")
}



console.log(questao1)
console.log(questao2)
console.log(questao3)
console.log(intro)


