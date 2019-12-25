/*jshint esversion: 6*/

const XO = (str) => {
    let arr = Array.from(str);
    let x = 0;
    let o = 0;
    for (let el of arr){
      if (el === 'x' || el === 'X'){
        x++;
      } else if (el === 'o' || el ==='O'){
        o++;
      } else{
        continue;
      }
    }
    return x == o ? true : false;
};

console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));