//1080x720
//system_runner; change canvas size // vert or hor
//system_settings; debugFastRefresh to have countdown delay record 

let firstRun = true
let carFrameImg;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    carFrameImg = loadImage('assets/CarFrame.png');
    buildingsLayer1Img = loadImage('assets/buildingsLayer1.png');
    buildingsLayer2Img = loadImage('assets/buildingsLayer2.png');
    buildingsLayer3Img = loadImage('assets/buildingsLayer3.png');
    moonImg = loadImage('assets/moon.png');

    firstRun = false
  }
  console.log(counter);

  background(255)
  textFont('Helvetica'); // CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  noFill()


  let purple = color(127, 37, 213)
  let pink = color(223, 73, 133)  
  let yellow = color(240, 197, 5)
  let red = color(204, 14, 14)
  let blue = color(36,170,220)
  let blushPink = color(243,151,135)
  let orange = color(234,82,60)
  let navy = color(26,36,54)
  let black = color(0)
  let grey = color(120)
  let SunStrokeColor = lerpColor(pink, purple, 0)


//draw building layer behind sun
// buildingsLayer1Img.resize(1080, 220)
// image(buildingsLayer1Img, 0, 80);

//draw trial buildings for background
// trialBuildingsImg.resize(1080, 320)
// image(trialBuildingsImg, 0, 190);

//draw building layers
// buildingsLayer2Img.resize(1080, 220)
// image(buildingsLayer2Img, 0, 200);







//
//
//if statement controlling what is shown in each part of the song chronologically according to counter variable
//intro - verse 1
if(counter <= 135){
  //gradient background
  let midPPLerp = map(vocal, 0, 100, 0, 1)
  let midPinkPurple = lerpColor(pink, purple, 1) //make 0.85 midPPLerp so it visualises vocals

  strokeWeight(3)
  let backgroundGradient = 1000

  for(let i=0; i<backgroundGradient; i++){
    let gradientAmount = map(i, 0, backgroundGradient, 0, 1.5)
    let strokeColor = lerpColor(purple, pink, gradientAmount)

    stroke(strokeColor)
    line(0, 100+i-100, width, 100+i-100)
  }



  //retrolines and colour changing with drum
push()

let drumMap = map(drum, 0, 100, 0, 90)
let lineLength = 1080
let lineStart = 0
let lineEnd = lineStart+lineLength

strokeWeight(7)
let DrumColorMap = map(drum, 0, 100, 0,1) /// all one color, color change based on Drum volume

for(let i=1; i<drumMap; i++){
let lineStep = i*8 - 5;
let gradientAmount = map(i, 0, drumMap, 0,1) // gradient of lines. colour change based on how far down the page the lines are
let LinesStrokeColor = lerpColor(purple, pink, gradientAmount) 
stroke(LinesStrokeColor)
line(lineStart, lineStep, lineEnd, lineStep)
}
pop()



//sun
for(let i=0; i<backgroundGradient; i++){
  let gradientAmount = map(i, 0, backgroundGradient, 0,1)
  let SunStrokeColor = lerpColor(red, yellow, gradientAmount)

  stroke(SunStrokeColor)
  ellipse(width/2, height/4+75, i/4)
}


// //moon
// moonImg.resize(250, 250)
// image(moonImg, width/2-125, 130);


//draw horizon 
stroke(0);
fill(180);
beginShape();
vertex(0, height);
vertex(0, height/2-90);
vertex(width/2-40, height/2-65);
vertex(width/2+40, height/2-65);
vertex(width, height/2-90);
vertex(width, height);
endShape();



//draw road
stroke(0);
fill(100);
beginShape();
vertex(width/2-40, height/2-65);
vertex(width/2+40, height/2-65);
vertex(width, height/2+50);
vertex(width, height);
vertex(0, height);
vertex(0, height/2+210)
vertex(width/2-40, height/2-65);
endShape()
 
stroke(255);
strokeWeight(2);
line(width/2+500, height, width/2, height/2-65)






 // display "words"
 stroke(255);
 textAlign(CENTER);
 textSize(other);
 text(words, width/2, height/3);  



 //car frame
carFrameImg.resize(1080, 720)
image(carFrameImg, 0, 0);


//Wave visualiser
push();
translate(600, 400);
scale(0.3);

stroke(255)
strokeWeight(5)
let waveHeight = map(other, 0, 50, 10, 60);
let drumWave;
let waveFreq = 3;

beginShape();
for(let i = 0; i < width/2.2; i++){
  vertex(i, height/2 - waveHeight*sin(waveFreq*i))
}
endShape();

pop();

}









