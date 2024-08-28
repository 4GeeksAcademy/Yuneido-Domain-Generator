// Generador de dominos ////////////////////////////////

let pronoun = ['random', 'their', 'The', 'his', 'our'];
let adj = ['small', 'cute', 'massive', 'fast', 'lovely'];
let noun = ['guitar', 'rocket', 'Kangaroo', 'robot', 'castle'];
let extensions = ['.com', '.net', '.org', '.io', '.dev'];


function domainGenerator(pronoun,adj,noun,extension){
  let results = [];
  let str = "";
  for(let i in pronoun){
        for(let j in adj){
          for(let k in noun){
            for(let l in extension){
              str = pronoun[i]+adj[j]+noun[k]+extension[l];
              results.push(str);
              str="";
            }
          }
        }
      }
  return results
}

let dominios = domainGenerator(pronoun,adj,noun,extensions);
console.log(dominios)