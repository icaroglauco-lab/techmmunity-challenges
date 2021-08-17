// Crie uma função que retorne a letra mais usada em uma string!
// A função deve receber 1 parametro, uma string, e retornar a letra que mais foi usada (repetida) nessa string.

// I will be using a hashmap which the keys will the the characters, 
// and the values the number of times that appeared in the string

// A simple foreach of the input should be enough

export const getMoreUsedChar = (input:string) :string =>{
   const map = new Map();

   // Set the map with the times appeared
   Array.from(input).forEach( value => {
      // If the entry already exists
      if(map.has(value))
         // increase the entry value
         map.set(value, map.get(value) + 1);
      else
         // otherwise, set to 1
         map.set(value, 1);
   });

   let mostUsedChar = "";
   let times = 0;
   let iterator = map.entries();
   let el;

   while(map.size>0){
      el = iterator.next();
      console.log(el)
   }

   // return .reduce( (a, nextEntry) => {
   //    if(nextEntry[1] > a[1]) 
   //       return nextEntry;
   //    else
   //       return a;
   // }, ['', 0] ) [0];

   return mostUsedChar;
}