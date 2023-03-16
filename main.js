status = ""
function setup() {
    canvas=createCanvas(640,420)
    canvas.center()
    object_detector = ml5.objectDetector('cocossd' , modelLoaded)
    document.getElementById("status").innerHTML = "Detecting Objects"
}

function modelLoaded() {
    console.log("Model Is loaded");
    status = true
    objectDetector.detect(img , gotresults)

}

function gotresults(error , results) {
    if (error) {
        console.log(error)
    } else {
      console.log(results)  
    }
}


function preload() {
    img = loadImage("dog_cat.jpg")
}

function draw(){
image(img,0,0,640,420)
fill("red")
text("dog" , 20 , 20)
noFill()
stroke("black")
rect(20 , 20, 320 , 390 )

fill("red")
text("cat" , 20 , 20)
nofill()
stroke(black)
rect(360,230,360,230)
}

