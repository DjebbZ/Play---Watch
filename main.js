run()

function run () {
  ctx.drawImage(messArray[0], 0, 0);
  if (compteurdImages == compteurdImagesChargees) {
    drawAll();
    metronome();
    checkDefeat();
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

  if (!lifeLost) {
    timer += 30;
    if (timer >= frequence) {
      moveCars();

      // Apparition d'une nouvelle voiture
      if (Math.random() > 0.9) {
        carArray[Math.round(Math.random(0.5) * 3)][0].etat = 1;
      }
      if (childrenBool == true) {
        moveChildrens();
        soundsArray[0].play();

        // Apparition d'un nouvel enfant
        if (Math.random() > 0.9) {
          childrenArray[0].etat = 1;
        }
        childrenBool = false;
      }
      else {
        childrenBool = true;
      }
      timer = 0;
    }
  } else {

    if (nbLives == 0) {
      alert("GAME OVER !");
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
    if (!lifeLost) {
      console.log("GAME OVER route 1 !");
      nbLives--;
      lifeLost = true;
    }
  }

  // On vérifie si la 2ème voiture du bas a passé le passage piéton alors qu'un enfant ou le personnage y était
  if (carArray[1][2].etat == 1 &&
    (characterPosition == 2 || childrenArray[10].etat == 1)
    ) {
    if (!lifeLost) {
      console.log("GAME OVER route 2 !");
      nbLives--;
      lifeLost = true;
    }
  }

  // On vérifie si la 2ème voiture du haut a passé le passage piéton alors qu'un enfant ou le personnage y était
  if (carArray[2][2].etat == 1 &&
    (characterPosition == 5 || childrenArray[13].etat == 1)
    ) {
    if (!lifeLost) {
      console.log("GAME OVER route 3 !");
      nbLives--;
      lifeLost = true;
    }
  }

  // On vérifie si la voiture tout en haut a passé le passage piéton alors qu'un enfant ou le personnage y était
  if (carArray[3][2].etat == 1 &&
    (characterPosition == 6 || childrenArray[14].etat == 1)
    ) {
    if (!lifeLost) {
      console.log("GAME OVER route 4 !");
      nbLives--;
      lifeLost = true;
    }
  }
}