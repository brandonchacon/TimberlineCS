# Scope

Scope refers to the visibility of variables. In other words, which parts of your program can see or use it. Normally, every variable has a global scope. Once defined, every part of your program can access a variable.

It is very useful to be able to limit a variable's scope to a single function depending on the situation.  In this lesson you will learn how to control the scope of the variables in your programs. 

## Your Tasks

### Getting Started

This assignment will follow the same workflow as the last assignment.  You will begin by making a new assignment directory within which you will create an index.html file and a app.js file.  To view the results of your JavaScipt code, you will be using console.  If you forgot how to do this, refer to the first assignment "Introduction to JavaScript".

- [ ] First create a new folder on your computer called Functions.  Then, open the folder in VS Code.

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

### Blocks and Scope

Before we talk more about scope, we first need to talk about blocks.

We've seen blocks used before in functions and if statements. A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

A block of code could be a function, like this:

```
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
```
Notice that the function body is actually a block of code.

Observe the block in an if statement:

```
if (dusk) {
  let color = 'pink';
  console.log(color); // pink
};
```

- [ ] At the top of app.js, declare a const variable, named city set equal to 'New York City'. This variable will exist outside of the block.

- [ ] Below the city variable, write a function named logCitySkyline.

- [ ] Inside of the function body of logCitySkyline(), write another variable using let named skyscraper and set it equal to 'Empire State Building'.

- [ ] Inside the function, include a return statement like this:

```
return 'The stars over the ' + skyscraper + ' in ' + city;
```

- [ ] Beneath the logCitySkyline() function, use console.log() to log the value of logCitySkyline() to the console.

You'll notice that the logCitySkyline() function is able to access both variables without any problems. In the next exercise we'll consider why would it be preferable to have one variable outside of a block and the other inside of a block.

### Global Scope

Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Let's take a look at an example of global scope:

```
const color = 'blue'

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue
```
- Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.

- In turn, color can be accessed within the returnSkyColor function block.

- [ ] At the top of app.js, write three global variables:

- Name the first variable satellite and set it equal to 'The Moon'.

- Name the second variable galaxy and set it equal to 'The Milky Way'.

- Name the third variable stars and set it equal to 'North Star'.

- [ ] Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:

```
return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
```
- [ ] Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.

You'll notice that the function block for callMyNightSky() is able to access the global variables freely since the variables are available to all lines of code in the file.

### Block Scope

The next context we'll cover is block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

Block scope works like this:

```
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

logSkyColor(); // blue 
console.log(color); // ReferenceError
```
You'll notice:

- We define a function logSkyColor().
- Within the function, the color variable is only available within the curly braces of the function.
- If we try to log the same variable outside the function, throws a ReferenceError.

- [ ] In app.js, define a function logVisibleLightWaves().

- [ ] Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.

- [ ] Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.

- [ ] Call the logVisibleLightWaves() function from outside the function.

- [ ] Beneath the function call, log the value of lightWaves to the console from outside the function.

You'll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!

### Scope Pollution

It may seem like a great idea to always make your variables accessible, but having too many global variables can cause problems in a program.

When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

Let's look at an example of scope pollution in practice so we know how to avoid it:

```
let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100
```
You'll notice:

- We have a variable num.
- Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
- When we call logNum(), num gets reassigned to 100.
- The reassignment inside logNum() affects the global variable num.
- Even though the reassignment is allowed and we won't get an error, if we decided to use num later, we'll unknowingly use the new value of num.

While it's important to know what global scope is, it's best practice to not define variables in the global scope.

- [ ] Let's see what happens if we create a variable that overwrites a global variable.

Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius' as such:

```
stars = 'Sirius';
```
- [ ] Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console.

You'll notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.

### Practice Good Scoping

Given the challenges with global variables and scope pollution, we should follow best practices for scoping our variables as tightly as possible using block scope.

Tightly scoping your variables will greatly improve your code in several ways:

- It will make your code more legible since the blocks will organize your code into discrete sections.
- It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
- It's easier to maintain your code, since your code will be modular.
- It will save memory in your code because it will cease to exist after the block finishes running.

Here's another example of how to use block scope, as defined within an if block:

```
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};

console.log(color); // ReferenceError
```

Here, you'll notice:

- We create a variable dusk inside the logSkyColor() function.
- After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.
- Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
- While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.

Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace. If a variable does not need to exist outside a block— it shouldn’t!

- [ ] Copy and paste the code block below into your app.js file.  Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.

```
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  
  console.log(lightWaves);
};

logVisibleLightWaves();
```

-  [ ] inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.

- [ ] Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.

Run your code and notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.

### Training Days

As a seasoned athlete, one of your favorite activities is running marathons. You use a service called Training Days that sends you a message for the event you signed up for and the days you have left to train.

Since you also code, Training Days has asked you to help them solve a problem: The program currently uses the wrong scope for its variables. They know this can be troublesome as their service evolves. In this project you will make Training Days more maintainable and less error-prone by fixing variable scopes.

- [ ] Let's begin by downloading and running [trainingDays.js](https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptBasics/Scope/trainingDays.js) file. In the console we can see that the program is broken!

Ideally, the getRandEvent() function selects an event at random. The getTrainingDays() function returns the number of days to train based on the event selected. The logEvent() and logTime() functions print the athlete name, event, and number of days to the console.

But poorly scoped variables are causing errors.

- [ ] To avoid the ReferenceError, define days within the getTrainingDays function, before the if statement.

- [ ] Run the program again: no error, but days is undefined! New days variables are being defined in the scope of each if/else if statement.

Delete the three let's within the if/else if statements.

- [ ] Run the program again: fixed! Now the if/else if statements are changing the original days rather than defining a new one.

- [ ] The log functions–logEvent() and logTime()–use the same name variable. There seems to be a problem with the scoping; we can tell by the amount of duplicate code here! In addition to variables scoped too broadly, duplicate code can indicate that a variable may be scoped too tightly.

Let's avoid this repetition by adding name as a parameter for each function.

- [ ] Move the name variable to global scope.

- [ ] Pass name as an additional argument to logEvent() and logTime().

- [ ] Check that the program still works! Run it and check the output

- [ ] Try the functions for another competitor. Copy and paste this code at the end of the file.

```
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
```
- [ ] Run the program. The events are assigned randomly, but Nala and Warren are running the same events!

- [ ] We see that the random variable is defined in the global scope. Each time getRandEvent() is called, it uses the same value.

At the top of the file, move the random variable from the global scope to block scope within the getRandEvent function.

- [ ] Well done! Training Days is more maintainable and less error-prone thanks to your work. Run the program a few times to make sure the results are randomized.

### Get credit for this assignment

- [ ] Once you have completed all of the above, have Ms. Pluska mark this assignment complete. 












