class Contestant 
{
  constructor()
  {
    this.button = createButton("Submit");

    this.name = null;
    this.points = null;
  }

  display()
  {
    this.button.position(300, 80);

    this.button.mousePressed(()=>
    {
      this.title.hide();
      this.input.hide();
      this.input1.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    })
  }

  getCount()
  {
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>
    {
      contestantCount = data.val();
    })
  }
  
  updateCount(count)
  {
    database.ref('/').update
    ({
       contestantCount: count
    })
  }
  
  update()
  {
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set
    ({
       name: this.name,
       points: this.points
    })
  }
  
  static getcontestantInfo()
  {
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>
    {
      allcontestants = data.val();
    })
  }
}