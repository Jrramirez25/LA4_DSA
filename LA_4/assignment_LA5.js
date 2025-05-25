// Hash table to store customers
let customerHashTable = {};

// Hash function to generate a unique key for each customer
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % 10; // Simple hash function that returns a number between 0-9
}

// Function to add a customer to the hash table
function addCustomer(name) {
    const key = hashFunction(name);
    // Handle collision by checking if the key already exists
    if (!customerHashTable[key]) {
        customerHashTable[key] = [];
    }
    customerHashTable[key].push(name);
    alert(`${name} has been added to the queue. Your number is ${Object.keys(customerHashTable).length}.`);
}

// Function to service a customer
function serviceCustomer(number) {
    const keys = Object.keys(customerHashTable);
    if (number > 0 && number <= keys.length) {
        const key = keys[number - 1];
        const customerName = customerHashTable[key].shift(); // Remove the first customer from the list at that key
        if (customerHashTable[key].length === 0) {
            delete customerHashTable[key]; // Remove the key if no customers are left
        }
        alert(`Serving customer: ${customerName}`);
        displayHashTable();
    } else {
        alert("Invalid number. Please enter a valid customer number.");
    }
}

// Function to display the current hash table
function displayHashTable() {
    console.log("Current hash table:");
    for (const key in customerHashTable) {
        console.log(`Key ${key}: ${customerHashTable[key].join(", ")}`);
    }
}

// Main program
function main() {
    // Predefined customers
    const predefinedCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
    
    // Add predefined customers to the hash table
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