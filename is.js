is.num = (a) => typeof a === 'number'
is.nan = (a) => Number.isNaN(a)
is.str = (a) => typeof a === 'string'
is.bool = (a) => typeof a === 'boolean'
is.undef = (a) =>  a === undefined
is.def = (a) => is.def(a)
is.arr = (a) => Array.isArray(a)
is.obj = (a) => typeof a === 'object' && !is.fun(a) && !is.arr(a) && a !== null
is.fun = (a) => typeof a === 'function'
is.truthy = (a) => !!a
is.falsy = (a) => !a