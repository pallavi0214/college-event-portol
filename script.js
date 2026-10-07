const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const eventName = document.getElementById("event").value;

        document.getElementById("message").textContent =
            `Thank you ${name}! You have registered for ${eventName}.`;

        form.reset();
    });
}