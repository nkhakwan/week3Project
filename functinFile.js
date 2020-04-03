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
      alert(singleSplitted[0]);
      alert(singleSplitted[1]);
      //alert(single)
        for (var j=0; j<singleSplitted.length ; j= j+1){
          alert(j);
          alert(singleSplitted[j]);
          if (parseInt(singleSplitted[j]) === 1) {
            storingArray[i] = "Beep!";
            alert("first If" + singleSplitted[j]);
            break;
          } else if (parseInt(singleSplitted[j]) === 2) {
            alert("second");
            storingArray[i] = "Boop!";
            break;
            } else if (parseInt(singleSplitted[j]) === 3) {
              alert("third")
              storingArray[i] = "Won't you be my neighbour!";
              break
            } else {
              alert("didn't entered");
                storingArray[i] = splittedNumbers[i];
              }
           alert(storingArray);
        } //end of second for loop
          
    }// end of first for loop
    return storingArray;
}// end of function

var justNumbers = "4,5,7,237,456";
var result = stringInsertor(justNumbers);




