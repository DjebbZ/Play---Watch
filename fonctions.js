function initialisationDesImages(tableaudImage, nomDesImages)
	{
		for (i=0; i<nomDesImages.length; i++)
			{
				compteurdImages++;
				tableaudImage[i] = new Image(); 
				tableaudImage[i].src = "images/"+nomDesImages[i];
				tableaudImage[i].onload = function(){  
 				compteurdImagesChargees++;
						};  
			}
	}

function drawChargement()
	{
		var pourcent = (compteurdImagesChargees*100)/compteurdImages;
		ctx.fillStyle = "#7a61a3";
		ctx.strokStyle = "black";
		ctx.strokeRect(275, 275, 200, 50);
		ctx.fillRect(275, 275, pourcent*2, 50);
	}

function drawAll()
	{
		for (i= 0; i< carArray.length; i++)
			{
				for (e=0; e<carArray[i].length; e++)
					{
						ctx.fillRect(carArray[i][e].x, carArray[i][e].y, 40, 40);
					}
			}
		for (i=0; i< childrenArray.length; i++)
			{
				ctx.fillRect(childrenArray[i].x, childrenArray[i].y, 20, 20);
			}
		ctx.fillStyle = "rgb(255, 0, 0)";
		ctx.fillRect(characterArray[characterPosition].x, characterArray[characterPosition].y, 40, 50);
		ctx.fillStyle = "rgb(0,0,0)";
	}
function addLimit(variable, valeur, limite)
{

	variable+=valeur;
	if (variable >= limite) variable -= limite;
	return variable;
}