const numero=prompt("Digite um Numero para fazer tabuada")
let tabuada=[1,2,3,4,5,6,7,8,9,10]
for(let indice in tabuada ) {
    console.log(`${numero} * ${Number(indice) + 1} = ${numero * tabuada[indice]}`)
}