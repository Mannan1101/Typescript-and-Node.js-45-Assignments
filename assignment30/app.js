//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing
// code that will print a greeting to each user after they log in to a website. Loop through the array,
// and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var admin = ['elen', 'zurrab', 'admin', 'hooria', 'noor'];
for (var _i = 0, admin_1 = admin; _i < admin_1.length; _i++) {
    var value = admin_1[_i];
    if (value === 'admin') {
        console.log("Hello ".concat(value, ", would you like to see a status report? "));
    }
    else {
        console.log("Hello ".concat(value, ", Thank You For Logging Again \n"));
    }
}
