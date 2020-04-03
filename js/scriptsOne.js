/*main function {
  get the range in rangeVariable by calling rangeGen;
  call function that gives final result

    function has for loop with loop size equal to yourNumber.length
      it calls a for loop and that matches three numbers in three if statements and push the requried contents back.$


}*/

var mainFunction = function(yourNumber){
  var rangeVar = rangeGen(yourNumber);
return rangeVar; 
} // end of mainFaunction 

/// ============ rangeGen function =======================================

alert ("at first line");
var rangeGen = function(aNumber){
  alert("on the first line");
  var rang = [];
  for (var i=0; i<(aNumber+1); i=i+1){
    alert('value of i'+ i);
    rang.push(i);
    alert(rang);
  } // end of for loop
  return rang;
} // end of rangeGen function.
// var finalResult = rangeGen(33);

//// =========== Jquery section ================================

$(document).ready(function() {
  $("form#inputAndOutput").submit(function(event){
     alert("we are at the beginning of submit block");
     event.preventDefault();
     var yourNumber = parseInt($("#yourNumber").val());
     alert(yourNumber);  // for debugging
     var finalResult = mainFunction(yourNumber);
     //var result = stateMent(courseType, highSchool, javaScript, engineeringDegree, interest, aptitude);
     $("#output").text(finalResult);
     });
 });