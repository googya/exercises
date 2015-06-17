function debounce(func, delay) {
  var timeout

  return function() {
    var content = this
    var args = arguments
    var later = function() {
      timeout = null
      func.apply(content, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, delay)
  }
}

module.exports = debounce
