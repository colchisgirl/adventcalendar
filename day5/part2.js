const { readFileSync, promises: fsPromises } = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}
const input = syncReadFile('./input.txt');

console.log(input)
let directions = input.slice(input.indexOf("") + 1);
let directionsArr = directions.map(string => {
    let result = string.split("move ").pop();
    result = result.split(" from ")
    const secondPart = result[1].split(" to ");
    result = [+result[0], +secondPart[0], +secondPart[1]];
    return result;
})

let stacks = input.slice(0, input.indexOf(""));

const workSequence = (sequence) => {
    const sourceStrIndex = sequence[1] - 1;
    const targetStrIndex = sequence[2] - 1;
    const numberOfStrToMove = sequence[0];

    const sourceStack = stacks[sourceStrIndex];
    const string = sourceStack.slice(sourceStack.length - numberOfStrToMove);
    const remainingSourceStack = sourceStack.slice(0, sourceStack.length - numberOfStrToMove);
    const targetStack = stacks[targetStrIndex];
    toppedTargetStack = targetStack.concat("", string);

    stacks[sourceStrIndex] = remainingSourceStack;
    stacks[targetStrIndex] = toppedTargetStack;
}


directionsArr.forEach(sequence => workSequence(sequence));

const lastChars = stacks.map(string => string.slice(string.length - 1))
console.log(lastChars)








