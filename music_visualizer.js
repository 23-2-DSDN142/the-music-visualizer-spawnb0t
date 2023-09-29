//1080x720

//system_runner; change canvas size // vert or hor
//system_settings; debugFastRefresh to have countdown delay record 

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(255)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  noFill()

  // //gradient background & ellipse
  // let purple = color(127, 37, 213)
  // let pink = color(223, 73, 133)  
  // let midPPLerp = map(vocal, 0, 100, 0, 1)
  // let midPinkPurple = lerpColor(pink, purple, 0.85) //make 0.85 midPPLerp so it visualises vocals

  // strokeWeight(3)
  // let backgroundGradient = 1000

  // for(let i=0; i<backgroundGradient; i++){
  //   let gradientAmount = map(i, 0, backgroundGradient, 0,1)
  //   let strokeColor = lerpColor(midPinkPurple, pink, gradientAmount)

  //   stroke(strokeColor)
  //   ellipse(width/2, height/2, i/4)
  //   line(0, 100+i-100, width, 100+i-100)
  // }


  // // horizon colour change with bass
  // let yellow = color(240, 197, 5)
  // let red = color(204, 14, 14)
  // let lerpMap = map(bass, 0, 100, 0,1)
  // let middleColor = lerpColor(pink, purple, lerpMap)
  
  // let mappedXPost = map(vocal, 0, 100, -100, 100)
  
  // fill(middleColor)
  // rect(width/2, height/2+height/4, 1280, 360)
  // ellipse(width/2, height/2, 100, 100)
 
  //display "words"
// text(0)
// textAlign(CENTER);
// textSize(other);
// text(words, width/2, height/3);
   

//eg effect - lines and colour changing with drum
colorMode(HSB, 100)
strokeWeight(7)
stroke(drum, 80, 80)

let drumMap = map(drum, 0, 100, 0, 90)
let lineLength = 1080
let lineStart = 0
let lineEnd = lineStart+lineLength



for(let i=1; i<drumMap; i++){
let lineStep = i*8 - 5;
line(lineStart, lineStep, lineEnd, lineStep)
}

//Wave visualiser
stroke(0)
strokeWeight(5)
let waveHeight = map(drum, 0, 100, 20, 120);
let drumWave;
let waveFreq = 3;

beginShape()
for(let i = 0; i < width; i++){
  vertex(i, height/2 - waveHeight*sin(waveFreq*i))
}
endShape()
}



// let bar_spacing = height / 10;
// let bar_height = width / 12;
// let bar_pos_x = width / 2;


// // vocal bar is red
// fill(200, 0, 0);
// rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
// fill(0);
// text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

// // drum bar is green
// fill(0, 200, 0);
// rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
// fill(0);
// text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

// // bass bar is blue
// fill(50, 50, 240);
// rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
// fill(0);
// text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

// // other bar is white
// fill(200, 200, 200);
// rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
// fill(0);
// text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
// fill(255, 255, 0);

// display "words"
// textAlign(CENTER);
// textSize(vocal);
// text(words, width/2, height/3);