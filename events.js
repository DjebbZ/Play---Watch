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
		if (event.keyCode == 38)  {characterPosition = addLimit(characterPosition, 1, characterArray.length)}
		if (event.keyCode == 40)  {}
		if (event.keyCode == 86)  {}
		
	}