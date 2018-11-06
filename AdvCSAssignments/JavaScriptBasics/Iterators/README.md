# Iterators

Imagine you had a grocery list and you wanted to know what each item on the list was. You'd have to scan through each row and check for the item. This common task is similar to what we have to do when we want to iterate over, or loop through, an array. One tool at our disposal is the for loop. However, we also have access to built-in array methods which make looping easier.

The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

In this lesson, you will learn the syntax for these methods, their return values, how to use the documentation to understand them, and how to choose the right iterator method for a given task.

## Your Tasks

### Getting Started

This assignment will follow the same workflow as the last assignment.  You will begin by making a new assignment directory within which you will create an index.html file and a app.js file.  To view the results of your JavaScipt code, you will be using console.  If you forgot how to do this, refer to the first assignment "Introduction to JavaScript".

- [ ] First create a new folder on your computer called Iterators.  Then, open the folder in VS Code.

- [ ] Add two new files to this folder, 

- index.html
- app.js

- [ ] In your index.html file, add the following code,

```
<html>
    <head>
        <script src="app.js"></script>
    </head>

</html>
``` 

### Introductions to Iterators

- [ ] Copy and paste the code below into your app.js file

```
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

```

- [ ] Inspect the code in main.js. Notice the different methods being called on the arrays:

	- .forEach()
	- .map()
	- .filter()

- [ ] Run the code to see the output!


### The .forEach() Method

The first iteration method that we're going to learn is .forEach(). Aptly named, .forEach() will execute the same code for each element of an array.

```
const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function(groceryItem){
	console.log(' - ' + groceryItem);
});

```

The code above will log a nicely formatted list of the groceries to the console. Let's explore the syntax of invoking .forEach().

- groceries.forEach() calls the forEach method on the groceries array.
- .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
- .forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
- The return value for .forEach() will always be undefined.

Another way to pass a callback for .forEach() is to use arrow function syntax.

```
groceries.forEach(groceryItem => console.log(groceryItem));
```
We can also define a function beforehand to be used as the callback function.

```
function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);

```
The above example uses a function declaration but you can also use a function expression or arrow function as well.

All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator. It's good to be aware of the different ways to pass in callback functions as arguments in iterators because developers have different stylistic preferences. Nonetheless, due to the strong adoption of ES6, we will be using arrow function syntax in the later exercises.

- [ ] Copy and paste the code below into your app.js file, 

```
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
```

- [ ] Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

You may use any form of callback you prefer.

### The .map() Method

The second iterator we're going to cover is .map(). When .map() is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map():

```
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});
```

.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

In the example above:

- numbers is an array of numbers.
- bigNumbers will store the return value of calling .map() on numbers.
- numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
- return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.

If we take a look at numbers and bigNumbers:

```
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
```
Notice that the elements in numbers were not altered and bigNumbers is a new array.

- [ ] Copy and paste the code below into your app.js file, 

```
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below


console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
```
- [ ] Add your code under the animals array and before the line console.log(secretMessage.join(''));

Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.

- [ ] Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

### The .filter() Method

Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:

```
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});
```
- words is an array that contains string elements.
- const shortWords = declares a new variable that will store the returned array from invoking .filter().
- The callback function is an arrow function has a single parameter, word. Each element in the words array will be passed to this function as an argument.
- word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.

Let's also check the values of words and shortWords:

```
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
```

Observe how words was not mutated, i.e. changed, and shortWords is a new array.

- [ ] Copy and paste the code below into your app.js file, 

```
onst randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
```

- [ ] Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.

- [ ] Now let's work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

### The .findIndex() Method

We sometimes want to find the location of an element in an array. That's where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

```
const jumbledNums = [123, 25, 78, 5, 9]; 

const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
```

- jumbledNums is an array that contains elements that are numbers.
- const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
- The callback function is an arrow function has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
- num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.

Let's take a look at what lessThanTen evaluates to:

```
console.log(lessThanTen); // Output: 3
```

If we check what element has index of 3:

```
console.log(jumbledNums[3]); // Output: 5
```

Great, the element in index 3 is the number 5. This makes sense since 5 is the first element that is less than 10.

If there isn't a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

```
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});

console.log(greaterThan1000); // Output: -1
```

- [ ] Copy and paste the code below into your app.js file, 

```
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

```

