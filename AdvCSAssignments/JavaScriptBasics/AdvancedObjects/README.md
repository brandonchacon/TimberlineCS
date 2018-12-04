# Advanced Objects

Remember, objects in JavaScript are containers that store data and functionality. In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.

So if there are no objections, let's learn more about objects!

In this lesson we will cover these topics:

- how to use the this keyword.
- conveying privacy in JavaScript methods.
- defining getters and setters in objects.
- creating factory functions.
- using destructuring techniques.

## Your Tasks

### Getting Started

This assignment will follow the same workflow as the last assignment.  You will begin by making a new assignment directory within which you will create an index.html file and a app.js file.  To view the results of your JavaScipt code, you will be using console.  If you forgot how to do this, refer to the first assignment "Introduction to JavaScript".

- [ ] First create a new folder on your computer called AdvancedObjects.  Then, open the folder in VS Code.

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

### The this Keyword

Objects are collections of related data and functionality. We store that functionality in methods on our objects:

```
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};
```
In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.

```
goat.makeSound(); // Prints baaa
```
Nice, we have a goat object that can print baaa to the console. Everything seems to be working fine. What if we wanted to add a new method to our goat object called .diet() that prints the goat's dietType?

```
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"
```

That's strange, why is dietType not defined even though it's a property of goat? That's because inside the scope of the .diet() method, we don't automatically have access to other properties of the goat object.

Here's where the this keyword comes to the rescue. If we change the .diet() method to use the this, the .diet() works! :

```
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore
```

The this keyword references the calling object which provides access to the calling object's properties. In the example above, the calling object is goat and by using this we're accessing the goat object itself, and then the dietType property of goat by using property dot notation.

Let's get comfortable using the this keyword in a method.

- [ ] Copy and paste the code below into your app.js file, 

```
const robot = {
  
};
```

- [ ] In the object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.

- [ ] Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation:

```
I am MODEL and my current energy level is ENERGYLEVEL.
```
Replace 'MODEL' and 'ENERGYLEVEL' with the calling object's model and energyLevel property. Remember, to get the access to the calling object's properties inside a method, you have to use the this keyword!

- [ ] Now to check .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.

### Arrow Functions and this

We saw in the previous exercise that for a method, the calling object is the object the method belongs to. If we use the this keyword in a method then the value of this is the calling object. However, it becomes a bit more complicated when we start using arrow functions for methods. Take a look at the example below:

```
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined
```
In the comment, you can see that goat.diet() would log undefined. So what happened? Notice that in the .diet() is defined using an arrow function.

Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object. In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn't have a dietType property and therefore returns undefined.

