const args = process.argv.slice(2);

// Stores the number of length passed into the argument
const numOfArgs = args.length;

// Test the conditions to see if it's met using If, Else Statement
if (numOfArgs < 1) {
    console.log("No Argument");
} else if (numOfArgs === 1) {
    console.log("Argument Found");
} else {
    console.log("Arguments Found");
}
