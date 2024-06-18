const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Received submission:', { name, email, message });

    // Handle data storage (e.g., save to database)
    res.send('Form submission received');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        form.reset();
    })
    .catch(error => console.error('Error submitting form:', error));
});
