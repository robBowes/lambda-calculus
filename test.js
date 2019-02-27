const lambda = require("./calculus")
const expect = require("chai").expect
const assert = require("chai").assert

const {zero, one, two, three, four, toInt, successor, add, multiply, exponent, _true, _false, _if, toBool, _and, or,
    makePair, getLeft, getRight, not, emptyList, isEmpty, head, tail} = lambda


const i = f => () => f
const apply = (x, ...arr) => arr.reduce((acc, f) => f(acc), x)

describe("Lambda-calculus", () => {
    it("creates zero with a function", i(expect(toInt(zero)).to.equal(0)))
    it("creates one", i(expect(toInt(one)).to.equal(1)))
    it("creates four", i(expect(toInt(four)).to.equal(4)))
    it("can count using successors", i(expect(toInt(successor(two))).to.equal(3)))
    it("can count twice using successors", i(expect(apply(two,successor,successor,toInt)).to.equal(4)))
    it("can add", i(expect(apply(two,add(three),toInt)).to.equal(5)))
    it("can multiply", i(expect(apply(two,multiply(four),toInt)).to.equal(8)))
    it("can exponent", i(expect(apply(two,exponent(four),toInt)).to.equal(16)))
    it("can exponent", i(expect(apply(two,exponent(four),toInt)).to.equal(16)))
    it("can create true", i(expect(apply(_true,toBool)).to.equal(true)))
    it("can create a conditional", i(expect(apply(_if(_true)(zero)(one),toInt)).to.equal(0)))
    it("can create an inverse conditional", i(expect(apply(not(_true)(zero)(one),toInt)).to.equal(1)))
    it("can create a both that is true", i(expect(apply(_and(_true)(_true),toBool)).to.equal(true)))
    it("can create a both that is false", i(expect(apply(_and(_true)(_false),toBool)).to.equal(false)))
    it("can create an or that is false", i(expect(apply(or(_false)(_false),toBool)).to.equal(false)))
    it("can create an or that is true", i(expect(apply(or(_false)(_true),toBool)).to.equal(true)))
    it("can create a pair and get the left element", i(assert.equal(apply(makePair(one)(four), getLeft, toInt), 1)))
    it("can create a pair and get the right element", i(assert.equal(apply(makePair(one)(four), getRight, toInt), 4)))
    it("can create an empty list", i(assert.equal(apply(emptyList, isEmpty, toBool), true)))
    it("can create a list and get the head", i(assert.equal(apply(makePair(_false)(makePair(two)(emptyList)), head, toInt), true)))
}) 