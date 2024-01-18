/*
Faça um Programa que leia dois vetores com 10 elementos cada. Gere um terceiro vetor de 20 elementos, cujos valores deverão ser compostos pelos elementos intercalados dos dois outros vetores. 
 */

listaA = [22,24,14,78,28,99,8,15,13,10]
listaB = [17,1,16,33,12,32,45,7,79,88]

console.log(`${listaA} e ${listaB}`)
for(let i=0; i < 20;i++){
    if(i%2 == 0){
        listaC.push(listaA[a++])
    }else{
        listaB.push(listaB[b++])
    }
}
console.log(listaC)