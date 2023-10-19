//1080x720
//system_runner; change canvas size // vert or hor
//system_settings; debugFastRefresh to have countdown delay record 

let firstRun = true
let carFrameImg;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    carFrame2Img = loadImage('assets/carFrame2.png');
    needleImg = loadImage('assets/needle.png');
    wheelImg = loadImage('assets/wheel.png');
    buildingsFrontImg = loadImage('assets/buildingsFront.png');
    buildingsBehindImg = loadImage('assets/buildingsBehind.png');
    marsImg = loadImage('assets/mars.png');
    heartImg = loadImage('assets/heart.png');
    heartMainImg = loadImage('assets/heartMain.png');
    heartBackImg = loadImage('assets/heartBack.png');
    mountainsImg = loadImage('assets/mountains.png');
    mountainsFrontImg = loadImage('assets/mountainsFront.png');
    mountainsBehindImg = loadImage('assets/mountainsBehind.png');
    cityImg = loadImage('assets/city.png');
    sunLImg = loadImage('assets/sunL.png');
    sunRImg = loadImage('assets/sunR.png');

    //road line variables
    lineOffsetX = (4.7*0.8);
    lineOffsetY = (4*0.8); 
      //lineOffsetX & Y control the speed of the road lines and therefore illusion of car speed
    lineStartX = (width/2);
    lineStartY = (height/2-65);
    line2StartX = (lineStartX +lineOffsetX*25);
    line2StartY = (lineStartY +lineOffsetY*25);
    line3StartX = (line2StartX +lineOffsetX*25);
    line3StartY = (line2StartY +lineOffsetY*25);
    line4StartX = (line3StartX +lineOffsetX*25);
    line4StartY = (line3StartY +lineOffsetY*25);
    line5StartX = (line4StartX +lineOffsetX*25);
    line5StartY = (line4StartY +lineOffsetY*25);
  
  
  
    firstRun = false
  }
  console.log(song.currentTime())
  //let slowIncr = map(song.currentTime(), 0, song.duration(), 0, 2300);

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

  strokeWeight(3)
  let backgroundGradient = 1000

  //song.currentTime() variables for timing 
  let start = 0;
  let foreshadow = 2.25;   //retro city
  let verse1 = 4;   //daytime city
  let chorus1Tear= 21.2;  //sun tearing 
  let chorus1= 22.2;   //retro city & heart
  let verse2 = 34.36;   //daytime city
  let chorus2Tear = 49.2;  //sun tearing
  let chorus2 = 50.3;    // retro city & heart
  let bridge = 74.3;    //night moonscape
  let chorus3 = 130.2;   //electronic - orange/black moon
  let outro = 166;   // moonscape
  
  



