var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log('Languages array ', languagesArray);

console.log('Array length ', languagesArray.length);

languagesArray.push('c#', 'php');
console.log('Updated array ', languagesArray);

languagesArray.pop();
console.log('Last index removed ', languagesArray);

languagesArray.unshift('c++');
console.log('Added element to front', languagesArray);

languagesArray.shift();
console.log('Removed first element', languagesArray);

var thirdElement = languagesArray[2];
console.log('3rd element in languagesArray ', thirdElement);

var arrayLength = languagesArray.length;
console.log('The final length of the array is ', arrayLength);

var lastItem = languagesArray[arrayLength - 1];
console.log('The last item in the array is ', lastItem);
