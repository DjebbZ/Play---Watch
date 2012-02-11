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
		timer+=30;
		if (timer >= frequence)
			{
				metronome();
				timer = 0;
			}
		setTimeout(run, 30);

	}

	function metronome()
	{
		moveChildrens();
		moveCars();
			
	}