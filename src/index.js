module.exports = function getZerosCount(number, base) { 
  let x=[base];
  let basecount = 1;
  let secondBaseCount = 0;
  for (let j=2; j <= base; j++) {
    if (base === j) break;
    while (base % j === 0) {
      base=base/j;
      x.push(base);
      if (base===j) break;
    } 
  }
  console.log(x,"third");
  for (let a=0; a <=x.length-2; a++){
    if (x[a] === x[a+1]*base) {
      basecount +=1;
    }
  }
  for (let a=0; a <=x.length-1; a++) {
    if (x[a] % 2 === 0) {
      secondBaseCount +=1;  
    }
  }
  /*if (Math.pow(2,secondBaseCount) > Math.pow(base,basecount)) {
    base=2;
    basecount = secondBaseCount;
  }*/
  let count=0;
    for (let i=base; i <= number; i=i*base) {
      count = count + Math.trunc(number/i);
      
    } 
    console.log(basecount);
  console.log(count/basecount);
  return Math.trunc(count/basecount);
}
