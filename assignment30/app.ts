//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing
// code that will print a greeting to each user after they log in to a website. Loop through the array,
// and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let admin:string[] = ['elen', 'zurrab', 'admin', 'hooria', 'noor'];

for (let value of admin) {

    if (value === 'admin') {
        console.log(`Hello ${value}, would you like to see a status report? `)
    }
    else {
        console.log(`Hello ${value}, Thank You For Logging Again \n`);

    }

}