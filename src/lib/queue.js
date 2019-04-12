
let instance = null;
let id = 0;

function Queue() {
  if (instance) {
    return instance;
  }

  instance = this;
  this.queue = [];

  return instance;
}

Queue.prototype.add = function (n) {
  n.id = ++id;
  this.queue.unshift(n);
};

Queue.prototype.remove = function () {
  return this.queue.pop();
};

Queue.prototype.peek = function () {
  return this.queue[0];
};

Queue.prototype.list = function () {
  return this.queue;
};

Queue.prototype.count = function () {
  return this.queue.length;
};


module.exports = Queue;
