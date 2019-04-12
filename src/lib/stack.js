
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

  /**
   * @name push pushes a new value into the stack
   * @param {*} record data you want to save, it can be any value, even an object
   */
  push(record) {
    record.id = ++id;
    this.data.push(record);
  }

  /**
   * @name pop pops the value from the top of the stack
   */
  pop() {
    return this.data.pop();
  }

  /**
   * @name peek Peek the value from the top of the stack
   */
  peek() {
    return this.data[this.data.length - 1];
  }

  /**
   * @name list list all the values from the stack
   */
  list() {
    return this.data;
  }

  /**
   * @name count returns the number of elements in the stack
   */
  count() {
    return this.data.length;
  }
}


export default Stack;
