//1280x720
//system_settings; debugFastRefresh to have countdown delay record 

let firstRun = true

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    carFrame2Img = loadImage('assets/carFrame2.png');
    needleImg = loadImage('assets/needle.png');
    wheelImg = loadImage('assets/wheel.png');
    moonImg = loadImage('assets/moon.png');
    marsImg = loadImage('assets/mars.png');
    heartImg = loadImage('assets/heart.png');
    heartMainImg = loadImage('assets/heartMain.png');
    heartBackImg = loadImage('assets/heartBack.png');
    sunLImg = loadImage('assets/sunL.png');
    sunRImg = loadImage('assets/sunR.png');
    craterImg = loadImage('assets/crater.png');

    a = (height/2);

    //road line variables
    lineOffsetX = (4.7*0.8);
    lineOffsetY = (4*0.8); 
      //lineOffsetX & Y control the speed of the road lines and therefore illusion of car speed
    lineStartX = (width/2);
    lineStartY = (a-65);
    line2StartX = (lineStartX +lineOffsetX*25);
    line2StartY = (lineStartY +lineOffsetY*25);
    line3StartX = (line2StartX +lineOffsetX*25);
    line3StartY = (line2StartY +lineOffsetY*25);
    line4StartX = (line3StartX +lineOffsetX*25);
    line4StartY = (line3StartY +lineOffsetY*25);
    line5StartX = (line4StartX +lineOffsetX*25);
    line5StartY = (line4StartY +lineOffsetY*25);

    line1OffsetX = (-1.9*0);
    line1OffsetY = (0);
    line1x = (85)
    line1y = (a-82)
    line2OffsetX = (-1.52*0.8);
    line2OffsetY = (0.8);
    line2x = (150)
    line2y = (a-79)
    line3OffsetX = (-1.225*1.7);
    line3OffsetY = (1.7);
    line3x = (215)
    line3y = (a-76)
    line4OffsetX = (-1.026*2);
    line4OffsetY = (2);
    line4x = (280)
    line4y = (a-73)
    line5OffsetX = (-0.6705*3);
    line5OffsetY = (3);
    line5x = (345)
    line5y = (a-70)
    line6OffsetX = (-0.448*3.6);
    line6OffsetY = (3.6);
    line6x = (410)
    line6y = (a-67)
    line7OffsetX = (-0.3735*4);
    line7OffsetY = (4);
    line7x = (475)
    line7y = (a-63)
    line8OffsetX = (0.62*2);
    line8OffsetY = (2);
    line8x = (813)
    line8y = (a-68)
    line9OffsetX = (0.86*1.8);
    line9OffsetY = (1.8);
    line9x = (868)
    line9y = (a-70)
    line10OffsetX = (0.875*1.7);
    line10OffsetY = (1.7);
    line10x = (935)
    line10y = (a-72)
    line11OffsetX = (1.2*1.6);
    line11OffsetY = (1.6);
    line11x = (1000)
    line11y = (a-76)
    line12OffsetX = (1.67*1.4);
    line12OffsetY = (1.4);
    line12x = (1065)
    line12y = (a-78)
    line13OffsetX = (2.47*0.8);
    line13OffsetY = (0.8);
    line13x = (1130)
    line13y = (a-81)
    line14OffsetX = (3.6*0.4);
    line14OffsetY = (0.4);
    line14x = (1195)
    line14y = (a-84)


    firstRun = false
  }
  console.log(song.currentTime())
  //let slowIncr = map(song.currentTime(), 0, song.duration(), 0, 2300);

  background(255)
  textFont('Helvetica'); // CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  noFill()


  let purple = color(117, 27, 203)
  let pink = color(243, 93, 153)  
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
  let verse1 = 4.1;   //daytime city
  let chorus1Tear= 21.2;  //sun tearing 
  let chorus1= 22.2;   //retro city & heart
  let chorus1Untear = 33.4 // heart disappear
  let verse2 = 34.4;   //daytime city
  let chorus2Tear = 49.2;  //sun tearing
  let chorus2 = 50.3;    // retro city & heart
  let chorus2Untear = 73.3; // heart dissapearing
  let bridge = 74.2;    //night moonscape
  let craterSwitch = 102.15; //second crater moves
  let chorus3 = 130;   //electronic 
  let chorus3SwitchStart = 141.3; // heart incr
  let chorus3Switch = 142.3;//planet switches to beating heart
  let outro = 166.5;   // moonscape



