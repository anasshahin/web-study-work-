function solvePostFix(postfixString) {
  postfixString = postfixString.split(" ");
  let resultArr = [];
  let max = postfixString.length;
  for (let i = 0; i < max; i++) {
      if (this.isNumericString(postfixString[i])) resultArr.push(parseFloat(postfixString[i]));
      else {
          if (postfixString[i] == "_") {
              let a = resultArr.pop();
              resultArr.push(a * (-1));
          } else if (postfixString[i] == "+") {
              let b = resultArr.pop(),
                  a = resultArr.pop();
              resultArr.push(a + b);
          } else if (postfixString[i] == "-") {
              let b = resultArr.pop(),
                  a = resultArr.pop();
              resultArr.push(a - b);
          } else if (postfixString[i] == "*") {
              let b = resultArr.pop(),
                  a = resultArr.pop();
              resultArr.push(a * b);
          } else if (postfixString[i] == "/") {
              let b = resultArr.pop(),
                  a = resultArr.pop();
              resultArr.push(a / b);
          } else if (postfixString[i] == "^") {
              let b = resultArr.pop(),
                  a = resultArr.pop();
              resultArr.push(Math.pow(a, b));
          }
      }
  }
  return resultArr[0];
}
    let exprsn = "+9*26";
    //document.write( typeof infixToPostfix(exp));
    let mmmmmm= '2+4+5*(9-23)';
    console.log(solvePostFix(infixToPostfix(mmmmmm)));
    // This code is contributed by suresh07.