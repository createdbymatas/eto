function checkTime(i) {
    if (i < 10) {
    i = "0" + i;
}
return i;
}

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    // add a zero in front of numbers<10
    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
        t = setTimeout(function() {
    startTime()
    }, 500);
}
startTime();



setTimeout(() => {
    document.getElementById("createdByMatas").style.opacity = "1";
    document.getElementById("eto").style.opacity = "1";
}, 100);
function loadFunction() {
    setTimeout(() => {
        document.getElementById("raide14").style.opacity = "0";
    }, 1600);
    setTimeout(() => {
        document.getElementById("raide13").style.opacity = "0";
    }, 1700);
    setTimeout(() => {
        document.getElementById("raide12").style.opacity = "0";
    }, 1800);
    setTimeout(() => {
        document.getElementById("raide11").style.opacity = "0";
    }, 1900);
    setTimeout(() => {
        document.getElementById("raide10").style.opacity = "0";
    }, 2000);
    setTimeout(() => {
        document.getElementById("raide9").style.opacity = "0";
    }, 2100);
    setTimeout(() => {
        document.getElementById("raide8").style.opacity = "0";
    }, 2200);
    setTimeout(() => {
        document.getElementById("raide7").style.opacity = "0";
    }, 2300);
    setTimeout(() => {
        document.getElementById("raide6").style.opacity = "0";
    }, 2400);
    setTimeout(() => {
        document.getElementById("raide5").style.opacity = "0";
    }, 2500);
    setTimeout(() => {
        document.getElementById("raide4").style.opacity = "0";
    }, 2600);
    setTimeout(() => {
        document.getElementById("raide3").style.opacity = "0";
    }, 2700);
    setTimeout(() => {
        document.getElementById("raide2").style.opacity = "0";
    }, 2800);
    setTimeout(() => {
        document.getElementById("raide1").style.opacity = "0";
    }, 2900);
    setTimeout(() => {
            document.getElementById("loading").style.opacity = "0";
            document.getElementById("createdByMatas").style.display = "none";
    }, 3000);
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 3300);
}

function arm() {
    document.getElementById('exitDelay').muted = true;
    document.getElementById("exitDelay").play();

    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    document.getElementById("arm").style.pointerEvents = "none";
    document.getElementById("panicBtn").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("exitDelay").pause();
    }, 1);
    setTimeout(() => {
        document.getElementById("arm").style.color = "#9EBDFF";
        document.getElementById("arm").style.borderColor = "#9EBDFF";
        document.getElementById("disarm").style.opacity = "0";
        document.getElementById("panicBtn").style.bottom = "-100px";
        document.getElementById("statusDisarmed").style.display = "none";
        document.getElementById("statusArming").style.display = "block";
        document.getElementById('exitDelay').currentTime = 0;
        document.getElementById('exitDelay').muted = false;
        document.getElementById("exitDelay").play();
    }, 500); 
    setTimeout(() => {
        document.getElementById("disarm").style.borderColor = "transparent";
        document.getElementById("disarm").style.color = "black";
        document.getElementById("disarmI").style.display = "none";
        document.getElementById("disarmP").style.display = "none";
        document.getElementById("disarmH1").style.display = "block";
        document.getElementById("touchInfo").style.animation = "none";
    }, 800); 
    setTimeout(() => {
        document.getElementById("touchInfo").style.opacity = "0";
    }, 850);   
}

