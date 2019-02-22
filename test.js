const lambda = require("./calculus")
const expect = require("chai").expect

const {zero, one, two, three, four, toInt, successor, add, multiply, exponent, _true, _false, _if, toBool} = lambda

const i = f => () => f
const apply = x => (...arr) => arr.reduce((acc, f) => f(acc), x)

describe("Lambda-calculus", () => {
    it("creates zero with a function", i(expect(toInt(zero)).to.equal(0)))
    it("creates one", i(expect(toInt(one)).to.equal(1)))
    it("creates four", i(expect(toInt(four)).to.equal(4)))
    it("can count using successors", i(expect(toInt(successor(two))).to.equal(3)))
    it("can count twice using successors", i(expect(apply(two)(successor,successor,toInt)).to.equal(4)))
    it("can add", i(expect(
        apply(two)(add(three),toInt)
    ).to.equal(5)))

    it("can multiply", i(expect(
        apply(two)(multiply(four),toInt)
    ).to.equal(8)))

    it("can exponent", i(expect(
        apply(two)(exponent(four),toInt)
    ).to.equal(16)))

    it("can exponent", i(expect(apply(two)(exponent(four),toInt)).to.equal(16)))

    it("can create true", i(expect(apply(_true)(toBool)).to.equal(true)))

    it("can create a conditional", i(expect(apply(_if(_true)(zero)(one))(toInt)).to.equal(0)))
})