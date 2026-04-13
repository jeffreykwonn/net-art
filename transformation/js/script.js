var container = document.getElementById("container");
var message = document.getElementById("message");

container.addEventListener("click", function() {
    document.body.classList.toggle("transformed");
    container.classList.toggle("transformed");
    message.classList.toggle("transformed");

    if (container.classList.contains("transformed")) {
        message.textContent = "You broke the internet.";
    } else {
        message.textContent = "Click here for some web magic.";
    }
});