document.getElementById("exitDelay").onended = function() {
    document.getElementById('armedAway').muted = true;
    document.getElementById("armedAway").play();

    document.getElementById('countdown').currentTime = 0;
    document.getElementById("countdown").play();
    document.getElementById("disarm").style.opacity = "1";
    document.getElementById("arm").style.animation = "blinkBorder 2s linear infinite";
    setTimeout(() => {
        document.getElementById("armedAway").pause();
    }, 1);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "29 seconds";
    }, 1000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "28 seconds";
    }, 2000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "27 seconds";
    }, 3000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "26 seconds";
    }, 4000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "25 seconds";
    }, 5000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "24 seconds";
    }, 6000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "23 seconds";
    }, 7000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "22 seconds";
    }, 8000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "21 seconds";
    }, 9000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "20 seconds";
    }, 10000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "19 seconds";
    }, 11000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "18 seconds";
    }, 12000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "17 seconds";
    }, 13000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "16 seconds";
    }, 14000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "15 seconds";
    }, 15000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "14 seconds";
    }, 16000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "13 seconds";
    }, 17000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "12 seconds";
    }, 18000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "11 seconds";
    }, 19000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "10 seconds";
        document.getElementById("armCountdown").style.color = "red";
        document.getElementById("arm").style.animation = "blinkBorder 1s linear infinite";
    }, 20000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "9 seconds";
    }, 21000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "8 seconds";
    }, 22000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "7 seconds";
    }, 23000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "6 seconds";
    }, 24000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "5 seconds";
    }, 25000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "4 seconds";
    }, 26000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "3 seconds";
    }, 27000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "2 seconds";
    }, 28000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "1 second";
    }, 29000);
    setTimeout(() => {
        document.getElementById("armCountdown").innerHTML = "0 seconds";
    }, 30000);
    setTimeout(() => {
        document.getElementById('armedAway').currentTime = 0;
        document.getElementById('armedAway').muted = false;
        document.getElementById("armedAway").play();
        document.getElementById("disarm").style.opacity = "0";
        document.getElementById("statusArmed").style.display = "block";
        document.getElementById("statusArming").style.display = "none";
        document.getElementById("arm").style.animation = "none";
    }, 31000);
    setTimeout(() => {
        document.getElementById("disarm").style.borderColor = "darkgrey";
        document.getElementById("disarm").style.color = "darkgrey";
        document.getElementById("disarmI").style.display = "block";
        document.getElementById("disarmP").style.display = "block";
        document.getElementById("disarmH1").style.display = "none";
        document.getElementById("armCountdown").innerHTML = "30 seconds";
        document.getElementById("armCountdown").style.color = "black";
    }, 31300);
    setTimeout(() => {
        document.getElementById("disarm").style.opacity = "1";
        document.getElementById("disarm").style.pointerEvents = "all";
    }, 31310);
}

function disarm() {
    document.getElementById('entryDelay').muted = true;
    document.getElementById("entryDelay").play();
    document.getElementById('disarmedStay').muted = true;
    document.getElementById("disarmedStay").play();

    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    document.getElementById("disarm").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("entryDelay").pause();
    }, 1); 
    setTimeout(() => {
        document.getElementById("disarm").style.color = "#9EBDFF";
        document.getElementById("disarm").style.borderColor = "#9EBDFF";
        document.getElementById("arm").style.opacity = "0";
        document.getElementById('entryDelay').currentTime = 0;
        document.getElementById('entryDelay').muted = false;
        document.getElementById("entryDelay").play();
    }, 500); 
    setTimeout(() => {
        document.getElementById("arm").style.borderColor = "transparent";
        document.getElementById("arm").style.color = "black";
        document.getElementById("armI").style.display = "none";
        document.getElementById("armP").style.display = "none";
        document.getElementById("armH1").style.display = "block";
    }, 800);
}