//if statement controlling what is shown in each part of the song chronologically according to song.currentTime() variables
push()
//daytime city
if((song.currentTime() >=start && song.currentTime() <= foreshadow) || 
(song.currentTime() >verse1 && song.currentTime() <=chorus1) || 
(song.currentTime() >verse2 && song.currentTime() <=chorus2)){
  //gradient background
  let midPPLerp = map(vocal, 0, 100, 0, 1)
  let midBlueYellow = lerpColor(blue, yellow, 1) //make 0.85 midPPLerp so it visualises vocals

  for(let i=0; i<backgroundGradient; i++){
    let gradientAmount = map(i, 0, backgroundGradient, 0, 1.5)
    let strokeColor = lerpColor(blue, yellow, gradientAmount)

    stroke(strokeColor)
    line(0, 100+i-100, width, 100+i-100)
  }


  //retrolines and colour changing with drum
push()

let drumMap = map(drum, 0, 100, 0, 90)
let lineLength = width
let lineStart = 0
let lineEnd = lineStart+lineLength

strokeWeight(7)
let DrumColorMap = map(drum, 0, 100, 0,1) /// all one color, color change based on Drum volume

for(let i=1; i<drumMap; i++){
let lineStep = i*8 - 5;
let gradientAmount = map(i, 0, drumMap, 0,1) // gradient of lines. colour change based on how far down the page the lines are
let LinesStrokeColor = lerpColor(blue, yellow, gradientAmount) 
stroke(LinesStrokeColor)
line(lineStart, lineStep, lineEnd, lineStep)
}
pop()



//draw building layer behind sun
buildingsBehindImg.resize(1280, 220)
image(buildingsBehindImg, 0, 80);







 //sun
 push()
  if ((song.currentTime() > chorus1Tear && song.currentTime() <= chorus1) ||
  (song.currentTime() > chorus2Tear && song.currentTime() <=chorus2)){

    push()
    sunLImg.resize(282, 210)
    image(sunLImg, 505, 115);
    pop()

    sunRImg.resize(282,210)
    image(sunRImg, 505, 115);
  
  }



  else if((song.currentTime() > chorus1 && song.currentTime() <= verse2) ||
  (song.currentTime() > chorus2)){
  }



  else{
  for(let i=0; i<backgroundGradient; i++){
    let gradientAmount = map(i, 0, backgroundGradient, 0,1)
    let SunStrokeColor = lerpColor(red, yellow, gradientAmount)
  
    stroke(SunStrokeColor)
    ellipse(width/2, height/4+75, i/4)
  }
  }
  pop()







  


//draw horizon 
stroke(0);
fill(180);
beginShape();
vertex(-10, height);
vertex(-10, height/2-90);
vertex(width/2-40, height/2-65);
vertex(width/2+40, height/2-65);
vertex(width, height/2-90);
vertex(width, height);
endShape();



//retro 80's infinite geometry lines
stroke(183);
  strokeWeight(3);
  //horizontal 
  push()
  //left side
  line(0, height/2-60, width/2, height/2-35)
  line(0, height/2-20, width/2, height/2+5)
  line(0, height/2+20, width/2, height/2+45)
  line(0, height/2+60, width/2, height/2+85)
  line(0, height/2+100, width/2, height/2+125)
  line(0, height/2+140, width/2, height/2+165)
  line(0, height/2+180, width/2, height/2+205)
  //right side
  line(width/2, height/2-35, width, height/2-60)
  line(width/2, height/2+5, width, height/2-20)
  line(width/2, height/2+45, width, height/2+20)
  pop()
  
  //vertical
  push()
  let Py = height/2-65
  //left side
  line(85, Py-17, 0, height/2-40)
  line(150, Py-14, 0, height/2+20)
  line(215, Py-11, 0, height/2+100)
  line(280, Py-8, 0, height/2+200)
  line(345, Py-5, 80, height/2+320)
  line(410, Py-2, 160, height/2+460)
  line(475, Py+2, 240, height/2+610)
  //right side
  line(width-465, Py+1, width+280, height/2+1000)
  line(width-410, Py-2, width+210, height/2+640)
  line(width-345, Py-5, width+90, height/2+400)
  line(width-280, Py-8, width, height/2+150)
  line(width-215, Py-11, width, height/2+50)
  line(width-150, Py-15, width, height/2-20)
  line(width-85, Py-18, width, height/2-60)
  pop()



//draw road
stroke(0);
fill(100);
beginShape();
vertex(width/2-60, height/2-65);
vertex(width/2+60, height/2-65);
vertex(width, height/2+50);
vertex(width, height);
vertex(0, height);
vertex(0, height/2+210)
vertex(width/2-60, height/2-65);
endShape()
 
stroke(255);
strokeWeight(2);
// line(width/2+500, height, width/2, height/2-65)



//road lines
stroke(255);
push()
let roadLineWeightSize = map(lineStartX, width/2, width/2+500, 0.2, 20)
strokeWeight(roadLineWeightSize)

line(lineStartX, lineStartY, lineStartX+lineOffsetX*2, lineStartY+lineOffsetY*2);

lineStartX = lineStartX + lineOffsetX
lineStartY = lineStartY + lineOffsetY

if(lineStartX > width/2+500){
lineStartX = width/2
}

if(lineStartY > height){
  lineStartY = height/2-65
  }


//line 2
let roadLine2WeightSize = map(line2StartX, width/2, width/2+500, 0.2, 20)
strokeWeight(roadLine2WeightSize)
  line(line2StartX, line2StartY, line2StartX+lineOffsetX*2, line2StartY+lineOffsetY*2);

  line2StartX = line2StartX + lineOffsetX
  line2StartY = line2StartY + lineOffsetY
  
  if(line2StartX > width/2+500){
  line2StartX = width/2
  }
  
  if(line2StartY > height){
    line2StartY = height/2-65
    }


    //line 3
  let roadLine3WeightSize = map(line3StartX, width/2, width/2+500, 0.2, 20)
  strokeWeight(roadLine3WeightSize)
  line(line3StartX, line3StartY, line3StartX+lineOffsetX*2, line3StartY+lineOffsetY*2);

  line3StartX = line3StartX + lineOffsetX
  line3StartY = line3StartY + lineOffsetY
  
  if(line3StartX > width/2+500){
  line3StartX = width/2
  }
  
  if(line3StartY > height){
    line3StartY = height/2-65
    }


    //line 4
    let roadLine4WeightSize = map(line4StartX, width/2, width/2+500, 0.2, 20)
    strokeWeight(roadLine4WeightSize)
    line(line4StartX, line4StartY, line4StartX+lineOffsetX*2, line4StartY+lineOffsetY*2);
  
    line4StartX = line4StartX + lineOffsetX
    line4StartY = line4StartY + lineOffsetY
    
    if(line4StartX > width/2+500){
    line4StartX = width/2
    }
    
    if(line4StartY > height){
      line4StartY = height/2-65
      }


    //line 5
  let roadLine5WeightSize = map(line5StartX, width/2, width/2+500, 0.2, 20)
  strokeWeight(roadLine5WeightSize)
  line(line5StartX, line5StartY, line5StartX+lineOffsetX*2, line5StartY+lineOffsetY*2);

  line5StartX = line5StartX + lineOffsetX
  line5StartY = line5StartY + lineOffsetY
  
  if(line5StartX > width/2+500){
  line5StartX = width/2
  }
  
  if(line5StartY > height){
    line5StartY = height/2-65
    }
  pop()



// //draw building layers
// buildingsFrontImg.resize(1080, 300)
// image(buildingsFrontImg, 0, 80);


// //trailling being inside city
// cityImg.resize(500, 550)
// image(cityImg, 0, 20);


}


