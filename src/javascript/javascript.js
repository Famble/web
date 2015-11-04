	var imagecount = 3;
	var total = 8;
		
	function slide(v)
	{
		var Image = document.getElementById("img");
		imagecount += v;

		if (imagecount > total)
		{
		imagecount = 3;
		}
		if (imagecount < 3)
		{
		imagecount = total;
		}
			
		Image.src="image/kart/etasje" + imagecount + ".png";
	}
		/*mangler bilder for etasje 1 og 2, har basement men kan ikke legge til før 1 og 2.
		Bildet til etasje 8 må fikses litt på. */
		
	function setBilde(x)
	{
		var Image = document.getElementById("img");
		
		Image.src="image/kart/etasje" + x + ".png";
	}