//*********chapter 21 to 25 (String Method)************//

//      Question 1

// var first = prompt("Enter the first name");
// var last = prompt("Enter the last name");
// var ful =first+" "+last
// alert("Hello "+ful)


//      Question 2

// var mob = prompt("Enter the mobile name ")
// var mob1 = mob.split(" ")
// var mobile1=[];
// for (var i = 0; i < mob1.length; i++) {

//     var mobile =mob1[i][0].toUpperCase()+mob1[i].slice(1)
//     mobile1.push(mobile)
// }

// var mobilename = mobile1.join(" ")
// document.write("<b>My Favrate Phone Is</b> : "+mobilename+"<br/>")
// document.write("<b>length of string is </b>: "+mobilename.length)
// console.log()


//      Question 3

// var city = "pakistani"
// var find = city.indexOf("n")

// document.write("<b>String : </b>"+city+"</br>")
// document.write("<b>Index of 'n'</b> : "+find)


//      Question 4

// var msg = "Hello world"
// var find = msg.lastIndexOf("l")

// document.write("<b>String : </b>"+msg+"</br>")
// document.write("<b>Last Index of 'l'</b> : "+find)


//      Question 5 

// var city = "pakistani"

// for (var i = 0 ; i < city.length ; i++){
//     if(i===3){
//         var letter = city[i]
//         break;
//     }
// }
// document.write("<b>String : </b>"+city+"</br>")
// document.write("<b>Charator of 3 Index</b> : "+letter)



//      Question 6

// var first = prompt("Enter the first name");
// var last = prompt("Enter the last name");
// var ful =first.concat(" "+last)
// alert("Hello "+ful)


//      Question 7

// var city = "hyderaband"
// var replaced = city.replace("hyder", "islam")
// document.write("City : "+city+"</br>")
// document.write("After Replacement : "+replaced)

//      Question 8

// var str= "Ali and Sami are best friends. They play cricket and football together."
// var str1= str.replaceAll("and","&")
// document.write("massage is : "+str+"</br>")
// document.write("After Replacement : "+str1)


//      Question 9

// var str = "472"
// document.write("Value : " + str + "</br>")
// document.write("Type : " + typeof str +"</br>")

// var str1 =+str
// document.write("Value : " + str1 + "</br>")
// document.write("Type : " + typeof str1)


//      Question 10

// var inp = prompt("Enter the word and i will show you in capital foam")
// var inpt = inp.toUpperCase()
// document.write("User Input  : " + inp + "</br>")
// document.write("Upper case  : " + inpt + "</br>")


//      Question 11

// var str = "javascript"
// var names =str.slice(0,1).toUpperCase()+str.slice(1)

// document.write("User Input : "+str+"</br>")
// document.write("Title Case : "+names)


//      Question 12

// var num = 35.36
// var num1 = num.toString()
// var num2 = num1.replace(".","")

// document.write("Number : "+num+"</br>")
// document.write("result : "+num2)


//      Question 13

// var sym = prompt("Enter the user name  ")

// for (var i = 0; i < sym.length; i++) {
//     if (sym[i].charCodeAt() == 33 || sym[i].charCodeAt() == 44 || sym[i].charCodeAt() == 46 || sym[i].charCodeAt() == 64 ) {
//         alert("Please Enter Valid User Name without using this @!,.")
//         break;
//     }
// }

//      Question 14

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am ? ");
// var search = userInput.toLowerCase();
// var found = false;
// for (var i = 0; i < a.length; i++) {
//     if (search == a[i]) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert(userInput + " is availible at index " + i + " in our bakery");
// } else {
//     alert("We are sorry. " + userInput + " is not avalible in our bakery");
// }



//      Question 15

// var password = prompt("Enter your password :")
// document.write("Entered password : " + password + "<br>");
//          (a)
// var a = false;
// for (var i = 0; i < password.length; i++) {
//     // console.log(password[i],password[i].charCodeAt())            // <--- test
//     if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57 || password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
//         a = true;
//         // console.log(a)              // <--- test
//     } else {
//         a = false
//         break;
//     }
// }
// if (a == false) {
//     document.write("Password should only contain letters and numbers. <br> Please enter a valid password");
// }
//          (b)
// if (password[0].charCodeAt() >= 48 && password[0].charCodeAt() <= 57) {
//     document.write("Password should not start with a number. <br> Please enter a valid password");
// }
//          (c)
// if (password.length < 6) {
//     document.write("Password should at least be 6 characters long. <br> Please enter a valid password");
// }


//      Question 16

// var university = "University of Karachi";
// var arr = university.split("");
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>")
// }


//      Question 17

// var userInput = prompt("Enter a word :");
// var char = userInput.charAt(userInput.length - 1);
// document.write("User input : " + userInput + "<br>");
// document.write("Last character of input : " + char);

// QUESTION#18
// var str = "The quick brown fox jumps over the lazy dog";
// var counter = 0;
// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 3) == "The" || str.slice(i, i + 3) == "the") {
//         counter++
//     }
// }
// document.write("Text : " + str + "<br>");
// document.write("There are " + counter + " occurence(s) of the word 'the'");


//************(  End  )************//
