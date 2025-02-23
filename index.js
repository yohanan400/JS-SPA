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

// display sing-in page
function signInManuHandler() {

    // get the container div.
    const container = document.getElementById("container");
    // get the sign-in template
    const signInTemplate = document.getElementById("sign-in-template");
    //clone the sign-in template content
    const signInClone = signInTemplate.content.cloneNode(true); // true for copy decendences too.

    container.innerHTML = ''; //reset page content
    container.appendChild(signInClone); // add new content (the cloned sign-in template content).
}

// sign-in logic
function signInButtonHandler() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(x => x.username === username);

    if (user) {
        if (password === user.password) {
            alert("Welcome ", username.innerText, " !");

            const container = document.getElementById("container");
            const mainPageTamplate = document.getElementById("main-page-template");
            const mianPageClone = mainPageTamplate.content.cloneNode(true);

            container.innerHTML = '';
            container.appendChild(mianPageClone);
        }
        else {
            alert("Wrong, try again!");
        }
    }
    else {
        alert("Wrong, try again!");
    }

}

// display sign-up page
function signUpManuHandler() {
    const container = document.getElementById("container");
    const signUpTemplate = document.getElementById("sign-up-template");
    const signUpClone = signUpTemplate.content.cloneNode(true); // true for copy decendences too.

    container.innerHTML = '';
    container.appendChild(signUpClone);
}

// sign-up logic
function signUpSubmitHandler() {
    const username = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("psw").value;
    const rePassword = document.getElementById("re-password").value;


    if (password === rePassword) {

        // cretae new user
        let newUser = {
            username: username,
            email: email,
            password: password
        };

        // add the new user into users array
        users.push(newUser);

        alert("You are redirecting to sign-in page!");
        // display the sign-in page
        signInManuHandler();

    } else {
        alert("Password don't match! please try again.");
    }
}

// sign-out page
function signOutHnadler() {
    const container = document.getElementById("container");

    container.innerHTML = "<h1> Welcome to ower site! <br/> you are not signed in! </h1>";
}
