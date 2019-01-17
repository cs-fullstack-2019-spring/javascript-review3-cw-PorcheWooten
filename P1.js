//Put the start of your program in a main function.
// Create a loop that takes user input and put it in an array.
// Once the user quits, print all items in the array. DO NOT print the array, print the items/elements in the array.

function main() {
    // problem1();
    // problem2();
    problem3();
}

function problem1() {
    array = [];

    do {
        array.push(userInput);
        var userInput = prompt("Whatever you want to say");

        // console.log(array);
    }
    while (userInput != "Quit");


    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
//Put the start of your program in a main function.
// Create a function that can translate five English words into Spanish words.
// You should be able to call your function from your main function.

function problem2()
{
    var words = prompt( "word entered");
switch (words) {
    case "Hello" :
        console.log("Hola");
        break;
    case "Goodbye":
        console.log("adiós");
        break;
    case "dog":
        console.log("perro");
        break;
    case "cat" :
        console.log("coche");
        break;
    case "money":
        console.log("dinero");
        break;
    default:
        console.log("word N/A");

}

    }

//Put the start of your program in a main function.
// Create a program that takes number inputs into an array until a quit word.
// Afterwards, display all numbers (not the array) and the sum.


function problem3() {

    array = [];
    nums=

    do {
        array.push(nums);
        var nums = prompt("Enter a number");

        // console.log(array);
    }
    while (nums != "Quit");


    for (var i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }
   function getSum(total, num)
   {
       return(total + num)
   }
    let grandTotal = array.reduce(getSum);
    console.log(grandTotal);

}

main();

//Put the start of your program in a main function.
// Create a class for Books with name, rating, genre, and author.
// Create a class method that will function that will change the rating of the book.
// Create three objects of the class Book and put them in an array.
// Lastly, use the array to display only the names of the books.

class Books
{
    constructor(name, rating, genre, author)
    {
        this.name= name;
        this.rating= rating;
        this.genre= genre;
        this.author= author;
    }
    changeRating(changedRating){
        this.rating= changedRating;
    }
}
var conjuring = new Books("The Conjuring", "R", "Horror", "IDK");
conjuring.changeRating("another rating");