document.getElementById("entryDelay").onended = function() {
    document.getElementById('alarmingNow').muted = true;
    document.getElementById("alarmingNow").play();
    document.getElementById('siren').muted = true;
    document.getElementById("siren").play();

    document.getElementById('countdown').currentTime = 0;
    document.getElementById("countdown").play();
    document.getElementById("arm").style.opacity = "1";
    document.getElementById("disarm").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("alarmingNow").pause();
        document.getElementById("siren").pause();
    }, 1);
    setTimeout(() => {
        document.getElementById("keyboardBackground").style.display = "flex";
    }, 290);
    setTimeout(() => {
        document.getElementById("keyboardBackground").style.opacity = "1";
    }, 300);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "29 seconds";
    }, 1000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "28 seconds";
    }, 2000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "27 seconds";
    }, 3000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "26 seconds";
    }, 4000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "25 seconds";
    }, 5000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "24 seconds";
    }, 6000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "23 seconds";
    }, 7000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "22 seconds";
    }, 8000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "21 seconds";
    }, 9000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "20 seconds";
    }, 10000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "19 seconds";
    }, 11000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "18 seconds";
    }, 12000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "17 seconds";
    }, 13000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "16 seconds";
    }, 14000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "15 seconds";
    }, 15000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "14 seconds";
    }, 16000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "13 seconds";
    }, 17000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "12 seconds";
    }, 18000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "11 seconds";
    }, 19000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "10 seconds";
        document.getElementById("disarmCountdown").style.color = "red";
    }, 20000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "9 seconds";
    }, 21000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "8 seconds";
    }, 22000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "7 seconds";
    }, 23000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "6 seconds";
    }, 24000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "5 seconds";
    }, 25000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "4 seconds";
    }, 26000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "3 seconds";
    }, 27000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "2 seconds";
    }, 28000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "1 second";
    }, 29000);
    setTimeout(() => {
        document.getElementById("disarmCountdown").innerHTML = "0 seconds";
    }, 30000);
    setTimeout(() => {
        document.getElementById("nowAlarm").click();
    }, 31000);
}
function alarmNow(){
    if(document.getElementById("statusArmed").style.display === "block")
    {
        document.getElementById('alarmingNow').currentTime = 0;
        document.getElementById('alarmingNow').muted = false;
        document.getElementById("alarmingNow").play();
        document.getElementById("arm").style.opacity = "0";
        document.getElementById("statusAlarm").style.display = "block";
        document.getElementById("statusArmed").style.display = "none";
        setTimeout(() => {
            document.getElementById("arm").style.borderColor = "red";
            document.getElementById("arm").style.color = "red";
            document.getElementById("alarmH1").style.display = "block";
            document.getElementById("armH1").style.display = "none";
            document.getElementById("disarmCountdown").innerHTML = "30 seconds";
            document.getElementById("disarmCountdown").style.color = "black";
        }, 300);
        setTimeout(() => {
            document.getElementById("arm").style.opacity = "1";
            document.getElementById("arm").style.animation = "blinkBorderRed 0.3s linear infinite";
            document.getElementById("statusBar").style.animation = "blinkPanic 0.3s linear infinite";
        }, 310);
    }
    else{

    }
}
document.getElementById("alarmingNow").onended = function() {
    document.getElementById('siren').currentTime = 0;
    document.getElementById('siren').muted = false;
    document.getElementById("siren").play();
}




function panic() {
    document.getElementById("panic").play();
    document.getElementById('panic').muted = true;
    document.getElementById("siren").play();
    document.getElementById('siren').muted = true;

    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    document.getElementById("panicScreen").style.bottom = "0";
    document.getElementById("sirenConfirmation").style.display = "block";
    setTimeout(() => {
        document.getElementById("panic").pause();
        document.getElementById("siren").pause();
    }, 1);
    setTimeout(() => {
        document.getElementById("countdownPanic").innerHTML = "4 seconds";
    }, 1000);
    setTimeout(() => {
        document.getElementById("countdownPanic").innerHTML = "3 seconds";
    }, 2000);
    setTimeout(() => {
        document.getElementById("countdownPanic").innerHTML = "2 seconds";
    }, 3000);
    setTimeout(() => {
        document.getElementById("countdownPanic").innerHTML = "1 second";
    }, 4000);
    setTimeout(() => {
        checkPanic();
    }, 5000);
}
function checkPanic() {
document.getElementById("countdownPanic").innerHTML = "0 seconds";
        if (document.getElementById("sirenConfirmation").style.display === "block") {
            panicConfirm();
            document.getElementById("cancelSirenSpan").innerHTML = "STOP";
        }
        else {

        }
    }
