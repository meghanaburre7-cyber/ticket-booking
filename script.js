function bookTicket() {
    let movie = document.getElementById("movie").value;
    let tickets = document.getElementById("tickets").value;

    if (tickets > 0) {
        document.getElementById("result").innerHTML =
            tickets + " ticket(s) booked for " + movie;
    } else {
        document.getElementById("result").innerHTML =
            "Please enter a valid number of tickets.";
    }
}
