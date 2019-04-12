
let instance = null;
const id = 0;

function Stack() {
  if (instance) {
    return instance;
  }

  instance = this;
  this.data = [];

  return instance;
}

Stack.prototype.push = function (record) {
  this.data.push(record);
};

Stack.prototype.pop = function () {
  return this.data.pop();
};

Stack.prototype.peek = function () {
  return this.data[this.data.length - 1];
};


module.exports = Stack;
