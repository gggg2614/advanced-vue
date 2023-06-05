let obj = {};
let realValue = "";
Object.defineProperty(obj, "foo", {
//   enumerable: true,
//   configurable: true,
  get() {
    return realValue;
  },
  set(newValue) {
    realValue = newValue;
  },
});

obj.foo = 1123;
console.log(obj.foo);
