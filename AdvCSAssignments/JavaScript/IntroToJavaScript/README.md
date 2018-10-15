# Introduction to JavaScript

JavaScript is primarily known as the language of most modern web browsers, and its early quirks gave it a bit of a bad reputation. However, the language continued to evolve and improve. JavaScript is a powerful, flexible, and fast programming language now being used for increasingly complex web development and beyond!

In this lesson, you will learn introductory coding concepts including data types and built-in objects— essential knowledge for all aspiring developers.

## Your Tasks

### Getting Started

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





4. Still inside of the .grid rule set, set grid-template-columns to six equal sections using the fr measurement.  When you run your code, don't panic! The CSS is just trying to organize our content based off of our instructions. In a later section, you will  learn how to style the <div>s so they take up the necessary column widths.

5. Refactor the previous exercise's code using the repeat() function. After that, refactor the grid-template-rows and grid-templates-columns code using the grid-template property. 

6. Now, let's fix that broken page layout. Using grid-column-start and grid-column-end, style the <header> element so that it extends across all of the columns. Now, do the same for .banner, .about, and footer.

7. Use grid-column to cause .address to span the first two columns, .hours to span the 3rd and 4th, and .call-us to span the 5th and 6th.

8. In the .one and .two rule sets, use grid-column to have each <div> span three columns in the 5th row.

9. Now, give your content some wiggle room. Return to the .grid rule set, add a grid-column-gap property, and set its value to 20 pixels. Notice which parts of the page have changed.

10. Now, lay out the mobile version. For this grid, we want all of the content to occupy one column. Within the @media rule, inside the .grid rule set, add the grid-template-columns property and set its value to 100%. 

11. We also need to specify additional rows. Add grid-template-rows and have its value be the same as the desktop version. Remember that each value is equal to a row.  To include more rows, split the fourth value into three equal values. Use the same process to turn the fifth row into two new rows. Try to practice your refactoring on this one!

12. Use grid-row to define the starting row of the information blocks (.address, .hours, and .call-us) and testimonial blocks (.one and .two), and how many rows they will span.

13. We also have to specify that these blocks now only take up one column of space. Add grid-column: 1 / span 1; to their rule sets.

14.  Rather than have gaps between columns, we now want to have gaps between the rows.  Return to the .grid rule set and add  the grid-row-gap property so that there is a 20 pixel gap between the rows.

15. But what if we don''t want there to be a gap between all of our rows? We can avoid the grid-row-gap rule by using negative margins. In header, .banner, and .about, set margin-bottom to -20px. For the footer, set margin-top to -20px.







