var lagInsertor = function(justNumbers){
  var storingArray =[];
  var splittedNumbers = justNumbers.split(',');
    for (var i = 0; i < splittedNumbers.length; i=i+1){
      var singleNumber = splittedNumbers[i];
      var singleSplitted = singleNumber.split('');
     // alert(parseInt(singleSplitted[0]));
      //alert(parseInt(singleSplitted[1]));
      if ((parseInt(singleSplitted[0]) || parseInt(singleSplitted[1])) === 1 || parseInt((singleSplitted[0]) || parseInt(singleSplitted[1])) === 2 || parseInt((singleSplitted[0]) || parseInt(singleSplitted[1])) === 3){
        for (var j=0; j<singleSplitted.length ; j= j+1){
          var tempStorage;
          if (parseInt(singleSplitted[j]) === 1) {
            tempStorage = "Beep!";
          } else if (parseInt(singleSplitted[j]) === 2) {
            tempStorage = "Boop!";
            } else if (parseInt(singleSplitted[j]) === 3) {
              tempStorage = "won't you be my nieghbour!";
            } else {
              //alert("didn't entered");
                var field = field +1;
              }
              storingArray[i] = tempStorage;
        } //end of second for loop
        
    } else {
    storingArray[i] = splittedNumbers[i];
    }
    }// end of first for loop 
    return storingArray;
}// end of function
var resutl = lagInsertor("12,13,11,19,23,34,56,77");