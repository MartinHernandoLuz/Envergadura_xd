const entrada = document.getElementById('form_input')
const boton = document.getElementById('boton')
const imagen = document.getElementById('imagen')

const flexContainer = document.querySelector('.flex_container')
const bodyID = document.getElementById('bodyID')

boton.addEventListener('click', ()=>{
    console.log(entrada.value)
    let temporal = entrada.value

    switch(temporal){
        case "Enero":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_1_BeelcePreBluepoint.jpg')"
            break
        case "Febrero":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_2_BeelceReaction.jpg')"
            break
        case "Marzo":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_3_BeelceBebe.jpg')"
            break
        case "Abril":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_4_PochiBeelce.jpg')"
            break
        case "Mayo":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_5_BeelceManiacote.jpg')"
            break    
        case "Junio":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_6_BeelcePapada.jpg')"
            break
        case "Julio":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_7_BeelceSDLG.png')"
            break
        case "Agosto":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_8_BeelceNeutral.jpeg')"
            break
        case "Septiembre":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_9_BeelceSorpresa.jpg')"
            break
        case "Octubre":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_10_BeelceQueLoVioTodo.jpg')"
            break
        case "Noviembre":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_11_MrBeelce.jpg')"
            break    
        case "Diciembre":
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_12_BeelceQueGanara.jpg')"
            imagen.style.backgroundSize = "contain"
            break
        case "0":
           
            imagen.style.backgroundImage = "url('/beelce_page/beelce_imgs/_0_404Error-notFound.jpg')"
            flexContainer.style.display = "none"
            bodyID.style.background = "black"
            bodyID.style.backgroundRepeat = "no-repeat"
            bodyID.style.height = "100vh"

            alert("no deberías estar viendo esto")
            break
        default:
            break

    }
})

