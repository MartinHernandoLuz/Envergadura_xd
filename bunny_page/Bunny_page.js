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
            imagen.style.backgroundImage = "url('/bunny_page/img/_1_Enero.png')"
            break
        case "Febrero":
            imagen.style.backgroundImage = "url('/bunny_page/img/_2_febrero.png')"
            break
        case "Marzo":
            imagen.style.backgroundImage = "url('/bunny_page/img/_3_marzo.png')"
            break
        case "Abril":
            imagen.style.backgroundImage = "url('/bunny_page/img/_4_abril.png')"
            break
        case "Mayo":
            imagen.style.backgroundImage = "url('/bunny_page/img/_5_mayo.png')"
            break    
        case "Junio":
            imagen.style.backgroundImage = "url('/bunny_page/img/_6_junio.png')"
            break
        case "Julio":
            imagen.style.backgroundImage = "url('/bunny_page/img/_7_julio.png')"
            break
        case "Agosto":
            imagen.style.backgroundImage = "url('/bunny_page/img/_8_agosto.png')"
            break
        case "Septiembre":
            imagen.style.backgroundImage = "url('/bunny_page/img/_9_septiembre.png')"
            break
        case "Octubre":
            imagen.style.backgroundImage = "url('/bunny_page/img/_10_octubre.png')"
            break
        case "Noviembre":
            imagen.style.backgroundImage = "url('/bunny_page/img/_11_noviembre.png')"
            break    
        case "Diciembre":
            imagen.style.backgroundImage = "url('/bunny_page/img/_12_diciembre.png')"
            imagen.style.backgroundSize = "contain"
            break
        case "come back":
           
            imagen.style.backgroundImage = "url('/bunny_page/img/come-back.jpeg')"
            flexContainer.style.display = "none"
            bodyID.style.background = "#110907"
            bodyID.style.backgroundRepeat = "no-repeat"
            bodyID.style.height = "100vh"

            
            break
        default:
            break

    }
})

