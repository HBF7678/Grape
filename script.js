console.log("Script loaded. Calendar functionality will be implemented here.");

// Function to register a user
async function registerUser(email, phoneNumber) {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phoneNumber }),
    });
    const data = await response.text();
    console.log(data);
}

// Function to login a user
async function loginUser(email, phoneNumber) {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phoneNumber }),
    });
    const data = await response.text();
    console.log(data);
}

// Function to add an alert
async function addAlert(email, alert) {
    const response = await fetch('/api/alerts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, alert }),
    });
    const data = await response.text();
    console.log(data);
}
