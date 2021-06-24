const days0week = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item form array
console.log(days0week[5]);
console.log(days0week);

// Add one more day to the array
days0week.push("sun");

console.log(days0week);

const player = {
    name: "nico",
    points : 10,
    fat: true,
};

console.log(player);
console.log(player.name);

player.fat= false;
console.log(player);
player.lastname = "kim"
console.log(player);

function sayHello(){
    console.log("Hello my name is ")
};

alert();

sayHello("A");
sayHello("B");
sayHello("C");