- [ ] Invoke .findIndex() on the the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

- [ ] Let's see if we can find the index of the first animal that starts with the letter 's'.

Call .findIndex() on the animals array return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

### The .reduce() Method

Another widely used iteration method is .reduce(). The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:

```
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(summedNums) // Output: 17
```

Here are the values of accumulator and currentValue as we iterate through the numbers array:

Iteration	accumulator	currentValue	return value
First		1		2		3
Second		3		4		7
Third		7		10		17

Now let's go over the use of .reduce() from the example above:

- numbers is an array that contains numbers.
- summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
- numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
- The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.
- As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.

The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance:

```
const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()

console.log(summedNums); // Output: 117
```

Here's an updated chart that accounts for the second argument of 100:

Iteration	accumulator	currentValue	return value
First		100		1		101
Second		101		2		103
Third		103		4		107
Fourth		107		10		117

- [ ] Copy and paste the code below, 

```
const newNumbers = [1, 3, 5, 7];
```

- [ ] Let's practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array.

To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don't need to provide any arguments to .reduce() yet.

You'll also see a TypeError: undefined is not a function but we'll fix that after we add our callback function in the next step!

- [ ] Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.

- [ ] To check the value being used as we iterate through the array, add three statements to the function body of the callback:

- console.log('The value of accumulator: ', accumulator);
- console.log('The value of currentValue: ', currentValue);
- a return statement that adds accumulator to currentValue

- [ ] Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.

- [ ] While we have this code set up, let's also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator.

Add a second argument of 10 to .reduce().

### Iterator Documentation

There are many additional built-in array methods, a complete list of which is on the [MDN's Array iteration methods page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods).

The documentation for each method contains several sections:

1. A short definition.
2. A block with the correct syntax for using the method.
3. A list of parameters the method accepts or requires.
4. The return value of the function.
5. An extended description.
6. Examples of the method's use.
7. Other additional information.

In the instructions below, there are some errors in the code. Use the documentation for a given method to determine the error or fill in a blank to make the code run correctly.

- Copy and paste the code below into your app.js file, 

```
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(() => {
  return word.length < 6;
}));

// Use filter to create a new array



// Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => { } ));

```

- [ ] In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

For more information browse [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) on .some() .

- [ ] The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

We've used .filter() in a previous exercise, but, for more information browse [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) on .filter() .

- [ ] In the last line of code, there is this code:

// console.log(interestingWords.every(word => ));
Complete the code between the parentheses to check if every element has more than 5 characters.

Make sure to uncomment (delete the // before) the last line of the program before you run the code.

For more information browse [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) on .every() .

### Choose the Right Iterator

There are many iteration methods you can choose. In addition to learning the correct syntax for the use of iteration methods, it is also important to learn how to choose the correct method for different scenarios. The exercises below will give you the opportunity to do just that!

You'll see errors pop up in the terminal as you work through this exercise, but by the end the errors will be gone!

- [ ] Copy and paste the code below into your app.js file, 

```
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.method(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.method(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.method((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.method(num => num - 5);

// Choose a method that will return a boolean value
nums.method(num => num < 0);

```
- [ ] Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.

- [ ] In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.

- [ ] In the third method call, replace the word method with a method that take an array that contains multiple values and returns a single value.

- [ ] In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.

- [ ] In the fifth method call, replace the word method with a method that will return a boolean value.

### Mini Linter

In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.

This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter using array methods that you have learned.

- [ ] Copy and paste the code below into your app.js file, 

```
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];
```

- [ ]  We want to gather some information about the individual words and sentences in the string "story". Let's split the string into individual words and save them in a new array called storyWords.

- [ ] Log how many words there are in this story to the console.

- [ ] There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.

- [ ] There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.

- [ ] Now, count how many sentences are in the paragraph.

This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.

- [ ] Log these items to the console:

- The word count
- The sentence count
- The number of times each overused word appears

You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.

- [ ] Now, log the betterWords array to the console as a single string.

- [ ] Congratulations! You've improved the original paragraph and given the user some important information about his or her work. Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.

Here are some ideas:

- For the overused words, remove it every other time it appears.

- Write a function that finds the word that appears the greatest number of times.

- Replaced overused words with something else.

### Get credit for this assignment

- [ ] Once you have completed all of the above, have Ms. Pluska mark this assignment complete. 


