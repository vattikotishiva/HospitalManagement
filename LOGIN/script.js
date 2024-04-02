 // Define an array of user credentials
 var usersData = [
    { username: "admin", password: "password1" },
    { username: "shiva", password: "123456" },
    { username: "santhosh", password: "123456" },
    // Add more user credentials as needed
];

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password from form input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    sessionStorage.setItem('username',username)

    // Check each set of user credentials
    var isAuthenticated = usersData.some(function(user) {
        return user.username === username && user.password === password;
    });

    // If any of the user credentials match, redirect to home page
    if (isAuthenticated) {
        window.location.href = "/Admin.html";
    } else {
        // Display error message or perform other actions for failed login attempt
        alert("Invalid username or password. Please try again.");
    }
});
