const botontrailer = document.querySelector(".trailer")
const videoTrailer = document.querySelector(".video__trailer")


const cerrar = document.querySelector(".ico__cerrar")

const video = document.querySelector("video")


    botontrailer.addEventListener("click",()=>{
        videoTrailer.classList.toggle("mostrar")
       /*video.play();*/
    })

    
    cerrar.addEventListener("click" ,()=>{
        videoTrailer.classList.remove("mostrar")
        video.pause();
    })

