function main(startNum, endNum){
    let result = checkIfStartNumIsSmallerThanEndNum(startNum,endNum);

    if(isInRangeAndResultIsNotNull(startNum,endNum, result)){
       return printFinalMultiplicationTable(startNum, endNum);
    }
    return null;
}


function checkIfStartNumIsSmallerThanEndNum(startNum, endNum){
    return startNum <= endNum ? "true" : null;
}

function isInRangeAndResultIsNotNull(startNum, endNum, result){
    return (isWithinRange(startNum) && isWithinRange(endNum)) && result != null;
}

function isWithinRange(anyNum){
    return anyNum > 1 && anyNum <= 1000;
}

function printFinalMultiplicationTable(startNum, endNum){
    let compileMultiple = [];
    for(let firstNum = startNum; firstNum <= endNum; firstNum++){
        for(let innerNum = firstNum; innerNum <= endNum; innerNum++){
            compileMultiple.push({
                equationMultiple : multipleTableBuilder(firstNum, innerNum),
                secondMultiplier : innerNum,
            })
        }
    }

    return stringMultipleBuilderFinal(startNum, endNum, compileMultiple);
}



function multipleTableBuilder(firstNum, secondNum){
    return firstNum + "x" + secondNum + " = " + firstNum * secondNum + (firstNum == secondNum ? "\n" : " ");
}

function stringMultipleBuilderFinal(startNum, endNum, compileMultiple){
    let finalString = "";
    for(startNum; startNum <= endNum; startNum++){
        compileMultiple
        .filter(multiple => multiple.secondMultiplier == startNum)
        .forEach(function(item){
            finalString += item.equationMultiple;
        });
    }
    return finalString;
}

module.exports = {
    checkStartAndEndNum : checkIfStartNumIsSmallerThanEndNum,
    withinRange : isInRangeAndResultIsNotNull,
    finalMultiplyTable : printFinalMultiplicationTable,
    mainApp : main
};