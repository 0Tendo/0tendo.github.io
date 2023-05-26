document.getElementById('contactForm').addEventListener('submit', function(evt){
    evt.preventDefault();

    let formData = new FormData(this);

    fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
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