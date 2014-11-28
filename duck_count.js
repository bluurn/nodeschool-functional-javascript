function duckCount() {
  return Array.prototype.slice.call(arguments).reduce(function(cnt, obj) {
    return (Object.prototype.hasOwnProperty.call(obj, 'quack')) ? ++cnt : cnt;
  },0);
};

module.exports = duckCount;
