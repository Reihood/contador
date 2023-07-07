// Establecer contador inicial
let contador = 0;

//SELECCIONAR VALOR Y BOTONES

const valor = document.querySelector("#valor");
const btns = document.querySelectorAll(".btn");

//EVENTOS DE LOS BOTONES

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;
        if (style.contains('decrease')){
            contador--;
        }
        else if (style.contains('increase')){
            contador++;
        } else {
            contador = 0;
        }
        if (contador > 0){
            valor.style.color = 'green';
        } 
        /* else if (contador < 0){
            valor.style.color ='red';
        } else {
            valor.style.color = 'black';
        } */
        if (contador < 0){
            valor.style.color = 'red'
        }
        if (contador === 0){
            valor.style.color = 'black'
        }
        valor.textContent = contador
    })
})