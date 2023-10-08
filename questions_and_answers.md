
# Project Title

A brief description of what this project does and who it's for

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`



#### Answer: A:{} . 


### Explanation:
 
In the code provided, a variable named "greeting" is declared.
   Then, there is  assigns an empty object to a variable named "greetign"  . Finally, when you log "greetign" to the console, it will output an empty object, as that is the value assigned to "greetign.


###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`



#### Answer: C:`"12"`. 

### Explanation:

 In JavaScript, when we use the + operator with one or both strings operands , it performs concatenation instead of addition. Function call sum(1, "2"); here  first argument 1 is  a number but the second argument "2" is a string. Therefore, JavaScript will concatenate the string "2" with the number 1, resulting in the string "12."


###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`



#### Answer: A: ['🍕', '🍫', '🥑', '🍔'] .

### Explanation:
In this code, an array food is created with four elements. Then, an object info is created with a property favoriteFood that initially holds the first element of the food array, which is "🍕". Later, the value of info.favoriteFood is reassigned to "🍝", but this change does not affect the original food array.

 So,
 when we log the food array, it remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].


###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`



#### Answer:B: `Hi there, undefined` .

### Explanation:

  In the sayHi function, there is a parameter name that expects an argument when the function is called. 
However, when we call sayHi() without providing any argument, name remains undefined.

 The function still  executes, but it concatenates the undefined value with the string, resulting in "Hi there, undefined" being returned and logged to the console.


###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4



#### Answer: C: 3 .

### Explanation:

In this code, a forEach loop iterates through the nums array. For each element num in the array, the if (num) condition checks if the value of num is truthy (in JavaScript, 0 is falsy, and any non-zero number is truthy). Since there are three non-zero elements in the nums array (1, 2, and 3), the count variable is incremented for each of them. Therefore, the value of count becomes 3, and that's what gets logged to the console.



