# Functions Continued

There is no new content presented in the lesson.  For this lesson you will build fluency in JavaScript fundamentals, by applying the skills you have learned to another mini project.

## Your Tasks

### Getting Started

This assignment will follow the same workflow as the last assignment.  You will begin by making a new assignment directory within which you will create an index.html file and a app.js file.  To view the results of your JavaScipt code, you will be using console.  If you forgot how to do this, refer to the first assignment "Introduction to JavaScript".

- [ ] First create a new folder on your computer called FunctionsContinued.  Then, open the folder in VS Code.

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

### Sleep Debt Calculator

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don't sleep enough, we accumulate sleep debt. In this project we'll calculate if you're getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

- [ ] The first problem to solve is determining how many hours of sleep you got each night of the week.

You can create a function that returns any given night's number of hours of rest. Instead of writing seven different functions (one for each day of the week), let's write one function with a parameter for the day.

Create a function named getSleepHours with a single parameter named day.

- [ ] The function should accept a day as an argument and return the number of hours you slept that night.

For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.

Use an if/else or switch statement to implement this.

- [ ] Test the function by calling it multiple times and printing the results to the console.

You can remove the tests when you know your function works.

- [ ] Now that you've written a function to get the sleep hours for each night, we need to do three things:

- Get the total sleep hours that you actually slept
- Get the ideal sleep hours that you prefer
- Calculate the sleep debt, if any.

To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.

- [ ] Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.

- [ ] To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.

Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.

You'll want to multiply by 7 to get the total hours you prefer per week.

- [ ] Test your two new functions by calling them and printing the results to the console.

You can remove the tests when you know your functions works.

- [ ] Now that you can get the actual sleep hours and the ideal sleep hours, it's time to calculate sleep debt.

Create a function named calculateSleepDebt with no parameters.

Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.

Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.

- [ ] Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:

- If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
- If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
- If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.

- [ ] To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().

- [ ] On the last line of the program, start the program by calling the calculateSleepDebt() function.

### Get credit for this assignment

- [ ] Once you have completed all of the above, have Ms. Pluska mark this assignment complete. 


















