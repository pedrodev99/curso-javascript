// função chamada ao carregar a página
function carregar () {
    // pega a div da mensagem
    var msg = window.document.getElementById('msg')
    // CORRIGIDO: id certo é 'imagem'
    var img = window.document.getElementById('imagem')
    // cria objeto com data atual
    var data = new Date()
    // linha real, desativada para teste
    //var hora = data.getHours()
    // hora fixa para testar
    var hora = data.getHours()
    // mostra a hora na div
    msg.innerHTML = `Agora são ${hora} horas`
    // de 0h até 11h59
    if (hora >= 0 && hora < 12) {
        // bom dia: pasta + nome
        img.src = 'imagens/imagem-manha.png'
        document.body.style.background = '#E9BD92'
    // de 12h até 17h59
    } else if (hora >= 12 && hora < 18) {
        // boa tarde: é .jpg
        img.src = 'imagens/imagem-tarde.jpg'
        document.body.style.background = '#FBB839'
    // resto do dia
    } else {
        // boa noite: nome certo do arquivo
        img.src = 'imagens/imagem-noite.jpg'
        document.body.style.background = '#04070C'
    }
}
