run()

function run () {
  ctx.drawImage(messArray[0], 0, 0);
  if (compteurdImages == compteurdImagesChargees) {
    drawAll();
    metronome();
  }
  else {
    drawChargement();
  }
  setTimeout(run, 30);

}

/**
 * Déplacement et apparition rythmés des objets de jeu (enfants, voitures)
 */
function metronome () {
  
  timer += 30;
  if (!lifeLost) {
    if (timer >= frequence) {
      moveCars();
      checkDefeat();
      timer = 0;
      // Apparition d'une nouvelle voiture
      if (Math.random() > 0.9) {
        carArray[Math.round(Math.random(0.5) * 3)][0].etat = 1;
      }
      if (childrenBool) {
        moveChildrens();
        //enfantSon.currentTime=0;
    	//enfantSon.play();

        // Apparition d'un nouvel enfant
        if (probEnfantArray[curseurDifficulte] == 1) {
          childrenArray[0].etat = 1;
        }
        curseurDifficulte++
        if (curseurDifficulte == probEnfantArray.length-1)
        	{
        		curseurDifficulte = 0;
        		//console.log("sort");
        		probEnfantArray = shuffle(probEnfantArray);
        	} 
        

        childrenBool = false;
      }
      else {
        childrenBool = true;
      }

    }
  } else {
    drawDead();

    // La partie recommence
    if (timer >= frequence * 4.4) {
      lifeLost = false;
      timer = 0;
      dangerousCar.etat = 0;
      victimChild.etat = 0;
      victimChild.taken = 0;
      victimPerso.etat = 1;
      deadPerso.etat = 0;
      choppeBool = false;
      persoEcrase = false;
    }
  }
}

/**
 * Vérification des collisions, qui mènent à la défaite
 */
function checkDefeat() {
  // On vérifie si la voiture du bas a passé le passage piéton alors qu'un enfant ou le personnage y était
  if (carArray[0][2].etat == 1 &&
    (characterPosition == 1 || childrenArray[9].etat == 1)
    ) {
    dangerousCar = carArray[0][2];
    if (childrenArray[9].etat == 1) {
      victimChild = childrenArray[9];
    }
    if (characterPosition == 1) {
      persoEcrase = true;
      victimPerso = characterPosition;
      deadPerso = DieArray[0];
    }
    oneMoreDeath();
  }

  // On vérifie si la 2ème voiture du bas a passé le passage piéton alors qu'un enfant ou le personnage y était
  if (carArray[1][2].etat == 1 &&
    (characterPosition == 2 || childrenArray[10].etat == 1)
    ) {
    dangerousCar = carArray[1][2];
    if (childrenArray[10].etat == 1) {
      victimChild = childrenArray[10];
    }
    if (characterPosition == 2) {
      persoEcrase = true;
      victimPerso = characterPosition;
      deadPerso = DieArray[1];
    }
    oneMoreDeath();
  }

  // On vérifie si la 2ème voiture du haut a passé le passage piéton alors qu'un enfant ou le personnage y était
  if (carArray[2][2].etat == 1 &&
    (characterPosition == 5 || childrenArray[13].etat == 1)
    ) {
    dangerousCar = carArray[2][2];
    if (childrenArray[13].etat == 1) {
      victimChild = childrenArray[13];
    }
    if (characterPosition == 5) {
      persoEcrase = true;
      victimPerso = characterPosition;
      deadPerso = DieArray[2];
    }
    oneMoreDeath();
  }

  // On vérifie si la voiture tout en haut a passé le passage piéton alors qu'un enfant ou le personnage y était
  if (carArray[3][2].etat == 1 &&
    (characterPosition == 6 || childrenArray[14].etat == 1)
    ) {
    dangerousCar = carArray[3][2];
    if (childrenArray[14].etat == 1) {
      victimChild = childrenArray[14];
    }
    if (characterPosition == 6) {
      persoEcrase = true;
      victimPerso = characterPosition;
      deadPerso = DieArray[3];
    }
    oneMoreDeath();
  }
}