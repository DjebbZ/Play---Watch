canvas.onclick = function (e)
{ 
	clic(e || window.event);
}
canvas.onmousemove = function (e)
{
	mousemove(e || window.event);
}


function clic(event)
	{
		position = {x: (event.offsetX || event.layerX), y: (event.offsetY || event.layerY)};

		if (compteurdImages == compteurdImagesChargees)
				{
					alert (position.x + "x, "+ position.y + "y")
				}
	}

function mousemove(event)
	{
		position = {x: (event.offsetX || event.layerX), y: (event.offsetY || event.layerY)};

		if (compteurdImages == compteurdImagesChargees)
				{
					
				}
	}

function keypress(event)
	{
		if (event.keyCode == 38)  {if (characterPosition< characterArray.length -1) characterPosition++}
		if (event.keyCode == 40)  {if (characterPosition> 0) characterPosition--}
		if (event.keyCode == 86)  {}
		
	}