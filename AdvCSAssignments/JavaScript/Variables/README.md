# Variables

In programming, a variable is a container for a value. You can think of variables as little containers for information that live in a computer's memory. Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory.

Variables also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.

In short, variables label and store data in memory. There are only a few things you can do with variables:

- Create a variable with a descriptive name.
- Store or update information stored in a variable.
- Reference or “get” information stored in a variable.

It is important to distinguish that variables are not values; they contain values and represent them with a name. So you can think of variables as boxes that hold values.

In this lesson, we will cover how to use the var, let, and const keywords to create variables.

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

### Create a Variable: var

There were a lot of changes introduced in the ES6 version of JavaScript in 2015. One of the biggest changes was two new keywords, let and const, to create, or declare, variables. Prior to the ES6, programmers could only use the var keyword to declare variables. 

```
var myName = 'Arya';
console.log(myName);
// Output: Arya
```

Let's consider the example above:

- var, short for variable, is a JavaScript keyword that creates, or declares, a new variable.
- myName is the variable's name. Capitalizing in this way is a standard convention in JavaScript called camel casing. In camel casing you group words into one, the first word is lowercase, then every word that follows will have its first letter uppercased. (e.g. camelCaseEverything).
- = is the assignment operator. It assigns the value ('Arya') to the variable (myName).
- 'Arya' is the value assigned (=) to the variable myName. You can also say that the myName variable is initialized with a value of 'Arya'.
- After the variable is declared, the string value 'Arya' is printed to the console by referencing the variable name: console.log(myName).

There are a few general rules for naming variables:

