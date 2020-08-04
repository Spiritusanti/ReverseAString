//create a function that reverses a string;
//'Hi My name is Andrei' shoule be:
//'ierdna si eman yM iH'

//to accomplish this, my first thought is to seperate each character out to its own index key value and then reverse order. What array methods can we use? To the WEB!

//the split() method can be used to split a string into an array of substrings and return a new array. This solves the first step!

// For the next step we can use the Array.reverse method which reverses an array in place.

//the last step is to convert it back to a string and this is where it might get tricky.

function reverse(str) {
  // we can use the split() method to create our initial array like so:
  const strArray = str.split('');
  console.log(strArray);
  //using array.reverse to switch items around:
  const reverseArray = strArray.reverse();
  console.log(reverseArray);
  //now we just convert it back to a string
  //return reverseArray.toString(); this method returns everything seperated by commas which is not what we want. The Join method allows us to specify the seperator addressing that issue.
  return reverseArray.join('');
}

//function without commentary:
function reverse(str) {
  const strArray = str.split('');
  const reverseArray = strArray.reverse();
  return reverseArray.join('');
}

let myString = "Hi my name is Jacob"
reverse(myString)


// Andrei's solution:

function andreiReverse(str) {
  // check input
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'hmm that is not good';
  }
  //the create array, measure length of input, loop over it in reverse order and push to new array
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  //join to return array
  return backwards.join('');
}

// His builtin methods solution:
//same operations as mine but with no variable declarations so it's cleaner and more readable.
function reverse2(str) {
  return str.split('').reverse().join('');
}

//using the new es6 syntax makes it even cleaner.
const reverse3 = str => [...str].split('').reverse().join('');