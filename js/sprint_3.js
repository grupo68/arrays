var prueba=[
    {
        "nombre":   "jose",
        "edad"  :    15
    },
    {
        "nombre":   "maria",
        "edad"  :    11
    },
    {
        "nombre":   "camel",
        "edad"  :    2
    },
    {
        "nombre":   "camel",
        "edad"  :    23
    },
    {
        "nombre":   "juan",
        "edad"  :    50
    }
];

var arreglo = [];
var generico = [];
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
    generico.push(persona);
    
    // condicional que limita el tamaño del mi array
    // if(arreglo.length >= 4){
    //     arreglo.splice(arreglo.length-1,1);
    //     alert('no se puede agtregar otro elemento maximo 3')
              

    // }

    nombre.value="";
    //edad.value="";
    correo.value="";
    
    
    console.log(arreglo);
    //console.log('edad: '+ mayor_edad(arreglo));
    //console.log('nuevo arreglo: '+ organizar());
    
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

function organizar(){
    var x =[];//array de salida
    //if(arreglo.length != 0){
    for(var i in arreglo){
        // for(var j=0; j< prueba.length; j++){
        
            for(var j in arreglo){
                if(arreglo[j]['edad'] == mayor_edad(arreglo)){
                  x.push(arreglo[j]);
                  arreglo.splice(j,1,0);
              }
          }
        }   
    
    //}
    console.log(x);
   // console.log('arreglo_original: '+ arreglo);
 }

function promedio(){
    var suma=0;
    var j =0;
    for(var i in generico){
        suma = parseInt(suma) + parseInt(generico[i]['edad']) ;
        //console.log(suma);
        j++;
    }
    console.log('el promedio de edades es: '+ (suma / j));
}
    // console.log(promedio(prueba));
    // console.log(organizar()); 
    // console.log('prueba: '+prueba);