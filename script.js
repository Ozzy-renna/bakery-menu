const now = new Date();
const hour = now.getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning! Welcome to The Peachy Crust Bakery.";
} else if (hour < 18) {
  greeting = "Good afternoon! Fresh treats await you at Peachy Crust Bakery.";
} else {
  greeting = "Good evening! End your day sweetly at The Peachy Crust Bakery.";
}
document.getElementById("greeting").innerText = greeting;

