// JavaScript Challenges Placeholder
document.addEventListener('DOMContentLoaded', function () {
    // Challenge 1: Declare a variable and assign it a string value
    // Your code here
    var firstName = 'name'; // old way to do things
    let lastName = 'lastName'; // can change
    const fullName = 'name lastName'; // constant variable, does not change
    // Challenge 2: Create a function that logs a message to the console
    // Your code here
    let showMessage = () => console.log('this is a message from the console!')
    let showMessageAgain = () => {
        showMessage();
        showMessage();
    }
    //arrow functions have implicit return
    // if you are just doing one thing, you dont need the curly braces or 'return'

    function showOtherMessage (name) {
        return console.log(`this is another message from ${name}`)
    }

    // Challenge 3: Call the function created in Challenge 2
    // Your code here
    showMessage();
    showMessageAgain()
    showOtherMessage('Bekah');

    // Challenge 4: Select an element by its ID and update its content
    // Your code here
    let heading = document.getElementById('heading')
    heading.innerText = 'This is a heading!'

    // Challenge 5: Add an event listener to the button on your page that triggers a an alert with a welcome message using the inputted name.
    // Your code here
    let nameBox = document.getElementById('fname');
    let button = document.querySelector('button');
    button.addEventListener('click', function(event) {
        event.preventDefault()
        console.log(nameBox.value)
        console.log(event.target.value)
    })


    // Challenge 6: Use event.target to access the clicked element
    // Your code here

    // Challenge 7: Update the content of an element using .innerHTML
    // Your code here

    // Challenge 8: Update the text content of an element using .textContent or .innerText
    // Your code here

    // Challenge 9: Use .querySelector to select an element by CSS selector
    // Your code here

    // Challenge 10: Use .querySelectorAll to select multiple elements by CSS selector
    // Your code here

    // Challenge 11: Use .forEach to iterate over an array
    // Your code here

    // Challenge 12: Find the index of an item in an array using .findIndex
    // Your code here

    // Challenge 13: Use the assignment operator to update a variable's value
    // Your code here

    // Challenge 14: Use the equality operator (== or ===) to compare values
    // Your code here

    // Challenge 15: Use logical AND (&&) to combine two conditions
    // Your code here

    // Challenge 16: Use the ternary operator for a conditional statement
    // Your code here

    // Challenge 17: Use string interpolation or template literals
    // Your code here

    // Challenge 18: Use backticks for template literals
    // Your code here

    // Challenge 19: Convert an iterable to an array using Array.from
    // Your code here

    // Challenge 20: Access an item in an array using bracket notation
    // Your code here

    // Challenge 21: Load this JS file on your HTML page.
    // using the script tag and loading this file
    // <script src='./week1.js'></script>

    // Challenge 22: Move your CSS styles into an external file and load it on your HTML page.
});
