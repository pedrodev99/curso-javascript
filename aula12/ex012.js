var hora = 22
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia, ainda é de manhã!')
} else if (hora <= 18) {
    console.log(`Boa tarde! Agora são exatamente ${hora} horas da tarde.`)
} else {
    console.log(`Boa noite, agora é exatamente ${hora} horas da noite`)
}