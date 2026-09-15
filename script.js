


//Utgångsläge 

let eventName = "Aurora Live";
eventName = "Nord Glow"; // ändrat const till let, eftersom värdet ska kunna ändras

function totalMinutes(hours, minutes) {
  return hours * 60 + minutes; // lagt till return för att funktionen ska returnera resultatet
}

console.log(totalMinutes(1, 30));

const cities = ["Malmö", "Göteborg", "Umeå"];
console.log(cities[2]); // skrivit index 2 för att få sista elementet
console.log(cities.length);

const product = { title: "Hörlurar", stock: 4 };
console.log(product.title); // rättat nyckeln från titel till title

if (5 === "5") { //ändrat == till === för strikt jämförelse
  console.log("lösa jämförelsen ljuger");
}else {
  console.log("strikt jämförelse: olika typer");
}

for (const city of cities) {
  console.log(city);
}
