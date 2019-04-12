
let instance = null;
let id = 0;

// function Stack() {
//   if (instance) {
//     return instance;
//   }

//   instance = this;
//   this.data = [];

//   return instance;
// }

// Stack.prototype.push = function (record) {
//   record.id = ++id;
//   this.data.push(record);
// };

// Stack.prototype.pop = function () {
//   return this.data.pop();
// };

// Stack.prototype.peek = function () {
//   return this.data[this.data.length - 1];
// };


// module.exports = Stack;


class Stack {
  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;
    this.data = [];

    return instance;
  }

  push() {
    record.id = ++id;
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}


export default Stack;
