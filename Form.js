class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('submit');
      this.title = createElement('h2');
      this.Question = createElement("h2");
      this.input1 = createInput("answer");
      this.option1 = createElement("h2");
      this.option2 = createElement("h2");
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("QUIZ");
      this.title.position(displayWidth/2 - 30, 0);
      this.question.html("QUESTION :- Identify the right syntax to make the code execution wait untill the API call gets completed")
      this.question.position(displayWidth/2+20, displayHeight/2 - 30);
      this.option1.html("1 : await fetch('appURLhere')");
      this.option1.position(displayWidth/2+20, displayHeight/2);
      this.option2.html("2 : await get('appURLhere')");
      this.option2.position(displayWidth/2+20, displayHeight/2 + 20);
      this.input1 = position(displayWidth/2+20, displayHeight/2 + 60);
      this.input.position(displayWidth/2 - 40 , displayHeight/2 + 60);
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.input1.hide();
        this.button.hide();
        player.name = this.input.value();
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      });
  
    }
  }