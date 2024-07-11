function signup() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;

    // Check if any field is empty
    if (!name || !email || !password) {
        alert("Please fill out all fields.");
        return;
    }

    var users = localStorage.getItem("users");

    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }

    var user = {
        name: name,
        email: email,
        password: password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("Name").value = '';
    document.getElementById("Email").value = '';
    document.getElementById("Password").value = '';

    alert('Signup successful!');
    window.location.href = "signin.html";
}