function panicCancel() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    document.getElementById("statusDisarmed").style.display = "block";
    document.getElementById("statusPanic").style.display = "none";
    document.getElementById("pulse1").style.animation = "none";
    document.getElementById("pulse2").style.animation = "none";
    document.getElementById("pulse3").style.animation = "none";
    document.getElementById("pulse4").style.animation = "none";
    document.getElementById("pulse5").style.animation = "none";
    document.getElementById("statusBar").style.animation = "none";
    document.getElementById("panicExclamation").style.opacity = "0";
    document.getElementById("PANICtext").style.opacity = "0";
    document.getElementById("panicText").style.opacity = "0";
    document.getElementById("panicScreenButton").style.bottom = "-100px";
    document.getElementById("sirenConfirmation").style.display = "none";
    document.getElementById("siren").pause();
    setTimeout(() => {
        document.getElementById("panicExclamation").style.display = "none";
        document.getElementById("PANICtext").style.display = "none";
        document.getElementById("panicText").style.display = "none";
        document.getElementById("panicLoader").style.display = "block";
        document.getElementById("panicText2").style.display = "block";
    }, 300);
    setTimeout(() => {
        document.getElementById("panicLoader").style.opacity = "1";
        document.getElementById("panicText2").style.opacity = "1";
    }, 310);
    setTimeout(() => {
        document.getElementById("panicScreen").style.bottom = "-110%";
    }, 3000);
    setTimeout(() => {
        document.getElementById("cancelSirenSpan").innerHTML = "CANCEL";
        document.getElementById("panicText").style.opacity = "1";
        document.getElementById("countdownPanic").innerHTML = "5 seconds";
        document.getElementById("panicExclamation").style.opacity = "1";
        document.getElementById("PANICtext").style.opacity = "1";
        document.getElementById("panicText").style.opacity = "1";
        document.getElementById("panicScreenButton").style.bottom = "30px";
        document.getElementById("panicExclamation").style.display = "block";
        document.getElementById("PANICtext").style.display = "block";
        document.getElementById("panicText").style.display = "block";
        document.getElementById("panicLoader").style.display = "none";
        document.getElementById("panicText2").style.display = "none";
        document.getElementById("panicLoader").style.opacity = "0";
        document.getElementById("panicText2").style.opacity = "0";
        document.getElementById("panicText2").innerHTML = "Cancelling PANIC...";
    }, 3300);
}
function panicConfirm() {
    document.getElementById('panic').currentTime = 0;
    document.getElementById('panic').muted = false;
    document.getElementById("panic").play();
    document.getElementById("statusDisarmed").style.display = "none";
    document.getElementById("statusPanic").style.display = "block";
    document.getElementById("panicText").style.opacity = "0";
    document.getElementById("pulse1").style.animation = "dotsOther 2s linear infinite";
    document.getElementById("pulse2").style.animation = "dotsOther 2s linear infinite 0.4s";
    document.getElementById("pulse3").style.animation = "dotsOther 2s linear infinite 0.8s";
    document.getElementById("pulse4").style.animation = "dotsOther 2s linear infinite 1.2s";
    document.getElementById("pulse5").style.animation = "dotsOther 2s linear infinite 1.6s";
    document.getElementById("statusBar").style.animation = "blinkPanic 0.3s linear infinite";
    document.getElementById("panicText2").innerHTML = "Stopping PANIC...";
}

document.getElementById("panic").onended = function() {
    document.getElementById('siren').currentTime = 0;
    document.getElementById('siren').muted = false;
    document.getElementById("siren").play();
}

document.getElementById("siren").onended = function() {
    document.getElementById('siren').currentTime = 0;
    document.getElementById("siren").play();
}








