//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send
// out a new set of invitations. You’ll have to think of someone else to invite.


let guestArr : string[] = ["Ali","Daniyal","Rumaisa"];
let canNotAttend : string = "Rumaisa"

//console.log(canNotAttend + " " "can not attend the dinner.")
let newGuest : string  = "Abdul Mannan"

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
console.log (guestArr)