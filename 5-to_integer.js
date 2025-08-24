const integer = process.argv.slice(2);

let int = Number(integer);

if (!int) {
    console.log("Not a Number");
} else {
    console.log(`My Number : ${int}`);
}