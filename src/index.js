module.exports = function multiply(first, second) {
  let firstReverseArr = first.split('').reverse();
  let secondReverseArr = second.split('').reverse();

  let stack = [];

  for (let i = 0; i < firstReverseArr.length; i++) {
    for (let j = 0; j < secondReverseArr.length; j++) {
      let prodactOfNumbers = firstReverseArr[i] * secondReverseArr[j];
      if(stack[i + j]){
        stack[i + j] = stack[i + j] + prodactOfNumbers;
      } else {
        stack[i + j]= prodactOfNumbers;
      } 
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;
    let move = Math.floor(stack[i] / 10);
    stack[i] = num;

    if (stack[i + 1]){
      stack[i + 1] += move;
    } else if (move != 0){
      stack[i + 1] = move;
    }
  }

  return stack.reverse().join('');
}

