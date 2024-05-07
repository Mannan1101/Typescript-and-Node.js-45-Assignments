//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
// statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits:string[]=['banana','orange','lichee']

for (let value of favorite_fruits){
    if(value == 'lichee'){
        console.log('You really like Lichees')
    }
    else  if(value == 'pears'){
        console.log('You really like Pears')
    }
    else  if(value == 'orange'){
        console.log('You really like orange')
    }
    else  if(value == 'banana'){
        console.log('You really like banana')
    }
    else  if(value == 'mango'){
        console.log('You really like mango')
    }
    else{
        console.log("You don't Like this fruit")
    }
}