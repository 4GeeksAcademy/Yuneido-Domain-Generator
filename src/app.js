/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["random", "their", "The", "his", "our"];
let adj = ["small", "cute", "massive", "fast", "lovely"];
let noun = ["guitar", "rocket", "Kangaroo", "robot", "castle"];
let extensions = [".com", ".net", ".org", ".io", ".dev"];

window.onload = function() {
  //write your code here
  /* 
  Para este Nuevo enfoque (Evitar tantos bucles for anidados) me baso en los Productos cartesianos
  Cuya descripcion sería:
  "En matemáticas, el producto cartesiano de dos conjuntos es una operación, que resulta en otro conjunto, cuyos elementos son todos los pares ordenados que pueden formarse de forma que el primer elemento del par ordenado pertenezca al primer conjunto y el segundo elemento pertenezca al segundo conjunto."
  Fuente - Wikipedia
 */

  function domainGenerator(...arrays) {
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

  let domains = domainGenerator(pronoun, adj, noun, extensions);
  const list = document.getElementById("domainList");
  list.innerHTML = domains
    .map(dominio => {
      return `<li class="list-group-item">${dominio}</li>`;
    })
    .join("");
  console.log("Hello Rigo from the console!");
  console.log(list.innerHTML);
};
