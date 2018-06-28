// ///dodanie lementów do nowej tablicy

// // var table=[5,6,8,3,4];
// // var table2=[1,2];

// // var obj = {
// //     "desc": "jakis opis",
// //     "count": 4,
// //     "data": {
// //         "abs": true
// //     }
// // }

// // obj.fn();

// // table.forEach(el=> table2.push(el*el));
// // //table2 = table.push()


// // console.log(table2);

// // console.log(obj.desc);

// document.getElementById("redCircle").onclick = function(){
//     document.getElementById("redCircle").style.display = "none";
// }
// document.getElementById("blueCircle").onclick = function(){
//     document.getElementById("blueCircle").style.display = "none";
// }
// document.getElementById("greenCircle").onclick = function(){
//     document.getElementById("greenCircle").style.display = "none";
// }
// // var x = 5;
// // var name = "Rob";
// // alert(x + name);

// document.getElementById("click").onclick = function(){
//     // document.getElementById("clickChangePar").innerHTML = "the test has been changed";
//     var textChanger = "";
//     textChanger = document.getElementById("textChange").value;
//     document.getElementById("clickChangePar").innerHTML = textChanger;
// }

// var myArray = new Array();
// myArray[0] = "pizza";
// myArray[1] = "chocolate";
// var tweets  = ["Morning everybody!", "I love coffe"];
//     tweets.push("back to work");
// console.log(tweets);
// console.log(myArray.length);
// tweets.splice(1,1); // delete array element
// console.log(tweets);
// tweets.splice(1, 0, "breakfast");//delete and add new element
// console.log(tweets);
//  //if statements
//  var x = 2;


 
// //  var password = document.getElementById("password").value;

//  document.getElementById("submit").onclick = function(){
//         var username = document.getElementById("username").value;
//         var myUsername = "Ula";
//         if (username == myUsername){
//             alert("correct!");
//         }
//         else {
//             alert("try again");
//         }
//  }
//    var username2 = document.getElementById("username2").value
//  if (username2 == "Ula") {
//     document.getElementById("submit2").onclick = function(){
//         alert("login success");
//     }
//  }
//  else{
//      document.getElementById("submit2").onclick = function(){
//         alert("login failed");
//     }
//  }

 //rundom number
document.getElementById("check").onclick = function(){
 var myNumber = document.getElementById("randomNumber").value;
 var randomNumber  = Math.floor(Math.random() * 6);
 if (myNumber == randomNumber){
     alert("Great, you got it!!!");
 }
 else{
     alert("Try again!!"+"the random numbr was"+randomNumber);
 }
}