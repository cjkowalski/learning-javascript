# JavaScript Odin Course Notes

## Strings

### Extracting String Characters
```
var.at(position)            # returns the character at a specified index (position) in a string
var.charAt(position)        # returns the character at a specific index (position)
var.charCodeAt(position)    # returns the code of the character at a specific index in a string
var[position]               
```

Note: JavaScript counts positions from zero.

### Extracting String Parts
```
.slice(start, end)          # extracts a part of a string and returns the extracted part in a new string
.substring(start, end)      # similar, but start and end values less than 0 are treated as 0
.substr(start, length)      # similar, but the second parameter specifies the length of the extracted part
```


```
.toUpperCase()
.toLowerCase()
.concat()
.trim()                     # removes whitespace from both sides of a string
.padStart(4, "0")           # pads a string from the start with another string (x times) until it reaches a length of 4
.padEnd()
.repeat(count)
.replace("x", "y")          # replaces string x with string y
.split("x")                 # A string can be converted to an array (by whatever "x" is)
```

<br>
<br>

## Conditionals

Example:
```
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

```
else if   # used to specify a new condition if the first condition is false

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

### Logical Operators
```
||    OR (finds the first truthy value)

      let hour = 9;

      if (hour < 10 || hour > 18) {
        alert( 'The office is closed.' );
      } 

&&    AND
!     NOT
```

### Switch-Case

```
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

Note:
```
==      // used to show equality
===     // used to show equality AND euqlity in type
```

<br>
<br>

## Arrow Functions


let sum = (a, b) => a + b;

This arrow function is a shorter form of:

```
let sum = function(a, b) {
  return a + b;
};
*/
```

<br>
<br>

## Arrays

array: special variable, which can hold more than one value
```
const cars = ["Saab", "Volvo", "BMW"];

// or

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

```

Array methods:
```
cars.length       // Returns the number of elements (is always one more than the highest array index)
cars.sort()       // Sorts the array
cars.toString()   // converts an array to a string of comma separated array values
cars.at()         // get the x element using at()
cars.join()       // joins all array elements into a string (specificy the separator inside '()')
.pop()            // removes the last element from an array
.push()           // add new element
.shift()          // removes the first array element and "shifts" all other elements to lower index
.unshift()        // adds new element to an array at the beginning and unshifts older elements
.concat()         // creates a new array by merging (concatenating) exsisting arrays ( eg. arrayOne.concat(arrayTwo); )
.splice()         // add new items to an array ( eg. fruits.splice(2, 0, "Lemon", "Kiwi"); )
                     first parameter (2) defines where nwe elements should be added (spliced in)
                     second parameter (0) defines how many elements should be removed
                     rest of paremters define the new elements to be added
.slice()          // slices out a piece of an array into a new array
.map()            // to do something to each item in a collection and create a new collection containing the changed items
.filter()         // to test each item in a collection, and create a new collection containing only items that match
```

.map() Description: map() is a method used to transform elements of an array or iterable by applying a function to each element and creating a new array of results. It takes a callback function as an argument, which is applied to each element of the array, and returns a new array where each element is the result of the callback function.

```
function addOne(num) {
  return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]
```

.reduce() Description: reduce() is a method used to reduce all elements of an array (or iterable) into a single value, such as a number, string, or object. It applies a function to each element of the array, accumulating a result that is returned after all elements have been processed. The first argument is the `accumulator`, which is the current value of the result at that point in the loop. The first time through, this value will either be set to the initialValue (described in the next bullet point), or the first element in the array if no initialValue is provided. The second argument for the callback is the current value, which is the item currently being iterated on. It also takes in an `initialValue` as a second argument (after the callback), which helps when we don’t want our initial value to be the first element in the array. For instance, if we wanted to sum all numbers in an array, we could call reduce without an initialValue, but if we wanted to sum all numbers in an array and add 10, we could use 10 as our initialValue.


```
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// example: 
const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums); // Outputs 120;
console.log(arr); // Outputs [1, 2, 3, 4, 5]
```

.filter() Description: filter() is a method used to create a new array with all elements that pass a test specified by a callback function. It takes a function as an argument, which tests each element of the array. Elements that pass the test are included in the new array.

```
function isOdd(num) {
  return num % 2 !== 0;
}
const arr = [1, 2, 3, 4, 5];
const oddNums = arr.filter(isOdd);
console.log(oddNums);    // Outputs [1, 3, 5];
console.log(arr);        // Outputs [1, 2, 3, 4, 5], original array is not affected

