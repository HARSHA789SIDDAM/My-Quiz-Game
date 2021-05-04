class Question {
  constructor() {
    this.greeting = createElement('h2');
    this.input = createInput("Name");
    this.button = createButton('submit');
    this.title = createElement('h2');
    this.question = createElement("h2");
    this.label = createElement("h2");
    
    this.input1 = createInput("");
    this.option1 = createElement("h2");
    this.option2 = createElement("h2");

  }

  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display() {
    this.title.html("QUIZ");
    this.title.position(350, 0);

    this.question.html("QUESTION :- Identify the right syntax to make the code execution wait untill the API call gets completed")
    this.question.position(150, 80);
    textSize(10);
    this.option1.html("1 : await fetch(''appURLhere'')");
    this.option1.position(150, 150);
    this.option2.html("2 : await get(''appURLhere'')");
    this.option2.position(150, 200);
    this.input.position(150, 280);
    this.input1.position(450, 250);
    this.button.position(300, 310);
    this.label.html("Answer:")
    this.label.position(350, 225);

    this.button.mousePressed(() => {
      this.input.hide();
      this.input1.hide();
      this.button.hide();
      player.name = this.input.value();
      player.answer= this.input1.value();
      playerCount+= 1
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello : " + player.name);
      this.greeting.position(170, 260);
    });

  }



}