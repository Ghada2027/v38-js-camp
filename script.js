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