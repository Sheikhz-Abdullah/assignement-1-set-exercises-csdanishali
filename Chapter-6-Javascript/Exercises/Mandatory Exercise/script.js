// Function to calculate the total cost of petrol
function calculateTotal() {
    
    // Get the value of cost per liter and liters purchased
    const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    const liters = parseFloat(document.getElementById('litersPurchased').value);
  
    // Calculate total cost
    const total = costPerLiter * liters;
  
    // Display result with two decimal places
    document.getElementById('totalCost').textContent = `Total: $${total.toFixed(2)}`;
  }  