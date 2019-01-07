# The Script Element

HTML defines the structure of a web page by using page elements as the building blocks. However, HTML by itself can not produce web page interactivity, that's where JavaScript comes in.

Web programmers use JavaScript to make web pages dynamic and interactive. This powerful scripting language is encapsulated in its own HTML element: the <script> element. You can think of this <script> element as the door to JavaScript for HTML. This lesson will dig deeper into what the <script> element can do for your websites and best practices on how and where to insert JavaScript in your HTML files.

## Your Tasks

### Getting Started

This assignment will follow the same workflow as the last assignment.  You will begin by making a new assignment directory within which you will create an index.html file and a app.js file.  

- [ ] First create a new folder on your computer called TheScriptElement.  Then, open the folder in VS Code.

- [ ] Add an index.html file to this folder,  

### The <script> tag

The <script> element allows you to add JavaScript code inside an HTML file. Below, the <script> element embeds valid JavaScript code:

```
<h1>This is an embedded JS example</h1>
<script>
  function Hello()
    {
    alert ( "Hello World");
    }
</script>
```

Frankly, without the <script> tag, websites would be unclickable and a bit boring.

The <script> element, like most elements in HTML, has an opening and closing angle bracket. The closing tag marks the end of the content inside of the <script> element. Just like the <style> tag used to embed CSS code, you use the <script> tag to embed valid JavaScript code.

- [ ] Download and save the following images into your assignment directory, 

	- [https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptInteractive/TheScriptElement/burger.png](https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptInteractive/TheScriptElement/burger.png)

	- [https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptInteractive/TheScriptElement/normal.jpg](https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptInteractive/TheScriptElement/normal.jpg)

- [ ] Copy and paste the following code into index.html page, 

```
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="style.css">
</head>
  
<body>
	<section class = "container">
  	<img src = "normal.jpg" id= "myImage">
  	<p onclick="food()">Click Me</p>
	</section>
</body>
  
<script>
  
</script>
  
</html>
```

- [ ] Copy this JavaScript code and paste it between the opening and closing <script> tags.

```
function food() {
      var image = document.getElementById('myImage');
      if(image.src.match("normal")) {
          image.src = "burger.png";
      } else {
          image.src = "normal.jpg";
      }
  } 
 
```
- [ ] Save everything, then open your index.html page in your browswer.  See what happens when you click the "click me" text

### The src attribute

Since you know how to use a <script> element with embedded code, let's talk about linking code. Linking code is preferable because of a programming concept called Separation of Concerns (SoC). Instead of having messy code that is all in the same file, web developers separate their code into different files, making each “concern” easier to understand and more convenient when changes must be made.

For this exercise, instead of writing JavaScript in our HTML file, we are going to write it in its own file, and then reference this code with a file path name. We will do this using an attribute that may jog your memory: the src attribute!

If this seems familiar, that's because you may have been linking to external files with the <img> and <link> elements. The attribute is exactly the same, but now its value specifies the location of your script file.

If the file is in the same project folder, the src value will be a relative path name. Below is an example of a relative pathname to a JavaScript file.

```
<script src=/exampleScript.js> </script>
```

If you must refer to JavaScript hosted externally, or in a CDN, you can also link to that file location

- [ ] Add an empty <script> element to index.html.

```
<script></script>
```

- [ ] Add an empty src attribute to the opening tag of your <script> element

```
<script src=" "> </script>
```

- [ ] Create a new file called script.js and save this to your assignment directory.  Copy and paste the code below into this file. 

```
function blooming() {
      var image = document.getElementById('myImage');
      if(image.src.match("normal")) {
          image.src = "burger.png";
      } else {
          image.src = "normal.jpg";
      }
  }
```

- [ ] Make the src reference point to the script.js file you just created.

- [ ] Save everything and reload your index.html file... everything should as before. 

### How are scripts loaded?

