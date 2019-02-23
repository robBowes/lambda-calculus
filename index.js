const numbers = require("./calculus")
for (const iterator in numbers) {
    global[iterator] = numbers[iterator]
}

