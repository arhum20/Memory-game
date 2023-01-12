class losescreen extends endscreens{
    constructor(x,y){
      super(x,y);
    }
    display(){
      push()
      super.display()
      pop()
      this.displayText()
    }
    displayText(){
    textSize(100)
    text('You Lost!',100,200)
    }
  }