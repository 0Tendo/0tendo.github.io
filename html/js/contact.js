document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Stop the form from submitting normally

    // Send the form data to the server
    fetch('/contact', {
        method: 'POST',
        body: new FormData(event.target)  // This gets the data from the form
    })
    .then(response => response.text())  // Get the text from the response
    .then(function(text) {
        // Here, 'text' is the response from the server. We'll assume that if the server responds
        // with the text 'success', the message was saved successfully.

        if (text === 'success') {
            // If the message was saved successfully, clear the message box and show a success message.
            document.getElementById('messageBox').value = 'Success! Thanks for leaving me a message!';
        } else {
            // If there was an error, show the error message
            document.getElementById('messageBox').value = ':( There was an error submitting your message. Please try again later.';
        }
    });
});