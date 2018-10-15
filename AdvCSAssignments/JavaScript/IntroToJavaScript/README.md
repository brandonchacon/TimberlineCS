# Introduction to JavaScript

JavaScript is primarily known as the language of most modern web browsers, and its early quirks gave it a bit of a bad reputation. However, the language continued to evolve and improve. JavaScript is a powerful, flexible, and fast programming language now being used for increasingly complex web development and beyond!

In this lesson, you will learn introductory coding concepts including data types and built-in objects— essential knowledge for all aspiring developers.

## Your Tasks

### Getting Started

All modern browsers are capabable to rendering javascript, which makes developing in javascript quick and easy. 

1. First create a new folder on your computer called IntroToJavaScript.  Then, open the folder in VS Code.

2. Add two new files to this folder, 

- index.html
- app.js

3. In your index.html file, add the following code,

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

2.  On the next line, log a number representing the number of weeks you've been programming.

### Adding Comments

As we write JavaScript, we can write comments in our code that the computer will ignore as our program runs. These comments exist just for human readers.

Comments can explain what the code is doing, leave instructions for developers using the code, or add any other useful annotations.

There are two types of code comments in JavaScript:

- A single line comment will comment out a single line and is denoted with two forward slashes // preceding it.

// Prints 5 to the console
console.log(5);
You can also use a single line comment to comment after a line of code:

console.log(5);  // Prints 5

















