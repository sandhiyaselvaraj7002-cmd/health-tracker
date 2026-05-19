// Mood Tracker
function showMood(mood){

    let message = "";

    if(mood.includes("Happy")){
        message = "Keep smiling and stay positive 🌈";
    }

    else if(mood.includes("Sad")){
        message = "Better days are coming ❤️";
    }

    else if(mood.includes("Tired")){
        message = "Take some rest and recharge 😴";
    }

    else{
        message = "Stay calm and breathe deeply 🌿";
    }

    document.getElementById("moodResult").innerHTML =
    mood + "<br>" + message;

}

// BMI Calculator
function calculateBMI(){

    let height =
    parseFloat(document.getElementById("height").value);

    let weight =
    parseFloat(document.getElementById("weight").value);

    if(height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)){

        document.getElementById("bmiResult").innerHTML =
        "Please enter valid values";

        return;
    }

    // Convert cm to meter
    height = height / 100;

    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    let category = "";

    if(bmi < 18.5){
        category = "Underweight";
    }

    else if(bmi >= 18.5 && bmi < 25){
        category = "Normal";
    }

    else if(bmi >= 25 && bmi < 30){
        category = "Overweight";
    }

    else{
        category = "Obese";
    }

    document.getElementById("bmiResult").innerHTML =
    "BMI: " + bmi + "<br>" + category;

}

// Water Tracker
let waterCount = 0;

function addWater(){

    waterCount++;

    document.getElementById("waterResult").innerHTML =
    "You drank " + waterCount + " glasses today 💧";

}

function resetWater(){

    waterCount = 0;

    document.getElementById("waterResult").innerHTML =
    "You drank 0 glasses today";

}

// Exercise Timer
let timeLeft = 60;
let timer;

function startTimer(){

    clearInterval(timer);

    timeLeft = 60;

    timer = setInterval(function(){

        document.getElementById("timerResult").innerHTML =
        timeLeft + " seconds remaining ⏳";

        timeLeft--;

        if(timeLeft < 0){

            clearInterval(timer);

            document.getElementById("timerResult").innerHTML =
            "Exercise Complete 🎉";

        }

    },1000);

}

function resetTimer(){

    clearInterval(timer);

    timeLeft = 60;

    document.getElementById("timerResult").innerHTML =
    "60 seconds remaining";

}

// Daily Quotes
function generateQuote(){

    let quotes = [

        "Your health is your real wealth 💚",

        "Small healthy habits make big differences 🌿",

        "Drink water and stay active 💧",

        "Take care of your mind and body ✨",

        "A healthy outside starts from inside 🌸"

    ];

    let randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quoteResult").innerHTML =
    randomQuote;

}