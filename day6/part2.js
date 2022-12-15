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
foundTheFourteen = false;
let lengthOfTargetArrAtTheMoment = 0;

const checkIfAllSymbolsAreDifferent = () => {
    const lastFourteen = targetArr.slice(-14);
    
    const noDups = new Set(lastFourteen);
    if(lastFourteen.length === noDups.size){
        foundTheFourteen = true;
    }
    
    return (lastFourteen.length === noDups.size);
    }

while (!foundTheFourteen) {
    for (let i = 0; i <= sourceArr.length; i++) {
        if (foundTheFourteen) { 
            lengthOfTargetArrAtTheMoment = targetArr.length;
            break; }
        targetArr.push(sourceArr[i]);
        if (targetArr.length >= 14) { 
            checkIfAllSymbolsAreDifferent() }
    }
}



// console.log(lengthOfTargetArrAtTheMoment)





