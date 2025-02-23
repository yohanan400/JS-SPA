// contain all useres.
// Alternatively you can use the localStorage.
let users = [];

//create default admin user
let adminUser = {
    username: "admin",
    email: "admin@admin.co.il",
    password: "admin"
}

// push admin user into users list
users.push(adminUser);

// sign-out page demostrate also the main page
signOutHnadler();

// sign-out page
function signOutHnadler() {
    const container = document.getElementById("container");
    container.innerHTML = "<h1> Welcome to ower site! <br/> you are not signed in! </h1>";

    const manuBar = document.getElementById("manu-bar");
    manuBar.style.visibility = "visible";
}
