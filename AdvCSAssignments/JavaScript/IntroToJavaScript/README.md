# Introduction to JavaScript

JavaScript is primarily known as the language of most modern web browsers, and its early quirks gave it a bit of a bad reputation. However, the language continued to evolve and improve. JavaScript is a powerful, flexible, and fast programming language now being used for increasingly complex web development and beyond!

In this lesson, you will learn introductory coding concepts including data types and built-in objects— essential knowledge for all aspiring developers.

## Your Tasks

### Getting Started

All modern browsers are capabable to rendering javascript, which makes developing in javascript quick and easy. 

- [ ] First create a new folder on your computer called IntroToJavaScript.  Then, open the folder in VS Code.

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

### Using the console

The console is a panel that displays important messages, like errors, for developers. Much of the work the computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can print, or log, to our console directly.

In JavaScript, the console keyword refers to an object, a collection of data and actions, that we can use in our code. Keywords are words that are built into the JavaScript language, so the computer will recognize them and treats them specially.

One action, or method, that is built into the console object is the .log() method. When we write console.log() what we put inside the parentheses will get printed, or logged, to the console.

It's going to be very useful for us to print values to the console, so we can see the work that we're doing.

```
console.log(5);

```
This example logs 5 to the console. The semicolon denotes the end of the line, or statement. Although in JavaScript your code will usually run as intended without a semicolon, we recommend learning the habit of ending each statement with a semi-colon so you never leave one out in the few instances when they are required.

To view the log simply right click on the webpage where your javascript is running, then select inspect.  The console log will appear as a window in the developer tools menu. 

- [ ] Return to VS Code.  In your app.js page, write a line of code that logs your age.  Refresh your index.html page in your browswer.  Then right click and select inspect. Locate the console window to see the output.

- [ ] On the next line, log a number representing the number of weeks you've been programming.

### Adding Comments

As we write JavaScript, we can write comments in our code that the computer will ignore as our program runs. These comments exist just for human readers.

Comments can explain what the code is doing, leave instructions for developers using the code, or add any other useful annotations.

There are two types of code comments in JavaScript:

- A single line comment will comment out a single line and is denoted with two forward slashes // preceding it.

```
// Prints 5 to the console
console.log(5);

```
You can also use a single line comment to comment after a line of code:
```
console.log(5);  // Prints 5
```

A multi-line comment will comment out multiple lines and is denoted with /* to begin the comment, and */ to end the comment.

```
/*
This is all commented 
console.log(10);
None of this is going to run!
console.log(99);
*/
```
You can also use this syntax to comment something out in the middle of a line of code:
```
console.log(/*IGNORED!*/ 5);  // Still just prints 5

```

- [ ] On the first line of your app.js file, write a single line comment that says Opening line.

- [ ] Below this line use block quotes to write the following

```
firstname lastname
CS Special Topics
Introduction to JavaScript
Today's date
```

### Data Types

Data types are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are seven fundamental data types:

- Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
- String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.
- Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a "yes" or "no" question.
- Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
- Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
- Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
- Object: Collections of related data.

The first 6 of those types are considered <i>primitive</i> data types. They are the most basic data types in the language. <i>Objects</i> are more complex, and you’ll learn much more about them as you progress through JavaScript. At first, seven types may not seem like that many, but soon you’ll observe the world opens with possibilities once you start leveraging each one. As you learn more about objects, you’ll be able to create complex collections of data.

But before we do that, let's get comfortable with strings and numbers!

```
console.log('Location of Timberline: 701 E Boise Ave, Boise, Idaho');
console.log(40);
```

In the example above, we first printed a string. Our string isn't just a single word; it includes both capital and lowercase letters, spaces, and punctuation.

Next, we printed the number 40, notice we did not use quotes.

- [ ] Return to your app.js file, log the string 'JavaScript' to the console.

- [ ] In the same file, log the number 2011 to the console.

- [ ] Next, print 'Woohoo! I love to code!' to the console.

### Arithmetic Operators

Basic arithmetic often comes in handy when programming.

An operator is a character that performs a task in our code. JavaScript has several built-in in arithmetic operators, that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:

- Add: +
- Subtract: -
- Multiply: *
- Divide: /
- Remainder: %

The first four work how you might guess:

```
console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3
```

Note that when we console.log() the computer will evaluate the expression inside the parentheses and print that result to the console. If we wanted to print the characters 3 + 4, we would wrap them in quotes and print them as a string.

The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.

- [ ] Inside of a console.log(), add 3.5 to your age.  This is the age you'll be when we start sending people to live on Mars.

