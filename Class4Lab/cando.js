
//do something here
function CanDo(){
	var ageElement = document.getElementById('age');
	var age = ageElement.value;
	console.log(age);

	var result = document.getElementById("results");
	if (age < 16){
		result.innerHTML = 'You cannot do much but go to school';
	
	}else if (age >=16 && age < 18) {
		var whattodo = "You can drive";
		result.innerHTML = whattodo
		
	}else if (age >= 18){
		result.innerHTML = whattodo && "You can VOTE but all candidates are awful";

	}else if (age >= 21){
		results.innerHTML = "You can drive AND drink";
	}



};

//var btnDrive = document.getElementByID('CanIDrive');

var btnDrive = document.getElementById("CanDo");
btnDrive.addEventListener('click',CanDo);

//	document.getElementByID('CanIDrive').addEventListener('click', 
//	CanIDrive);