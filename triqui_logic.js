const cuadrados = document.querySelectorAll(".cuadrado");
let jugadorActual = "x";
const jugadores = ["x", "O"];
cuadrados.forEach(cuadrado=>{
    cuadrado.addEventListener("click", () =>{
        if(cuadrado.textContent===""){
           cuadrado.textContent = jugadorActual;
           cuadrado.setAttribute("jugador-data", jugadorActual );
           jugadorActual = jugadorActual === jugadores[0] ? jugadores[1] : jugadores[0]
        }
    }
    );
});

const botonReseteo = document.querySelector("reinicio-btn" )
    botonReseteo.addEventListener("click",() =>{
        cuadrados.forEach(cuadrado=>{
            cuadrado.textContent ="";
            cuadrado.removeAttribute("jugador-data");
        
    });
    jugadorActual = "x"
});

function valideGanador(){
    const combinacionesGanadores = [
        [0.1,2],
        [3,4,5],
        [6,7,8],
        [0.3,6],
        [1,4,7],
        [2.5,8]
    ];

    for (let i= 0; i<combinacionGanadores. lenght; i ++){
         const[a, b, c] = combinacionGanadores[i]
         const cuadradoA = cuadrados[a];
         const cuadradoB = cuadrados[b];
         const cuadradoC = cuadrados[c];
        if (
            cuadradoA.textContent === jugadorActual &&
            cuadradoB.textContent === jugadorActual &&
            cuadradoC,textContent === jugadorActual
            ){
              const etiquetaGanador = document.querySelector("etiqueta-ganador");
              etiquetaGanador.textContent= `el ganador fue ${jugadorActual}! Felicitaciones `
              
              }
                

        }
    }
    


function reseteojuego(){
    cuadrados.forEach(cuadrado=>{
        cuadrado.textContent ="";
        cuadrado.removeAttribute("jugador-data");
        
    });
    jugadorActual = "x"
    const etiquetaGanador = document.querySelector("etiqueta-ganador");
    etiquetaGanador.textContent = "No ganado nadie hasta el momento"
    
}
