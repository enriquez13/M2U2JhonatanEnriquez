
// Se crean los imputs para ingresar el valor de cada materia 
function miFunc() {
    let cantidadmater = document.getElementById('input-cantidadmaterias').value;
    
        for(let i= 1; i<= cantidadmater; i++){
            div.innerHTML += `<input type="number" id="input${i}" name="txtval[]" class="input-valormaterias" placeholder= "Costo materia ${i}">`
        }
};

function enviar() {
    const nom = document.getElementById('input-nombre').value;
    const cantidadmater = document.getElementById('input-cantidadmaterias').value;
    if(cantidadmater>0 ) {
        
        // Guarda la suma de los valores de las materias
        var input = document.getElementsByName('txtval[]');
        let b=0
        for (var j = 0; j < input.length; j++){
                var a = input[j];
                content =a.value;   
                M = parseFloat(content)+b
                b = M
            }
            console.log(M)

        let descuento = M*0.8;
        let total = descuento + 20000 + 8000;

        let A=['Nombre : ', 'Número de materias : ', 'Valor de las materias : ',
        'Valor de las materias con 20%dct : ', 'Valor de la papeleria : ', 'Valor del carnet : ', 'Total a pagar = ']
        let B=[nom, cantidadmater, M, descuento, 20000, 8000, total];
        let papeleria = 20000;
        let carnet = 8000;

        document.getElementById('divfactura').innerHTML="Factura de compra"
        for(i=0;i<A.length;i++){    
            document.getElementById('div'+i).innerHTML=A[i]+B[i];
        }

    }
    else{
        alert('los números ingresados deben ser positivos');
    } 
};