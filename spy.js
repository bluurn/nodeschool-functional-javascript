function Spy(target, method) {
  var _func = target[method], cnt = { count: 0 };
 
  target[method] = function () {
    cnt.count++;
    return _func.apply(target, arguments);
  };

  return cnt;
}

module.exports = Spy;
