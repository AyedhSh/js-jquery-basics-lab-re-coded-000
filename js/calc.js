  var num1 = $('input[type="text"]#number1').val();
  var num2 = $('input[type="text"]#number2').val();
  var operator = $('input[type="text"]#operation').val();

function doMath(){
  $('#equals').on('click', function(){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    operator = operator;
    validate(operator, num1, num2);
  });
}  

function result(operator, num1, num2) {
  if (operator == '+'){
    $('#result').html(num1 + num2);
    return num1 + num2;
  }
  else if (operator == '-'){
    $('#result').html(num1 - num2);
    return num1 - num2;
  }
  else if (operator == '*'){
    $('#result').html(num1 * num2);
    return num1 * num2;
  }
  else if (operator == '/'){
    $('#result').html(num1 * num2);
    return num1 / num2;
  }
}

function validate(operator, num1, num2) {
  debugger;
  if (operator == "+" || operator == "-" || operator == "*" || operator == "/"){
    if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '' ){
      $("#result").text('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!'
    }
    else {
      result(operator, num1, num2);
    }
  }
  else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
}
$('document').ready(function(){
 doMath();

});