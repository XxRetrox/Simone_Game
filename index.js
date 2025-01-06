$("div[type=button]").click(
    buttonSound
)

function animation (colos) {
    $("#" + colos).addClass("pressed")
    setTimeout (
        function () {
            $("#" + colos).removeClass("pressed")
        }, 100
    )
}

function buttonSound () {
    var buttonClick = this.id
    console.log(buttonClick)
    colos2.push(buttonClick)
    soundAnimation(buttonClick)
    for (var a = 0; a < colos2.length; a++) {
        if (colos1[a] === colos2[a]) {
            console.log(colos1[a] === colos2[a])
        }
        else {
            gameOver()
        }
    }
    var arrS1 = colos1.toString()
    var arrS2 = colos2.toString()
    if (arrS1 === arrS2) {
        console.log(arrS1 === arrS2)
        soundAnimation(buttonClick)
        i = i + 1
        colos2 = []
        recall()
        console.log(colos2)
    }

    console.log(colos2)
}

function gameOver () {
    $("body").addClass("game-over");
    setTimeout (function () {
    $("body").removeClass("game-over"), 50
    })

    $("h1").text("Game Over, Press A Key To Restart")
}

function recall () {
    $("h1").text("Round " + i)
    var colos = ["blue", "green", "red", "yellow"]
    var ranColos = colos[Math.floor(Math.random() * 4)]
    console.log(ranColos)
    colos1.push(ranColos)
    setTimeout (
        function () {
            soundAnimation(ranColos)
        }, 1000
    )
    console.log(colos1)
}

function soundAnimation (buttonClick) {
    switch (buttonClick) {
        case "blue":
            playSound(buttonClick)
            animation(buttonClick)
            
        case "green":
            playSound(buttonClick)
            animation(buttonClick)

        case "red":
            playSound(buttonClick)
            animation(buttonClick)

        case "yellow":
            playSound(buttonClick)
            animation(buttonClick)
    }
}

$(document)
    .bind("keydown", function () {
        colos1 = []
        colos2 = []
        i = 1
    })
    .bind("keydown", recall)


function playSound (colour) {
    var tone = new Audio ("sounds/" + colour + ".mp3") 
    tone.play()
}

var colos1 = []
var colos2 = []
var i = 1