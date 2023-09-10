noseX = 0
noseY = 0
rightWristX = 0
leftWristX = 0
difference = 0
word = ""

function preload() {

}

function setup() {
    canvas = createCanvas(550, 500)
    canvas.position(700, 100)

    video = createCapture(VIDEO)
    video.size(550, 500)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)

    word = ""
}

function draw() {
    background("gray")
    fill("blue")
    stroke("red")
    textSize(difference)
    text(word , noseX , noseY)
}

function modelLoaded() {
    console.log("Model is Loaded")
}

function gotPoses(result) {

    if (result.length > 0) {

        console.log(result)

        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("noseX = " + noseX + "&& noseY = " + noseY)

        rightWristX = result[0].pose.rightWrist.x;
        leftWristX = result[0].pose.leftWrist.x;
        console.log("Right Wrist X = " + rightWristX + "&& Left Wrist X = " + leftWristX)

        difference = Math.floor(rightWristX - leftWristX)
        console.log("difference = " + difference)
    }
}

function submit(){
    word = document.getElementById("word_i").value;
    console.log(word)
}