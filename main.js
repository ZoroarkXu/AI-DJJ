leftWristX=0;
leftWristY=0;
rightWrsitX=0;
rightWristY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("leftWristX="+leftWristX+"leftWristY"+leftWristY);
console.log("rightWristX="+rightWristX+"rightWristY"+rightWristY);
}
}

function modelLoaded(){
    console.log("Nothing is initialized");
}

function draw(){
    image(video,0,0,600,500);
}

song="";

function preload(){
    song=loadSound("The-Kid-LAROI-Justin-Bieber-Stay-(englishsongs.wapkiz.com).mp3");
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}