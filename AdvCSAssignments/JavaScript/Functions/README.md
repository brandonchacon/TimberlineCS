# Functions

When first learning how to calculate the area of a rectangle, there’s a sequence of steps to calculate the correct answer:

- Measure the width of the rectangle.
- Measure the height of the rectangle.
- Multiply the width and height of the rectangle.

With practice, you can calculate the area of the rectangle without being instructed with these three steps every time.

We can calculate the area of one rectangle with the following code:

```
const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60
```
Imagine being asked to calculate the area of three different rectangles:

```
// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;

// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;

// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;
```
In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

In this lesson, you will learn how to create and use functions, and how they can be used to create clearer and more concise code.

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

### Function Declarations

In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration. Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an identifier. Take a look at the anatomy of a function declaration below:

```
function greetWorld(){
	console.log("Hello World!");
}
```
A function declaration consists of:

- The function keyword.
- The name of the function, or its identifier, followed by parentheses.
- A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

A function declaration is a function that is bound to an identifier, or name. In the next exercise we'll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they're defined.

Take a look at example of hoisting:

```
console.log(greetWorld()); // Output: Hello, World!

function greetWorld() {
  console.log('Hello, World!');
}
```
Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! Since hoisting isn't considered good practice, we simply want you to be aware of this feature.

- [ ] Using a function declaration, create a function called getReminder() that prints a reminder to the console. 

- [ ] In the function body of getReminder(), log the following reminder to the console: 'Water the plants.'

- [ ] Using a function declaration, create a function called greetInSpanish().

- [ ] In the function body add a console.log() that prints: 'Buenas Tardes.'

### Calling a Function

As we saw in previous exercises, a function declaration binds a function to an identifier.

However, a function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is called. To call a function in your code, you type the function name followed by parentheses.

```
greetWorld();
```

The function call above executes the function body, or all of the statements between the curly braces in the function declaration below.

````
function greetWorld() {
  console.log('Hello, World!');
}
```

We can call the same function as many times as needed.

Let’s practice calling functions in our code.

- [ ] Imagine that you manage an online store. When a customer places an order, you send them a thank you note. Let's create a function to complete this task:

- Define a function called sayThanks() as a function declaration.
- In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.'

- [ ] Call sayThanks() to view the thank you message in the console.

- [ ] Functions can be called as many times as you need them.

- Imagine that three customers placed an order and you wanted to send each of them a thank you message. Update your code to call sayThanks() three times.

### Parameters and Arguments

So far, the functions we've created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

```
function calculateArea(width, height){
	console.log(width*height);
}
```

In the example above, calculateArea(), computes the area of a rectangle, based on two inputs, width and height. The parameters are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.

```
calculateArea(10,6);
```
In the function call above, the number 10 is passed as the width and 6 is passed as height. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.

```
const rectWidth = 10;
const rectHeight = 6;