//
//retro city
if((song.currentTime() > foreshadow && song.currentTime() <=verse1) || 
(song.currentTime() > chorus1 && song.currentTime() <= verse2) || 
(song.currentTime() >chorus2 && song.currentTime() <=bridge) ||
(song.currentTime() > chorus3 && song.currentTime() <= outro)){
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
let lineLength = width
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



//draw building layer behind sun
buildingsBehindImg.resize(1280, 220)
image(buildingsBehindImg, 0, 80);

















 //sun
 push()
  if ((song.currentTime() > chorus1Tear && song.currentTime() <= chorus1) ||
  (song.currentTime() > chorus2Tear && song.currentTime() <=chorus2)){

    push()
    sunLImg.resize(282, 210)
    image(sunLImg, 505, 115);
    pop()

    sunRImg.resize(282,210)
    image(sunRImg, 505, 115);
  
  }



  else if((song.currentTime() > chorus1 && song.currentTime() <= verse2) ||
  (song.currentTime() > chorus2)){
  }



  else{
  for(let i=0; i<backgroundGradient; i++){
    let gradientAmount = map(i, 0, backgroundGradient, 0,1)
    let SunStrokeColor = lerpColor(red, yellow, gradientAmount)
  
    stroke(SunStrokeColor)
    ellipse(width/2, height/4+75, i/4)
  }
  }
  pop()







  



//draw horizon 
stroke(0);
fill(10);
beginShape();
vertex(0, height);
vertex(0, height/2-90);
vertex(width/2-40, height/2-65);
vertex(width/2+40, height/2-65);
vertex(width, height/2-90);
vertex(width, height);
endShape();



//retro 80's infinite geometry lines
  //horizontal 
  push()
  stroke(21, 87, 159);
  strokeWeight(2);
  //left side
  line(0, height/2-60, width/2, height/2-35)
  line(0, height/2-20, width/2, height/2+5)
  line(0, height/2+20, width/2, height/2+45)
  line(0, height/2+60, width/2, height/2+85)
  line(0, height/2+100, width/2, height/2+125)
  line(0, height/2+140, width/2, height/2+165)
  line(0, height/2+180, width/2, height/2+205)
  //right side
  line(width/2, height/2-35, width, height/2-60)
  line(width/2, height/2+5, width, height/2-20)
  line(width/2, height/2+45, width, height/2+20)
  pop()
  
  //vertical
  push()
  let Py = height/2-65

  stroke(21, 87, 159);
  strokeWeight(2);
  //left side
  line(85, Py-21, 0, height/2-40)
  line(150, Py-15, 0, height/2+20)
  line(215, Py-12, 0, height/2+100)
  line(280, Py-9, 0, height/2+200)
  line(345, Py-7, 80, height/2+320)
  line(410, Py-4, 160, height/2+460)
  line(475, Py, 240, height/2+610)
  //right side
  line(width-465, Py+1, width+280, height/2+1000)
  line(width-410, Py-2, width+210, height/2+640)
  line(width-345, Py-5, width+90, height/2+400)
  line(width-280, Py-8, width, height/2+150)
  line(width-215, Py-11, width, height/2+50)
  line(width-150, Py-15, width, height/2-20)
  line(width-85, Py-18, width, height/2-60)
  pop()




//draw road
stroke(0);
fill(30);
beginShape();
vertex(width/2-60, height/2-65);
vertex(width/2+60, height/2-65);
vertex(width, height/2+50);
vertex(width, height);
vertex(0, height);
vertex(0, height/2+210)
vertex(width/2-60, height/2-65);
endShape()


//road lines
stroke(255);
push()
let roadLineWeightSize = map(lineStartX, width/2, width/2+500, 0.2, 20)
strokeWeight(roadLineWeightSize)

line(lineStartX, lineStartY, lineStartX+lineOffsetX*2, lineStartY+lineOffsetY*2);

lineStartX = lineStartX + lineOffsetX
lineStartY = lineStartY + lineOffsetY

if(lineStartX > width/2+500){
lineStartX = width/2
}

if(lineStartY > height){
  lineStartY = height/2-65
  }


//line 2
let roadLine2WeightSize = map(line2StartX, width/2, width/2+500, 0.2, 20)
strokeWeight(roadLine2WeightSize)
  line(line2StartX, line2StartY, line2StartX+lineOffsetX*2, line2StartY+lineOffsetY*2);

  line2StartX = line2StartX + lineOffsetX
  line2StartY = line2StartY + lineOffsetY
  
  if(line2StartX > width/2+500){
  line2StartX = width/2
  }
  
  if(line2StartY > height){
    line2StartY = height/2-65
    }


    //line 3
  let roadLine3WeightSize = map(line3StartX, width/2, width/2+500, 0.2, 20)
  strokeWeight(roadLine3WeightSize)
  line(line3StartX, line3StartY, line3StartX+lineOffsetX*2, line3StartY+lineOffsetY*2);

  line3StartX = line3StartX + lineOffsetX
  line3StartY = line3StartY + lineOffsetY
  
  if(line3StartX > width/2+500){
  line3StartX = width/2
  }
  
  if(line3StartY > height){
    line3StartY = height/2-65
    }


    //line 4
    let roadLine4WeightSize = map(line4StartX, width/2, width/2+500, 0.2, 20)
    strokeWeight(roadLine4WeightSize)
    line(line4StartX, line4StartY, line4StartX+lineOffsetX*2, line4StartY+lineOffsetY*2);
  
    line4StartX = line4StartX + lineOffsetX
    line4StartY = line4StartY + lineOffsetY
    
    if(line4StartX > width/2+500){
    line4StartX = width/2
    }
    
    if(line4StartY > height){
      line4StartY = height/2-65
      }


    //line 5
  let roadLine5WeightSize = map(line5StartX, width/2, width/2+500, 0.2, 20)
  strokeWeight(roadLine5WeightSize)
  line(line5StartX, line5StartY, line5StartX+lineOffsetX*2, line5StartY+lineOffsetY*2);

  line5StartX = line5StartX + lineOffsetX
  line5StartY = line5StartY + lineOffsetY
  
  if(line5StartX > width/2+500){
  line5StartX = width/2
  }
  
  if(line5StartY > height){
    line5StartY = height/2-65
    }
  pop()




heartScale = map(drum, 0, 100, 1, 1.2);
//heart
if ((song.currentTime() > chorus1 && song.currentTime() <= verse2) ||
(song.currentTime() > chorus2)){
  
  push()
  heartBackImg.resize(220, 270)
  heartMainImg.resize(220, 270)
  pop()

  image(heartBackImg, 440*heartScale, 100*heartScale)
  image(heartMainImg, 440*heartScale, 100*heartScale)

  }


  //

// //draw building layers
// buildingsFrontImg.resize(1080, 300)
// image(buildingsFrontImg, 0, 80);


//trailling being inside city
// cityImg.resize(500, 550)
// image(cityImg, 0, 20);

}


