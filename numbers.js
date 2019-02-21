module.exports = {
    // Create numbers from functions. Each function gets called n times
    zero: f => x => x,
    one: f => x => f(x),
    two: f => x => f(f(x)),
    three: f => x => f(f(f(x))),
    four: f => x => f(f(f(f(x)))),

    // Apply a function that increments one n times,
    // where n is the number being converted to an int
    toInt: f => f(i => i + 1)(0),

    // The successor to a number is a number, f(x) applied n times n(f)(x)
    // called one more time
    successor: n => f => x => f(n(f)(x)),

    add: n => m => f => x => m(f)(n(f)(x)),

    multiply: n => m => f => x => m(n(f))(x),

    exponent: n => m => m(n),

    troo: t => _ => t,

    falzz: _ => f => f,

}