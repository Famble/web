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
			
		Image.src="../image/kart/etasje" + imagecount + ".gif";
	}
		
	/* endrer bilde når man trykker i etasje-menyen*/
	function setBilde(x)
	{
		var Image = document.getElementById("img");
		
		Image.src="../image/kart/etasje" + x + ".gif";
	}
	
	/* åpner og lukker svar i FAQ-en */
	function toggleFAQ(answer)
	{
		document.getElementById(answer).classList.toggle("vis");
		document.getElementById(answer).classList.toggle("skjul");
	}