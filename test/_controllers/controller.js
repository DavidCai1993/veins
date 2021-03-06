exports.get = function* (next) {
  if (this.body !== undefined) {
    this.body += 'get';
  } else {
    this.body = 'get';
  }
};

exports.get.filters = ['getFilter'];

exports.post = function* (next) {
  if (this.body !== undefined) {
    this.body += 'post';
  } else {
    this.body = 'post';
  }
};

exports.put = function* (next) {
  if (this.body !== undefined) {
    this.body += 'put';
  } else {
    this.body = 'put';
  }
};

exports.delete = function* (next) {
  if (this.body !== undefined) {
    this.body += 'delete';
  } else {
    this.body = 'delete';
  }
}

exports.filters = ['filter'];
