var a = { d: {c: {a: 2}}, x: 1, y: 2, z: [1, 2, 3], u: undefined, v: null, a: {a: 12, b: 13}};

function deepCopy(a){
  let b = Object.create(
          Object.getPrototypeOf(a), 
          Object.getOwnPropertyDescriptors(a) 
    );

  for (let [key, value] of Object.entries(a)){
    if (value instanceof Object){
      b[key] = deepCopy(value);
    } else if (Array.isArray(value)){
      b[key] = value.slice();
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
