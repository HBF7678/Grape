class User {
    constructor(email, phoneNumber) {
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.alerts = []; // Array to store alerts
    }

    addAlert(alert) {
        this.alerts.push(alert);
    }
}

module.exports = User;
