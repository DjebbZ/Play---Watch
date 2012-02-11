var canvas = document.getElementById("canvas");
canvas.width = 1024;
canvas.height = 512;
var ctx = canvas.getContext('2d');
if (navigator.language == "fr") { var langue = "fr"} else { var langue = "en"}
score = 0;
mode = "menu"; // chargement || menu || jeu;
var timer = 0;

var childrenBool = true;
var characterPosition = 0;
var characterArray = new Array(
{x: 500, y: 380},
{x: 500, y: 330},
{x: 500, y: 285},
{x: 500, y: 240},
{x: 500, y: 190},
{x: 500, y: 145},
{x: 500, y: 100},
{x: 500, y: 55}
)
var carArray = new Array(
[
{etat: 1, x: 250, y:360},
{etat: 0, x: 390, y:360},
{etat: 0, x: 560, y:360},
{etat: 0, x: 705, y:360}
],
[
{etat: 0, x: 250, y:300},
{etat: 0, x: 390, y:300},
{etat: 0, x: 560, y:300},
{etat: 0, x: 705, y:300}
],
[
{etat: 0, x: 705, y:180},
{etat: 0, x: 560, y:180},
{etat: 0, x: 390, y:180},
{etat: 0, x: 250, y:180}
],
[
{etat: 0, x: 705, y:120},
{etat: 0, x: 560, y:120},
{etat: 0, x: 390, y:120},
{etat: 0, x: 250, y:120}
]
)

var childrenArray = new Array(
{etat: 1, x: 782, y: 435},
{etat: 0, x: 740, y: 435},
{etat: 0, x: 695, y: 435},
{etat: 0, x: 655, y: 435},
{etat: 0, x: 610, y: 435},
{etat: 0, x: 565, y: 435},
{etat: 0, x: 522, y: 435},
{etat: 0, x: 480, y: 435},
{etat: 0, x: 480, y: 390},
{etat: 0, x: 480, y: 345},
{etat: 0, x: 480, y: 300},
{etat: 0, x: 480, y: 255},
{etat: 0, x: 480, y: 210},
{etat: 0, x: 480, y: 160},
{etat: 0, x: 480, y: 120},
{etat: 0, x: 480, y: 70}
)
