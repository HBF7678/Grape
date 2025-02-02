const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/database');
const schedule = require('node-schedule');

// Connect to Firebase
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function to schedule a message
const scheduleMessage = (date, message, recipient) => {
    schedule.scheduleJob(date, () => {
        // Logic to send the message (implementation needed)
        console.log(`Sending message to ${recipient}: ${message}`);
    });
};

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Alert Scheduler API');
});

// Import routes
const userRoutes = require('./routes/index');
app.use('/api', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
