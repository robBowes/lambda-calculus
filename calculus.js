const 
    // In lambda calculus a number n is just a function called against an entity n times
    zero = f => x => x,
    one = f => x => f(x),
    two = f => x => f(f(x)),
    three = f => x => f(f(f(x))),
    four = f => x => f(f(f(f(x)))),
    // The successor to a number is a number, f(x) applied n times n(f)(x)
    // called one more time
    successor = n => f => x => f(n(f)(x)),
    five = successor(four),
    six = successor(five),
    seven = successor(six),
    // Apply a function that increments one n times,
    // where n is the number being converted to an int
    toInt = n => n(i => i + 1)(0),

    add = n => m => f => x => m(f)(n(f)(x)),

    multiply = n => m => f => x => m(n(f))(x),

    exponent = n => m => m(n),

    _true = t => _ => t,

    _false = _ => f => f,

    _if = cond => thenDo => elseDo => cond(thenDo)(elseDo),

    _and = l => r => l(r)(l),

    or = l => r => l(l)(r),

    toBool = cond => cond(true)(false),

    makePair = l => r => f => f(l)(r),

    left = pair => pair(_true),

    right = pair => pair(_false)



module.exports = {
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    toInt,
    successor,
    add,
    multiply,
    exponent,
    _true,
    _false,
    _if,
    toBool,
    _and,
    or,
    makePair,
    left,
    right,
}