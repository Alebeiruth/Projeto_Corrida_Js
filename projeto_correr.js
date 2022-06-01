let NumCorrida = Math.floor(Math.random() * 1000);
const registroAtrasado = true;
const idade = 15;

if (idade>=18 && registroAtrasado == true) {
    NumCorrida += 1000;
}

if (idade>=18 && registroAtrasado === true) {
    console.log(`Corredor: ${NumCorrida}: Sua corrida começa as 9:30`);
} else if (idade>=18 && !registroAtrasado === true) {
    console.log(`Corredor: ${NumCorrida}: Adulto atrasado sua corrida começa as 11:00 am`);
} else if (idade<18) {
    console.log(`Corredor: ${NumCorrida}: Jovem sua corrida começa as 12:30 pm`);
} else { (idade===18)
    
}