x = 0
y = 0
Draw_apple=""

var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()

function preload(){
    apple=loadImage("AAPLEr.png")
}

function start(){
    document.getElementById("status").innerHTML="the system is listening. Pls speak to bring a meaning to my existence: "
    recognition.start()
}

recognition.onresult=function (event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById('status').innerHTML="I think you are saying: " + content
    to_number= Number(content)
    if(Number.isInteger(to_number)){
       document.getElementById("status").innerHTML="Apple is beimg drawn "
       Draw_apple="set"
} else{
    document.getElementById("status").innerHTML="System not recognise number. ERROR"
}}

function setup(){
    canvas=createCanvas(900,600)
}

function draw(){
    if(Draw_apple == "set"){
        for(var i=1; i<=to_number; i++){
        x=Math.floor(Math.random * 700);
        y=Math.floor(Math.random * 400);
        image(apple,x,y,50,50)
        }
        document.getElementById("status").innerHTML=to_number+"  Apples are drawn your highness"
        Draw_apple=""
        speak_data=to_number + "apples drawn"
        speak()
    }
}

function speak(){
    var synth=window.speechSynthesis
    var utterthis=SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)
    speak_data="empty"
}