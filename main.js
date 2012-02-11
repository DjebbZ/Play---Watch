run()

	function run()
	{
		ctx.clearRect(0,0, canvas.width, canvas.height)
		if (compteurdImages == compteurdImagesChargees)
			{
				drawAll();
			}
		else
			{
				drawChargement();
			}

		setTimeout(run, 30);

	}