frutas = {
    banana:{
        quantidade: 15,
        unidade: 'cx',
        origem:'china'
    },
    morango:{
            quantidade: 17,
            unidade:'cx',
            origem: 'frança'
    },
    caju:{
        quantidade: 20,
        unidade:'cx',
        origem: 'Brasil'
    }  
}
frutas.forEath((value,key)=>{
    console.log(`${key} ${value}`)
})
 console.log(frutas)   
