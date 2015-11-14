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
		
		changeAltAndLongdesc(imagecount);
		changeFloor(imagecount);
		
		Image.src="../image/kart/etasje" + imagecount + ".gif";
	}	
	
	/* endrer bilde når man trykker i etasje-menyen*/
	function setBilde(x)
	{
		var Image = document.getElementById("img");
		
		changeAltAndLongdesc(x);
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
	function changeAltAndLongdesc(imgcount)
	{
		var image = document.getElementById("img");
		
		switch(imgcount)
		{
			case 0:
				image.alt = "Basement";
				image.setAttribute("longdesc","longdesc/basement_desc.html");
				break;
			case 1:
				image.alt = "Floor 1";
				image.setAttribute("longdesc","longdesc/floor1_desc.html");
				break;
			case 2:
				image.alt = "Floor 2";
				image.setAttribute("longdesc","longdesc/floor2_desc.html");
				break;
			case 3:
				image.alt = "Floor 3";
				image.setAttribute("longdesc","longdesc/floor3_desc.html");
				break;
			case 4:
				image.alt = "Floor 4";
				image.setAttribute("longdesc","longdesc/floor4_desc.html");
				break;
			case 5:
				image.alt = "Floor 5";
				image.setAttribute("longdesc","longdesc/floor5_desc.html");
				break;
			case 6:
				image.alt = "Floor 6";
				image.setAttribute("longdesc","longdesc/floor6_desc.html");
				break;
			case 7:
				image.alt = "Floor 7";
				image.setAttribute("longdesc","longdesc/floor7_desc.html");
				break;
			case 8:
				image.alt = "Floor 8";
				image.setAttribute("longdesc","longdesc/floor8_desc.html");
				break;
		}
	}
	

	/* åpner og lukker svar i FAQ-en */
	function toggleFAQ(answer)
	{
		document.getElementById(answer).classList.toggle("vis");
		document.getElementById(answer).classList.toggle("skjul");
	}


   function showMenu(){
        var el = document.getElementById("kartmeny");
            if(el.className == "visible")
                hideMenu();
            else
                el.className="visible";
    }
    function hideMenu(){
        var el = document.getElementById("kartmeny");
        el.className = "skjul";
    }