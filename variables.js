var canvas = document.getElementById("canvas");
canvas.width = 1024;
canvas.height = 600;
var ctx = canvas.getContext('2d');
if (navigator.language == "fr") { var langue = "fr"} else { var langue = "en"}

mode = "menu"; // chargement || menu || jeu;

var characterPosition = 0;
var characterArray = new Array(
{x: 490, y: 410},
{x: 490, y: 350},
{x: 490, y: 300},
{x: 490, y: 250},
{x: 490, y: 200},
{x: 490, y: 150},
{x: 490, y: 100}
)
var carArray = new Array(
[
{etat: 0, x: 280, y:345},
{etat: 0, x: 420, y:345},
{etat: 0, x: 560, y:345},
{etat: 0, x: 700, y:345}
],
[
{etat: 0, x: 280, y:400},
{etat: 0, x: 420, y:400},
{etat: 0, x: 560, y:400},
{etat: 0, x: 700, y:400}
],
[
{etat: 0, x: 280, y:210},
{etat: 0, x: 420, y:210},
{etat: 0, x: 560, y:210},
{etat: 0, x: 700, y:210}
],
[
{etat: 0, x: 280, y:155},
{etat: 0, x: 420, y:155},
{etat: 0, x: 560, y:155},
{etat: 0, x: 700, y:155}
]
)

var childrenArray = new Array(
{etat: 0, x: 400, y: 400},
{etat: 0, x: 350, y: 400},
{etat: 0, x: 300, y: 400},
{etat: 0, x: 250, y: 400},
{etat: 0, x: 250, y: 350},
{etat: 0, x: 250, y: 300},
{etat: 0, x: 250, y: 250},
{etat: 0, x: 250, y: 200}
)
