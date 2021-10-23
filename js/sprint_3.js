var arreglo = [];
var persona;

function enviar(){ //inicio funcion agregar elementos a array
    var nombre = document.getElementById('nombre');
    //var edad   = document.getElementById('edad');
    var correo = document.getElementById('correo');
    var edad   = prompt('cual es tu edad');

    persona = {
        "nombre": nombre.value,
        "edad"  : edad,
        "correo": correo.value 
    }

    arreglo.push(persona);
    
    // condicional que limita el tamaño del mi array
    // if(arreglo.length >= 4){
    //     arreglo.splice(arreglo.length-1,1);
    //     alert('no se puede agtregar otro elemento maximo 3')
              

    // }

    nombre.value="";
    //edad.value="";
    correo.value="";
    
    
    console.log(arreglo);
    console.log('edad: '+ mayor_edad(arreglo));
    console.log('nuevo arreglo: '+ organizar(arreglo));
    
    //console.log(arreglo.length);
    //console.log()
    
    //arreglo.push(nombre,edad,correo);
    //alert(nombre);
} //fin funcion agregar elementos a array

function mayor_edad(edad){
    var max=0;
    for(var i in edad){
        if(edad[i]['edad'] > max){
            max = edad[i]['edad'];
        }
        
    }
    return max;
}

function organizar(arreglo){
    var x =[];
    for(var i=0; i < mayor_edad(arreglo); i++){
        if(arreglo[i]['edad'] == i){
            x.push(arreglo[i]);
        }
    }
    return x;
}