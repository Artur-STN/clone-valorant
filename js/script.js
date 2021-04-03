var counter = 'claro'

function insertFundo() {

    if (counter == 'escuro') {

        document.getElementById('container').style.background = 'url(../imagens/background-escuro.jpg)  no-repeat'
        counter = 'claro'
        
    } else if (counter == 'claro') {

        document.getElementById('container').style.background = 'url(../imagens/background-claro.jpg)  no-repeat'
        counter = 'escuro'

        
    }

    document.getElementById('container').style.backgroundSize = '100%'

}
