
let instance = null;
let id = 0;

// function Queue() {
//   if (instance) {
//     return instance;
//   }

//   instance = this;
//   this.data = [];

//   return instance;
// }

// Queue.prototype.add = function (record) {
//   record.id = ++id;
//   this.data.unshift(record);
// };

// Queue.prototype.remove = function () {
//   return this.data.pop();
// };

// Queue.prototype.peek = function () {
//   return this.data[0];
// };

// Queue.prototype.list = function () {
//   return this.data;
// };

// Queue.prototype.count = function () {
//   return this.data.length;
// };


// module.exports = Queue;

class Queue {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.data = [];
    return instance;
  }

  add(record) {
    record.id = ++id;
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[0];
  }

  list() {
    return this.data;
  }

  count() {
    return this.data.length;
  }
}

export default Queue;