//if statement controlling what is shown in each part of the song chronologically according to song.currentTime() variables
push()
//daytime city
if((song.currentTime() >=start && song.currentTime() <= foreshadow) || 
(song.currentTime() >verse1 && song.currentTime() <=chorus1) || 
(song.currentTime() >verse2 && song.currentTime() <=chorus2)){
  //gradient background
  let midPPLerp = map(vocal, 0, 100, 0, 1)
  let midBlueYellow = lerpColor(blue, yellow, 1) //make 0.85 midPPLerp so it visualises vocals

  
    if((song.currentTime() <=foreshadow )){
      for(let i=0; i<backgroundGradient; i++){
        let gradientAmount = map(i, 0, backgroundGradient, 0, 50)
        let strokeColor = lerpColor(blue, yellow, gradientAmount)
    stroke(strokeColor)
    line(0, 100+i-100, width, 100+i-100)
  }}
  else{
    for(let i=0; i<backgroundGradient; i++){
      let gradientAmount = map(i, 0, backgroundGradient, 0, 6)
      let strokeColor = lerpColor(blue, yellow, gradientAmount)
    stroke(strokeColor)
    line(0, 100+i-100, width, 100+i-100)
  }
  }


  //retrolines and colour changing with other
push()

let otherMap = map(other, 0, 100, 0, 90)
let lineLength = width
let lineStart = 0
let lineEnd = lineStart+lineLength

strokeWeight(7)
let OtherColorMap = map(other, 0, 100, 0,1) /// all one color, color change based on other volume

for(let i=1; i<otherMap; i++){
let lineStep = i*8 - 5;
let gradientAmount = map(i, 0, otherMap, 0,1) // gradient of lines. colour change based on how far down the page the lines are
let LinesStrokeColor = lerpColor(blue, yellow, gradientAmount) 
stroke(LinesStrokeColor)
line(lineStart, lineStep, lineEnd, lineStep)
}
pop()

 


 //sun
 push()
  if ((song.currentTime() > chorus1Tear && song.currentTime() <= chorus1)){

    let sunLStart = (width/2, height/2);
    let sunLEnd = (0, height/2);
    let sunSplit = map(song.currentTime(), chorus1Tear, chorus1, 1, 5.5);
    let sunX = (2013/sunSplit);
    let sunXEndL = (sunX -100);
    let sunXEndR = (sunX + 100);
    let sunY = (690/sunSplit);
    let sunYEndL = (sunY - 50);
    let sunYEndR = (sunY - 50);
    let sunXTearL = map(song.currentTime(), chorus1Tear, chorus1, sunX, sunXEndL);
    let sunYTearL = map(song.currentTime(), chorus1Tear, chorus1, sunY, sunYEndL);
    let sunXTearR = map(song.currentTime(), chorus1Tear, chorus1, sunX, sunXEndR);
    let sunYTearR = map(song.currentTime(), chorus1Tear, chorus1, sunY, sunYEndR);
    push()
    scale(sunSplit);
    push()
    imageMode(CENTER);
    scale(0.32);
    image(sunLImg, sunXTearL, sunYTearL);
    pop()
    pop()

    push()
    scale(sunSplit);
    push()
    imageMode(CENTER);
    scale(0.32);
    image(sunRImg, sunXTearR, sunYTearR);
    pop()
    pop()
  }
  else if((song.currentTime() > chorus2Tear && song.currentTime() <=chorus2)){
    let sunLStart = (width/2, height/2);
    let sunLEnd = (0, height/2);
    let sunSplit = map(song.currentTime(), chorus2Tear, chorus2, 1, 5.5);
    let sunX = (2013/sunSplit);
    let sunXEndL = (sunX - 100);
    let sunXEndR = (sunX + 100);
    let sunY = (690/sunSplit);
    let sunYEndL = (sunY - 50);
    let sunYEndR = (sunY - 50);
    let sunXTearL = map(song.currentTime(), chorus2Tear, chorus2, sunX, sunXEndL);
    let sunYTearL = map(song.currentTime(), chorus2Tear, chorus2, sunY, sunYEndL);
    let sunXTearR = map(song.currentTime(), chorus2Tear, chorus2, sunX, sunXEndR);
    let sunYTearR = map(song.currentTime(), chorus2Tear, chorus2, sunY, sunYEndR);
    push()
    scale(sunSplit);
    push()
    imageMode(CENTER);
    scale(0.32);
    image(sunLImg, sunXTearL, sunYTearL);
    pop()
    pop()

    push()
    scale(sunSplit);
    push()
    imageMode(CENTER);
    scale(0.32);
    image(sunRImg, sunXTearR, sunYTearR);
    pop()
    pop()

  }

  else if((song.currentTime() > chorus1 && song.currentTime() <= verse2) ||
  (song.currentTime() > chorus2)){
  }

  else{
push()
//glow
push()
let glowOpacity = map(other, 0, 100, -200, 100)
noStroke()
fill(250, 200, 150, glowOpacity)
push()
ellipse((width/2), (height/2-100), 350, 350);
pop()
pop()

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
stroke(185);
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

// //moving dot simulating geometry lines moving and therefore car moving/driving
push()
translate(0, 2)
stroke(180);
strokeWeight(8);
fill(180);

line(line1x, line1y, line1x+line1OffsetX, line1y+line1OffsetY);

line1x = line1x + line1OffsetX
line1y = line1y + line1OffsetY

if(line1x <= 0){
line1x = 85
}

if(line1y >= a-40){
  line1y = a-82
}

line(line2x, line2y, line2x+line2OffsetX, line2y+line2OffsetY);

line2x = line2x + line2OffsetX
line2y = line2y + line2OffsetY

if(line2x <= 0){
line2x = 150
}

if(line2y >= a+20){
  line2y = a-79
}

line(line3x, line3y, line3x+line3OffsetX, line3y+line3OffsetY);

line3x = line3x + line3OffsetX
line3y = line3y + line3OffsetY

if(line3x <= 0){
line3x = 215
}

if(line3y >= a+100){
  line3y = a-76
}

line(line4x, line4y, line4x+line4OffsetX, line4y+line4OffsetY);

line4x = line4x + line4OffsetX
line4y = line4y + line4OffsetY

if(line4x <= 0){
line4x = 280
}

if(line4y >= a+200){
  line4y = a-73
}

line(line5x, line5y, line5x+line5OffsetX, line5y+line5OffsetY);

line5x = line5x + line5OffsetX
line5y = line5y + line5OffsetY

if(line5x <= 240){
line5x = 348
}

if(line5y >= a+92){
  line5y = a-70
}

line(line6x, line6y, line6x+line6OffsetX, line6y+line6OffsetY);

line6x = line6x + line6OffsetX
line6y = line6y + line6OffsetY

if(line6x <= 365){
line6x = 411
}

if(line6y >= a+35){
  line6y = a-67
}

line(line7x, line7y, line7x+line7OffsetX, line7y+line7OffsetY);

line7x = line7x + line7OffsetX
line7y = line7y + line7OffsetY

if(line7x <= 452){
line7x = 475
}

if(line7y >= a-5){
  line7y = a-67
}

line(line8x, line8y, line8x+line8OffsetX, line8y+line8OffsetY);

line8x = line8x + line8OffsetX
line8y = line8y + line8OffsetY

if(line8x >= 830){
line8x = 813
}

if(line8y >= a-40){
  line8y = a-68
}

line(line9x, line9y, line9x+line9OffsetX, line9y+line9OffsetY);

line9x = line9x + line9OffsetX
line9y = line9y + line9OffsetY

if(line9x >= 904){
line9x = 868
}

if(line9y >= a-28){
  line9y = a-70
}

line(line10x, line10y, line10x+line10OffsetX, line10y+line10OffsetY);

line10x = line10x + line10OffsetX
line10y = line10y + line10OffsetY

if(line10x >= 987.5){
line10x = 935
}

if(line10y >= a-12){
  line10y = a-72
}

line(line11x, line11y, line11x+line11OffsetX, line11y+line11OffsetY);

line11x = line11x + line11OffsetX
line11y = line11y + line11OffsetY

if(line11x >= 1105){
line11x = 1000
}

if(line11y >= a+12){
  line11y = a-76
}

line(line12x, line12y, line12x+line12OffsetX, line12y+line12OffsetY);

line12x = line12x + line12OffsetX
line12y = line12y + line12OffsetY

if(line12x >= width){
line12x = 1065
}

if(line12y >= a+50){
  line12y = a-78
}

line(line13x, line13y, line13x+line13OffsetX, line13y+line13OffsetY);

line13x = line13x + line13OffsetX
line13y = line13y + line13OffsetY

if(line13x >= width){
line13x = 1130
}

if(line13y >= a-20){
  line13y = a-81
}

line(line14x, line14y, line14x+line14OffsetX, line14y+line14OffsetY);

line14x = line14x + line14OffsetX
line14y = line14y + line14OffsetY

if(line14x >= width){
line14x = 1195
}

if(line14y >= a-60){
  line14y = a-84
}
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


  //heart entering by incr in size behind sun tearing 
if ((song.currentTime() > chorus1Tear && song.currentTime() <= chorus1)){
  
  heartBackScale = map(drum, 0, 100, 1, 1.2);
  heartMainScale = map(drum, 0, 100, 1, 1.5);
  heartIncr1 = map(song.currentTime(), chorus1Tear, chorus1, 0, 1)
  push()
  imageMode(CENTER);
  scale(heartIncr1);
    push()
    imageMode(CENTER);
    push()
    scale(heartBackScale*1.5);
    image(heartBackImg, 405/heartBackScale/heartIncr1, 95/heartBackScale/heartIncr1)
    pop()
      push()
    scale(heartMainScale*1.5);
    image(heartMainImg, 425/heartMainScale/heartIncr1, 110/heartMainScale/heartIncr1)
    pop()
    pop()
  pop()
  }

  else if((song.currentTime() > chorus2Tear && song.currentTime() <= chorus2)){
  heartBackScale = map(drum, 0, 100, 1, 1.2);
  heartMainScale = map(drum, 0, 100, 1, 1.5);
  heartIncr2 = map(song.currentTime(), chorus2Tear, chorus2, 0, 1)
  push()
  imageMode(CENTER);
  scale(heartIncr2);
    push()
    imageMode(CENTER);
    push()
    scale(heartBackScale*1.5);
    image(heartBackImg, 405/heartBackScale/heartIncr2, 95/heartBackScale/heartIncr2)
    pop()
      push()
    scale(heartMainScale*1.5);
    image(heartMainImg, 425/heartMainScale/heartIncr2, 110/heartMainScale/heartIncr2)
    pop()
    pop()
  pop()
  
  }



//sun
push()
if ((song.currentTime() > chorus1Tear && song.currentTime() <= chorus1)){

  let sunLStart = (width/2, height/2);
  let sunLEnd = (0, height/2);
  let sunSplit = map(song.currentTime(), chorus1Tear, chorus1, 1, 5.5);
  let sunX = (2013/sunSplit);
  let sunXEndL = (sunX -100);
  let sunXEndR = (sunX + 100);
  let sunY = (690/sunSplit);
  let sunYEndL = (sunY - 50);
  let sunYEndR = (sunY - 50);
  let sunXTearL = map(song.currentTime(), chorus1Tear, chorus1, sunX, sunXEndL);
  let sunYTearL = map(song.currentTime(), chorus1Tear, chorus1, sunY, sunYEndL);
  let sunXTearR = map(song.currentTime(), chorus1Tear, chorus1, sunX, sunXEndR);
  let sunYTearR = map(song.currentTime(), chorus1Tear, chorus1, sunY, sunYEndR);
  push()
  scale(sunSplit);
  push()
  imageMode(CENTER);
  scale(0.32);
  image(sunLImg, sunXTearL, sunYTearL);
  pop()
  pop()

  push()
  scale(sunSplit);
  push()
  imageMode(CENTER);
  scale(0.32);
  image(sunRImg, sunXTearR, sunYTearR);
  pop()
  pop()
}
else if((song.currentTime() > chorus2Tear && song.currentTime() <=chorus2)){
  let sunLStart = (width/2, height/2);
  let sunLEnd = (0, height/2);
  let sunSplit = map(song.currentTime(), chorus2Tear, chorus2, 1, 5.5);
  let sunX = (2013/sunSplit);
  let sunXEndL = (sunX - 100);
  let sunXEndR = (sunX + 100);
  let sunY = (690/sunSplit);
  let sunYEndL = (sunY - 50);
  let sunYEndR = (sunY - 50);
  let sunXTearL = map(song.currentTime(), chorus2Tear, chorus2, sunX, sunXEndL);
  let sunYTearL = map(song.currentTime(), chorus2Tear, chorus2, sunY, sunYEndL);
  let sunXTearR = map(song.currentTime(), chorus2Tear, chorus2, sunX, sunXEndR);
  let sunYTearR = map(song.currentTime(), chorus2Tear, chorus2, sunY, sunYEndR);
  push()
  scale(sunSplit);
  push()
  imageMode(CENTER);
  scale(0.32);
  image(sunLImg, sunXTearL, sunYTearL);
  pop()
  pop()

  push()
  scale(sunSplit);
  push()
  imageMode(CENTER);
  scale(0.32);
  image(sunRImg, sunXTearR, sunYTearR);
  pop()
  pop()

}

else if((song.currentTime() > chorus1 && song.currentTime() <= verse2) ||
(song.currentTime() > chorus2)){
}

// //draw building layers
// buildingsFrontImg.resize(1080, 300)
// image(buildingsFrontImg, 0, 80);

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
    let gradientAmount = map(i, 0, backgroundGradient, 0, 1)
    let strokeColor = lerpColor(purple, pink, gradientAmount)

    stroke(strokeColor)
    line(0, 100+i-100, width, 100+i-100)
  }



  //retrolines and colour changing with other
push()

let otherMap = map(other, 0, 100, 0, 90)
let lineLength = width
let lineStart = 0
let lineEnd = lineStart+lineLength

strokeWeight(7)
let OtherColorMap = map(other, 0, 100, 0,1) /// all one color, color change based on other volume

for(let i=1; i<otherMap; i++){
let lineStep = i*8 - 5;
let gradientAmount = map(i, 0, otherMap, 0,1) // gradient of lines. colour change based on how far down the page the lines are
let LinesStrokeColor = lerpColor(purple, pink, gradientAmount) 
stroke(LinesStrokeColor)
line(lineStart, lineStep, lineEnd, lineStep)
}
pop()



// //draw building layer behind sun
// buildingsBehindImg.resize(1280, 220)
// image(buildingsBehindImg, 0, 80);



   //moon
if((song.currentTime() > chorus3 && song.currentTime() <= chorus3Switch)){

        //glow
        push()
        let glowOpacity = map(other, 0, 100, -200, 100)
        strokeWeight(150);
        stroke(255, 255, 255, glowOpacity)
        fill(255, 255, 255, glowOpacity)
        push()
        ellipse((width/2), (height/2-100), 350, 350);
        line(400, 100, width/2, height/2-100)
        line(880, 100, width/2, height/2-100)
        line(640, 100, width/2, height/2-100)
        line(400, 250, width/2, height/2-100)
        line(880, 250, width/2, height/2-100)
        pop()
        pop()

  moonImg.resize(250, 250)
  image(moonImg, width/2-125, 130);
  }




//sun
push()
if ((song.currentTime() > chorus1Untear && song.currentTime() <= verse2)){

  let sunLStart = (width/2, height/2);
  let sunLEnd = (0, height/2);
  let sunSplit = map(song.currentTime(), chorus1Untear, verse2, 5.5, 1);
  let sunX = (2013/sunSplit);
  let sunXEndL = (sunX -100);
  let sunXEndR = (sunX + 100);
  let sunY = (690/sunSplit);
  let sunYEndL = (sunY - 50);
  let sunYEndR = (sunY - 50);
  let sunXTearL = map(song.currentTime(), chorus1Untear, verse2, sunXEndL, sunX);
  let sunYTearL = map(song.currentTime(), chorus1Untear, verse2, sunYEndL, sunY);
  let sunXTearR = map(song.currentTime(), chorus1Untear, verse2, sunXEndR, sunX);
  let sunYTearR = map(song.currentTime(), chorus1Untear, verse2, sunYEndR, sunY);
  push()
  scale(sunSplit);
  push()
  imageMode(CENTER);
  scale(0.32);
  image(sunLImg, sunXTearL, sunYTearL);
  pop()
  pop()

  push()
  scale(sunSplit);
  push()
  imageMode(CENTER);
  scale(0.32);
  image(sunRImg, sunXTearR, sunYTearR);
  pop()
  pop()
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
fill(11,4,50);
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
  stroke(148,100,167);
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

  stroke(158,110,177);
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


// //moving dot simulating geometry lines moving and therefore car moving/driving
push()
stroke(11,4,50);
strokeWeight(8);

line(line1x, line1y, line1x+line1OffsetX, line1y+line1OffsetY);

line1x = line1x + line1OffsetX
line1y = line1y + line1OffsetY

if(line1x <= 0){
line1x = 85
}

if(line1y >= a-40){
  line1y = a-82
}

line(line2x, line2y, line2x+line2OffsetX, line2y+line2OffsetY);

line2x = line2x + line2OffsetX
line2y = line2y + line2OffsetY

if(line2x <= 0){
line2x = 150
}

if(line2y >= a+20){
  line2y = a-79
}

line(line3x, line3y, line3x+line3OffsetX, line3y+line3OffsetY);

line3x = line3x + line3OffsetX
line3y = line3y + line3OffsetY

if(line3x <= 0){
line3x = 215
}

if(line3y >= a+100){
  line3y = a-76
}

line(line4x, line4y, line4x+line4OffsetX, line4y+line4OffsetY);

line4x = line4x + line4OffsetX
line4y = line4y + line4OffsetY

if(line4x <= 0){
line4x = 280
}

if(line4y >= a+200){
  line4y = a-73
}

line(line5x, line5y, line5x+line5OffsetX, line5y+line5OffsetY);

line5x = line5x + line5OffsetX
line5y = line5y + line5OffsetY

if(line5x <= 240){
line5x = 348
}

if(line5y >= a+92){
  line5y = a-70
}

line(line6x, line6y, line6x+line6OffsetX, line6y+line6OffsetY);

line6x = line6x + line6OffsetX
line6y = line6y + line6OffsetY

if(line6x <= 365){
line6x = 411
}

if(line6y >= a+35){
  line6y = a-67
}

line(line7x, line7y, line7x+line7OffsetX, line7y+line7OffsetY);

line7x = line7x + line7OffsetX
line7y = line7y + line7OffsetY

if(line7x <= 452){
line7x = 475
}

if(line7y >= a-5){
  line7y = a-67
}

line(line8x, line8y, line8x+line8OffsetX, line8y+line8OffsetY);

line8x = line8x + line8OffsetX
line8y = line8y + line8OffsetY

if(line8x >= 830){
line8x = 813
}

if(line8y >= a-40){
  line8y = a-68
}

line(line9x, line9y, line9x+line9OffsetX, line9y+line9OffsetY);

line9x = line9x + line9OffsetX
line9y = line9y + line9OffsetY

if(line9x >= 904){
line9x = 868
}

if(line9y >= a-28){
  line9y = a-70
}

line(line10x, line10y, line10x+line10OffsetX, line10y+line10OffsetY);

line10x = line10x + line10OffsetX
line10y = line10y + line10OffsetY

if(line10x >= 987.5){
line10x = 935
} 

if(line10y >= a-12){
  line10y = a-72
}

line(line11x, line11y, line11x+line11OffsetX, line11y+line11OffsetY);

line11x = line11x + line11OffsetX
line11y = line11y + line11OffsetY

if(line11x >= 1105){
line11x = 1000
}

if(line11y >= a+12){
  line11y = a-76
}

line(line12x, line12y, line12x+line12OffsetX, line12y+line12OffsetY);

line12x = line12x + line12OffsetX
line12y = line12y + line12OffsetY

if(line12x >= width){
line12x = 1065
}

if(line12y >= a+50){
  line12y = a-78
}

line(line13x, line13y, line13x+line13OffsetX, line13y+line13OffsetY);

line13x = line13x + line13OffsetX
line13y = line13y + line13OffsetY

if(line13x >= width){
line13x = 1130
}

if(line13y >= a-20){
  line13y = a-81
}

line(line14x, line14y, line14x+line14OffsetX, line14y+line14OffsetY);

line14x = line14x + line14OffsetX
line14y = line14y + line14OffsetY

if(line14x >= width){
line14x = 1195
}

if(line14y >= a-60){
  line14y = a-84
}
pop()

//draw road
stroke(0);
fill(12);
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



if((song.currentTime() > chorus3SwitchStart && song.currentTime() <= outro)){
//glow
push()
let glowOpacity = map(other, 0, 100, -200, 100)
strokeWeight(150);
stroke(255, 255, 255, glowOpacity)
fill(255, 255, 255, glowOpacity)
push()
ellipse((width/2), (height/2-100), 350, 350);
line(400, 100, width/2, height/2-100)
line(880, 100, width/2, height/2-100)
line(640, 100, width/2, height/2-100)
line(400, 250, width/2, height/2-100)
line(880, 250, width/2, height/2-100)
pop()
pop()
}
 
//heart
heartScale = map(drum, 0, 100, 1, 1.2);
if ((song.currentTime() > chorus1 && song.currentTime() <= chorus1Untear) ||
(song.currentTime() > chorus2 && song.currentTime() <=chorus2Untear) ||
(song.currentTime()> chorus3Switch)){
  
      //heart glowing
push()
let glowOpacity = map(other, 0, 100, -200, 100)
let glowScale = map(other, 0, 100, 0.8, 1)

stroke(250, 217, 150, glowOpacity)
fill(250, 217, 150, glowOpacity) 
push()
scale(glowScale);
ellipse((width/2)/glowScale, (height/2-150)/glowScale, 390, 350);
pop()
pop()

//heart
  heartBackScale = map(drum, 0, 100, 1, 1.2);
  heartMainScale = map(drum, 0, 100, 1, 1.5);
    push()
    imageMode(CENTER);
    push()
    scale(heartBackScale*1.5);
    image(heartBackImg, 405/heartBackScale, 95/heartBackScale)
    pop()
      push()
    scale(heartMainScale*1.5);
    image(heartMainImg, 425/heartMainScale, 110/heartMainScale)
    pop()
    pop()

  }

 

  //heart exiting by decr in size behind sun  
if ((song.currentTime() > chorus1Untear && song.currentTime() <= verse2)){
  push()
  heartBackScale = map(drum, 0, 100, 1, 1.5);
  heartMainScale = map(drum, 0, 100, 1, 1.5);
  heartDecr1 = map(song.currentTime(), chorus1Untear, verse2, 1, 0)
  push()
  scale(heartDecr1);
    push()
    imageMode(CENTER);
    push()
    scale(heartBackScale*1.5);
    image(heartBackImg, 415/heartBackScale/heartDecr1, 105/heartBackScale/heartDecr1)
    pop()
      push()
    scale(heartMainScale*1.5);
    image(heartMainImg, 425/heartMainScale/heartDecr1, 110/heartMainScale/heartDecr1)
    pop()
    pop()
  pop()
  pop()
  }

  else if((song.currentTime() > chorus2Untear && song.currentTime() <= bridge)){
    push()
    heartDecr2 = map(song.currentTime(), chorus2Untear, bridge, 1, 0)
    push()
    scale(heartDecr2);
      imageMode(CENTER);
      push()
      scale(1.8);
      image(heartImg, 345/heartDecr2, 95/heartDecr2)
      pop()
      pop()
    pop()
    }
  
    else if((song.currentTime() > chorus3SwitchStart && song.currentTime() <= chorus3Switch)){
      heartIncr3 = map(song.currentTime(), chorus3SwitchStart, chorus3Switch, 0, 1)
      push()
      imageMode(CENTER);
      scale(heartIncr3);
        imageMode(CENTER);
        push()
        scale(1.8);
        image(heartImg, 345/heartIncr3, 95/heartIncr3)
      pop()
      pop()
    pop()
    }


//sun
push()
if ((song.currentTime() > chorus1Untear && song.currentTime() <= verse2)){

  let sunLStart = (width/2, height/2);
  let sunLEnd = (0, height/2);
  let sunSplit = map(song.currentTime(), chorus1Untear, verse2, 5.5, 1);
  let sunX = (2013/sunSplit);
  let sunXEndL = (sunX -100);
  let sunXEndR = (sunX + 100);
  let sunY = (690/sunSplit);
  let sunYEndL = (sunY - 50);
  let sunYEndR = (sunY - 50);
  let sunXTearL = map(song.currentTime(), chorus1Untear, verse2, sunXEndL, sunX);
  let sunYTearL = map(song.currentTime(), chorus1Untear, verse2, sunYEndL, sunY);
  let sunXTearR = map(song.currentTime(), chorus1Untear, verse2, sunXEndR, sunX);
  let sunYTearR = map(song.currentTime(), chorus1Untear, verse2, sunYEndR, sunY);
  push()
  scale(sunSplit);
  push()
  imageMode(CENTER);
  scale(0.32);
  image(sunLImg, sunXTearL, sunYTearL);
  pop()
  pop()

  push()
  scale(sunSplit);
  push()
  imageMode(CENTER);
  scale(0.32);
  image(sunRImg, sunXTearR, sunYTearR);
  pop()
  pop()
}

else if((song.currentTime() > chorus1 && song.currentTime() <= verse2) ||
(song.currentTime() > chorus2)){
}

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
    let gradientAmount = map(i, 0, backgroundGradient, 0, 9)
    let strokeColor = lerpColor(navy, grey, gradientAmount)

    stroke(strokeColor)
    line(0, 100+i-100, width, 100+i-100)
  }



  //retrolines and colour changing with other
push()

let otherMap = map(other, 0, 100, 0, 90)
let lineLength = width
let lineStart = 0
let lineEnd = lineStart+lineLength

strokeWeight(7)
let OtherColorMap = map(other, 0, 100, 0,1) /// all one color, color change based on other volume

for(let i=1; i<otherMap; i++){
let lineStep = i*8 - 5;
let gradientAmount = map(i, 0, otherMap, 0,1) // gradient of lines. colour change based on how far down the page the lines are
let LinesStrokeColor = lerpColor(navy, grey, gradientAmount) 
stroke(LinesStrokeColor)
line(lineStart, lineStep, lineEnd, lineStep)
}
pop()

// //mountains
// mountainsBehindImg.resize(1350, 350)
// image(mountainsBehindImg, 0, 12);



//mars
push()

marsImg.resize(250, 250)
image(marsImg, width/2-125, 130);
pop()



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



// //mountains
// mountainsFrontImg.resize(1350, 350)
// image(mountainsFrontImg, 0, 12);


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


push()
  push()
  push()
  let crater1X = map(song.currentTime(), bridge, bridge+20, 1200, -17000);
  let crater1Y = map(song.currentTime(), bridge, bridge+20, 950, 1000);
  let crater1Scale = map(song.currentTime(), bridge, bridge+20, 0.3, 4);
    push()
    translate(300);
    imageMode(CENTER);
    scale(crater1Scale);
    image(craterImg, crater1X, crater1Y);
    pop()
    pop()
pop(
  pop()
)

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
    let gradientAmount = map(i, 0, backgroundGradient, 0, 8)
    let strokeColor = lerpColor(navy, grey, gradientAmount)

    stroke(strokeColor)
    line(0, 100+i-100, width, 100+i-100)
  }



  //retrolines and colour changing with other
