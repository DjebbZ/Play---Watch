function initialisationDesImages (tableaudImage, nomDesImages) {
  for (i = 0; i < nomDesImages.length; i++) {
    compteurdImages++;
    tableaudImage[i] = new Image();
    tableaudImage[i].src = "images/" + nomDesImages[i];
    tableaudImage[i].onload = function () {
      compteurdImagesChargees++;
    };
  }

}

/**
 * Affiche la barre de chargement, basée sur le nombre d'images chargées
 */
function drawChargement () {
  var pourcent = (compteurdImagesChargees * 100) / compteurdImages;
  ctx.fillStyle = "#7a61a3";
  ctx.strokStyle = "black";
  ctx.strokeRect(275, 275, 200, 50);
  ctx.fillRect(275, 275, pourcent * 2, 50);
}

/**
 * Dessine le personnage et les objets de jeu
 */
function drawAll () {
  // Boutons
  if (!upPressed) ctx.drawImage(messArray[1], boutonUp.x, boutonUp.y);
  if (!downPressed) ctx.drawImage(messArray[1], boutonDown.x, boutonDown.y);
  if (!catchPressed) ctx.drawImage(messArray[1], boutonCatch.x, boutonCatch.y);

  // Affichage du personnage
  !lifeLost || !persoEcrase ?
    ctx.drawImage(elementsArray[0], characterArray[characterPosition].x, characterArray[characterPosition].y) : '';

  // Score
  ctx.fillStyle = "black";
  ctx.font = "40px RadiolandRegular";
  ctx.fillText(score.value, score.x, score.y);

  // Nombre de morts
  nbDeaths > 0 ? ctx.drawImage(elementsArray[4], 200, 50) : '';
  nbDeaths > 1 ? ctx.drawImage(elementsArray[4], 250, 50) : '';
  nbDeaths > 2 ? ctx.drawImage(elementsArray[4], 300, 50) : '';

  // Affichage des voitures
  for (i = 0; i < carArray.length; i++) {
    for (e = 0; e < carArray[i].length; e++) {
      if (carArray[i][e].etat == 1) {
        if (i <= 1) ctx.drawImage(elementsArray[2], carArray[i][e].x, carArray[i][e].y);
        if (i > 1) ctx.drawImage(elementsArray[3], carArray[i][e].x, carArray[i][e].y);
      }
    }
  }
  // Affichage des enfants
  for (i = 0; i < childrenArray.length; i++) {
    if (childrenArray[i].etat == 1)  ctx.drawImage(elementsArray[1], childrenArray[i].x, childrenArray[i].y);
  }

  // Affichage des morts
  for (i = 0; i < DieArray.length; i++) {
    if (DieArray[i].etat == 1) {
      if (characterPosition == 1 || characterPosition == 2) {
        ctx.drawImage(elementsArray[5], DieArray[i].x, DieArray[i].y);
      } else if (characterPosition == 5 || characterPosition == 6) {
        ctx.drawImage(elementsArray[6], DieArray[i].x, DieArray[i].y);
      }


    }
  }
  if (rectangle) ctx.fillRect(0,0, canvas.width, canvas.height);
}


/**
 * Déplacement des enfants, et augmentation du score et de la difficulté lorsque les enfants arrivent à l'école
 */
function moveChildrens()
{
	for (i=childrenArray.length; i>0; i--)
			{
				var test = false;
				var quit = false;
				var f = i;
				
				
				if (childrenArray[i-1].etat == 1)
					{
						if (!childrenArray[i-1].taken)
						{	

							if (i != childrenArray.length)
							{
								if (!childrenArray[i].taken && !childrenArray[i].blocken)
									{
									childrenArray[i].etat = 1;
									childrenArray[i-1].etat = 0;
									childrenArray[i-1].blocken = 0;
									}
								else
									{
									childrenArray[i-1].blocken = 1;
									}
							}
							else
							{
								score.value++;
								frequence--;
								
										if (Math.random() > 0.7)
											{
												probEnfantArray.push(1);
											}	
											else
											{
												probEnfantArray.push(0);
											}
																	
								childrenArray[i-1].etat = 0;
							}
						}

						
					}
			}
		
			
}

function moveCars () {
  for (i = 0; i < carArray.length; i++) {

    for (e = carArray[i].length; e > 0; e--)
      if (carArray[i][e - 1].etat == 1) {

        if (e != carArray[i].length) {
          carArray[i][e].etat = 1;
        }

        carArray[i][e - 1].etat = 0;
      }

  }
}
function choppe()
{
	if (!choppeBool)
		{
			if (childrenArray[characterPosition+8].etat == 1)
				{
					choppeBool = true;
					childrenArray[characterPosition+8].taken = 1;
				}
		}
	else
		{
					choppeBool = false;
					childrenArray[characterPosition+8].taken = 0;
					childrenArray[characterPosition+7].blocken = 0;
				
		}
}
function addLimit (variable, valeur, limite) {
  variable += valeur;
  if (variable >= limite) variable -= limite;
  return variable;
}

function moveCharacterUp() {
  if (characterPosition < characterArray.length -1) 
  	{
	  	if (choppeBool == false) 
	  	 	{
		  	 	characterPosition++;
		  	}
		  else
		  	{
		  		if (childrenArray[characterPosition+9].etat == 0)
		  			{
		  				
		  				childrenArray[characterPosition+9].etat = 1;
		  				childrenArray[characterPosition+8].etat = 0;
		  				childrenArray[characterPosition+9].taken = 1;
		  				childrenArray[characterPosition+8].taken = 0;
		  				childrenArray[characterPosition+7].blocken = 0;
		  				childrenArray[characterPosition+6].blocken = 0;
		  				characterPosition++;
		  			}
		  	}
	}
 // soundsArray[1].play();
persoSon.currentTime=0;
 persoSon.play();
}

function moveCharacterDown () {
  if (characterPosition > 0)
  	 {
	  	 if (choppeBool == false) 
	  	 	{
		  	 	characterPosition--;
		  	}
		  else
		  	{
		  		if (childrenArray[characterPosition+7].etat == 0)
		  			{
		  				childrenArray[characterPosition+7].etat = 1;
		  				childrenArray[characterPosition+8].etat = 0;
		  				childrenArray[characterPosition+7].taken = 1;
		  				childrenArray[characterPosition+8].taken = 0;
		  				characterPosition--;
		  			}
		  	}
	 }

//  soundsArray[1].play();
persoSon.currentTime=0;
persoSon.play();
}

/**
 * Enlève une vie et prépare l'arrêt du déplacement des objets de jeu
 */
function oneMoreDeath() {
  if (!lifeLost) {
   		looseSon.currentTime=0;
    	looseSon.play();
    nbDeaths++;
    lifeLost = true;
    if (nbDeaths == 3) {
      //alert("GAME OVER !");
    }
  }
}

function drawDead() {
  console.log("Draw dead", victimPerso);
  victimPerso.etat = 0;
  deadPerso.etat = 1
}

function shuffle(a)
{
   var j = 0;
   var valI = '';
   var valJ = valI;
   var l = a.length - 1;
   while(l > -1)
   {
		j = Math.floor(Math.random() * l);
		valI = a[l];
		valJ = a[j];
		a[l] = valJ;
		a[j] = valI;
		l = l - 1;
	}
	return a;
 }
