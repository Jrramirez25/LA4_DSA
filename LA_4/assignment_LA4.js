// Initialize the customer queue
let customerQueue = [];

// Function to add a customer to the queue
function addCustomer(name) {
    customerQueue.push(name);
    alert(`${name} has been added to the queue. Your number is ${customerQueue.length}.`);
}

// Function to service a customer
function serviceCustomer(number) {
    if (number > 0 && number <= customerQueue.length) {
        const customerName = customerQueue[number - 1];
        alert(`Serving customer: ${customerName}`);
        customerQueue.splice(number - 1, 1); // Remove the customer from the queue
        displayQueue();
    } else {
        alert("Invalid number. Please enter a valid customer number.");
    }
}

// Function to display the current queue
function displayQueue() {
    if (customerQueue.length === 0) {
        console.log("The queue is currently empty.");
    } else {
        console.log("Current queue:");
        customerQueue.forEach((customer, index) => {
            console.log(`${index + 1}: ${customer}`);
        });
    }
}

// Main program
function main() {
    // Predefined customers
    const predefinedCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
    
    // Add predefined customers to the queue
    predefinedCustomers.forEach(customer => addCustomer(customer));

    // Loop to service customers
    while (true) {
        const numberToService = prompt("Enter the customer number to service (or type 'exit' to quit):");
        
        if (numberToService === 'exit') {
            alert("Exiting the queueing system.");
            break;
        }
        
        const number = parseInt(numberToService);
        serviceCustomer(number);
    }
}

// Start the program
main();