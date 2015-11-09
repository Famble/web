	var imagecount = 0;
	var total = 8;
		
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
		
	function setBilde(x)
	{
		var Image = document.getElementById("img");
		
		Image.src="../image/kart/etasje" + x + ".gif";
	}