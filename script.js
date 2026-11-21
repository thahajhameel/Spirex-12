
const form = document.getElementById("appointmentForm");
const confirmation = document.getElementById("confirmation");
const dateInput = document.getElementById("date");

const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localToday;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const department = document.getElementById("department").value;
    const doctor = document.getElementById("doctor").value;
    const date = dateInput.value;
    const time = document.getElementById("time").value;

    confirmation.innerHTML = `
        <h3>🎉 Appointment Request Submitted!</h3>
        <p>Patient: ${name}</p>
        <p>Doctor: ${doctor}</p>
        <p>Department: ${department}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>We will contact you at ${phone} to confirm your appointment.</p>
    `;

    form.reset();
    dateInput.min = localToday;

    confirmation.scrollIntoView({ behavior: "smooth" });
});
