function darkMode() {
    document.body.classList.toggle("dark")
}
let btn = document.getElementById("topBtn")

window.onscroll = function () {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

        btn.style.display = "block"

    } else {

        btn.style.display = "none"

    }

}

function topFunction() {

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0

}

function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill all fields");
        return false;
    }
    if (name == "") {
        alert("Please enter your name");
        return false;
    }

    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        return false;
    }


    if (email == "") {
        alert("Please enter your email");
        return false;
    }


    if (!email.match(emailPattern)) {
        alert("Please enter valid email");
        return false;
    }


    if (message == "") {
        alert("Please enter message");
        return false;
    }


    if (message.length < 10) {
        alert("Message must be at least 10 characters");
        return false;
    }

    alert("Message Sent Successfully");
    return true;

}