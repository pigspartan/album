
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
            ctx.fillroundRect(10, 20, 150, 100, [40]);
            ctx.stroke();
  }
  window.onload = function () {
    wykres(5,200,100) ;
    kolowy(tab);
    zad3();
    }; 