noseX=0;
noseY=0;
Lwristx=0;
Rwristx=0;
var diff=0;
function setup() {
    canvas=createCanvas(400,400);
    canvas.position(700,130);

   Video=createCapture(VIDEO);
    Video.size(500,500);
    poseNet=ml5.poseNet(Video,modelLoaded)
    poseNet.on("pose",gotPoses);
    
}

function modelLoaded() {
    console.log("model initialized");
}

function draw() {
    background("grey");
fill("red");
circle(noseX,noseY,diff);

}

function gotPoses(results) {
    if (results.length>0) {
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
Lwristx=results[0].pose.leftWrist.x;
Rwristx=results[0].pose.rightWrist.x;
diff=Lwristx-Rwristx;
    }
    
}