calculateArea(rectWidth, rectHeight);
```

The variables rectWidth and rectHeight are initialized with the values for the height and width of a rectangle before being used in the function call.

By using parameters, calculateArea() can be reused to compute the area of any rectangle! Functions are a powerful tool in computer programming so let’s practice creating and calling functions with parameters.

- [ ] Add a parameter called name to the function declaration for sayThanks().

- [ ] With name as a parameter, it can be used as a variable in the function body of sayThanks().

Using name and string concatenation, change the thank you message into the following:

```
'Thank you for your purchase '+ name + '! We appreciate your business.'
```
Copy and paste the above message into your code.

- [ ] A customer named Cole just purchased something from your online store. Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.

### Default Parameters

One of the features added in ES6 is the ability to use default parameters. Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

Take a look at the code snippet below that uses a default parameter:

```
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```

- In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting!

- When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.

- When there isn't an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.

By using a default parameter, we account for situations when an argument isn't passed into a function that is expecting an argument.

Let’s practice creating functions that use default parameters.

- [ ] The function makeShoppingList() shown below creates a shopping list based on the items that are passed to the function as arguments.

```
function makeShoppingList(item1, item2, item3){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
```

Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let's assign default values to the parameters in makeShoppingList().

Change the parameters of makeShoppingList() into default parameters :

Assign 'milk' as the default value of item1.
Assign 'bread' as the default value of item2.
Assign 'eggs' as the default value of item3.

### Return

When a function is called, the computer will run through the function's code and evaluate the result of calling the function. By default that resulting value is undefined.

```
function rectangleArea(width, height) {
  let area = width * height 
}
console.log(rectangleArea(5, 7)) // Prints undefined
```
In the code example, we defined our function to calculate the area of a width and height parameter. Then rectangleArea() is invoked with the arguments 5 and 7. But when we went to print the results we got undefined. Did we write our function wrong? No! In fact, the function worked fine, and the computer did calculate the area as 35, but we didn't capture it. So how can we do that? With the keyword return!

```
function calculateArea(width, height){
	const area = width * height;
	return area;
}

```
To pass back information from the function call, we use a return statement. To create a return statement, we use the return keyword followed by the value that we wish to return. Like we saw above, if the value is omitted, undefined is returned instead.

When a return statement is used in a function body, the execution of the function is stopped and the code that follows it will not be executed. Look at the example below:

```
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
```

If an argument for width or height is less than 0, then rectangleArea() will return 'You need positive integers to calculate area!'. The second return statement width * height will not run.

The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

- [ ] Imagine if we needed to order monitors for everyone in an office and this office is conveniently arranged in a grid shape. We could use a function to help us calculate the number of monitors needed!

Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.

- [ ] Let's compute the number of monitors by multiplying rows and columns and then returning the value.

In the function body of the function you just wrote, use the return keyword to return rows * columns.

- [ ] Now that the function is defined, we can compute the number of monitors needed. Let's say that the office has 5 rows and 4 columns.

Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4.

- [ ] To check that the function worked properly, log numOfMonitors to the console.

### Helper Functions

We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:

```
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59
```
In the example above:

- getFahrenheit() is called and 15 is passed as an argument.
- The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
- multiplyByNineFifths() takes the argument of 15 for the number parameter.
- The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
- 27 is returned back to the function call in getFahrenheit().
- getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
- Finally, 59 is returned back to the function call getFahrenheit(15).

We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.

- [ ] In the previous exercise, we created a function to find the number of monitors to order for an office. Now let's write another function that uses the monitorCount function to figure out the price.

Below monitorCount Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns. Leave the function body empty for now.

- [ ] Time to add some code to the function body of costOfMonitors to calculate the total cost.

Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.

- [ ] We should save the cost to a variable.

Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.

- [ ] To check that the function worked properly, log totalCost to the console.

### Function Expressions

Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

Consider the following function expression:

```
const calculateArea = function(width, height) {
	const area = width * height;
	return area;

};
```
To declare a function expression:

- Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

- Assign as that variable's value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

To invoke a function expression, write the name of the variable in which the function is stored followed by parentheses enclosing any arguments being passed into the function.

```
variableName(argument1, argument2)
```

Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

Let’s define a new function using a function expression.

- [ ] Let's say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and the plant needs to be watered:

- Create a variable named plantNeedsWater using the const variable keyword.
- Assign a function called water that takes in a parameter of day to plantNeedsWater.

- [ ] Now we need to add some code to the function body of plantNeedsWater():

- In the function body add an if conditional that checks day === 'Wednesday'. 
- If the conditional is truthy, inside the if code block, use the return keyword to return true.

- [ ] On days that aren't 'Wednesday', plantNeedsWater() should return false:

- Add an else statement after the if statement.
- Inside the else statement use the return keyword to return false.

- [ ] Call the plantNeedsWater() and pass in 'Tuesday' as an argument.

- [ ] Let's check that plantNeedsWater() returned the expected value.

Log plantNeedsWater('Tuesday') to the console. If it worked correctly, you should see false logged to the console.

### Arrow Functions

ES6 introduced arrow function syntax, a shorter way to write functions by using the special "fat arrow" () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

```
const rectangleArea = (width, height) => {
  let area = width * height;
  return area
}
```
It's important to be familiar with the multiple ways of writing functions because you will come across each of these when reading other JavaScript code.

- [ ] Change plantNeedsWater() to use arrow function syntax.

### Concise Body Arrow Functions

JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We'll explore a few of these techniques below:

1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.

```
ZERO PARAMETERS
const functionName = () => {};

ONE PARAMETER
const functionName = paramOne => {}'

TWO OR MORE PARAMETERS
const functionName = (paramOne, paramTwo) => {};

```

2. A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

```
SINGLE-LINE BLOCK
const sumNumbers = number => number + number;

MULTI-LINE BLOCK
const sumNumbers = number => {
	const sum = number + number;
	return sum;
};
```
So if we have a function

```
const squareNum = (num) => {
  return num * num;
};

```
We can refactor the function to:

```
const squareNum = num => num * num;
```
Notice the following changes:

- The parentheses around num have been removed, since it has a single parameter.
- The curly braces { } have been removed since the function consists of a single-line block.
- The return keyword has been removed since the function consists of a single-line block.



- [ ] Let's refactor plantNeedsWater() to be a concise body. Notice that we've already converted the if/else statement to a ternary operator to make the code fit on one line. 

### Rock, Paper, Scissors

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there's a tie, then the game ends in a draw.

Our code will break the game into four parts:

1. Get the user's choice.
2. Get the computer's choice.
3. Compare the two choices and determine a winner.
4. Start the program and display the results.

If you get stuck during this project, check out the project walkthrough video which can be found at the bottom of the page after the final step of the project.

- [ ] The user should be able to choose 'rock', 'paper', or 'scissors' when the game starts.

Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.

- [ ] Since a user can pass in a parameter, such as 'Rock' or 'rock' with different capitalizations, begin by utilizing JavaScript's toLowerCase() function to make the userInput all lowercase.

You can use code like this:

```
userInput = userInput.toLowerCase();
```

- [ ] When getting the user's choice, you should also check to make sure that the user typed a valid choice: 'rock', 'paper', or 'scissors'.

Inside getUserChoice(), write an if/else statement that makes sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then return the userInput. If not, use console.log to print an error message to the console.

- [ ] Test the function by calling it with valid and invalid input, and printing the results to the console.

You can delete this when you know your function works.

- [ ] Now we need to have the computer make a choice.

Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. Then, depending on the number, return either 'rock', 'paper', or 'scissors'.

- [ ] Test the function by calling it multiple times and printing the results to the console.

You can delete this when you know your function works.

- [ ] Now it's time to determine a winner.

Create a function named determineWinner that takes two parameters named userChoice and computerChoice. This function will compare the two choices played and then return if the human player won, lost, or tied.

Let's deal with the tie condition first. Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. If so, return a string that the game was a tie.

- [ ] 
If the game is not a tie, you'll need to determine a winner.

Begin by writing an if statement that checks if the userChoice is 'rock'. Inside the if statement's block, write another if/else statement. The inner if/else should check if the computerChoice is 'paper'. If so, return a message that the computer won. If not, return a message that the user won.

- [ ] Next, write another if statement for if the userChoice is 'paper'.

Inside this if statement, the computerChoice must be either 'scissors' or 'rock'. Write logic that will return a winner.

- [ ] Next, write yet another if statement for if the userChoice is 'scissors'.

Inside of this if statement, the computerChoice must either be 'rock' or 'paper'. Write logic that will return a winner.

- [ ] Don't forget to test your function!

Check off this task when you've finished testing.

- [ ] Everything is set up. Now you need to start the game and log the results.

Create a function named playGame.

Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either 'rock', 'paper', or 'scissors' as an argument.

Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().

Under both of these variables, use console.log to print them to the console.

- [ ] Finally, let's determine who won.

Inside the playGame() function, call the determineWinner() function. Pass in the userChoice and computerChoice variables as its parameters. Make sure to put this function call inside of a console.log() statement so you can see the result.

Then, to start the game, call the playGame() function on the last line of your program.

- [ ] Make this game better by adding a secret cheat code. If a user types 'bomb' as their choice, then make sure they win, no matter what.

### Get credit for this assignment

- [ ] Once you have completed all of the above, have Ms. Pluska mark this assignment complete. 


















