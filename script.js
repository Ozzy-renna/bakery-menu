/*const greeting=document.getElementById("greeting");
const hour=new Date().getHours();
  greeting.textContent = hour < 12
      ? "Good Morning! Fresh pastries are ready."//quick if else statement
      : "Good Afternoon! Treat yourself to something sweet.";*/
      // Get the current hour
const now = new Date();
const hour = now.getHours();
let greeting;

// Decide greeting based on time
if (hour < 12) {
  greeting = "Good morning! Welcome to The Peachy Crust Bakery.";
} else if (hour < 18) {
  greeting = "Good afternoon! Fresh treats await you at Peachy Crust Bakery.";
} else {
  greeting = "Good evening! End your day sweetly at The Peachy Crust Bakery.";
}

// Display greeting in an element with id="greeting"
document.getElementById("greeting").innerText = greeting;

