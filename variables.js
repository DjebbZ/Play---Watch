var canvas = document.getElementById("canvas");
canvas.width = 1024;
canvas.height = 512;
var ctx = canvas.getContext('2d');
var persoSon = document.getElementById("persoSon");
var enfantSon = document.getElementById("enfantSon");
var looseSon = document.getElementById("looseSon");
if (navigator.language == "fr") {
  var langue = "fr"
} else {
  var langue = "en"
}

var upPressed = false;
var downPressed = false;
var catchPressed = false;
var mode = "menu"; // chargement || menu || jeu;
var timer = 0;
var choppeBool = false;
var nbDeaths = 0;
var lifeLost = false;
var rectangle = false;
var curseurDifficulte = 0;
var boutonUp = {
  x      : 48,
  y      : 215,
  width  : 90,
  height : 90
};
var boutonDown = {
  x      : 48,
  y      : 348,
  width  : boutonUp.width,
  height : boutonUp.height
};
var boutonCatch = {
  x      : 892,
  y      : 296,
  width  : boutonUp.width,
  height : boutonUp.height
};

var score = {
  value : 0,
  x     : 720,
  y     : 92
};

var dangerousCar = 0;
var victimChild = 0;
var voisinVictimChild = 0;
var victimPerso = 0;
var deadPerso = 0;
var persoEcrase = false;

var childrenBool = true;
var characterPosition = 0;
// 8 positions du personnage, en partant du bas.
var characterArray = new Array(
  {x : 500, y : 380}, // caniveau
  {x : 500, y : 330}, // route 1 <=> charPos = 1
  {x : 500, y : 285}, // route 2 <=> charPos = 2
  {x : 500, y : 240}, // terre-plein 1
  {x : 500, y : 190}, // terre-plein 2
  {x : 500, y : 145}, // route 3 <=> charPos = 5
  {x : 500, y : 100}, // route 4 <=> charPos = 6
  {x : 500, y : 55} // arrivée
);

// Array des 4 positions pour chaque voiture, en partant de bas en haut
var carArray = new Array(
  [
    // voiture du bas
    {etat : 1, x : 250, y : 360}, // entrée
    {etat : 0, x : 390, y : 360}, // avant passage
    {etat : 0, x : 560, y : 360}, // après passage
    {etat : 0, x : 705, y : 360} // sortie
  ],
  [
    {etat : 0, x : 250, y : 300}, // entrée
    {etat : 0, x : 390, y : 300}, // avant passage
    {etat : 0, x : 560, y : 300}, // après passage
    {etat : 0, x : 705, y : 300} // sortie
  ],
  [
    {etat : 0, x : 705, y : 180}, // entrée
    {etat : 0, x : 560, y : 180}, // avant passage
    {etat : 0, x : 390, y : 180}, // après passage
    {etat : 0, x : 250, y : 180} // sortie
  ],
  [
    // voiture du haut
    {etat : 0, x : 705, y : 120}, // entrée
    {etat : 0, x : 560, y : 120}, // avant passage
    {etat : 0, x : 390, y : 120}, // après passage
    {etat : 0, x : 250, y : 120} // sortie
  ]
);

// 16 Positions des enfants, en partant du trottoir de départ à l'arrivée
var childrenArray = new Array(

{etat: 1, x: 782, y: 435, taken: 0, blocken: 0},
{etat: 0, x: 740, y: 435, taken: 0, blocken: 0},
{etat: 0, x: 695, y: 435, taken: 0, blocken: 0},
{etat: 0, x: 655, y: 435, taken: 0, blocken: 0},
{etat: 1, x: 610, y: 435, taken: 0, blocken: 0},
{etat: 0, x: 565, y: 435, taken: 0, blocken: 0},
{etat: 0, x: 522, y: 435, taken: 0, blocken: 0},
{etat: 0, x: 480, y: 435, taken: 0, blocken: 0},
{etat: 0, x: 480, y: 390, taken: 0, blocken: 0},// caniveau
{etat: 0, x: 480, y: 345, taken: 0, blocken: 0},// route 1
{etat: 0, x: 480, y: 300, taken: 0, blocken: 0},// route 2
{etat: 0, x: 480, y: 255, taken: 0, blocken: 0},// terre-plein 1
{etat: 0, x: 480, y: 210, taken: 0, blocken: 0},// terre-plein 2
{etat: 0, x: 480, y: 160, taken: 0, blocken: 0},// route 3
{etat: 0, x: 480, y: 120, taken: 0, blocken: 0},// route 4
{etat: 0, x: 480, y: 70, taken: 0, blocken: 0} //arrivée
);

// Positions de morts du perso
var DieArray = new Array(
  {etat: 0, x: 590, y: 385},
  {etat: 0, x: 590, y: 325},
  {etat: 0, x: 390, y: 205},
  {etat: 0, x: 390, y: 145}
);

var probEnfantArray = new Array(1, 1, 0, 0);
for (i=0; i<6; i++)
{
	probEnfantArray.push(0);
}
probEnfantArray = shuffle(probEnfantArray);
