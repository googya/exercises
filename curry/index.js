function curry1(func) {
  return function() {
    if (func.length <= arguments.length) {
      return func.apply(this, [].slice.call(arguments, 0))
    }
  }
}

function curry2(func) {
  return function(arg) {
    return function(arg1) {
      return func(arg, arg1)
    }
  }
}

function curry3( func ) {
  return function() {
    var args1 = [].slice.call(arguments, 0)
    if (args1.length == 1) {
      return function(arg2) {
        return function(arg3) {
          return func.apply(this, args1.concat(arg2).concat(arg3))
        }
      }
    }else {
      return function(arg3) {
        return func.apply(this,  args1.concat(arg3))
      }
    }
  }
}


function curry(func) {
  if (func.length == 2)
    return curry2(func)
  else if (func.length == 3 )
    return curry3(func)
  else 
    return curry1(func)
}


module.exports = curry