//
//
//moonscape bridge
else if((song.currentTime() >bridge && song.currentTime() <=chorus3)){
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
let lineLength = width
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

//mountains
mountainsBehindImg.resize(1080, 250)
image(mountainsBehindImg, 0, 50);



//mars
marsImg.resize(250, 250)
image(marsImg, width/2-125, 130);



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



//mountains
mountainsFrontImg.resize(1350, 350)
image(mountainsFrontImg, 0, 12);


//draw road
stroke(0);
fill(100);
beginShape();
vertex(width/2+0, height/2-65);
vertex(width/2+60, height/2-65);
vertex(width, height/2+50);
vertex(width, height);
vertex(0, height);
vertex(0, height/2+210)
vertex(width/2-60, height/2-65);
endShape()
 

//road lines
stroke(255);
push()
let roadLineWeightSize = map(lineStartX, width/2, width/2+500, 0.2, 20)
strokeWeight(roadLineWeightSize)

line(lineStartX, lineStartY, lineStartX+lineOffsetX*2, lineStartY+lineOffsetY*2);

lineStartX = lineStartX + lineOffsetX
lineStartY = lineStartY + lineOffsetY

if(lineStartX > width/2+500){
lineStartX = width/2
}

if(lineStartY > height){
  lineStartY = height/2-65
  }


//line 2
let roadLine2WeightSize = map(line2StartX, width/2, width/2+500, 0.2, 20)
strokeWeight(roadLine2WeightSize)
  line(line2StartX, line2StartY, line2StartX+lineOffsetX*2, line2StartY+lineOffsetY*2);

  line2StartX = line2StartX + lineOffsetX
  line2StartY = line2StartY + lineOffsetY
  
  if(line2StartX > width/2+500){
  line2StartX = width/2
  }
  
  if(line2StartY > height){
    line2StartY = height/2-65
    }


    //line 3
  let roadLine3WeightSize = map(line3StartX, width/2, width/2+500, 0.2, 20)
  strokeWeight(roadLine3WeightSize)
  line(line3StartX, line3StartY, line3StartX+lineOffsetX*2, line3StartY+lineOffsetY*2);

  line3StartX = line3StartX + lineOffsetX
  line3StartY = line3StartY + lineOffsetY
  
  if(line3StartX > width/2+500){
  line3StartX = width/2
  }
  
  if(line3StartY > height){
    line3StartY = height/2-65
    }


    //line 4
    let roadLine4WeightSize = map(line4StartX, width/2, width/2+500, 0.2, 20)
    strokeWeight(roadLine4WeightSize)
    line(line4StartX, line4StartY, line4StartX+lineOffsetX*2, line4StartY+lineOffsetY*2);
  
    line4StartX = line4StartX + lineOffsetX
    line4StartY = line4StartY + lineOffsetY
    
    if(line4StartX > width/2+500){
    line4StartX = width/2
    }
    
    if(line4StartY > height){
      line4StartY = height/2-65
      }


    //line 5
  let roadLine5WeightSize = map(line5StartX, width/2, width/2+500, 0.2, 20)
  strokeWeight(roadLine5WeightSize)
  line(line5StartX, line5StartY, line5StartX+lineOffsetX*2, line5StartY+lineOffsetY*2);

  line5StartX = line5StartX + lineOffsetX
  line5StartY = line5StartY + lineOffsetY
  
  if(line5StartX > width/2+500){
  line5StartX = width/2
  }
  
  if(line5StartY > height){
    line5StartY = height/2-65
    }
  pop()






}


