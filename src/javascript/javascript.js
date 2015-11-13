	/* endrer bilde med piltastene */
	document.addEventListener('keydown', function(event){
        if(event.keyCode == 37) {
            slide(-1);
        }
        else if(event.keyCode == 39) {
            slide(1);
        }
	});
	
	
	
	var imagecount = 0;
	var total = 8;
		
	/* endrer bilde når man trykker på pilene*/
	function slide(v)
	{
		var Image = document.getElementById("img");
		imagecount += v;

		if (imagecount > total)
		{
		imagecount = 0;
		}
		if (imagecount < 0)
		{
		imagecount = total;
		}
		
		changeAlt(imagecount);
		changeFloor(imagecount);
		
		Image.src="../image/kart/etasje" + imagecount + ".gif";
	}	
	
	/* endrer bilde når man trykker i etasje-menyen*/
	function setBilde(x)
	{
		var Image = document.getElementById("img");
		
		changeAlt(x);
		changeFloor(x);
		imagecount = x;
        
		
		Image.src="../image/kart/etasje" + x + ".gif";
	}
	
	function changeFloor(floorNr)
	{	
		if(floorNr == 0)
		{
			document.getElementById("floor").innerHTML = "Basement";
		}
		else
		{
			document.getElementById("floor").innerHTML = String(floorNr) + ".";
		}
	}
	
	
	/* funksjon som endrer alt-taggen til bildet */
	function changeAlt(imgcount)
	{
		var image = document.getElementById("img");
		
		switch(imgcount)
		{
			case 0:
				image.alt = "Basement";
				break;
			case 1:
				image.alt = "Floor 1";
				break;
			case 2:
				image.alt = "Floor 2";
				break;
			case 3:
				image.alt = "Floor 3";
				break;
			case 4:
				image.alt = "Floor 4";
				break;
			case 5:
				image.alt = "Floor 5";
				break;
			case 6:
				image.alt = "Floor 6";
				break;
			case 7:
				image.alt = "Floor 7";
				break;
			case 8:
				image.alt = "Floor 8";
				break;
		}
	}
	

	/* åpner og lukker svar i FAQ-en */
	function toggleFAQ(answer)
	{
		document.getElementById(answer).classList.toggle("vis");
		document.getElementById(answer).classList.toggle("skjul");
	}

