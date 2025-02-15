const doubleAndReturnArgs=(arr,...args)=>
[
    ...arr,
    ...args.map((v)=>v*2)
];
let a=doubleAndReturnArgs([1,2,3],4,4);
let b=doubleAndReturnArgs([2],10,4);
console.log(a);
console.log(b);
