var arreglo = []; //declaro un arrays

//agrego informacion al arrays
arreglo[0]= 0;
arreglo[1]= 1;
arreglo[2]= "ana";

//arreglo[2]= 2;
//agregar nuevo dato en la ultima posicion
arreglo.push('nuevo_dato');

//agregar nuevo dato en la primera posicion
arreglo.unshift(4,5,6);

//eliminar el primer elemento
//arreglo.shift();

//eliminar el ultimo elemento
//arreglo.pop();

//elinar elemento en posicion requerida
// arreglo.splice(5,2);

//agregar elementos en posicion requerida
arreglo.splice(5,0,8,'hola');

//console.log('join: '+ arreglo.join())

for(var i in arreglo){
    console.log(arreglo[i]);
}

// for(var i=0; i<arreglo.length; i++){
//     console.log(arreglo[i]);
// }

// for of iguala la variable en cada posicion del arreglo
// for(var i of arreglo){
//     console.log(i);
// }

// console.log(arreglo);