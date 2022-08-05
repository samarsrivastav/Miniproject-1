function updateOutput() {
    //calculate
    var form = document.getElementById("calc");
    var out = form.elements["z"];
    var num1 = parseInt(form.elements["x"].value);
var num2 = parseInt(form.elements["y"].value);
var operator = parseInt(form.elements["op"].value);
switch(operator)
{
	//add
	// case 0:
	// out.value = num1+num2;
  	// break;
  	// //subtract
	// case 1: out.value = num1-num2;
	// break;
	//multiply
	case 0: out.value = num1*num2;
	break;
	//divide
	// case 3: out.value = (num1/num2).toFixed(1);//only one digit after decimal place
	// break;
	default:
  	break;
}
    }
    function updateOutput1() {
        //calculate
        var form = document.getElementById("area");
        var out = form.elements["z"];
        var num1 = parseInt(form.elements["x"].value);
    // var num2 = parseInt(form.elements["y"].value);
    var operator = parseInt(form.elements["op"].value);
    switch(operator)
    {
        // add
        case 0:
        out.value = num1*4.10;
          break;
          //subtract
        case 1: out.value = num1*8.00;
        break;
        // multiply
        case 2: out.value = num1*5.26;
        break;
        // divide
        case 3: out.value = num1*4.89;
        break;
        default:
          break;
    }
        } 