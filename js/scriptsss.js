/*

we need to fill this up later.
}*/

var mainFunction = function(yourNumber){
  //alert(yourNumber);
  var rangeVar = rangeGen(yourNumber);
  //alert(rangeVar);
  var result = stringInsertor(rangeVar);
  //alert(result);
return result; 
} // end of mainFaunction 



/// ============ rangeGen function =======================================


var rangeGen = function(aNumber){
  //alert("on the first line");
  var rang = [];
  for (var i=0; i<(aNumber+1); i=i+1){
    //alert('value of i'+ i);
    rang.push(i);
    var rangg = rang.join();
   // alert(rang);
   // alert(rangg);
  } // end of for loop
  return rangg;
} // end of rangeGen function.
// var finalResult = rangeGen(33);


/// ============== stringInsertor function ============================================


var stringInsertor = function(justNumbers){
  var storingArray =[];
  var splittedNumbers = justNumbers.split(',');
  //alert (splittedNumbers);
    for (var i = 0; i < splittedNumbers.length; i=i+1){
      //alert(splittedNumbers.length);
      //var singleNumber = splittedNumbers[i].split(',');
      var singleNumber = splittedNumbers[i];
      var singleSplitted = singleNumber.split('');
     // alert(singleSplitted.length);
     // alert(singleSplitted);
      //alert(singleSplitted[0]);
      //alert(singleSplitted[1]);
      //alert(single)
        for (var j=0; j<singleSplitted.length ; j= j+1){
          //alert(j);
          //alert(singleSplitted[j]);
          if (parseInt(singleSplitted[j]) === 1) {
            storingArray[i] = "Beep!";
            //alert("first If" + singleSplitted[j]);
            break;
          } else if (parseInt(singleSplitted[j]) === 2) {
            //alert("second");
            storingArray[i] = "Boop!";
            break;
            } else if (parseInt(singleSplitted[j]) === 3) {
             // alert("third")
              storingArray[i] = "Won't you be my neighbour!";
              break
            } else {
              //alert("didn't entered");
                storingArray[i] = splittedNumbers[i];
              }
           //alert(storingArray);
        } //end of second for loop
          
    }// end of first for loop
    return storingArray;
}// end of function


//// =========== Jquery section ================================


$(document).ready(function() {
  $("form#inputAndOutput").submit(function(event){
     //alert("we are at the beginning of submit block");
     event.preventDefault();
     var yourNumber = parseInt($("#yourNumber").val());
     //alert(yourNumber);  // for debugging
     var finalResult = mainFunction(yourNumber);
     //var result = stateMent(courseType, highSchool, javaScript, engineeringDegree, interest, aptitude);
     $("#output").text(finalResult);
     });
 });