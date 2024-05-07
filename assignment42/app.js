//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great
//() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
// show_magicians() to see that the list has actually been modified.
var magicianName = ["ayaz", "daniyal", "manna", "kamran"];
function show_magicians(great) {
    for (var _i = 0, magicianName_1 = magicianName; _i < magicianName_1.length; _i++) {
        var item = magicianName_1[_i];
        console.log(great, item);
    }
}
;
show_magicians("hello, how are Mr.");
show_magicians("hello, "); //2nd time calling
