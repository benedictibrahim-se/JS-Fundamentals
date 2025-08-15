// Write a script that prints the first argument passed

const args = process.argv.slice(2);

const numOfArgs = args;
if (numOfArgs < 1) {
    console.log("No Argument");
} else {
    console.log(`${numOfArgs}`);
}