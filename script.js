const people = ["Daniel", "Nicolai", "Sebastian", "Caleb", "Eyastu"];
const rooms = ["Stua", "Kjøkken", "Gangen", "Toalett oppe", "Toalett nede"];

// Function to calculate the current week number
function getWeekNumber() {
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 1);
    const diff = today - start;
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.floor(diff / oneWeek);
}

// Function to rotate cleaning duties based on week number
function rotateCleaning() {
    const weekNumber = getWeekNumber();
    let currentIndex = weekNumber % people.length;
    const scheduleDiv = document.getElementById('cleaningSchedule');
    
    scheduleDiv.innerHTML = '';
    
    // Display the schedule for this week, assigning both person and room
    for (let i = 0; i < people.length; i++) {
        let person = people[(currentIndex + i) % people.length];
        let room = rooms[i % rooms.length];  // Assign room based on current index
        let personDiv = document.createElement('div');
        personDiv.className = 'person';
        personDiv.innerText = `${person} - ${room}`;
        scheduleDiv.appendChild(personDiv);
    }
}

// Call the function to display the cleaning schedule
rotateCleaning();
