class Question
{
  constructor()
  {
    this.input = createInput("Enter your name here");
    this.input1 = createInput("Enter correct option no.");
    this.title = createElement('h2');
    this.question = createElement('h4');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide()
  {
    this.input.hide();
    this.input1.hide();
    this.title.hide();
  }

  display()
  {
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.input.position(150, 230);
    this.input1.position(370, 230);

    this.question.html("Question:- Who is the oldest president of America? ");
    this.question.position(150, 80);
    this.option1.html("1: Donald Trump ");
    this.option1.position(150, 100);
    this.option2.html("2: Barrack Obama ");
    this.option2.position(150, 120);
    this.option3.html("3: Joe Biden ");
    this.option3.position(150, 140);
    this.option4.html("4: Bill Clinton ");
    this.option4.position(150, 160);

    //this.input1.position(150, 230);
  }
}