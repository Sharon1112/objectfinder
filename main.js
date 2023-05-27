objects= [];
status1= "";

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size
    video.hide();
}

function start(){
    objectDectector =ml5.objectDectector('cocossd', modelLoaded);
    document.getElementById("status1").innerHTML= "Status : Detecting object";
    object_name = document.getElementById("input").value;
}

function draw(){
    image(video, 0, 0, 480, 380);
    if (status1 != ""){
        objectDectector.detect(video, gotResult);
        for(i=0; i <objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Object detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].x, objects[i].y, objects[i].width + 15, objects[i].length+15);
            noFill();
            stroke("#FF0000");
            rect( objects[i].x, object[i].y, object[i].width, objects[i].length);

            if (objects[i].label == object_name){
                video.stop();
                objectDectector.detect(gotResult);
                document.getElementById("object_status").innerHTML = object_name + "found";
                synth = window.speechSynthesis;
                utterThis = new SpeechSynthesisUtterance (object_name + "found");
                synth.speak(utterThis);
            }
            else{
                document.getElementById("object_status").innerHTML = object_name + "not found";
            }
        }
    }
}

function gotResult(error, results){
    if(error){
        console.error;
    }
    console.log(results);
    objects = results;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
}