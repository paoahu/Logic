## Variables y Tipos de Datos


### Definición de Varibles
Variables: Son espacios reservados en la memoria que, como su nombre indica, pueden cambiar de contenido a lo largo de la ejecución del programa. Las variables se utilizan para almacenar información que el programa necesitará para realizar sus operaciones.

### Tipos de Datos Comunes
- **Primitivos**: Enteros (int), decimales (float), caracteres (char), y booleanos (bool).
- **Compuestos**: Cadenas de caracteres (string), arreglos (array), listas, y más estructuras complejas.

Es importante elegir el tipo adecuado de variables porque se define la cantidad de memoria que se reserva y cómo se interpretará la información almacenada.

## Operadores y Expresiones
### Operadores
- **Aritméticos:**  + (suma), - (resta), * (multiplicación), / (división), y % (módulo).

- **Relacionales:** == (igual a), != (diferente de), < (menor que), > (mayor que), <= (menor o igual que), >= (mayor o igual que).

- **Lógicos:**  && (AND), || (OR), ! (NOT).

### Expresiones
- Combinaciones de variables, operadores y valores que son evaluadas por el compilador/intérprete para producir un nuevo valor.

- Ejemplo: **int edad = 30; bool esAdulto = edad >= 18;**

## Estructuras de Control: Condicionales y Bucles
### Condicionales

- Permiten tomar decisiones dentro del código basadas en condiciones.
- **if, else, else if:** Proporcionan bifurcaciones en el código que sólo se ejecutan si la condición evaluada es verdadera.

Un ejemplo en JAVA

```java
if (edad >= 18) {
    System.out.println("Es adulto.");
} else {
    System.out.println("No es adulto.");
}
```

El mismo ejemplo en JavaScript

```javascript
if (edad >= 18) {
    console.log("Es adulto.")
} else {
    console.log("No es adulto.")
}
```
- El código utiliza una sentencia if para evaluar si la variable edad es mayor o igual a 18.
- Si la condición es verdadera, el programa imprime "Es adulto.".
- Si la condición es falsa, el programa imprime "No es adulto.".

### Bucles

- Facilitan la ejecución repetida de un bloque de código mientras se cumpla una condición.

- **for:** Ideal para iterar un número definido de veces.

- **while** y **do-while:** Útiles cuando el número de iteraciones no se conoce antes de empezar el bucle.

Un ejemplo en JAVA
```java
for (int i = 0; i < 10; i++) {
    System.out.println("Iteración " + i);
}
```

El mismo ejemplo en JavaScript
```javascript
for (int i = 0; i < 10; i++) {
    console.log("Iteración " + i)
}
```

- El código utiliza un bucle **for** para iterar desde 0 hasta 9.

- En cada iteración del bucle, se imprime el número de la iteración actual utilizando **System.out.println** en el caso de Java o **console.log** en el caso de Javascript.

- La variable **i** se incrementa automáticamente en 1 en cada ciclo hasta que la condición **i < 10** deja de ser verdadera.