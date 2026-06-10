// Ticket Booking System - script.js

function bookTicket() {
    const ticketType = document.getElementById("ticketType").value;
    const fromLocation = document.getElementById("fromLocation").value;
    const toLocation = document.getElementById("toLocation").value;
    const travelDate = document.getElementById("travelDate").value;
    const passengers = document.getElementById("passengers").value;

    if (
        ticketType === "" ||
        fromLocation === "" ||
        toLocation === "" ||
        travelDate === "" ||
        passengers === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    const bookingId =
        "TB" + Math.floor(Math.random() * 1000000);

    document.getElementById("result").innerHTML = `
        <h3>Booking Confirmed ✅</h3>
        <p><strong>Booking ID:</strong> ${bookingId}</p>
        <p><strong>Ticket Type:</strong> ${ticketType}</p>
        <p><strong>From:</strong> ${fromLocation}</p>
        <p><strong>To:</strong> ${toLocation}</p>
        <p><strong>Travel Date:</strong> ${travelDate}</p>
        <p><strong>Number of Tickets:</strong> ${passengers}</p>
        <p><strong>Status:</strong> Confirmed</p>
    `;

    document.getElementById("ticketForm").reset();
}

// Set minimum date to today
window.onload = function () {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("travelDate").setAttribute("min", today);
};
