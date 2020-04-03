




$(document).ready(function() {
  $("form#inputAndOutput").submit(function(event){
     alert("we are at the beginning of submit block");
     event.preventDefault();
     var yourNumber = parseInt($("#yourNumber").val());
     alert(yourNumber);  // for debugging
     //var final = mainFunction(yourString); // try this one.
     //var result = stateMent(courseType, highSchool, javaScript, engineeringDegree, interest, aptitude);
     $("#output").text("not Ready yet");
     });
 });