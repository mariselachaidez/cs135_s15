var map = document.getElementById("map");
var ctx = map.getContext("2d");

var dt = 1000/30.0;

var score = 0;
var lives = 3;

var left = -1;
var right = 1;

var xfrogger = map.width/2;
var yfrogger = map.height-75;

var audioCrash = new Audio('Jump.mid');


var background = new Audio('Background.mid')


/*****FROGGER*****/
var frogger = new Image ();
frogger.src = "frogger.png";

/*****CAR ROW 1*****/
var x1 = new Array();
var cars1 = new Array();
for(i=0; i<5; i++)
{
	cars1[i] = new Image();
	cars1[i].src = "carEditleft.png";
	x1[i] = 50 + (135*i)
}

/*****CAR ROW 2*****/
var x2 = new Array();
var cars2 = new Array();
for(j=0; j<5; j++)
{
	cars2[j] = new Image();
	cars2[j].src = "carEdit.png";
	x2[j] = 50 + (135*j)
}

/*****CAR ROW 3*****/
var x3 = new Array();
var cars3 = new Array();
for(j=0; j<5; j++)
{
	cars3[j] = new Image();
	cars3[j].src = "carEditleft.png";
	x3[j] = 50 + (135*j)
}

/*****CAR ROW 4*****/
var x4 = new Array();
var cars4 = new Array();
for(j=0; j<5; j++)
{
	cars4[j] = new Image();
	cars4[j].src = "carEdit.png";
	x4[j] = 50 + (135*j)
}


document.addEventListener("load", drawImages());
	function drawImages()
	{
		setInterval(updateImages, 1000/30.0);
	}

function updateImages()
{
	ctx.clearRect(0, 0, map.width, map.height);
	ctx.drawImage(frogger, xfrogger, yfrogger);

	document.addEventListener("keydown", keypressed);

	background.play();


/**********SCORE AND LIVES**********/
	ctx.fillStyle = "#49AD46"
	ctx.font = "30px Times";
	ctx.fillText( "SCORE: " + score, 450, 30)
	ctx.fillText( "LIVES: " + lives, 20, 30)

	if( yfrogger < 0)
	{
		score++;
		xfrogger = map.width/2;
		yfrogger = map.height-75;
	}

	var speed = .03 + (.01*score);		//speed of cars/obsticals

	if(score >= 10)
	{
		speed = 0;
		ctx.font = "150px Times";
		ctx.fillText( "WINNER!", 0, map.height/2 + 20);

	}

	if( lives <= 0)
	{
		speed = 0;
		lives = 0;
		ctx.font = "100px Times";
		ctx.fillText( "GAME OVER!", 0, map.height/2 +20);
	}


	for(i=0; i<5; i++)
	{

/**********LINE 1 CARS**********/
		ctx.drawImage(cars1[i], x1[i], 50);
		x1[i] += speed * left * dt;
		if (x1[i] < 0-50)
		{
			x1[i] = map.width;
		}

		if(yfrogger >= 50 && yfrogger <= 100)
		{
			if(xfrogger < x1[i] && x1[i] < (xfrogger + 50))
			{
				lives--;
				xfrogger = map.width/2;
				yfrogger = map.height-75;
				audioCrash.play();			  	
			}

			if(xfrogger < (x1[i] + 50) && (x1[i] + 50) < (xfrogger + 50))
			{
				lives--;
				xfrogger = map.width/2;
				yfrogger = map.height-75;
				audioCrash.play();			  	
			}
		}

/**********LINE 2 CARS**********/
		ctx.drawImage(cars2[i], x2[i], 150);
		x2[i] += speed * right * dt;
		if (x2[i] >map.width)
		{
			x2[i] = -50;
		}

		if(yfrogger >= 150 && yfrogger <= 200)
		{
			if(xfrogger < x2[i] && x2[i] < (xfrogger + 50))
			{
				lives--;
				xfrogger = map.width/2;
				yfrogger = map.height-75;
				audioCrash.play();			  	
			}

			if(xfrogger < (x2[i] + 50) && (x2[i] + 50) < (xfrogger + 50))
			{
				lives--;
				xfrogger = map.width/2;
				yfrogger = map.height-75;
				audioCrash.play();			  	
			}
		}

/**********LINE 3 CARS**********/
		ctx.drawImage(cars3[i], x3[i], 250);
		x3[i] += speed * left * dt;
		if (x3[i] < 0-50 )
		{
			x3[i] = map.width;
		}

		if(yfrogger >= 250 && yfrogger <= 300)
		{
			if(xfrogger < x3[i] && x3[i] < (xfrogger + 50))
			{
				lives--;
				xfrogger = map.width/2;
				yfrogger = map.height-75;
				audioCrash.play();		  	
			}

			if(xfrogger < (x3[i] + 50) && (x3[i] + 50) < (xfrogger + 50))
			{
				lives--;
				xfrogger = map.width/2;
				yfrogger = map.height-75;
				audioCrash.play();			  	
			}
		}

/**********LINE 4 CARS**********/
		ctx.drawImage(cars4[i], x4[i], 350);
		x4[i] += speed * right * dt;
		if (x4[i] >map.width)
		{
			x4[i] = -50;
		}

		if(yfrogger >= 350 && yfrogger <= 400)
		{
			if(xfrogger < x4[i] && x4[i] < (xfrogger + 50))
			{
				lives--;
				xfrogger = map.width/2;
				yfrogger = map.height-75;
				audioCrash.play();			  	
			}

			if(xfrogger < (x4[i] + 50) && (x4[i] + 50) < (xfrogger + 50))
			{
				lives--;
				xfrogger = map.width/2;
				yfrogger = map.height-75;
				audioCrash.play();			  	
			}
		}
	}
}

function keypressed(evt)		//to move frogger
{
	if(xfrogger > 10)
	{
		if(evt.keyCode == 37 )	 	//left
		{
			xfrogger += -20;
		}	
	}

	if(xfrogger < map.width - 50)
	{
		if(evt.keyCode == 39)		//right
		{
			xfrogger += 20;
		}
	}

	if(evt.keyCode == 38 ) 			//up
	{
		yfrogger += -50;
	}	

	if(yfrogger < map.height-75)
	{
		if(evt.keyCode == 40)		//down
		{
			yfrogger += 50;
		}
	}



	if(evt.keyCode == 32)
		location.reload ();
		
}
console.log("All Done");
