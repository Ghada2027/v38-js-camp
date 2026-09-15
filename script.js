const eventName = "Stars Live";

console.log(eventName);
console.log(eventName);

let ticketCount = 0;

console.log(ticketCount);

ticketCount = 10;

console.log(ticketCount);

const isVip = false;

console.log(isVip);

function totalMinutes(hours, minutes) {
  return hours * 60 + minutes;
}
console.log(totalMinutes(2, 15));


const isMember = true;
let shipping= 79;

if (isMember=== true){
    shipping =0;

} else{
    console.log("ordinarie frakt");
}
console.log(shipping);

const cities= ["Malmö","Göteborg","Umeå"];

console.log(cities[0]);
console.log(cities.length);

const product={
    title:"Hörlurar",
    stock:4,
    inStock:true
};
console.log(product.title);
console.log(product.stock);

for(const city of cities){
    console.log(city);
}

const tempC = 12;

if (tempC >= 20) {
  console.log("varmt");
} else if (tempC >= 10) {
  console.log("ljummet");
} else {
  console.log("kallt");
}

const routes = ["Linje 2", "Linje 5", "Linje 8"];
for (const route of routes){
    console.log("Avgår:"+ route);
}

function triple(n) {
  return n * 3;
}
console.log(triple(8));

// const triple = (n) => n * 3;
// samma jobb, annan stavning

const subjects= ["JavaScript","HTML","CSS","Git"];
for (const subject of subjects){
    console.log(subject);
}
const task= {
    title:"JavaScript",
    urgency:2,
    isOpen: true
};
console.log(task.title);
console.log(task.urgency);

function addNumbers(a,b){
    return a+b;
}
console.log(addNumbers(10,5));

if (task.urgency >= 3) {
  console.log("Hög");
} else if (task.urgency >= 2) {
  console.log("Medel");
} else {
  console.log("Låg");
}