//
//
//moonscape outro
else if((song.currentTime() > outro)){
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
let lineLength = width
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

//mountains
mountainsBehindImg.resize(1080, 250)
image(mountainsBehindImg, 0, 50);



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

//mountains
mountainsFrontImg.resize(1380, 350)
image(mountainsFrontImg, 0, 12);

//draw road
stroke(0);
fill(100);
beginShape();
vertex(width/2-60, height/2-65);
vertex(width/2+60, height/2-65);
vertex(width, height/2+50);
vertex(width, height);
vertex(0, height);
vertex(0, height/2+210)
vertex(width/2-60, height/2-65);
endShape()
 

//road lines
stroke(255);
push()
let roadLineWeightSize = map(lineStartX, width/2, width/2+500, 0.2, 20)
strokeWeight(roadLineWeightSize)

line(lineStartX, lineStartY, lineStartX+lineOffsetX*2, lineStartY+lineOffsetY*2);

lineStartX = lineStartX + lineOffsetX
lineStartY = lineStartY + lineOffsetY

if(lineStartX > width/2+500){
lineStartX = width/2
}

if(lineStartY > height){
  lineStartY = height/2-65
  }


//line 2
let roadLine2WeightSize = map(line2StartX, width/2, width/2+500, 0.2, 20)
strokeWeight(roadLine2WeightSize)
  line(line2StartX, line2StartY, line2StartX+lineOffsetX*2, line2StartY+lineOffsetY*2);

  line2StartX = line2StartX + lineOffsetX
  line2StartY = line2StartY + lineOffsetY
  
  if(line2StartX > width/2+500){
  line2StartX = width/2
  }
  
  if(line2StartY > height){
    line2StartY = height/2-65
    }


    //line 3
  let roadLine3WeightSize = map(line3StartX, width/2, width/2+500, 0.2, 20)
  strokeWeight(roadLine3WeightSize)
  line(line3StartX, line3StartY, line3StartX+lineOffsetX*2, line3StartY+lineOffsetY*2);

  line3StartX = line3StartX + lineOffsetX
  line3StartY = line3StartY + lineOffsetY
  
  if(line3StartX > width/2+500){
  line3StartX = width/2
  }
  
  if(line3StartY > height){
    line3StartY = height/2-65
    }


    //line 4
    let roadLine4WeightSize = map(line4StartX, width/2, width/2+500, 0.2, 20)
    strokeWeight(roadLine4WeightSize)
    line(line4StartX, line4StartY, line4StartX+lineOffsetX*2, line4StartY+lineOffsetY*2);
  
    line4StartX = line4StartX + lineOffsetX
    line4StartY = line4StartY + lineOffsetY
    
    if(line4StartX > width/2+500){
    line4StartX = width/2
    }
    
    if(line4StartY > height){
      line4StartY = height/2-65
      }


    //line 5
  let roadLine5WeightSize = map(line5StartX, width/2, width/2+500, 0.2, 20)
  strokeWeight(roadLine5WeightSize)
  line(line5StartX, line5StartY, line5StartX+lineOffsetX*2, line5StartY+lineOffsetY*2);

  line5StartX = line5StartX + lineOffsetX
  line5StartY = line5StartY + lineOffsetY
  
  if(line5StartX > width/2+500){
  line5StartX = width/2
  }
  
  if(line5StartY > height){
    line5StartY = height/2-65
    }
  pop()



  

heartScale = map(drum, 0, 100, 1, 1.2);
//heart
  
  push()
  heartBackImg.resize(220, 270)
  heartMainImg.resize(220, 270)
  pop()

  image(heartBackImg, 440*heartScale, 100*heartScale)
  image(heartMainImg, 440*heartScale, 100*heartScale)

}

pop()










































// display "words"
// stroke(255);
// textAlign(CENTER);
// textSize(other);
// text(words, width/2, height/3);  




//
//drawing constant car elements 

//car frame
carFrame2Img.resize(1327, 820)
image(carFrame2Img, -22, -10);

//speedometer needle
push()
translate(455, 565)
rotate(bass*3)
needleImg.resize(25, 80)
image(needleImg, 0, 0);
pop()

//wheel
wheelImg.resize(500, 500)
image(wheelImg, 195, 375);

//Wave visualiser
push();
translate(815, 500);
scale(0.22);

noFill();
stroke(255)
strokeWeight(5)
let waveHeight = map(vocal, 0, 50, 10, 60);
let drumWave;
let waveFreq = 3;

beginShape();
for(let i = 0; i < width/2.2; i++){
 vertex(i, height/2 - waveHeight*sin(waveFreq*i))
}
endShape();

pop();

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
