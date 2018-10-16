# Conditionals

In life, we make decisions based on circumstances. Think of an everyday decision as mundane as falling asleep— if we are tired, we go to bed, otherwise, we wake up and start our day.

These if-else decisions can be modeled in code by creating conditional statements. A conditional statement checks specific condition(s) and performs a task based on the condition(s).

In this lesson we will explore how programs make decisions by evaluating conditions and introduce logic into our code! We'll be covering the following concepts:

- if, else if, and else statements.
- comparison operators.
- logical operators.
- truthy vs falsy values.
- ternary operators.
- the switch statement.

## Your Tasks

### Getting Started

This assignment will follow the same workflow as the last assignment.  You will begin by making a new assignment directory within which you will create an index.html file and a app.js file.  To view the results of your JavaScipt code, you will be using console.  If you forgot how to do this, refer to the first assignment "Introduction to JavaScript".

- [ ] First create a new folder on your computer called Variables.  Then, open the folder in VS Code.

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

### The if Keyword

We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. If the alarm clock rings, then we'll shut it off. If we're tired, then we'll go to sleep.

In programming, we can also perform a task based on a condition using an if statement:

```
if (true) {
  console.log('This message will print!'); 
} 
// Prints "This message will print!"
```

Notice in the example above, we have an if statement. The if statement is composed of:

- The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.
- Inside the parentheses (), a condition is provided that evaluates to true or false.
- If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
- If the condition evaluates to false, the block won't execute.

Let's make an if statement!

- [ ] Using the let keyword, declare a variable named sale. Assign the value true to it.

- [ ] Now create an if statement. Provide the if statement a condition of sale. Inside the code block of the if statement, console.log() the string 'Time to buy!'. 

- [ ] Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console.  Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we'll be changing this behavior in the next exercise. 

### If...Else Statements

In the previous exercise, we used an if statement that checked a condition to decide whether or not to run a block of code. In many cases, we'll have code we want to run if our condition evaluates to false. If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the condition evaluates to false. Take a look at the inclusion of an else statement:

```
if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
// Prints "But the code in this block will!"
```

An else statement must be paired with an if statement, and together they are referred to as an if...else statement. In the example above, the else statement:

- Uses the else keyword following the code block of an if statement.
- Has a code block that is wrapped by a set of curly braces {}.
- The code inside the else statement code block will execute when the if statement's condition evaluates to false.

if...else statements allow us to automate solutions to yes-or-no questions, also known as binary decisions.

- [ ] Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string 'Time to wait for a sale.'

### Comparison Operators

When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

- Less than: <
- Greater than: >
- Less than or equal to: <=
- Greater than or equal to: >=
- Is equal to: ===
- Is NOT equal to: !==

Comparison operators compare the value on the left with the value on the right. For instance:

```
10<12 // Evaluates to true
```

It can be helpful to think of comparison statements as questions. When the answer is "yes", the statement evaluates to true, and when the answer is "no", the statement evaluates to false. The code above would be asking: is 10 less than 12? Yes! So 10 < 12 evaluates to true.

We can also use comparison operators on different data types like strings:

```
'apples' === 'oranges' // false
```
In the example above, we're using the identity operator (===) to check if the string 'apples' is the same as the string 'oranges'. Since the two strings are not the same, the comparison statement evaluates to false.

All comparison statements evaluate to either true or false and are made up of:

- Two values that will be compared.
- An operator that separates the values and compares them accordingly (>, <, <=,>=,===).

Let's practice using these comparison operators!





### Get credit for this assignment

- [ ] Once you have completed all of the above, have Ms. Pluska mark this assignment complete. 


















