function log(level, message) {
  return `${level}: ${message}`
}


function curry(func) {
  return function (a) {
    return function (b) {
      return func(a, b)
    }
  }
}


const logInfo = curry(log)('Info')
logInfo('Hello World!')
