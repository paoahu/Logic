## Ejercicio 1 
**1. ¿Qué es una variable en programación?**
- A) Un tipo de operador
- B) Un espacio en la memoria donde se almacena información que puede cambiar durante la ejecución del programa.
- C) Una función que ejecuta un conjunto de instrucciones.
- D) Ninguna de las anteriores.

**2. ¿Cuál de los siguientes es un operador lógico en programación?**
- A) +
- B) >=
- C) &&
- D) %

**3. ¿Qué estructura de control se utiliza para repetir un bloque de instrucciones un número específico de veces?**

- A) if
- B) for
- C) while
- D) switch

**4. ¿Cuál de los siguientes tipos de datos es adecuado para almacenar un carácter único?**

- A) int
- B) char
- C) boolean
- D) string

**5. ¿Qué es una expresión en programación?**

- A) Una declaración que siempre produce un valor numérico.
- B)  Cualquier sección del código que puede ser evaluada y resulta en un valor.
- C) Un bucle que ejecuta un conjunto de instrucciones basadas en una condición.
- D) Una operación que no puede ser dividida en instrucciones más simples.

**Respuestas correctas:** 1-B, 2-C, 3-B, 4-B, 5-B.


## Ejercicio 2

Qué errores tiene este código?

```javascript
let a = 10;
let b = "5";
let resultado = a + b;
console.log("El resultado es: " + resultado);
```
Código corregido

```javascript
let a = 10;
let b = 5; // Asegurarse de que b es un número
let resultado = a + b;
console.log("El resultado es: " + resultado);
```

- Al asegurarnos de que tanto a como b son números, la operación a + b realiza una adición matemática en lugar de una concatenación de string.

- Se corrige la declaración de b para que sea un número, eliminando las comillas que la definían como una cadena.