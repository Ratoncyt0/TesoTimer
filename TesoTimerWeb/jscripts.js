var tiempoMaximo = 15 * 60 // tiempo en segundos

class Distrito {
    constructor(id){
        this.id = id;
        this.tiempo = tiempoMaximo;
    }
    
    clock() {
        let minutos = Math.floor(this.tiempo / 60);
        let segundos = Math.floor(this.tiempo % 60);
        let minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
        let segundosFormateados = segundos < 10 ? '0' + segundos : segundos;
        this.tiempo--;
        return (`${minutosFormateados}:${segundosFormateados}`);
    }
}

function iniciar() {
    
    let distritos = [new Distrito("p1"), new Distrito("p2"), new Distrito("p3"), new Distrito("p4"), new Distrito("p5"), new Distrito("p6")];
    
    intervalo = setInterval(function(){
        distritos.forEach(element => {
            document.getElementById(element.id).innerText = element.clock();
        });
    },
    1000
    );

    $(document).ready(function() { // Click en boton reinicio de su elemento designado
        $("button").click(function() {
          const buttonId = $(this).attr("id").substring(1);
          distritos[buttonId -1].tiempo = tiempoMaximo;
        });
      });



}