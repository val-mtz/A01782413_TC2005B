// 1. Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'

function noRepetido(str) {
    // Se crea el objeto contador que sirve para contar la repetición de cada caracter.
    const contador = {}; 
    //ciclo for para encontrar las repeticiones de cada caracter
    for (let c of str) {
      contador[c] = (contador[c] || 0) + 1;
    }
    //en base a contador, si el valor es 1 (es decir que solo hubo una ocurrencia, impirmir ese caracter.)
    for (let c of str) {
      if (contador[c] === 1) {
        return c; //solo imprime el primer caracter no repeitdo.
      }
    }
    
    return null;// sino se repite se devuelve un null
  }
  //2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
  function BubbleSort(lista) {
    const longitud = lista.length;
    //ciclos for para recorrer mi arreglo y ordenarlo
    for (let i = 0; i < longitud - 1; i++) {
      for (let j = 0; j < longitud - i - 1; j++) {
        if (lista[j] > lista[j + 1]) {
            //si es mayor el número de lado izq.
          const temp = lista[j]; // implementación de una variable temporal
          lista[j] = lista[j + 1];
          lista[j + 1] = temp;
          //como el número de la izq. era mayor ahora igualamos lista [j] a ese valor y lista [j+1] guardará ahora el valor de temp. 
        }
      }
    }
    return lista;
  }//BubbleSort
// 3. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; 
function reversa(arr)
{
    let reverso=[];
    for (let i = arr.length-1; i >= 0; i--)
    {
        reverso.push(arr[i]);
        
    }
    return reverso;
}//reversa
//3.1 Funcion que modifique el arreglo del argumento

function modifica(arr)
{
    //regresa la raíz cuadrada de cada elemento
    return arr.map(Math.sqrt);
}//modifica
// 4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
function upCase (str)
{
    let newstr =[];
    newstr.push(str[0].toUpperCase());
    let sig=false;
    for (let i=0; i<str.length; i++)
    {
        
        if(str[i]==" ")//si hay un espacio vacío
        {
            newstr.push(str[i+1].toUpperCase());//la letra que siga guardala en uppercase
            sig =true;//informa que se acaba de agregar una mayuscula
        }
        if(sig==false)
        {
            newstr.push(str[i+1]);
        }
        
        sig=false;//se reinicia la variable a su valor default
        
    }
    return newstr.join('');
}
// 5. Escribe una función que calcule el máximo común divisor de dos números.
function MCD(n1, n2) {
  let residuo = 0;
  //"el MCD de dos números enteros se mantiene inalterado si restamos el menor del mayor hasta que ambos números sean iguales."
  while (n2 !== 0) {
    resto = n1 % n2;
    n1 = n2;
    n2 = resto;
  }
  return n1;//MCD
}
// 6. Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
function HS_transformer(str)
{
    let newstr=[];
    let alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ ";
    alfabeto = alfabeto.split("");
    let hacker = "48cd3f6h1jk1mn0pqr57uvwxy248CD3F6H1JK1MN0PQR57UVWXY2";
    hacker = hacker.split("");
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        if(str[i]==" ")
        {
            newstr.push(str[i]);
        }
        else
        {
        let a = alfabeto.indexOf(str[i]);
        newstr.push(hacker[a]);
        }
  }
  return newstr.join("");
}
//7. Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].
function factoriza(num)
{
    let temp=1; 
    let factores=[];

        for (let i=0; i<num; i++)
        {
            temp = num%i;
            if(temp == 0)
            {
               factores.push(i);
            }
        }
        factores.push(num);
    
    return factores;
}
// 8. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
function quitaDuplicados(arr)
{
    let newarr=[];
    for(let i=0; i<arr.length; i++)
    {
        if(newarr.indexOf(arr[i])==-1)
        {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
// 9. Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.
function cadena_peque(arr)
{
    let lengths=[];//arreglo que guarda todas las longitudes de cada cadena
    for(let i=0; i<arr.length;i++)
    {
        lengths.push(arr[i].length);
    }
    return(Math.min.apply(Math,lengths));
    //se llama a "apply" para que el min pueda trabajar con el arreglo de lengths
}
// 10. Escribe una función que revise si una cadena de texto es un palíndromo o no.
function busca_Palin(str) {
  let str_volteado;
  str_volteado = str.toLowerCase().split("").reverse().join("");
  return str_volteado === str.toLowerCase();
}
// 11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.
function ordena_cadenas(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        //compara dos cadenas a la vez
      if (arr[j] < arr[i]) {
        let temp = arr[i];//creación de variable temporal
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}


  //--------- Pruebas en consola
  console.log("1. Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec' ");
  console.log("Respuesta: " + noRepetido("abacddec")); 
  console.log("2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.");
  console.log("Respuesta: "+BubbleSort([10,44,9,14,1,37]));
  console.log("3. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado");
  console.log(reversa([1, 2, 3, 4, 5]));
  console.log("3.1 Funcion que modifique el arreglo del argumento");
  console.log(modifica([1, 2, 3, 4, 5]));
  console.log("4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.");
  console.log(upCase("hello world from javascript"));
  console.log("5. Escribe una función que calcule el máximo común divisor de dos números.");
  console.log(MCD(48,96));
  console.log("6. Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.");
  console.log(HS_transformer("JavaScript es divertido"));
  console.log("7. Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].");
  console.log(factoriza(12));
  console.log("// 8. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]");
  console.log(quitaDuplicados ([1, 0, 1, 1, 0, 0]));
  console.log("9. Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.")
  console.log(cadena_peque(["Helloo","World","!!"]));
  console.log("10. Escribe una función que revise si una cadena de texto es un palíndromo o no.")
  console.log(busca_Palin("Stanley Yelnats"));
  console.log("11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.");
  console.log(ordena_cadenas(["Hola","Mundo","Amarillo","Abeja","Zapato","Sopa"]))