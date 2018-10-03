function getZerosCount(number, base) {
  let x=[base];
  let basecount = 1;
  let secondBaseCount = 0;
  for (let j=2; j <= base; j++) {
    if (base === j) break;
    //console.log(base,"first");
    while (base % j === 0) {
      base=base/j;
      x.push(base);
      console.log(base,"second");
      if (base===j) break;
    } 
  }
  console.log(x,"third");
  for (let a=0; a <=x.length-2; a++){
    if (x[a] === x[a+1]*base) {
      basecount +=1;
    }
  }
  for (let a=0; a <=x.length-2; a++) {
    if (x[a] / x[a+1] === 2) {
      secondBaseCount +=1;
      console.log(secondBaseCount);
    }
  }
  if (Math.pow(2,secondBaseCount) > base) {
    base=2;
    basecount = secondBaseCount;
  }
  console.log(base,"base 2");
  let count=0;
    for (let i=base; i <= number; i=i*base) {
      count = count + Math.trunc(number/i);
      
    } 
    console.log(basecount);
  console.log(count/basecount);
  return Math.trunc(count/basecount);
}
getZerosCount(19848293, 192)