To read more about either arrow functions or the [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object) check out the MDN documentation of the global object and [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

The key takeaway from the example above is to avoid using arrow functions when using this in a method!

- [ ] Copy and paste the code below into your app.js file, 

```
const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
```

- [ ] Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax.

Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format.

After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.

### Privacy

Accessing and updating properties is fundamental in working with objects. However, there are cases in which we don't want other code simply accessing and updating an object's properties. When discussing privacy in objects, we define it as the idea that only certain properties should be mutable or able to change in value.

Certain languages have privacy built-in for objects, but JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. Here's an example of using _ to prepend a property.

```
const bankAccount = {
  _amount: 1000
}
```

In the example above, the _amount is not intended to be directly manipulated.

Even so, it is still possible to reassign _amount:

```
bankAccount._amount = 1000000;
```

In later exercises, we'll cover the use of methods called getters and setters. Both methods are used to respect the intention of properties prepended, or began, with _. Getters can return the value of internal properties and setters can safely reassign property values. For now, let's see what happens if we can change properties that don't have setters or getters.

- [ ] Cut and paste the code below into your app.js file, 

```
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

```

- [ ] Below the robot object, reassign the _energyLevel property to 'high'.

- [ ] Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel.

What will happen now that _energyLevel isn't a number?

Call .recharge() on robot to find out.

Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. No need to worry about what this means for now, but it's important to understand that you can cause unwanted side-effects when mutating objects and their properties.

### Getters

Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let's take a look at a getter method:

```
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'
```
Notice that in the getter method above:

- We use the get keyword followed by a function.
- We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
- We can access the calling object's internal properties using this. In fullName, we're accessing both this._firstName and this._lastName.
- In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we're accessing a property.

Now that we've gone over syntax, let's discuss what some notable advantages of using a getter method:

- Getters can perform an action on the data when getting a property.
- Getters can return different values using conditionals.
- In a getter, we can access the properties of the calling object using this.
- The functionality of our code is easier for other developers to understand.

Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.

Great, let's go getter!

- [ ] Copy and paste the code below into your app.js file, 

```
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  
};
```
- [ ] In robot, create a getter method named energyLevel using the get keyword. Leave function body blank for now.

- [ ] Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel.

Make sure you return the string and not logging it to the console.

- [ ] Log the result of calling the getter method energyLevel on robot to the console.

Notice that the method will return a formatted response rather than just accessing a property!

### Setters

Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. Let's see an example of a setter method:

```
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
```

Notice that in the example above:

- We can perform a check for what value is being assigned to this._age.
- When we use the setter method, only values that are numbers will reassign this._age
- There are different outputs depending on what values are used to reassign this._age.

Then to use the setter method:

```
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
```

Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks like we're reassigning the value of a property.

Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is supposed to be used. Nonetheless, even with a setter method, it is still possible to directly reassign properties. For example, in the example above, we can still set ._age directly:

```
person._age = 'forty-five'
console.log(person._age); // Prints forty-five
```
- [ ] Copy and paste the code below into your app.js file, 

```
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  
};
```

- [ ] Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let's fix that problem.

Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.

- [ ] There are a couple of things we should do in the setter method:

- Add a check to see if num is a number using the typeof operator.
- num should also be greater than or equal to 0.
- If both conditions are met, reassign this._numOfSensors to num.

- [ ] Now add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.

- [ ] Use the numOfSensors setter method on robot to assign _numOfSensors to 100.

- [ ] To check that the setter method worked, console.log() robot.numOfSensors.

### Factory Functions

So far we've been creating objects individually, but there are times where we want to create many instances of an object quickly. Here's where factory functions come in. A real world factory manufactures multiple copies of an item quickly and on a massive scale. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

Let's say we wanted to create an object to represent monsters in JavaScript. There are many different types of monsters and we could go about making each monster individually but we can also use a factory function to make our lives easier. To achieve this diabolical plan of creating multiple monsters objects, we can use a factory function that has parameters:

```
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
```

In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

```
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

```

Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With monsterFactory in place, we don't have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!

- [ ] Instead of making individual robots like we've been doing, let's make a factory function to make robots as we please!

Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter.

Then add a method named beep without a parameter that will log 'Beep Boop' to the console.

- [ ] Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.

- [ ] Let's now check what tinCan can do! Call .beep() on tinCan.

You should see 'Beep Boop' printed to the console which means the factory function produced a robot object! Play around with tinCan to check the other properties!

### Property Value Shorthand

ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.

In the previous exercise, we created a factory function that helped us create objects. We had to assign each property a key and value even though the key name was the same as the parameter name we assigned to it. To remind ourselves, here's a truncated version of the factory function:

```
const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
};
```

Imagine if we had to include more properties, that process would quickly become tedious! But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes. The example below works exactly like the example above:

```
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
```

Notice that we don't have to repeat ourselves for property assignments

- [ ] Copy and paste the code below into your app.js file, 

```
function robotFactory(model, mobile){
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
```

- [ ] Use the property value shorthand and refactor the factory function

### Destructured Assignment

We often want to extract key-value pairs from objects and save them as properties. Take for example the following object:

```
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
```

If we wanted to extract the residence property as a variable, we could using the following code:

```
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania'
```

However, we can also take advantage of a destructuring technique called destructured assignment to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object's key that is wrapped in curly braces { } and assign to it the object. Take a look at the example below:

```
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
```
Look back at the vampire object's properties in the first code example. Then, in the example above, we declare a new variable residence that extracts the value of the residence property of vampire. When we log the value of residence to the console, 'Transylvania' is printed.

We can even use destructured assignment to grab nested properties of an object:

```
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
```
- [ ] Copy and paste the code below into your app.js file, 

```
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

```

- [ ] Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot.

If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.

- [ ] Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality.

Take advantage of this shortcut and call the .beep() method on functionality.

### Built-in Object Methods

In the previous exercises we've been creating instances of objects that have their own methods. But, we can also take advantage of built-in methods for Objects!

For example, we have access to object instance methods like: .hasOwnProperty(), .valueOf(), and many more! Practice your documentation reading skills and check out: [MDN's object instance documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods).

There are also useful Object class methods such as Object.assign(), Object.entries(), and Object.keys() just to name a few. For a comprehensive list, browse: [MDN's object instance documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor).

Let's get acquainted with some of these methods and their documentation.

Note: You will see errors as you work through this exercise, but by the end the errors will be fixed!

- [ ] Copy and paste the code below into your app.js file, 

```
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys();

console.log(robotKeys);

// Declare robotEntries below this line:


console.log(robotEntries);

// Declare newRobot below this line:


console.log(newRobot);
```

- [ ] In the code above there is an object, robot. We'd like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys. However, there's something missing in the method call.

Find out what we have to include by reading [MDN's Object.keys() documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).

- [ ] Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object.

Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries().

To find how to use Object.entries(), read the [documentation at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries).

- Now what if we want another object that has the properties of robot but with a few additional properties. Object.assign() sounds like a great method to use, but like the previous examples we should check [Object.assign() documentation at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing the robot object!

### Meal Maker

As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

In this project, you'll use JavaScript to randomly create a three-course meal based on what is available on a menu. We'll keep running it until we're satisfied with the generated meal!

- [ ] Start by creating an empty menu object.

- [ ] Add a _courses property to your menu object and set its value to an empty object. This property will ultimately contain a mapping between each course and the dishes available to order in that course.

- [ ] Create three properties inside the _courses object called appetizers, mains, and desserts. Each one of these should initialize to an empty array.

- [ ] Create getter and setter methods for the appetizers, mains, and desserts properties.

- [ ] Inside your menu object, create an empty getter method for the _courses property.

- [ ] Inside the courses getter method, return an object that contains key/value pairs for appetizers, mains, and desserts.

- [ ] Inside the menu object, we are going to create a method called .addDishToCourse() which will be used to add a new dish to the specified course on the menu.

The method should take in three parameters: the courseName, the dishName , and the dishPrice.

- [ ] The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.

The method should then push this dish object into the appropriate array in your menu's _courses object based on what courseName was passed in.

- [ ] Now, we're going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.

Create a method inside the menu object called .getRandomDishFromCourse(). It will take in one parameter which is the courseName.

- [ ] There are a few steps in getting the .getRandomDishFromCourse() to work.

1. Retrieve the array of the given course's dishes from the menu's _courses object and store in a variable called dishes.
2. Generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array)
3. Round that generated number to a whole number by using Math.floor() on the result.
4. Return the dish located at that index in dishes.

- [ ] Now that we have a way to get a random dish from a course, we can create a .generateRandomMeal() function which will automatically generate a three-course meal for us. The function doesn't need to take any parameters.

1. The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an appetizers string to it.
2. Create a main variable and dessert variable the same way you created the appetizer variable, but make sure to pass in the right course type.
3. Calculates the total price and returns a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.

- [ ] Now that we've finished our menu, object, let's use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).

- [ ] Once your menu has items inside it, generate a meal by using the .generateRandomMeal() function on your menu, and save it to a variable called meal. Lastly, print out your meal variable to see what meal was generated for you.

### Get credit for this assignment

- [ ] Once you have completed all of the above, have Ms. Pluska mark this assignment complete. 

