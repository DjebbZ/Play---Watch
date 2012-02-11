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
		for (i=childrenArray.length-1; i>0; i--)
			{

				if (childrenArray[i-1].etat == 1)
					{
						childrenArray[i].etat = 1;
						childrenArray[i-1].etat = 0;
					}
			}
	}