- Variable names cannot start with numbers.
- Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
- Variable names cannot be the same as keywords. For a comprehensive list of keywords check out [MDN's keyword documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var).

Note: In the next exercises, we will learn why ES6's let and const are the preferred variable keywords by many programmers. Because there is still a ton of code written prior to ES6, it's helpful to be familiar with the pre-ES6 var keyword.

- [ ] Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.
- [ ] Declare a variable named numOfSlices using the var keyword and assign to it the number 8.
- [ ] Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood.
- [ ] On the following line, use console.log() to print the value saved to numOfSlices.

### Create a Variable: let

As mentioned in the previous exercise, the let keyword was introduced in ES6. The let keyword signals that the variable can be reassigned a different value. Take a look at the example:

```
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito
```
Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined:

```
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
```
Notice in the example above:

- If we don't assign a value to a variable declared using the let keyword, it automatically has a value of undefined.
- We can reassign the value of the variable.

- [ ] Create a let variable called changeMe and set it equal to the boolean true.

- [ ] To check if changeMe was reassigned, log the value saved to changeMe to the console.


### Create a Variable: const

The const keyword was also introduced in ES6, and is short for the word constant. Just like with var and let you can store any value in a const variable. The way you declare a const variable and assign a value to it follows the same structure as let and var. Take a look at the following example:

```
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto
```
However, a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you'll get a TypeError.

Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you'll get a SyntaxError.

If you're trying to decide between which keyword to use, let or const, think about whether you'll need to reassign the variable later on. If you do need to reassign the variable use let, otherwise, use const.

- [ ] Create a constant variable named entree and set it to equal to the string 'Enchiladas'.

- [ ] Just to check that you've saved the value of 'Enchiladas' to entree, log the value of entree to the console.

- [ ] Great, let's see what happens if you try to reassign a constant variable.  Paste the following code to the bottom of your program. 

```
entree = 'Tacos';
```

### Mathematical Assignment Operators

Let's consider how we can use variables and math operators to calculate new values and assign them to a variable. Check out the example below:

```
let w = 4;
w = w + 1;

console.log(w); // Output: 5
```

In the example above, we created the variable w with the number 4 assigned to it. The following line, w = w + 1, increases the value of w from 4 to 5.

Another way we could have reassigned w after performing some mathematical operation on it is to use built-in mathematical assignment operators. We could re-write the code above to be:

```
let w = 4;
w += 1;

console.log(w); // Output: 5
```

In the second example, we used the += assignment operator to reassign w. We're performing the mathematical operation of the first operator + using the number to the right, then reassigning w to the computed value.

We also have access to other mathematical assignment operators: -=, *=, and /= which work in a similar fashion.

```
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4
```

Let's practice using these mathematical assignment operators!

- [ ] Use let to create a variable called levelUp and initialize it to 10.  Then, use the += mathematical assignment operator to increase the value stored in levelUp by 5.  Log the results. 

- [ ] Use let to create a variable called powerLevel and initialize it to 9001.  Then, use the -= mathematical assignment operator to decrease the value stored in powerLevel by 100. Log the results.

- [ ] Use let to create a variable called multiplyMe and initialize it to 32.  Then, use the *= mathematical assignment operator to multiply the value stored in multiplyMe by 11. Log the results.

- [ ] Use let to create a variable called divideMe and initialize it to 1152.  Then, use the /= mathematical assignment operator to divide the value stored in divideMe by 4. Log the results.

### The Increment and Decrement Operator

Other mathematical assignment operators include the increment operator (++) and decrement operator (--).

The increment operator will increase the value of the variable by 1. The decrement operator will decrease the value of the variable by 1. For example:

```
let a = 10;
a++;
console.log(a); // Output: 11
```

```
let b = 20;
b--;
console.log(b); // Output: 19
```

Just like the previous mathematical assignment operators (+=, -=, *=, /=), the variable's value is updated and assigned as the new value of that variable.

- [ ] Use let to create a variable called gainedDollar and initialize it to 3.  Using the increment operator, increase the value of gainedDollar. Log the results.

- [ ] Use let to create a variable called lostDollar and initialize it to 50.  Using the decrement operator, decrease the value of lostDollar. Log the results.

- [ ] Use let to create a variable called gainedDollar2 and initialize it to 1.  Cut and paste the following code.  What result were you expecting?  What result did you get?

```
console.log(gainedDollar2++);

```

### String Concatenation with Variables

In previous exercises, we assigned strings to variables. Now, let's go over how to connect, or concatenate, strings in variables.

The + operator can be used to combine two string values even if those values are being stored in variables:

```
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'
```

In the example above, we assigned the value 'armadillo' to the myPet variable. On the second line, the + operator is used to combine three strings: 'I own a pet', the value saved to myPet, and '.'. We log the result of this concatenation to the console as:

```
I own a pet armadillo.
```

- [ ]  Create a variable named favoriteAnimal and set it equal to your favorite animal.

- [ ]  Use console.log() to print 'My favorite animal: ANIMAL' to the console. Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.

### String Interpolation

In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:

```
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
```

Notice that:

- a template literal is wrapped by backticks ` (this key is usually located on the top of your keyboard, left of the 1 key).
- Inside the template literal, you'll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
- When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.'

One of the biggest benefits to using template literals is the readability of the code. Using template literals, you can more easily tell what the new string will be. You also don't have to worry about escaping double quotes or single quotes.

- [ ] Create a variable called myName and assign it your name.

- [ ] Create a variable called myCity and assign it your favorite city's name.

- [ ] Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format:

```
My name is NAME. My favorite city is CITY.
```

Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.

### typeof operator

While writing code, it can be useful to keep track of the data types of the variables in your program. If you need to check the data type of a variable's value, you can use the typeof operator.

The typeofoperator checks the value to its right and returns, or passes back, a string of the data type.

```
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean
```
Let's break down the first example. Since the value unknown1 is 'foo', a string, typeof unknown1 will return 'string'.

- [ ] Copy and paste the code below.  Then use console.log() to print the typeof newVariable.

```
let newVariable = 'Playing around with typeof.';
```
- [ ] Great, now let's check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.

- [ ] Since you assigned this new value to newVariable, it has a new type! On the line below your reassignment, use console.log() to print typeof newVariable again.

### Create a temperature converter

- [ ] The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.  The value saved to kelvin will stay constant. Choose the variable type with this in mind.

- [ ] Write a comment above that explains this line of code.

- [ ] Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.  Let's convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

- [ ] Write a comment above that explains this line of code.

- [ ] Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.

```
Fahrenheit = Celsius * (9/5) + 32
```

- [ ] Write a comment above that explains this line of code.

- [ ] When you convert from Celsius to Fahrenheit, you often get a decimal number.  Use the .floor() method from the Math library to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.

- [ ] Write a comment above that explains this line of code.

- [ ] Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:

```
The temperature is TEMPERATURE degrees Fahrenheit.
```

Use string interpolation to replace TEMPERATURE with the value saved to fahrenheit.

- [ ] Run your program to see your results!

- [ ] By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again.


### Get credit for this assignment

- [ ] Once you have completed all of the above, have Ms. Pluska mark this assignment complete. 


















