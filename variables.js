var canvas = document.getElementById("canvas");
canvas.height = 600;
canvas.width = 750;
var ctx = canvas.getContext('2d');
if (navigator.language == "fr") { var langue = "fr"} else { var langue = "en"}

mode = "menu"; // chargement || menu || jeu;

var characterPosition = 0;
var characterArray = new Array(
{x: 300, y: 400},
{x: 300, y: 350},
{x: 300, y: 300},
{x: 300, y: 250},
{x: 300, y: 200}
)
var carArray = new Array(
[
{etat: 0, x: 50, y:50},
{etat: 0, x: 100, y:50},
{etat: 0, x: 150, y:50},
{etat: 0, x: 200, y:50}
],
[
{etat: 0, x: 50, y:150},
{etat: 0, x: 100, y:150},
{etat: 0, x: 150, y:150},
{etat: 0, x: 200, y:150}
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
