//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
 //reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
 // and a shirt of any size with a different message.


 function makeShirt(size: string = `large`, text: string = `i lovetypescript`): void {
    console.log(`you ordar a ${size} shirt that says ${text}`)
 }

 makeShirt();
 makeShirt("medium")

 // diffrent message

 makeShirt(`small`,`I need a big shirt to wear`)