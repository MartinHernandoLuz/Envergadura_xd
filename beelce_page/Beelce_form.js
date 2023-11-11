const entrada = document.getElementById('form_input')
const boton = document.getElementById('boton')
const imagen = document.getElementById('imagen')


boton.addEventListener('click', ()=>{
    console.log(entrada.value)


    switch(entrada.value){
        case "Enero":
            imagen.style.background = ""
            break
        case "Febrero":
            imagen.innerHTML = `<img src="" alt="">`
            break
        case "Marzo":
            imagen.innerHTML = `<img src="" alt="">`
            break
        case "Abril":
            imagen.innerHTML = `<img src="" alt="">`
            break
        case "Mayo":
            imagen.innerHTML = `<img src="" alt="">`
            break    
        case "Junio":
            imagen.innerHTML = `<img src="" alt="">`
            break
        case "Julio":
            imagen.innerHTML = `<img src="" alt="">`
            break
        case "Agosto":
            imagen.innerHTML = `<img src="" alt="">`
            break
        case "Septiembre":
            imagen.innerHTML = `<img src="" alt="">`
            break
        case "Octubre":
            imagen.innerHTML = `<img src="" alt="">`
            break
        case "Noviembre":
            imagen.innerHTML = `<img src="" alt="">`
            break    
        case "Diciembre":
            imagen.innerHTML = `<img src="" alt="">`
            break
        case 0:
            imagen.style.backgroundImage = "url('beelce_page\beelce_imgs\0_404Error-notFound.jpg')" 
            console.log("bandera")
            break
        default:
            break

    }
})

