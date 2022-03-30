console.log("Feliz Páscoa 2022");

const ovos = new Array (
    `Ovo de Chocolate - R$ 150,00`,
    `Ovo de Laranja - R$ 90,00`,
    `Ovo de Morango - R$ 200,00`
);

let valorNaCarteira = 70;


console.log("Opções de Ovos!!")
console.log(ovos);

if(valorNaCarteira >= 100){
    console.log("Você pode comprar: ")
    console.log(ovos);
}else{
    console.log("Você pode comprar: ")
    console.log(ovos[2]);    
}


