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

canvas.ontouchend = function (e) {
	upPressed = false;
	downPressed = false;
	catchPressed = false;
}
function clic (event) {
  var position;
  if (compteurdImages == compteurdImagesChargees) {
    // BlackBerry specific
    // @see : https://bdsc.webapps.blackberry.com/html5/apis/Element.html#event:ontouchstart
    // @see : http://docs.blackberry.com/en/developers/deliverables/27297/Touch_Objects_1593432_11.jsp#TouchList_1590067_11
    // @see : http://docs.blackberry.com/en/developers/deliverables/13222/CS_Adding_simple_touch_event_handling_to_app_705068_11.jsp
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
      upPressed = true;
      moveCharacterUp();
    }

    if (
      (position.x >= boutonDown.x && position.x <= (boutonDown.x + boutonDown.width))
        &&
        (position.y >= boutonDown.y && position.y <= (boutonDown.y + boutonDown.width))
        &&
        !lifeLost
      ) {
      downPressed = true;
      moveCharacterDown();
    }

    if (
      (position.x >= boutonDown.x && position.x <= (boutonCatch.x + boutonCatch.width))
        &&
        (position.y >= boutonDown.y && position.y <= (boutonCatch.y + boutonCatch.width))
        &&
        !lifeLost
      ) {
      catchPressed = true;
      choppe();
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
function keyup() {
	upPressed = false;
	downPressed  = false;
	catchPressed = false;
}

function keypress (event) {
  if (event.keyCode == 38 && !lifeLost) {
  	upPressed = true;
    moveCharacterUp();
  }
  if (event.keyCode == 40 && !lifeLost) {
  	downPressed = true;
    moveCharacterDown();
  }
  if (event.keyCode == 86) {
  	catchPressed = true;
  	choppe();
  }

}