class winscreen extends endscreens{
    constructor(x,y){
      super(x,y)
    }
    display(){
      push()
      super.display()
      pop()
      this.displayText()
    }
    displayText(){
      textSize(100)
      text('You Won!',100,200)
    }
  }