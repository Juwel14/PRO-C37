class Quiz
{
  constructor() {}

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data)
    {
      gameState = data.val();
    })
  }

  update(state)
  {
    database.ref('/').update
    ({
       gameState: state
    })
  }

  async start()
  {
    if(gameState === 0)
    {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists())
      {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }

      this.question = new Question();
      this.question.display();
    }
  }

  play()
  {
    this.question.hide();
    this.title.hide();
    this.input.hide();
    this.input1.hide();
    this.button.hide();

    background("yellow");

    textSize(20);
    text("Result of the Quiz", 350, 30);

    Contestant.getContestantInfo();

    if(allContestants !== undefined)
    {
      var display_position = 130;

      for(var plr in allContestants)
      {
        var correctAns = "2";
        if (correctAns === allContestants[plr].answer)
          fill("green");
        else
          fill("red");

        display_position += 20;

        textSize(20);
        fill("blue");
        text("*NOTE: Contestant who answered correct are highlighted in green color!", 150, 230);
        
        textSize(15);
        text(allContestants[plr].name + ": " + allContestantss[plr].distance, 120,display_position)
      }
    }
  }
}