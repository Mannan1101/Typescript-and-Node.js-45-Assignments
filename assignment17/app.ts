//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
//invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
//invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
// actually have an empty list at the end of your program.


let guestList :string[]= ["Saman", "Marium", "Amna"];
let str1:string = " You are Invited For Tomorrow's Event.";
let i = 0;
while (i < guestList.length) {
    console.log(guestList[i].concat(str1));
    i++;
}

//print statement to removed person
console.log(`${guestList[1]} can't attent the event.`);

//removing the person
let newList:string[] = guestList.splice(1, 1, "Hooria");

// Invites for new list
let g = 0;
while (g < guestList.length) {
    console.log(guestList[g].concat(str1));
    g++;
}



console.log("I found a bigger table so more guests can join us");
//start of the array
guestList.unshift("Ambreen");

let midInsertion: number = Math.floor(guestList.length) / 2;
guestList.splice(midInsertion, 0, "Noor");// middle of the array

for (let value of guestList) {
    console.log(value.concat(str1));// new set of invitation
}


//announcment for inviting two peoples
console.log("Badly two persons can be invited for the dinner with  me");



// removing guests one by one  with a message for each
while (guestList.length > 2) {

    let removedGuest :any= guestList.pop();
    console.log(`Hey ${removedGuest} We cant dinner together this time. But next time InshaAllah`);
}


// message for remaining guest
guestList.forEach(remaining => console.log(`Hey ${remaining} you are still invited for dinner`)
)

// Emptying my Array
 guestList.pop();
 guestList.pop();

 console.log(guestList)