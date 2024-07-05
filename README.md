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

## Arrow Functions
```
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
```

