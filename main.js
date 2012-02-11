run()

	function run()
	{
		ctx.drawImage(messArray[0], 0, 0);
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