// filter will iterate through arr and pass every value into the isOdd callback function, one at a time.
// isOdd will return true when the value is odd, which means this value is included in the output.
// If it’s an even number, isOdd will return false and not include it in the final output.
```

Note: When we pass in alertFunction or function (e) {...} as an argument to addEventListener, we call this a callback. A callback is simply a function that is passed into another function as an argument.


.forEach() Description: forEach() executes a provided function once for each array element, similar to a for loop. It does not return a new array but is used to perform actions or side effects on each element of an array.

.some() Description: some() checks if at least one element in the array passes a test (provided as a function). Usage: They return a boolean based on whether the condition is true for any (some()) 

.slice() Description: slice() extracts a section of an array and returns a new array without modifying the original array. It takes two arguments: the start index and the end index (optional), allowing you to extract a portion of an array.

<br>
<br>



Looping through Arrays (using a for loop): 
```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
```

Adding to an array:
```
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

//or

const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
```

### When to Use Arrays. When to use Objects.
- JavaScript does not support associative arrays.
- You should use <b>objects</b> when you want the element names to be <b>strings (text)</b>.
- You should use <b>arrays</b> when you want the element names to be <b>numbers</b>.

## Loops
### 1. for...of loop
- Given the collection cats, get the first item in the collection.
- Assign it to the variable cat and then run the code between the curly braces {}.
- Get the next item, and repeat (2) until you've reached the end of the collection.
```
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

### 2. for loop
- just want to run the same code x times
- <b>initializer / counter-variable:</b> this is usually a variable set to a number, which is incremented to count the number of times the loop has run
- <b>condition: </b>this defines when the loop should stop looping
- <b>final-expression:</b> this is always evaluated (or run) each time the loop has gone through a full iteration (usally incrementing the counter variable)
```
for (initializer; condition; final-expression) {
  // code to run
}
```
example:
```
for (let i = 1; i < 10; i++)
```
- ```let i = 1```: the counter variable, i, starts at 1. Note that we have to use let for the counter, because we're reassigning it each time we go round the loop.
- ```i < 10```: keep going round the loop for as long as i is smaller than 10.
- ```i++```: add one to i each time round the loop.

<br>

cat example from above:

```
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```

### 3. while loop

```
let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

// another example:

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

```

### 4. do... while loop
```
let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);
```

## Ternary Operators

```
x = (1 < 2) ? true : false;
```

## Misc

```
const createLabel = (name) => {
    const label = document.createElement("div");
    label.className = "label";
    label.textContent = name;
    container.appendChild(label);
  }
```

## Implicit return:

```
function add(a, b) {
  return a + b;
}
```
```
const add = (a, b) => a + b;
```

## Classes
Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.
Declaration:
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Getter
  get area() {
    return this.calcArea();
  }

// Method
  calcArea() {
    return this.height * this.width;
  }
```

## Object Destructuring
```
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// is equivalent to:
// const a = obj.a;
// const b = obj.b;
```

```
const obj = { a: 1, b: { c: 2 } };
const { a } = obj; // a is constant
let {
  b: { c: d },
} = obj; // d is re-assignable
```

## DOM

```
// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

// selects the first child of #container => .display
console.dir(container.firstElementChild);

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
console.dir(controls.previousElementSibling);

element.querySelector(selector) - returns a reference to the first match of selector.

element.querySelectorAll(selectors) - returns a “NodeList” containing references to all of the matches of the selectors.

const div = document.createElement("div");
```

### Append elements

```
parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.
parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode.

parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child.
```

### Adding inline style

```
// adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");
```

### Editing Attributes

```
// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");
```

### Working with Classes

```
// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");
```


### Adding Event Listeners
```
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
```
