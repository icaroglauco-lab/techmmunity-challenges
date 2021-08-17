export const getBigger = (input:Array<string>) :string=> {
   return input.reduce( (a, current) => {
      return current.length > a.length? current : a;
   }, '');
}

export const isEqualToTen = (a:number, b:number) :boolean => (a + b) === 10;

export const lessThanHundred = (input:number) :boolean => input < 100;

export const lessOrEqualThanZero = (input:number) :boolean => input <= 0;

export const getLast = (input:Array<any>) :any => input[input.length-1];

export const getFirst = (input:Array<any>) :any => input[0];

export function cubes(a:number) :number {
   return a ** 3
}

export const getTriangleArea = (a:number, b:number) :number => (a*b)/2;

