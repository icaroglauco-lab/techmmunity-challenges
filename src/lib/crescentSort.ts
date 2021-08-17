// Sorting simples, acredito que seja O(nk) em tempo, se eu conseguisse enxugar o código, em espaço também
// ------

// Merge sort, my favorite one cause ... trees!
               // signature
const ordenar = (inputArr:Array<number>, crescente=true) :Array<number>=> {
   // Base case of leaf
   if(inputArr.length==1) return inputArr;

   // Descontruction into halves
   var l1 = inputArr.splice(0, (inputArr.length)/2); // First half
   var l2 = [...inputArr];    // Second half

   // apply algorithm to the halves
   l1 = ordenar(l1, crescente);
   l2 = ordenar(l2, crescente);

   // Reconstruction applying ordering
   return juntar(l1, l2, crescente);
}

const juntar = (arr1:Array<number>, arr2:Array<number>, crescente: boolean) :Array<number> => {
   // Ordered array
   let r = [];

   // increasely order the elements from the two branchs, following an order condition
   while(arr1.length>0 && arr2.length>0){
      // Here I apply the crescente or decrescente logic
      let orderLogic = crescente? arr1[0] > arr2[0] : arr1[0] < arr2[0];
      if(orderLogic)
         r.push(arr2.shift());
      else
         r.push(arr1.shift());
   }
   // In case of odd number of elements, 
   // which can be only 2 and 3, just throw it, it will be in order
   while(arr1.length>0){
      r.push(arr1.shift());
   }
   while(arr2.length>0){
      r.push(arr2.shift());
   }

   return r;
}


// Export curried functions for the challenge
export const ordenarCrescente = ordenar
export const ordenarDecrescente = (input:Array<number>) :Array<number> => {
   return ordenar(input, false);
} 