A quick recap: the <script> element allows HTML files to load and execute JavaScript. The JavaScript can either go embedded inside of the <script> tag or the script tag can reference an external file. Before we dive deeper, let’s take a moment to talk about how browsers parse HTML files into web pages. This informs where to include a <script> element inside your HTML file.

Browsers come equipped with HTML parsers that help browsers render the elements accordingly. Elements, including the <script> element, are by default, parsed in the order they appear in the HTML file. When the HTML parser encounters a <script> element, it loads the script then executes its contents before parsing the rest of the HTML. The two main points to note here are that:

The HTML parser does NOT process the next element in the HTML file until it loads and executes the <script> element, thus leading to a delay in load time and resulting in a poor user experience.
Additionally, scripts are loaded sequentially, so if one script depends on another script, they should be placed in that very order inside the HTML file.

- [ ] Click on the link below to open a GIF

	- [https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptInteractive/TheScriptElement/ScriptNoAttribute.gif](https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptInteractive/TheScriptElement/ScriptNoAttribute.gif)

Notice, the GIF displays two scripts being loaded. The first script makes a Watering Can appear, the second script makes a Flower appear. This shows how scripts are loaded sequentially, and how they pause the HTML parser, which is why "Blooming" appears at the end.

### Defer attribute

When the HTML parser comes across a <script> element, it stops to load its content. Once loaded, the JavaScript code is executed and the HTML parser proceeds to parse the next element in the file. This can result in a slow load time for your website. HTML4 introduced the defer and async attributes of the <script> element to address the user wait-time in the website based on different scenarios.

The defer attribute specifies scripts should be executed after the HTML file is completely parsed. When the HTML parser encounters a <script> element with the defer attribute, it loads the script but defers the actual execution of the JavaScript until after it finishes parsing the rest of the elements in the HTML file.

Here is an example of the defer tag:

```
<script src="example.js" defer> </script>
```

When is defer useful?

When a script contains functionality that requires interaction with the DOM, the defer attribute is the way to go. This way, it ensures that the entire HTML file has been parsed before the script is executed.

- [ ] Add the following files to your main assignment directory, 

	- [https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptInteractive/TheScriptElement/turnBlue.js](https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptInteractive/TheScriptElement/turnBlue.js)
	- [https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptInteractive/TheScriptElement/turnYellow.js](https://github.com/hpluska/TimberlineCS/blob/master/AdvCSAssignments/JavaScriptInteractive/TheScriptElement/turnYellow.js)

- [ ] Cut and paste the following code into your index.html file, 

```
<!DOCTYPE html> 
<html>
 
  <head>
    <link rel="stylesheet" href="style.css">
    <script id="blue" src="turnBlue.js"></script>
  <script id="yellow" src="turnYellow.js"></script>
  </head>
  
  <body>		
   	<p class="centered" id="logo">Code is Lit</p>
  </body>
</html>
```
- [ ] We want the "Code is Lit" to be blue! Add a defer attribute to the turnBlue.js script to make it the last script that is downloaded and executed.

### Async attribute

The async attribute loads and executes the script asynchronously with the rest of the webpage. This means that, similar to the defer attribute, the HTML parser will continue parsing the rest of the HTML as the script is downloaded in the background. However, with the async flag, the script will not wait until the entire page is parsed: it will execute immediately after it has been downloaded. Here is an example of the async tag:

```
<script src="example.js" async> </script>
```

When is it useful?

Async is useful for scripts that are independent of other scripts in order to function accordingly. Thus, if it does not matter exactly at which point the script file is executed, asynchronous loading is the most suitable option as it optimizes web page load time.

- [ ] Each script tag restyles the "Code is lit" text. 		- Add the async attribute to the turnBlue, then refresh.
	-Add the async attribute to the turnYellow, then refresh. 
	-Add the async attribut to both the turnBlue and turnYellow, then refresh. 

### Get credit for this assignment

- [ ] Once you have completed all of the above, have Ms. Pluska mark this assignment complete. 












