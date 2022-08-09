function mostrarInputs() {
    //-------------------------Asignar valores a las variables-----------------
        var A=parseInt(document.getElementById("numero1").value) ;
        var B=parseInt(document.getElementById("numero2").value);
        var C=parseInt(document.getElementById("numero3").value);
        var D=parseInt(document.getElementById("numero4").value);
        //console.log(A)
        
    if(A==B||A==C||A==D||B==C||B==D||C==D  || A=='' || B=='' || C=='' || D==''){
        alert('Error, debe ingresar números que no se repitan y que no sean vacios');
        }
    //-------------------------Calcular el menor y el mayor--------------------    
    else{
        matriz=new Array(A, B, C, D)
        min=A;
        max=A;
        for(i=0;i<4;i++)
        if(matriz[i]<=min){min=matriz[i]}
    
        for(j=0;j<4;j++)
        if(matriz[j]>=max){max=matriz[j]}
        
    //--------------------------mostrar resultados------------------------------
        document.getElementById("resultado").innerHTML = "El número menor es " + min +" y el mayor es " + max;
        }
    }