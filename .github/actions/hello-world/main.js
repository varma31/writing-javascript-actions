const core = require("@actions/core");

const firstGreeting = core.getInput("first-meeting");
const secondGreeting = core.getInput("second-meeting");
const thirdGreeting = core.getInput("third-meeting");

console.log(`Hello ${firstGreeting}`);
console.log(`Hello ${secondGreeting}`);

if (thirdGreeting) {
    console.log(`Hello ${thirdGreeting}`);
}

console.log("Hello World");