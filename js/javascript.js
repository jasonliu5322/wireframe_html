var today= new Date();
var hourNow = today.getHours();
var minuteNow = today.getMinutes();
var secondNow = today.getSeconds();
var greeting;


if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) { 
    greeting = 'Good afternoon!';
} else if (hourNow > 0) { 
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}


document.write( '<h3>' + greeting + '</h3>');
document.write('<h3>' + 'The time for now is' + hourNow +':'+ minuteNow +':' + secondNow+ '.'+'</h3>')

var needDo;
if (hourNow >= 23) {
    if(minuteNow >30){ 
        needDo = 'Bedtime!';}
   } else  
    needDo = 'Studying time';
 
document.write( '<h3>' + 'Now is ' + needDo + '.'+'</h3>');


function myFunction1() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      document.getElementById("first").innerHTML =
      "Hello " + person + "! How are you today?";
    }else{
        document.write("Please refresh this page")
    }
  }

  function myFunction2() {
    var txt;
    var r = confirm("Press a button!\nEither OK or Cancel.\nThe button you pressed will be displayed in the result window.");
    if (r == true) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("second").innerHTML = txt;
  }

  function changeColor() { 
    document.getElementById("third").style.backgroundColor 
    = document.getElementById( "MyColorPicker").value; 
}