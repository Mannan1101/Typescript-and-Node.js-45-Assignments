// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string = "abdul mannan";

//lowerCase
console.log("lowercase:", personName.toLowerCase());

//upperCase
console.log("uppercase:", personName.toUpperCase());

//titleCase
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));