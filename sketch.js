var gameState = 0;
var points = 0;
var contestant, allcontestants, contestantCount;
var quiz, question;
var database;

function setup()
{
  canvas = createCanvas(850, 400);

  database = firebase.database();
  
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw()
{
  background("pink");

  if (contestantCount === 4)
  {
    quiz.update(1);
  }

  if (gameState === 1)
  {
    clear();
    quiz.play();
  }
}
