/*
   Crie uma função que verifica se duas strings são anagramas uma da outra!
   A função deve receber 2 parametros, ambos strings, e retornar um valor boolean que diz se as strings são anagramas uma da outra.

   areAnagrams("banana", "nabana") -> true

   areAnagrams("truck", "douglas") -> false

   areAnagrams("luz", "zul") -> true
*/

                           // signature
export const areAnagrams = (inputA:string, inputB:string) :boolean=> {
   
   // Array casting
   const _inputA = Array.from(inputA);
   const _inputB = Array.from(inputB);
   
   // First base case, the length discrepancy
   if(_inputA.length !== inputB.length){
      // console.error("First case");
      return false
   };
   
   while(_inputA.length>0){

      // pop stack from input A
      const poppedFromA = _inputA.pop();

      // find index of correspondent from B
      const fromBFindedACorrespondent = _inputB.findIndex(elFromB => elFromB === poppedFromA);
      
      // Second case, no correspondent in B
      if(fromBFindedACorrespondent === -1){
         //console.error("Second case", _inputA, _inputB);
         return false
      };

      // Splice from b
      _inputB.splice(fromBFindedACorrespondent, 1);
   }

   //  Third case, after verification of A in B, length discrepancy
   if(_inputA.length !== _inputB.length){
      // console.error("Thrid case");
      return false
   };
   
   // Passed from all three failure cases, so its a true!
   return true;
}