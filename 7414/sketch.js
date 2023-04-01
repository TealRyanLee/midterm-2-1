let points = [[1,-3], [5,-4], [4,-3],[9,1],[7,2],[8,5],[5,4],[5,5],[3,4],[4,9],[2,7],[0,10],[-2,7],[-4,8],[-3,3],[-5,6],[-5,4],[-8,5],[-7,2],[-9,1],[-4,-3],[-5,-4],[0,-3],[2,-7],[2,-6],[1,-3]]; //list資料，

function setup() {   
  createCanvas(windowWidth, windowHeight); 
  
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}


function draw() {
  background(255);
  stroke(0)
  strokeWeight(4)
  text("王希銘支持教育科技學系",mouseX,mouseY)
  
  translate(mouseX, mouseY); 
  scale(1, -1); 

  for (let i = 0; i < points.length-1; i++) {
    let ratio1 = map(i, 0, points.length-1, 0, 1);
    let ratio2 = map(i+1, 0, points.length-1, 0, 1);
    let clr = lerpColor(color("#90e0ef"), color("#766153"), ratio1);
    let middlecolor = lerpColor(color("#90e0ef"), color("#766153"), (ratio1+ratio2)/2)
    stroke(clr);
    strokeWeight(10);
    for(k=1;k<6;k++){
      textSize(25*(mouseX/1000)*k)
      line(points[i][0]*(mouseX/1000)*k, points[i][1]*(mouseX/1000)*k, points[i+1][0]*(mouseX/1000)*k, points[i+1][1]*(mouseX/1000)*k);
    }
  }
  let clr = lerpColor(color("#90e0ef"), color("#766153"), map(0, 0, points.length-1, 0, 1));
  stroke(clr);
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); 
}