- [ ] On a new line write another console.log(). Inside the parentheses, take the current year and subtract 1969.  The answer is how many years it's been since the 1969 moon landing.

- [ ] Create one last console.log(). Inside the parentheses, multiply 0.2708 by 100.  That's the percent of the sun that is made up of helium. Assuming we could stand on the sun, we'd all sound like chipmunks!

### String Concatenation

Operators aren't just for numbers! When a + operator is used on two strings, it appends the right string to the left string:

```
console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'
```

This process of appending one string to another is called concatenation. Notice in the third example we had to make sure to include a space at the end of the first string. The computer will join the strings exactly, so we needed to make sure to include the space we wanted between the two strings.

```
console.log('front ' + 'space'); 
// Prints 'front space'
console.log('back' + ' space'); 
// Prints 'back space'
console.log('no' + 'space'); 
// Prints 'nospace'
console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'
```

Just like with regular math, we can combine, or chain, our operations to get a final result:

```
console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// Prints 'One, two, three!'
```

- [ ]  Inside a console.log() statement, concatenate the two strings 'Hello' and 'World'

- [ ]  Oops, we forgot about the space last time! This time, console.log() 'Hello' and 'World' again but this time make sure to use string concatenation to also include a space (' ') between the two words.

### Properties

When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. Every string instance has a property called length that stores the number of characters in that string. You can retrieve property information by appending the string with a period and the property name:

```
console.log('Hello'.length); // Prints 5
```

The . is another operator! We call it the dot operator.

In the example above, the value saved to the length property is retrieved from the instance of the string, 'Hello'. The program prints 5 to the console, because Hello has five characters in it.

- [ ] Use the .length property to log the number of characters in the following string to the console:

> 'Teaching the world how to code'

### Methods

Remember that methods are actions we can perform. JavaScript provides a number of string methods.

We call, or use, these methods by appending an instance with a period (the dot operator), the name of the method, and opening and closing parentheses: ie. 'example string'.methodName().

Does that syntax look a little familiar? When we use console.log() we're calling the .log() method on the console object. Let's see console.log() and some real string methods in action!

```
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
```
Let's look at each of the lines above:

On the first line, the .toUpperCase() method is called on the string instance 'hello'. The result is logged to the console. This method returns a string in all capital letters: 'HELLO'.
On the second line, the .startsWith() method is called on the string instance 'Hey'. This method also accepts the character 'H' as an input, or argument, between the parentheses. Since the string 'Hey' does start with the letter 'H', the method returns the boolean true.

You can find a list of built-in string methods in the [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype). Developers use documentation as a reference tool. It describes JavaScript's keywords, methods, and syntax.

- [ ] Use the .toUpperCase() method to log the string 'Codecademy' to the console in all capital letters.

- [ ] In the second console.log() statement in app.js, we have a string ' Remove whitespace ' which has spaces before and after the words 'Remove whitespace'.

If we browse the JavaScript string documentation, we find several built-in string methods that each accomplish a different goal. The one method that seems ideal for us is .trim().

Use the method to remove the whitespace at the beginning and end of the string in the second console.log() statement.

### Built in Objects

In addition to console, there are other [objects built into JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects). Down the line, you’ll build your own objects, but for now these “built-in" objects are full of useful functionality.

For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.

The great thing about objects is that they have methods! Let's call the .random() method from the built-in Math object:

```
console.log(Math.random()); // Prints a random number between 0 and 1
```

In the example above, we called the .random() method by appending the object name with the dot operator, the name of the method, and opening and closing parentheses. This method returns a random number between 0 and 1.

To generate a random number between 0 and 50, we could multiply this result by 50, like so:

```
Math.random() * 50;
```

The example above will likely evaluate to a decimal. To ensure the answer is a whole number, we can take advantage of another useful Math method called Math.floor().

Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

```
Math.floor(Math.random() * 50);
```

In this case:

1. Math.random generates a random number between 0 and 1.
2. We then multiply that number by 50, so now we have a number between 0 and 50.
3. Then, Math.floor() rounds the number down to the nearest whole number.

To see all of the properties and methods on the Math object, take a look at the [documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).

- [ ] Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.

- [ ] Now, use Math.floor() to make the output a whole number.  Inside the console.log you wrote in the last step, put Math.random() * 100 inside the parentheses of Math.floor().

- [ ] Find a method on the [JavaScript Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) that returns the smallest integer greater than or equal to a decimal number.  Use this method with the number 43.8. Log the answer to the console.

- [ ] Use the [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) to find a method on the built-in Number object that checks if a number is an integer.  Put the number 2017 in the parentheses of the method and use console.log() to print the result.


















