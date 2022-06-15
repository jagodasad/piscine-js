function mult2(a) {
    return function(b) {
        return a * b
    }
  }

  function add3(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
  }

  function sub (a, b, c, d) {
    return a - b - c - d;
  }

  function sub4(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a - b - c -d
            }
        }
    }
  }