let inputas = "";
function pirmas() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = inputas + 1;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "black";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#9EBDFF";
            document.getElementById("gerai").click();
    }
}
function antras() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = inputas + 2;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "black";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#9EBDFF";
            document.getElementById("gerai").click();
    }
}
function trecias() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = inputas + 3;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "black";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#9EBDFF";
            document.getElementById("gerai").click();
    }
}
function ketvirtas() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = inputas + 4;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "black";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#9EBDFF";
            document.getElementById("gerai").click();
    }
}
function penktas() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = inputas + 5;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "black";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#9EBDFF";
            document.getElementById("gerai").click();
    }
}
function sestas() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = inputas + 6;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "black";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#9EBDFF";
            document.getElementById("gerai").click();
    }
}
function septintas() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = inputas + 7;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "black";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length = 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#9EBDFF";
            document.getElementById("gerai").click();
    }
}
function astuntas() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = inputas + 8;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "black";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#9EBDFF";
            document.getElementById("gerai").click();
    }
}
function devintas() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = inputas + 9;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "black";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#9EBDFF";
            document.getElementById("gerai").click();
    }
}
function nulinis() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = inputas + 0;
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "black";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "#9EBDFF";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "#9EBDFF";
            document.getElementById("gerai").click();
    }
}
function istrinti() {
    document.getElementById('click').currentTime = 0;
    document.getElementById("click").play();
    inputas = "";
    document.getElementById("kodas").value = '';
    document.getElementById("istrynimas").style.color = "transparent";
    document.getElementById("istrynimas").style.pointerEvents = "none";
    document.getElementById("taskelis1").style.backgroundColor = "transparent";
    document.getElementById("taskelis2").style.backgroundColor = "transparent";
    document.getElementById("taskelis3").style.backgroundColor = "transparent";
    document.getElementById("taskelis4").style.backgroundColor = "transparent";
    document.getElementById("taskelis5").style.backgroundColor = "transparent";
    document.getElementById("taskelis6").style.backgroundColor = "transparent";
}
function check(form)
{
    if(form.pin.value === "000000")
        {
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("keypad").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("keypad").style.pointerEvents = "all";
            document.getElementById("ivestiKoda").style.opacity = "1";

            document.getElementById('disarmedStay').currentTime = 0;
            document.getElementById('disarmedStay').muted = false;
            document.getElementById("disarmedStay").play();
            document.getElementById("countdown").pause();
            document.getElementById("siren").pause();
            document.getElementById("keyboardBackground").style.opacity = "0";
            document.getElementById("statusAlarm").style.display = "none";
            document.getElementById("statusArmed").style.display = "none";
            document.getElementById("statusDisarmed").style.display = "block";
            document.getElementById("arm").style.animation = "none";
            document.getElementById("arm").style.opacity = "0";
            document.getElementById("statusBar").style.animation = "none";
        }, 3600);
        setTimeout(() => {
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
            document.getElementById("keyboardBackground").style.display = "none";
            document.getElementById("arm").style.borderColor = "darkgrey";
            document.getElementById("arm").style.color = "darkgrey";
            document.getElementById("alarmH1").style.display = "none";
            document.getElementById("armH1").style.display = "none";
            document.getElementById("armI").style.display = "block";
            document.getElementById("armP").style.display = "block";
            document.getElementById("disarmCountdown").innerHTML = "30 seconds";
            document.getElementById("disarmCountdown").style.color = "black";
        }, 3900);
        setTimeout(() => {
            document.getElementById("arm").style.opacity = "1";
            document.getElementById("arm").style.pointerEvents = "all";
            document.getElementById("disarm").style.opacity = "1";
            document.getElementById("panicBtn").style.bottom = "30px";
            document.getElementById("panicBtn").style.pointerEvents = "all";
            document.getElementById("touchInfo").style.opacity = "1";
        }, 3910);
        setTimeout(() => {
            document.getElementById("touchInfo").style.animation = "touchInfoBlink 7s linear infinite";
        }, 4210);
  }
    else{
        document.getElementById("ivestiKoda").style.opacity = "0.3";
        document.getElementById("istrynimas").style.color = "transparent";
        document.getElementById("istrynimas").style.pointerEvents = "none";
        document.getElementById("keypad").style.opacity = "0.3";
        document.getElementById("keypad").style.pointerEvents = "none";
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            inputas = ""
            document.getElementById("kodas").value = '';
            document.getElementById("taskelis1").style.backgroundColor = "transparent";
            document.getElementById("taskelis2").style.backgroundColor = "transparent";
            document.getElementById("taskelis3").style.backgroundColor = "transparent";
            document.getElementById("taskelis4").style.backgroundColor = "transparent";
            document.getElementById("taskelis5").style.backgroundColor = "transparent";
            document.getElementById("taskelis6").style.backgroundColor = "transparent";
        }, 3600);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "100px";
        }, 3700);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "-100px";
        }, 3800);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "100px";
        }, 3900);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "0";
            document.getElementById("keypad").style.pointerEvents = "all";
        }, 4000);
    }
}