push()

let otherMap = map(other, 0, 100, 0, 90)
let lineLength = width
let lineStart = 0
let lineEnd = lineStart+lineLength

strokeWeight(7)
let OtherColorMap = map(other, 0, 100, 0,1) /// all one color, color change based on other volume

for(let i=1; i<otherMap; i++){
let lineStep = i*8 - 5;
let gradientAmount = map(i, 0, otherMap, 0,1) // gradient of lines. colour change based on how far down the page the lines are
let LinesStrokeColor = lerpColor(navy, grey, gradientAmount) 
stroke(LinesStrokeColor)
line(lineStart, lineStep, lineEnd, lineStep)
}
pop()

// //mountains
// mountainsBehindImg.resize(1350, 350)
// image(mountainsBehindImg, 0, 12);



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

// //mountains
// mountainsFrontImg.resize(1350, 350)
// image(mountainsFrontImg, 0, 12);

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



  

//heart
if ((song.currentTime() > chorus1 && song.currentTime() <= verse2) ||
(song.currentTime() > chorus2)){
  
        //heart glowing
push()
let glowOpacity = map(other, 0, 100, -200, 100)
let glowScale = map(bass, 0, 100, 0.8, 1.1)
noStroke()
fill(255, 255, 255, glowOpacity)
push()
scale(glowScale);
ellipse((width/2)/glowScale, (height/2-190)/glowScale, 390, 350);
pop()
pop()

//heart
  heartBackScale = map(drum, 0, 100, 1, 1.2);
  heartMainScale = map(drum, 0, 100, 1, 1.5);
    push()
    imageMode(CENTER);
    push()
    scale(heartBackScale*1.5);
    image(heartBackImg, 405/heartBackScale, 95/heartBackScale)
    pop()
      push()
    scale(heartMainScale*1.5);
    image(heartMainImg, 425/heartMainScale, 110/heartMainScale)
    pop()
    pop()
}

push()
  push()
  let crater3X = map(song.currentTime(),outro, outro+20, 1200, -17000);
  let crater3Y = map(song.currentTime(), outro, outro+20, 950, 1000);
  let crater3Scale = map(song.currentTime(), outro, outro+20, 0.3, 2);
    push()
    translate(300);
    imageMode(CENTER);
    scale(crater3Scale);
    image(craterImg, crater3X, crater3Y);
      pop()
  pop()
  pop()
}
pop()




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
let otherWave;
let waveFreq = 3;

beginShape();
for(let i = 0; i < width/2.2; i++){
 vertex(i, height/2 - waveHeight*sin(waveFreq*i))
}
endShape();

pop();

}