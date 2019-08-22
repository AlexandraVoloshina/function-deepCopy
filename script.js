var a = { x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null};

function deepCopy(a){
  let b = new Object();
  let keysB = Object.keys(a);
  let valueB = Object.values(a);
  for (let i = 0; i < keysB.length; i++){
    if(Array.isArray(valueB[i])){
      b[keysB[i]] = valueB[i].slice();
    } 
    else {
      b[keysB[i]] = valueB[i];
    } 
  }
  return b;
}

var b = deepCopy(a);
console.log(a);
console.log(b);
b.x = 10;
console.log(a.x);
console.log(b.x);
b.z.push(4);
console.log(a.z);
console.log(b.z);