//
//
//
//chorus first time
else if(counter > 135 && counter <=380){
  //gradient background
  let midPPLerp = map(vocal, 0, 100, 0, 1)
  let midPinkPurple = lerpColor(pink, purple, 1) //make 0.85 midPPLerp so it visualises vocals

  strokeWeight(3)
  let backgroundGradient = 1000

  for(let i=0; i<backgroundGradient; i++){
    let gradientAmount = map(i, 0, backgroundGradient, 0, 1.5)
    let strokeColor = lerpColor(navy, grey, gradientAmount)

    stroke(strokeColor)
    line(0, 100+i-100, width, 100+i-100)
  }



  //retrolines and colour changing with drum
push()

let drumMap = map(drum, 0, 100, 0, 90)
let lineLength = 1080
let lineStart = 0
let lineEnd = lineStart+lineLength

strokeWeight(7)
let DrumColorMap = map(drum, 0, 100, 0,1) /// all one color, color change based on Drum volume

for(let i=1; i<drumMap; i++){
let lineStep = i*8 - 5;
let gradientAmount = map(i, 0, drumMap, 0,1) // gradient of lines. colour change based on how far down the page the lines are
let LinesStrokeColor = lerpColor(navy, grey, gradientAmount) 
stroke(LinesStrokeColor)
line(lineStart, lineStep, lineEnd, lineStep)
}
pop()



//sun
// for(let i=0; i<backgroundGradient; i++){
//   let gradientAmount = map(i, 0, backgroundGradient, 0,1)
//   let SunStrokeColor = lerpColor(red, yellow, gradientAmount)

//   stroke(SunStrokeColor)
//   ellipse(width/2, height/4+75, i/4)
// }


//moon
moonImg.resize(250, 250)
image(moonImg, width/2-125, 130);


//draw horizon 
stroke(0);
fill(180);
beginShape();
vertex(0, height);
vertex(0, height/2-90);
vertex(width/2-40, height/2-65);
vertex(width/2+40, height/2-65);
vertex(width, height/2-90);
vertex(width, height);
endShape();



//draw road
stroke(0);
fill(100);
beginShape();
vertex(width/2-40, height/2-65);
vertex(width/2+40, height/2-65);
vertex(width, height/2+50);
vertex(width, height);
vertex(0, height);
vertex(0, height/2+210)
vertex(width/2-40, height/2-65);
endShape()
 
stroke(255);
strokeWeight(2);
line(width/2+500, height, width/2, height/2-65)






 // display "words"
 stroke(255);
 textAlign(CENTER);
 textSize(other);
 text(words, width/2, height/3);  



 //car frame
carFrameImg.resize(1080, 720)
image(carFrameImg, 0, 0);


//Wave visualiser
push();
translate(600, 400);
scale(0.3);

stroke(255)
strokeWeight(5)
let waveHeight = map(other, 0, 50, 10, 60);
let drumWave;
let waveFreq = 3;

beginShape();
for(let i = 0; i < width/2.2; i++){
  vertex(i, height/2 - waveHeight*sin(waveFreq*i))
}
endShape();

pop();

}



//
//
//
else{
  
background(0)

}

}





// // horizon colour change with bass
  // let yellow = color(240, 197, 5)
  // let red = color(204, 14, 14)
  // let lerpMap = map(bass, 0, 100, 0,1)
  // let middleColor = lerpColor(pink, purple, lerpMap)
  
  // let mappedXPost = map(vocal, 0, 100, -100, 100)
  
  // fill(middleColor)
  // rect(width/2, height/2+height/4, 1280, 360)
  // ellipse(width/2, height/2, 100, 100)