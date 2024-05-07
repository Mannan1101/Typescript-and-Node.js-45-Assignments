//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.

let admin:string[] = ['elen', 'zurrab', 'admin', 'hooria', 'noor'];


// removing user from array
for(let i=admin.length; i>=0 ; i--){
    admin.pop();
}



//checking length
if (admin.length === 0){
    console.log(`Oops! Array is empty and we are  Looking for a User `);
}
else{
    console.log(`Participants are present `);
    for (let value of admin) {

        if (value == 'admin') {
            console.log(`Hello ${admin}, would you like to see a status report? `)
        }
        else {
            console.log(`Hello ${value}, Thank You For Logging in Again `);
    
        }
    
    }
    
    
}