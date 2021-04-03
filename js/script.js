var data = new Date()
var hora = data.getHours()

if (hora >= 17) {

    document.getElementById('container').style.background = '/imagens/background-escuro.jpg'

} else {

    document.getElementById('container').style.background = '/imagens/background-claro.jpg'

}