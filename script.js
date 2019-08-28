var a = { d: {c: {a: 2}}, x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null, a: {a: 12, b: 13}};

function deepCopy(a){
  let b = new Object();
  for (let [key, value] of Object.entries(a)){
    if(Array.isArray(value)){
      b[key] = value.slice();
    } 
    else if (value instanceof Object){
      b[key] = Object.defineProperties({}, Object.getOwnPropertyDescriptors(value));
      for (let [key1, value1] of Object.entries(value)){
        if(value1 instanceof Object) {
          b[key][key1] = Object.defineProperties({}, Object.getOwnPropertyDescriptors(value1));
        }
      }     
    }
    else {
      b[key] = value;
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
console.log(a.a.a);
console.log(b.a.a);
b.a.a = 13;
a.a.a = 5;
console.log(a.a.a);
console.log(b.a.a);
b.d.c.a = 5;
console.log(a.d.c.a);
console.log(b.d.c.a);
