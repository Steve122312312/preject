
Webcam.attach("#camera")

Webcam.set({
    width: 500,
    height: 400,
    image_format: "png",
    png_quality: 90
})

function captureimage() {
    Webcam.snap(function (datauri) {
        document.getElementById("result").innerHTML = "<img src='" + datauri + "' id='snapshot'>"
    })
}

console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qeKJ7kLgv/model.json", modelLoaded)

function modelLoaded() {
    console.log("HELLO")
}


function speak() {
    var synth = window.speechSynthesis
    var data1 = "the first prdiction is" + prediction1
    var data2 = "the second prdiction is" + prediction2
    var utter = new SpeechSynthesisUtterance(data1 + data2)
    synth.speak(utter)
}

function pridictimage() {
    var image = document.getElementById("snapshot")
    classifier.classify(image, gotresult)

}



function gotresult(error, result) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
        prediction1 = result[0].label
        prediction2 = result[1].label
        console.log(prediction1)
        console.log(prediction2)
        document.getElementById("emotion_name1").innerHTML = prediction1
        document.getElementById("emotion_name2").innerHTML = prediction2
        speak()

        if (prediction1 == "Amazing") 
        {
            document.getElementById("emoji1").innerHTML = "&#128076;"
        }
        if (prediction1 == "All the best") 
        {
            document.getElementById("emoji1").innerHTML = "&#128077;"
        }

        if (prediction1 == "Victory") 
        {
            document.getElementById("emoji1").innerHTML = "&#9996;"
        }

        if (prediction2 == "Amazing") 
        {
            document.getElementById("emoji2").innerHTML = "&#128076;"
        }
        if (prediction2 == "All the best") 
        {
            document.getElementById("emoji2").innerHTML = "&#128077;"
        }

        if (prediction2 == "Victory") 
        {
            document.getElementById("emoji2").innerHTML = "&#9996;"

        }


    }