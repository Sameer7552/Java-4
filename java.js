//chapter 17-20



// // question 1 & 2
// var array = []
// array = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// for(var i=0;i<3;i++){
//         for(var j=0;j<4;j++){
//             document.write(array[i][j]+" ")
//         }
//         document.write("<br>")
//     }

//     // question 3

//     for(var i=1;i<=10;i++){
//             document.write(i)
//             document.write("<br>")
//         }

//     // Question 4

// var table = +prompt("Enter Which Table You Want: ");
// var length = +prompt("Enter Length: ");
// for(var i=1; i<=length;i++){
//     document.write(table + " x " + i + " = " + i*table);
//     document.write("<br>")
// }

//     //Question 5
// var arr =["apple", "banana", "mango", "orange", "starwberry"];
// for(var i=0;i<arr.length;i++){
//     document.write("Element at index of "+ i + " : "+ arr[i]);
//     document.write("<br>")
// }


// // Question 6
// document.write("<span>(a) Counting:</span>");
// for (var i=1;i<=15;i++){
//     if(i == 15){

//         document.write(i);
//     }
//     else{

//         document.write(i+", ");
//     }
// }
// document.write("<br>")
// document.write("<span>(b) Reverse Counting:</span>");
// for (var i=10;i>=1;i--){
//     if(i == 1){

//         document.write(i);
//     }
//     else{

//         document.write(i+", ");
//     }
// }
// document.write("<br>")
// document.write("<span>(c) Even:</span>");
// for (var i=0;i<=20;i=i+2){
//     if(i == 20){

//         document.write(i);
//     }
//     else{
//         document.write(i+", ");

//     }
// }
// document.write("<br>")
// document.write("<span>(d) Odd:</span>");
// for (var i=1;i<=20;i=i+2){
//     if(i == 19){

//         document.write(i);
//     }
//     else{

//         document.write(i+", ");
//     }
// }
// document.write("<br>")
// document.write("<span>(e) Series:</span>");
//     for (var i = 1; i <= 10; i++) {
//         if(i == 10){

//             document.write(2*i + "k");
//         }
//         else{

//             document.write(2*i + "k, ");
//         }
//     }



// //   Question 7
// var arr = ["cake" , "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome To ABC Bakery.What do you want to order Sir/Ma'am? ");
// var flag = false;
// for(var i=0;i<arr.length;i++){
//     if(arr[i] === search){
//         flag = true;
//         break;
//     }
// }
// if(flag){
//     document.write(search +" is <b> Available </b> at index "+ arr.indexOf(search)+ " in our bakery");
// }
// else{
//     document.write("We are Sorry. "+ search +" is <b> not available </b>in out bakery");
// }


//             // Question 8
// var arr =[24,53,78,91,12];
// document.write("Array Items: "+arr);
// document.write("<br>");
// var max = arr[0];
// for (var i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
  
// document.write("The Largest Number is: "+max);

            // // Question 9
            // var arr =[24,53,78,91,12];
            // var min = arr[0];

            // for (var i = 1; i < arr.length; i++) {
            //   if (arr[i] < min) {
            //     min = arr[i];
            //   }
            // }
            // document.write("The Smallest Number is: " , min);

//             // Question 10
//  for (var i = 1; i <= 20; i++) {
//         document.write(5*i+",");
//     }







//chapter 21-25


//                     //  Question 1                    
// var fName = prompt("Enter First Name: ");
// var lName = prompt("Enter Last Name: ");
// var fullName = fName +" "+ lName;
// alert("Welcome "+fullName);

//                     //  Question 2
// var favMobile = prompt("Enter Your Favourite Mobile: ");
// document.write("My Favourite Phone is: "+ favMobile +"<br>" );
// document.write("Length Of String: "+favMobile.length)

//                     //  Question 3
// var string= "Pakistani";
// document.write("String: "+string+"<br>");
// document.write("Index Of 'n': "+ string.indexOf("n"))

//                     //  Question 4
// var string= "Hello World";
// document.write("String: "+ string+"<br>");
// document.write("Last Index of 'l' is : "+ string.lastIndexOf("l"))

//                     //  Question 5
// var string= "Pakistani";
// document.write("String: "+ string+"<br>");
// document.write("Character at index '3' is : "+ string[3])

//                     //  Question 6
// var fName = prompt("Enter First Name: ");
// var lName = prompt("Enter Last Name: ");
// alert("Welcome "+fName.concat(lName));


//                     //  Question 7
// let a = "Hyderabad";
// let b = originalWord.replace("Hyder", "Islam");
// document.write("City: " + a + "<br>");
// document.write("After Replacement: " + b);


//                     //  Question 8
// var a = "Ali and Sami are best friends. They play cricket and football together.";
// var b = message.replace(/and/g, "&");
// document.write("Original Message: " + a + "<br>");
// document.write("After Replacement: " + b);b





// Chapter 26-30


// //                      Question 1
// var num = +prompt("Enter Any Positive Number: ");
// document.write("Number : "+num+"<br>");
// document.write("Round Off Value : "+Math.round(num)+"<br>");
// document.write("Floor Value : "+Math.floor(num)+"<br>");
// document.write("Ceil Value : "+Math.ceil(num)+"<br>");


// //                      Question 2
// var num = +prompt("Enter Any Negative Number: ");
// document.write("Number : "+num+"<br>");
// document.write("Round Off Value : "+Math.round(num)+"<br>");
// document.write("Floor Value : "+Math.floor(num)+"<br>");
// document.write("Ceil Value : "+Math.ceil(num)+"<br>");


// //                      Question 3
// var num= +prompt("Enter Num: ");
// document.write("The Absolute value of "+ num +" is: "+Math.abs(num));

// //                      Question 4
// var dice = Math.floor(Math.random() * 6) + 1;
// document.write("Dice Value: " + dice);


// //                         Question 5
//  var coin = Math.random() < 0.5 ? "Heads" : "Tails";
//  document.write("Coin Result: " + coin);

// //                          Question 6
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random Number: " + randomNumber);


// //                          Question 7
// var n = Math.floor(Math.random() * 10) + 1;
// var n2 = +prompt("Enter a number between 1 - 10:");
// if (n2 === n) {
//   alert("Congratulations! You guessed the correct number.");
// } else {
//   alert("Sorry, the correct number was " + n + ". Try again!");
// }