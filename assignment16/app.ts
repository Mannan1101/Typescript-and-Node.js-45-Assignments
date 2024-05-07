//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
// guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your
// list. • Print a new set of invitation messages, one for each person in your list.

let guestArr : string[] = ["Alishba","haseeb","Ali","Hamza"];
let canNotAttend : string = "Ali"
let newGuest : string = "Wajahat"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

guestArr.map((items) =>
console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`));

//part 2 began

let guestbeg : string = "Mouizz"
guestArr.unshift(guestbeg);
console.log(guestArr)

// part 3 Middle

let middleGuest : string = "Fatima"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr)

// part 4 opend
guestArr.push("zeeshan")
console.log(guestArr)

//part 5

guestArr.map((items) => 
    console.log(`Dear ${items}, you are invited in the more people list on dinner`));