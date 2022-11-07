import PromptSync from "prompt-sync";

const prompt = PromptSync();

const name = prompt("What is your full name: ");
console.log(name);

const number = Number(prompt("Enter your number: "));

if ((number % 2) == 0 ) {
    console.log(`The entered number ${number} is even number`)
}
else {
    console.log(`The entered number ${number} is odd number`)
}
