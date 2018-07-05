# Testing FeedReader app using Jasmine
=======================================

## Objective of the exercise:

Using Jasmine, create test scenario's that will test the functions of the provided FeedReader app.

All test should return a positive (Green) Test Result.  If an error is detected in the app, the Jasmine Test should return a negative (Red) Test Result.

These are the files include in the app and for Jasmine testing:
"index.HTML" for the HTML code to define the layout of the FeedReader screen
"css" folder with 3 CSS Style files: icomoon.css - for FONT declarations; normalize.css for handling multiple type screen and devices; style.css for styling the FeedReader HTML
"fonts" folder that contains the fonts used by app
"js" folder that contains the JavaScript to handle the functionality of the app

Lastly there is a "jasmine" folder that contains the Jasmine library and spec folders.   The "spec" folder contains a file feedreader.js.  This file contains all the test cases Jasmine will use for testing the functionality of the FeedReader app.



## How to run test:

Source code for the game is maintain in GitHub.  To access source code go to:
<https://github.com/KWPressley/Feedreader_Project>

All code can be downloaded to your PC.  Save all files in one directory, **however maintain the directory structure as stored on GitHub**.  To start the test execute app using index.html.

Alternatively, the source code does not have to be down loaded.  The game can be run directly from GitHub.  To run the game from GitHub click on this link:
<https://kwpressley.github.io/Freereader_Project/>


## Review the results of the Jasmine tests:

The FeedReader app will execute and render the reader page.   Jasmine will add the results from the defined test to the bottom of the rendered page.  Scroll to the bottom of the page and look for hopefully all Green (positive) results.   Any Red results means the test failed and the necessary files must be corrected to change the Red result to Green results.

### Required for executing Game
There is no special software required.  All you need is a modern browser that can support ES6 JavaScript.

The following must be included in the index.html file in the <head> section:
<link rel="stylesheet" href="jasmine/lib/jasmine-2.1.2/jasmine.css">

<script src="jasmine/lib/jasmine-2.1.2/jasmine.js"></script>
<script src="jasmine/lib/jasmine-2.1.2/jasmine-html.js"></script>
<script src="jasmine/lib/jasmine-2.1.2/boot.js"></script>

In the <body> section the following Jasmine script must be included:
<script src="jasmine/spec/feedreader.js"></script>

**Note:  these Jasmine script files have already been added to the index.html file.** 

:+1:
#### Acknowledgements
I would like to acknowledge the many people who inspired and coached me in completing this project:

* UDACITY Training classes
* UDACITY Providing the starter files

* The thousands of people on the SLACK channels, that sometimes distracts me from working on the Arcade_Game_Project

* Lastly, my wife for showing patience while I worked _**MANY**_ hours on this project!
