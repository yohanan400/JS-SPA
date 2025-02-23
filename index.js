let users = [];

let adminUser = {
    username: "admin",
    email: "admin@admin.co.il",
    password: "admin"
}

users.push(adminUser);

signOutHnadler();

function signInManuHandler() {

    const container = document.getElementById("container");
    const signInTemplate = document.getElementById("sign-in-template");
    const signInClone = signInTemplate.content.cloneNode(true); // true for copy decendences too.
    
    container.innerHTML = '';
    container.appendChild(signInClone);
}

function signInButtonHandler() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    const user = users.find(x => x.username === username.value);

    if (user) {
        if (password.value === user.password) {
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

function signUpManuHandler() {
    const container = document.getElementById("container");
    const signUpTemplate = document.getElementById("sign-up-template");
    const signUpClone = signUpTemplate.content.cloneNode(true); // true for copy decendences too.

    container.innerHTML = '';
    container.appendChild(signUpClone);
}

function signUpSubmitHandler() {
    const username = document.getElementById("uname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("psw").value;
    const rePassword = document.getElementById("re-password").value;


    if (password === rePassword) {
        let newUser = {
            username: username,
            email: email,
            password: password
        };

        users.push(newUser);
        alert("You are redirecting to sign-in page!");
        signInManuHandler();
    } else {
        alert("Password don't match! please try again.");
    }
}

function signOutHnadler() {
    const container = document.getElementById("container");

    container.innerHTML = "<h1> Welcome to ower site! <br/> you are not signed in! </h1>";
}
