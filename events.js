/**
 * @file event.js
 * Gestion des évènements  et interactions utilisateur
 */

canvas.onmousedown = function (e) {
  clic(e || window.event);
}
canvas.onmousemove = function (e) {
  mousemove(e || window.event);
}


function clic (event) {
  if (compteurdImages == compteurdImagesChargees) {
    position = {x : (event.offsetX || event.layerX), y : (event.offsetY || event.layerY)};

    if (
      (position.x >= boutonUp.x && position.x <= (boutonUp.x + boutonUp.width))
        &&
        (position.y >= boutonUp.y && position.y <= (boutonUp.y + boutonUp.width))
      ) {
      moveCharacterUp();
    }

    if (
      (position.x >= boutonDown.x && position.x <= (boutonDown.x + boutonDown.width))
        &&
        (position.y >= boutonDown.y && position.y <= (boutonDown.y + boutonDown.width))
      ) {
      moveCharacterDown();
    }
  }
}

function mousemove (event) {
  position = {x : (event.offsetX || event.layerX), y : (event.offsetY || event.layerY)};
  return false;
  if (compteurdImages == compteurdImagesChargees) {

  }
}

function keypress (event) {
  if (event.keyCode == 38) {
    moveCharacterUp();
  }
  if (event.keyCode == 40) {
    moveCharacterDown();
  }
  if (event.keyCode == 86) {
  }

}