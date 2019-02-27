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
    // true takes two arguments and always returns the first
    _true = t => _ => t,
    // false takes two arguments and always returns the second
    _false = _ => f => f,
    // if takes a bool and two more arguments and applies the bool to the arguments, returning the first if it's true or the second if it's false
    _if = cond => thenDo => elseDo => cond(thenDo)(elseDo),
    // not takes a conditional and returns the opposite
    not = cond => thenDo => elseDo => cond(elseDo)(thenDo),

    _and = l => r => l(r)(l),

    or = l => r => l(l)(r),
    // converts a lambda conditional into a traditional boolean
    toBool = cond => cond(true)(false),
    // makes a pair by containing a left and a right in a function
    makePair = left => right => f => f(left)(right),
    // gets the left membere from a pair
    getLeft = pair => pair(_true),
    // gets the right membere from a pair
    getRight = pair => pair(_false),
    // nil is an empty list
    emptyList = makePair(_true)(_true),
    // returns true if passed an empty list
    isEmpty = pair => getLeft(pair)





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
    getLeft,
    getRight,
    not,
    emptyList,
    isEmpty,
}