# Creating a counter

This page uses a variable that is changed when a button is pressed either increasing or reseting the value. The color of the text is also changed with it being green when ``(count > 0)`` and blue when ``(count == 0)``. 

This page is an application of several key JavaScript concepts:
1. ``document.querySelectorAll()``
2. ``forEach()``
3. ``addEventListener()``
4. ``currentTarget property``
5. ``classList``
6. ``textContent``



## Exercise

First, go to https://(your username).github.io/(repo name)/01_counter/ to see the webpage.

Second, view the code for the increase and reset buttons:
```
if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
```
Third, edit the increase code to create a decrease button in the JavaScript an ``else if()`` would be the best to use.

Fourth, head to index.html and create another button with a new class.

Fith, run the page to confirm it works.

