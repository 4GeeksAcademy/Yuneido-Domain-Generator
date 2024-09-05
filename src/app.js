/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* De acuerdo con los lineamientos de programación "Las variables constantes se nombran en LETRAS MAYÚSCULAS." 
Una variable constante es un valor fijo que no cambia durante la ejecución del programa. 
En este caso, tanto el pronoun, adj, noun y extensions, son constantes porque su valor ya esta definido */

const PRONOUN = ["random", "their", "The", "his", "our"];
const ADJ = ["small", "cute", "massive", "fast", "lovely"];
const NOUN = ["guitar", "rocket", "Kangaroo", "robot", "castle"];
const EXTENSIONS = [".com", ".net", ".org", ".io", ".dev"];

window.onload = function() {
  //write your code here
  /* 
  Para este Nuevo enfoque (Evitar tantos bucles for anidados) me baso en los Productos cartesianos
  Cuya descripcion sería:
  "En matemáticas, el producto cartesiano de dos conjuntos es una operación, que resulta en otro conjunto, cuyos elementos son todos los pares ordenados que pueden formarse de forma que el primer elemento del par ordenado pertenezca al primer conjunto y el segundo elemento pertenezca al segundo conjunto."
  Fuente - Wikipedia
 */

  /*El nombre de una función debe describir claramente y brevemente el motivo de usar la función. 
  Si pensamos en un codigo de programación más extenso, es mejor especificar más la función */
  function generateDomainCombinations(...arrays) {
    return arrays
      .reduce(
        (acc, currentArray) => {
          let results = [];
          acc.forEach(a => {
            currentArray.forEach(b => {
              results.push([...a, b]);
            });
          });
          return results;
        },
        [[]]
      )
      .map(value => value.join(""));
  }

  let domains = generateDomainCombinations(PRONOUN, ADJ, NOUN, EXTENSIONS);
  const list = document.getElementById("domainList");
  list.innerHTML = domains
    .map(dominio => {
      return `<li class="list-group-item">${dominio}</li>`;
    })
    .join("");
  console.log("Hello Rigo from the console!");
  console.log(list.innerHTML);
};
