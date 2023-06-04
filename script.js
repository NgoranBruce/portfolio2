document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Perform any additional validation or data processing here
    
    // Example: Output the form data to the console
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
    
    // Clear the form fields after submission (optional)
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});