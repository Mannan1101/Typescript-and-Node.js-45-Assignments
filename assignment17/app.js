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
var guestList = ["Saman", "Marium", "Amna"];
var str1 = " You are Invited For Tomorrow's Event.";
var i = 0;
while (i < guestList.length) {
    console.log(guestList[i].concat(str1));
    i++;
}
//print statement to removed person
console.log("".concat(guestList[1], " can't attent the event."));
//removing the person
var newList = guestList.splice(1, 1, "Hooria");
// Invites for new list
var g = 0;
while (g < guestList.length) {
    console.log(guestList[g].concat(str1));
    g++;
}
console.log("I found a bigger table so more guests can join us");
//start of the array
guestList.unshift("Ambreen");
var midInsertion = Math.floor(guestList.length) / 2;
guestList.splice(midInsertion, 0, "Noor"); // middle of the array
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var value = guestList_1[_i];
    console.log(value.concat(str1)); // new set of invitation
}
//announcment for inviting two peoples
console.log("Badly two persons can be invited for the dinner with  me");
// removing guests one by one  with a message for each
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Hey ".concat(removedGuest, " We cant dinner together this time. But next time InshaAllah"));
}
// message for remaining guest
guestList.forEach(function (remaining) { return console.log("Hey ".concat(remaining, " you are still invited for dinner")); });
// Emptying my Array
guestList.pop();
guestList.pop();
console.log(guestList);
