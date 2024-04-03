document.addEventListener('DOMContentLoaded', function () {
    // Get the display input element
    var displayInput = document.getElementById('displaynumber');

    // Variable to store the user's number
    var userNumber = '';

    // Get all the buttons
    var buttons = document.querySelectorAll('#buttons button');
    
    // Add click event listeners to all the buttons
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Check if the clicked button is the "X" button
            if (this.textContent === "X") {
                // Remove the last character from the user's input
                userNumber = userNumber.slice(0, -1);
            } else {
                // Get the number from the clicked button
                var number = this.textContent;
                
                // Append the number to the user's number
                userNumber += number;
            }
    
            // Display the user's number in the input box
            displayInput.value = userNumber;
        });
    });    

    // Get the submit button
    var submitButton = document.querySelector('#submit button');

    // Add click event listener to the submit button
    submitButton.addEventListener('click', function () {
        // Retrieve the user's name from localStorage
        var userName = localStorage.getItem('userName');
        
        // Save the user's number with their name
        localStorage.setItem(userName, userNumber);

        var phoneNumber = localStorage.getItem('userNumber');

        console.log('User number:', userNumber);
        console.log('User name:', userName);

        // Optionally, you can reset the user's number and clear the input box
        userNumber = '';
        displayInput.value = '';
        
        // Optionally, you can redirect the user to another page after saving the number
        window.location.href = "last.html";
    });
});

// Functions for other buttons
function getName() {
    var inputBox = document.getElementById("name").value;
    localStorage.setItem("userName", inputBox);
    window.location.href = "second.html";
}

function yes() {
    window.location.href = "third.html";
}

function no() {
    window.location.href = "meme.html";
}
