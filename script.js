let lastChecked = 0;
let winScreen;
let squaresLocations = [];
let clickLocations = []
let loseScreen;

function setup() {
  winScreen = new winscreen(0,0)
  loseScreen = new losescreen(0,0)
  createCanvas(1500, 1000)
  randomNumbers()
  puzzle[a][b] = 1
  }
function draw() {
  if (millis() - lastChecked > 500 && millis() < 2000) {
    displayBoard()
    randomNumbers()
    lastChecked = millis();
  }
  if (millis() > 2000 && clickLocations.length<3) {
    clearBoard()
  }
  if(clickLocations.length == 3 && checkWin() === true){
    winScreen.display()
  }
  else if(clickLocations.length == 3 && checkWin() === false){
    loseScreen.display()
  }
}
function randomNumbers() {
  a = random(0, 3)
  b = random(0, 3)
  a = round(a)
  b = round(b)

  squaresLocations.push([b,a]);

}
let puzzle = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

function displayBoard() {
  for (let r = 0; r < puzzle.length; r++) {
    for (let c = 0; c < puzzle[r].length; c++) {
      fill('white')
      rect(100 + 100 * c, 100 + 100 * r, 100)
      fill(100, 100, 100)
      rect(100 + 100 * b, 100 + 100 * a, 100)
    }
  }
}
function clearBoard() {
  for (let r = 0; r < puzzle.length; r++) {
    for (let c = 0; c < puzzle[r].length; c++) {
      fill('white')
      rect(100 + 100 * c, 100 + 100 * r, 100)
    }
  }
}
function mousePressed() {
  clickSquares();
  if(clickLocations.length == 3){
    console.log(checkWin())
  }
}
function checkWin(){
  if(squaresLocations[0][0] == clickLocations[0][0] && squaresLocations[0][1] == clickLocations[0][1] && squaresLocations[1][0] == clickLocations[1][0] && squaresLocations[1][1] == clickLocations[1][1] && squaresLocations[2][0] == clickLocations[2][0]){
    return true
  }
  return false
}
  
function clickSquares() {
  if (mouseIsPressed && mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
    fill(100, 100, 100)
    rect(100, 100, 100)
    clickLocations.push([0, 0])

  }
  if (mouseIsPressed && mouseX > 200 && mouseX < 300 && mouseY > 100 && mouseY < 200) {
    fill(100, 100, 100)
    rect(200, 100, 100)
    clickLocations.push([1, 0])
  }
  if (mouseIsPressed && mouseX > 300 && mouseX < 400 && mouseY > 100 && mouseY < 200) {
    fill(100, 100, 100)
    rect(300, 100, 100)
    clickLocations.push([2, 0])
  }
  if (mouseIsPressed && mouseX > 400 && mouseX < 500 && mouseY > 100 && mouseY < 200) {
    fill(100, 100, 100)
    rect(400, 100, 100)
    clickLocations.push([3, 0])
  }
  if (mouseIsPressed && mouseX > 100 && mouseX < 200 && mouseY > 200 && mouseY < 300) {
    fill(100, 100, 100)
    rect(100, 200, 100)
    clickLocations.push([0, 1])
  }
  if (mouseIsPressed && mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300) {
    fill(100, 100, 100)
    rect(200, 200, 100)
    clickLocations.push([1, 1])
  }
  if (mouseIsPressed && mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300) {
    fill(100, 100, 100)
    rect(300, 200, 100)
    clickLocations.push([2, 1])
  }
  if (mouseIsPressed && mouseX > 400 && mouseX < 500 && mouseY > 200 && mouseY < 300) {
    fill(100, 100, 100)
    rect(400, 200, 100)
    clickLocations.push([3, 1])
  }
  if (mouseIsPressed && mouseX > 100 && mouseX < 200 && mouseY > 300 && mouseY < 400) {
    fill(100, 100, 100)
    rect(100, 300, 100)
    clickLocations.push([0, 2])
  }
  if (mouseIsPressed && mouseX > 200 && mouseX < 300 && mouseY > 300 && mouseY < 400) {
    fill(100, 100, 100)
    rect(200, 300, 100)
    clickLocations.push([1, 2])
  }
  if (mouseIsPressed && mouseX > 300 && mouseX < 400 && mouseY > 300 && mouseY < 400) {
    fill(100, 100, 100)
    rect(300, 300, 100)
    clickLocations.push([2, 2])
  }
  if (mouseIsPressed && mouseX > 400 && mouseX < 500 && mouseY > 300 && mouseY < 400) {
    fill(100, 100, 100)
    rect(400, 300, 100)
    clickLocations.push([3, 2])
  }
  if (mouseIsPressed && mouseX > 100 && mouseX < 200 && mouseY > 400 && mouseY < 500) {
    fill(100, 100, 100)
    rect(100, 400, 100)
    clickLocations.push([0, 3])
  }
  if (mouseIsPressed && mouseX > 200 && mouseX < 300 && mouseY > 400 && mouseY < 500) {
    fill(100, 100, 100)
    rect(200, 400, 100)
    clickLocations.push([1, 3])
  }
  if (mouseIsPressed && mouseX > 300 && mouseX < 400 && mouseY > 400 && mouseY < 500) {
    fill(100, 100, 100)
    rect(300, 400, 100)
    clickLocations.push([2, 3])
  }
  if (mouseIsPressed && mouseX > 400 && mouseX < 500 && mouseY > 400 && mouseY < 500) {
    fill(100, 100, 100)
    rect(400, 400, 100)
    clickLocations.push([3, 3])

  }
}
