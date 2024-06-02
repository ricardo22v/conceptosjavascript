# JAVASCRIPT
Existen 3 puntos importantes en Javascript (en esta clase solo vimos 2 puntos)

1) Javascript es un programa multiparadigma es decir que se puede programar de muchas maneras.
2) Es un lenguaje basado en prototipos, es decir cada tipo de dato (srting, booleano, number) proviene de algo y dependiendo del tipo de dato se tiene diferentes métodos y propiedades para usar.

# METODOS STRING:

## Propiedad LENGTH y Método TRINT: 
1) Length indica la cantidad de caracteres considerando los espacios.
2) Trint quita los espacios del inicio y del final.

# Concatenacion: 

1) Concatenacion manual (ES5): es como mezclar variables generalmente de tipo string 
2) Template string (ES6): sirve para concatener las variable string pero no necesitamos usar comillas y +

# NUMEROS:
Existen muchos tipos de numeros, no solo enteros, tambien negativos, decimales, etc.
1) Operaciones Aritmeticas: las más empleadas son: + , - , * , / y % que es el residuo de la división entre 2 numeros
2) Incrementales y Decrementales: nos sirve para sumar o restar valores a nuestros numeros, se puede hacer de uno en uno o por cantidades añadiendo la cifra deseada
3) Operador mayor a y Operador menor a: imprime en la consola el resultado como verdadero o falso, de acuerdo a los valores que le demos a nuestras variables
4) Comparacion: Javascript es dinamicamente tipado y solo compara valores a menos que usemos la triple comparación estricta ===

#### Consideraciones a tener en cuenta: 

--> Cuando hacemos operaciones tenemos que recordar la jerarquia, siempre primero se hacen lo que se encuentra entre paréntesis: ( x + 1) - y

--> Si hago una operación aritmetica incorrecta la consola arroja el resultado NaN que significa: Not a number que es el resultado de hacer una operación no valida!

--> La diferencia entre doble comparación y la triple comparación es que, con la doble solo toma en cuenta el valor independientemente si este bien o mal, por ello se debe de
emplear siempre la triple comparación estricta.

# ESTRUCTURAS DE CONTROL

## Condicionales

1) If y Else, son condicionale simples solo hay 2 vias: si o no!
2) !! Una forma más eficiente de realizar esto es con el 'OPERADOR TERNARIO' que se realiza en base a ES6  y es una forma de reemplazar condicionales simples
3) También existen las condicionales anidadas que nos permiten establecer multiples condiciones para obtener el resultado. Pero se considera poco practico usar
las anidadas ya que para llegar al resultado muchas veces se requieren varias lineas de código. 
4) Entonces se recomienda hacer uso del SWITCH.