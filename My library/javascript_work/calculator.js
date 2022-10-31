function infixToPostfix(infixString) {


    if (infixString[0] == ".") infixString = "0" + infixString;
    let outputQueue = "";
    let operatorStack = [];
    let operators = {
        "_": {
            precedence: 5,
            associativity: "Right"
        },
        "^": {
            precedence: 4,
            associativity: "Right"
        },
        "/": {
            precedence: 3,
            associativity: "Left"
        },
        "*": {
            precedence: 3,
            associativity: "Left"
        },
        "+": {
            precedence: 2,
            associativity: "Left"
        },
        "-": {
            precedence: 2,
            associativity: "Left"
        }
    }
    infixString = infixString.replace(/\s+/g, "");
    infixString = this.cleanArray(infixString.split(/([\+\-\*\/\^\_\(\)])/));
    for (let i = 0; i < infixString.length; i++) {
        let token = infixString[i];
        if (this.isNumericString(token)) {
            outputQueue += token + " ";
        } else if ("_^*/+-".indexOf(token) !== -1) {
            let o1 = token;
            let o2 = operatorStack[operatorStack.length - 1];
            while ("_^*/+-".indexOf(o2) !== -1 && ((operators[o1].associativity === "Left" && operators[o1].precedence <= operators[o2].precedence) || (operators[o1].associativity === "Right" && operators[o1].precedence < operators[o2].precedence))) {
                outputQueue += operatorStack.pop() + " ";
                o2 = operatorStack[operatorStack.length - 1];
            }
            operatorStack.push(o1);
        } else if (token === "(") {
            operatorStack.push(token);
        } else if (token === ")") {
            while (operatorStack[operatorStack.length - 1] !== "(") {
                outputQueue += operatorStack.pop() + " ";
            }
            operatorStack.pop();
        }
    }
    while (operatorStack.length > 0) {
        outputQueue += operatorStack.pop() + " ";
    }
    return outputQueue;
}
function cleanArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "") {
            arr.splice(i, 1);
        }
    }
    return arr;
}
function isNumericString(str) {
    return (!isNaN(parseFloat(str)) && isFinite(str));
}