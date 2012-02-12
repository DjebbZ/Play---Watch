/**
 * @file event.js
 * Gestion des évènements  et interactions utilisateur
 */

canvas.ontouchstart = function (e) {
  clic(e || window.event);
}

canvas.onmousemove = function (e) {
  mousemove(e || window.event);
}

function clic (event) {
  var position;
  if (compteurdImages == compteurdImagesChargees) {
    // BlackBerry specific
    // @see : https://bdsc.webapps.blackberry.com/html5/apis/Element.html#event:ontouchstart
    // @see : http://docs.blackberry.com/en/developers/deliverables/27297/Touch_Objects_1593432_11.jsp#TouchList_1590067_11
    // @see : http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Sample-Code-SketchPad-Application/ta-p/614077
    if (event.touches && event.changedTouches && event.targetTouches) {
      var touched = event.changedTouches[0];
      position = {x : touched.clientX, y : touched.clientY};
    } else { // other browsers
      position = {x : (event.offsetX || event.layerX), y : (event.offsetY || event.layerY)};
    }

    if (
      (position.x >= boutonUp.x && position.x <= (boutonUp.x + boutonUp.width))
        &&
        (position.y >= boutonUp.y && position.y <= (boutonUp.y + boutonUp.width))
        &&
        !lifeLost
      ) {
      moveCharacterUp();
    }

    if (
      (position.x >= boutonDown.x && position.x <= (boutonDown.x + boutonDown.width))
        &&
        (position.y >= boutonDown.y && position.y <= (boutonDown.y + boutonDown.width))
        &&
        !lifeLost
      ) {
      moveCharacterDown();
    }
  }
}

function mousemove (event) {
  position = {x : (event.offsetX || event.layerX), y : (event.offsetY || event.layerY)};
  event.preventDefault();
  return false;
  if (compteurdImages == compteurdImagesChargees) {

  }
}

function keypress (event) {
  if (event.keyCode == 38 && !lifeLost) {
    moveCharacterUp();
  }
  if (event.keyCode == 40 && !lifeLost) {
    moveCharacterDown();
  }
  if (event.keyCode == 86) {
  	choppe();
  }

}