const { readFileSync, promises: fsPromises } = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}
const input = syncReadFile('./input.txt');

//work

const sourceArr = Array.from(input[0]);
const targetArr = [];
foundTheFour = false;
let lengthOfTargetArrAtTheMoment = 0;

const checkIfAllSymbolsAreDifferent = () => {
    const lastFour = targetArr.slice(-4);
    
    const noDups = new Set(lastFour);
    if(lastFour.length === noDups.size){
        foundTheFour = true;
    }
    
    return (lastFour.length === noDups.size);
    }

while (!foundTheFour) {
    for (let i = 0; i <= sourceArr.length; i++) {
        if (foundTheFour) { 
            lengthOfTargetArrAtTheMoment = targetArr.length;
            break; }
        targetArr.push(sourceArr[i]);
        if (targetArr.length >= 4) { 
            checkIfAllSymbolsAreDifferent() }
    }
}



// console.log(lengthOfTargetArrAtTheMoment)




