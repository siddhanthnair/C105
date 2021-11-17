Webcam.set({
width: 350,
height:300,
image_format: "png",
png_quality: 90,
})
camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML= "<img id='capturedimg' src=' "+data_uri+"'>";
}) 
}
console.log('ml5 version'+ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/INQeA8mnA/model.json',modelLoaded);
function modelLoaded(){
    console.log ("modelLoaded");
}
function identify(){
find= document.getElementById("capturedimg");     
classifier.classify(find, gotresults);
}
function gotresults(errors, results){
if (errors){
    console.error(errors);
}    
else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML= results[0].label;
    document.getElementById("result_object_acuracy").innerHTML= results[0].confidence.toFixed(3);
    
    
}
}