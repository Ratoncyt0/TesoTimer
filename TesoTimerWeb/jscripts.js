var tiempoMaximo = 15 * 60;// tiempo en segundos
const tick = 1000; // cada cuanto hacer clock en ms
class Distrito {
    constructor(id){
        this.id = id;
        this.tiempo = tiempoMaximo;
    }
    
    clock() {
        let minutos = Math.floor(Math.abs(this.tiempo) / 60);
        let segundos = Math.floor(Math.abs(this.tiempo) % 60);
        let minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
        let segundosFormateados = segundos < 10 ? '0' + segundos : segundos;
        this.tiempo--;
        if (this.tiempo >= 0){
            return (`${minutosFormateados}:${segundosFormateados}`);
        }else{
            return (`<i class="fas fa-skull"></i> - ${minutosFormateados}:${segundosFormateados}`);
        }
    }
}

function iniciar() {
    
    let distritos = [new Distrito("d1"), new Distrito("d2"), new Distrito("d3"), new Distrito("d4"), new Distrito("d5"), new Distrito("d6")];
    
    intervalo = setInterval(function(){
        distritos.forEach(element => {
            document.getElementById(element.id).innerHTML = element.clock();
        });
    },
    tick
    );

    $(document).ready(function() { // Click en boton reinicio de su elemento designado
        $("button").click(function() {
          const buttonId = $(this).attr("id").substring(1);
          distritos[buttonId -1].tiempo = tiempoMaximo;
        });
      });



}
