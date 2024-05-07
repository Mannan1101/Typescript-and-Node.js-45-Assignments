//Checking Usernames: Do the following to create a program that simulates how websites ensure that 
//everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are
// also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print
// a message that the person will need to enter a new username. If a username has not been used,
// print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
"use strict";
// Current list of usernames
var currentUsers = ['John', 'Jane', 'Alice', 'Bob', 'Eve'];
// New list of usernames
var newUsers = ['Alice', 'Mike', 'Ella', 'Frank', 'Sarah'];
// Convert all current usernames to lowercase for case-insensitive comparison
var currentUsersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
// Loop through newUsers and check for uniqueness
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var isAvailable = true;
    var newUserLower = newUser.toLowerCase();
    for (var _a = 0, currentUsersLower_1 = currentUsersLower; _a < currentUsersLower_1.length; _a++) {
        var current = currentUsersLower_1[_a];
        if (newUserLower === current) {
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log("Congratulations, '".concat(newUser, "' is available!"));
    }
    else {
        console.log("Sorry, '".concat(newUser, "' is not available. Please enter a new username."));
    }
}
