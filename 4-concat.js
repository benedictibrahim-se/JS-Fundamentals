// Write a script that prints two arguments passed into it in this format "Is"

const args = process.argv.slice(2);
if (args.length === 2) {
    console.log(`${args[0]} is ${args[1]}`);
} else if (args.length < 2) {
    console.log(`${args[0]} is ${args[1]}`);
} else {
    console.log(`${args[0]} is ${args[1]}`);
}