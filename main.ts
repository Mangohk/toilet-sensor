input.onButtonPressed(Button.A, function () {
    A_Press = 1
})
input.onButtonPressed(Button.B, function () {
    B_Press += 1
})
let B_Press = 0
let A_Press = 0
let Room_have_ppl_mins = 0
let Active = 1
loops.everyInterval(1000, function () {
    if (input.lightLevel() > 50) {
        Room_have_ppl_mins += 1
    } else {
        Room_have_ppl_mins = 0
    }
    if (!(Active)) {
        Room_have_ppl_mins = 0
    }
    basic.showNumber(Room_have_ppl_mins)
    if (Room_have_ppl_mins > 15) {
        music.setVolume(127)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.LoopingInBackground)
    }
})
