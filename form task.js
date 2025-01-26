function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        degree: document.getElementById("degree").value,
        engineering: document.getElementById("engineering").value,
        hobbies: Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(el => el.value).join(", "),
        address: document.getElementById("address").value,
    };

    const serviceID = "service_wobceam";
    const templateID = "template_uwd80gw";

    emailjs.send(serviceID, templateID, params)
        .then(response => {
            alert("Your message was sent successfully!");
            document.getElementById("detailsForm").reset();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to send your message. Please try again later.");
        });
}