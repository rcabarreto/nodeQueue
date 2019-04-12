
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

/**
 * @name Queue
 * @description Returns the Queue
 */
class Queue {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.data = [];
    return instance;
  }

  /**
   * @name add
   *
   * @param {*} record anything you want to save
   */
  add(record) {
    record.id = ++id;
    this.data.unshift(record);
  }

  /**
   * remove
   * @description gets te first element on the queue and returns
   */
  remove() {
    return this.data.pop();
  }

  /**
   * @name peek Peeks the first value in the queue
   */
  peek() {
    return this.data[0];
  }

  /**
   * @name list Returns a list of all the elements in the queue
   */
  list() {
    return this.data;
  }

  /**
   * @name count Returns the number of elements in the queue
   */
  count() {
    return this.data.length;
  }
}

export default Queue;
