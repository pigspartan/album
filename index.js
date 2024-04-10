
function wykres(grubosc,okres,amp) {
    var x=0;
    var y=0;
    var c = document.getElementById("test");
    var ctx = c.getContext("2d");
    ctx.moveTo(x, y);
    ctx.lineWidth = grubosc;

    for(i=0;i<15;i++){
        x=x+okres;
        ctx.lineTo(x, y);
        y=y+2*amp;
        ctx.lineTo(x, y);
        x=x+okres;
        ctx.lineTo(x, y);
        y=y-2*amp;
        ctx.lineTo(x, y);
   
    }
    ctx.stroke();
  }
  var tab = Array ( 10 , 30 , 50 , 120 ) ;

  function kolowy(tab){

        const randomHexColorCode = () => {
            return "#" + Math.random().toString(16).slice(2, 8)
        };
        
        
            var canvas = document.getElementById('zad2');
            var ctx = canvas.getContext('2d');
            canvas.width = 800;
            canvas.height = 600;
			total=0;
			tab.forEach(element => {
				total+=element;
			});
            let startAngle = 0; 
            let radius = 100;
            let cx = canvas.width/2;
            let cy = canvas.height/2;
            
            tab.forEach( element => {
                ctx.fillStyle = randomHexColorCode();
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#333';
                ctx.beginPath();
                let endAngle = ((element / total) * Math.PI * 2) + startAngle;
                ctx.moveTo(cx, cy);
                ctx.arc(cx, cy, radius, startAngle, endAngle, false);
                ctx.lineTo(cx, cy);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();           
                startAngle = endAngle;
            }) 
  }
  function zad3(){
            var canvas = document.getElementById('zad3');
            var ctx = canvas.getContext('2d');
            canvas.width = 800;
            canvas.height = 600;
            ctx.beginPath();
            const grad=ctx.createLinearGradient(0,0, 150,0);
            grad.addColorStop(0, "lightblue");
            grad.addColorStop(1, "darkblue");
            ctx.fillStyle = grad;
            ctx.roundRect(10, 20, 150, 100, [40]);
            ctx.fill();
            ctx.stroke();
  }
  function zad4(ile,r1,r2){
    var x1= 160;
    var y1= 160;
    var r = r1;
    var canvas = document.getElementById("zad4");
    var context = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;
    context.beginPath();
    context.fillStyle = "blue";
    context.strokeStyle = "black";
    for (var i = 0; i < ile; i++) {
        var alpha = ((Math.PI * 2) / ile) * (i); //aktualny kąt
        if (i % 2 == 0) {
        if (r == r1)
        r = r2;
        else
        r = r1;
        }
        var x = (r * Math.sin(alpha)) + x1;
        var y = (r * Math.cos(alpha)) + y1;
        if (i == 0)
        context.moveTo(x, y);
        else
        context.lineTo(x, y);
        }
    context.fill();
    context.stroke()    
    }



  window.onload = function () {
    wykres(5,200,100) ;
    kolowy(tab);
    zad3();
    zad4(52,100,150);
    }; 