/*
   Palindromo: (input:string) :boolean
      isPalindrome("arara") -> true

      isPalindrome("douglas") -> false

      isPalindrome("reviver") -> true
*/
                     // signature
export const isPalindrome = (input:string) :boolean =>{

   // Iteration -> first input's half 
   for(let i=0; i< input.length/2; i++)
   
   // Condition: element has to be equal to its oposite position element
   if(input[i] !== input[(input.length -1)-i]){
         // otherwise, panic return
         return false;
      }

   return true;
}