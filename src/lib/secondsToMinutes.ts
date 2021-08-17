                                 // signature
export const secondsToMinutes = (secondsInput:number) :string => {
   
   // conversions
   const minutes = Math.floor(secondsInput / 60);
   const seconds = secondsInput % 60;

   // output templating
   const template = (minutes:number = 0, seconds:number = 0) =>{ 
      // console.log(minutes, seconds); //debug
      return `${minutes===0? "" : minutes + 'min'} ${seconds===0? '' :  seconds + 'sec'}`;
   }
   // return output result
   return template(minutes, seconds);
}