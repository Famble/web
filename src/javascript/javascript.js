	/* endrer bilde med piltastene */
	document.addEventListener('keydown', function(event) 
	{
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
		
		Image.src="../image/kart/etasje" + imagecount + ".gif";
	}	
	
	/* endrer bilde når man trykker i etasje-menyen*/
	function setBilde(x)
	{
		var Image = document.getElementById("img");
		
		changeAlt(x);
		
		Image.src="../image/kart/etasje" + x + ".gif";
	}
	
	/* funksjon som endrer alt-taggen til bildet */
	function changeAlt(imagecount)
	{
		var image = document.getElementById("img");
		
		switch(imagecount)
		{
			case 0:
				image.alt = "kjeller";
				break;
			case 1:
				image.alt = "etasje1";
				break;
			case 2:
				image.alt = "etasje2";
				break;
			case 3:
				image.alt = "etasje3";
				break;
			case 4:
				image.alt = "etasje4";
				break;
			case 5:
				image.alt = "etasje5";
				break;
			case 6:
				image.alt = "etasje6";
				break;
			case 7:
				image.alt = "etasje7";
				break;
			case 8:
				image.alt = "etasje8";
				break;
		}
	}
	
	/* åpner og lukker svar i FAQ-en */
	function toggleFAQ(answer)
	{
		document.getElementById(answer).classList.toggle("vis");
		document.getElementById(answer).classList.toggle("skjul");
	}