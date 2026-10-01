const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentId = document.getElementById("studentId").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("loginMessage");

    // Demo login credentials
    const correctStudentId = "student";
    const correctPassword = "1234";

    if (studentId === "" || password === "") {
        message.textContent = "Please enter your Student ID and Password.";
        message.style.color = "red";
        return;
    }

    if (studentId === correctStudentId && password === correctPassword) {
        message.textContent = "Login successful!";
        message.style.color = "green";

        // Search page will be added later
        setTimeout(function() {
            window.location.href = "search.html";
        }, 1000);

    } else {
        message.textContent = "Invalid Student ID or Password.";
        message.style.color = "red";
    }
});