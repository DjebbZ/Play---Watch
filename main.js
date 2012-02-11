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

		metronome();
		
		setTimeout(run, 30);

	}

	function metronome()
	{

		timer+=30;
		if (timer >= frequence)
			{
				moveCars();
				if (Math.random() > 0.9)
					{
						carArray[Math.round(Math.random(0.5)*3)][0].etat = 1;
					}
					if (childrenBool == true)
						{
							moveChildrens();
							if (Math.random() > 0.9)
								{
									childrenArray[0].etat = 1;
								}
							childrenBool = false;
						}
						else
						{ 
							childrenBool = true;
						}
				timer = 0;
			}

		
		
			
	}