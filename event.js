class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }
  addAvailableTickets(ticketName, price) {
    this.ticketName = ticketName;
    this.price = price;
    this.availableTickets.push(ticketName, price);
    //console.log(this.availableTickets);
  }
  allTickets(){
let holder = "All tickets";
for(let i = 0; i < this.availableTickets.length; i++) {
  holder += `${i+1} ${this.availableTickets[i][0]} ($${this.availableTickets[i][1]})`;
}
return holder;
}
}


// The below statement creates an object.
let eventObj1 = new Event(
  'KLOS Golden Gala',
  'An evening with hollywood vampires'
);

let eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
let eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');
let eventArray = new Array();


// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
// in order to check whether the elements are pushed, use console.log
console.log(eventArray);

eventObj1.addAvailableTickets("General Admission", 25);
eventObj1.addAvailableTickets("V.I.P", 35);

console.log(eventObj1.availableTickets);
document.addEventListener('DOMContentLoaded', () => {
  // Handler when the DOM is fully loaded
  let html = '';
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description}`;
  });
  document.querySelector('#event').innerHTML = html;
});

class TicketType {
  constructor(name, description) {
    this.name = name;
    this.price = price;
  }
}
