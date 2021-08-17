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

   // Procedural most used char verification
   let mostUsedChar = "";
   let times = 0;

   for(const el of map){ // Iteract over the map
      if(el[1]>times){   // if the value is bigger than times var
         mostUsedChar = el[0]; // set most used char until now
         times = el[1] // update times var
      }
   }

   // Return most used char
   return mostUsedChar;
}