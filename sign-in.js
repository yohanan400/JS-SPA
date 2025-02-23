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

            const manuBar = document.getElementById("manu-bar");
            manuBar.style.visibility = "hidden";
        }
        else {
            alert("Wrong, try again!");
        }
    }
    else {
        alert("Wrong, try again!");
    }

}
