var compteurdImages = 0;
var compteurdImagesChargees = 0;

var messArray = new Array();
initialisationDesImages(messArray, ["fond.png", "button.png"]);

var elementsArray = new Array();
initialisationDesImages(elementsArray, ["perso.png", "enfant.png", "carright.png", "carleft.png"])

var soundsArray = new Array(
  new buzz.sound("sounds/enfant", {
    formats : [ "ogg", "mp3", "wav" ]
  })
)