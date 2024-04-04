

function zadkek(obj){
	if (czyjest==null)
	{
		obj.style.animation= "main 0.4s linear both";
		czyjest=obj;

	}
	else
	{
		var x =obj.offsetTop;
		var y =obj.offsetleft;
		document.documentElement.style.setProperty('--x1', '')
		document.documentElement.style.setProperty('--y1', '')
		czyjest.style.animation="main 0.4s linear both reverse";
		obj.style.animation= "main 0.4s linear both";
		czyjest=obj;
	}
}
var czyjest;