let Have_light = 0
let Have_Sound = 0
let Room_have_ppl_mins = 0
loops.everyInterval(60000, function () {
    if (Have_Sound) {
        Have_Sound = 1
    } else {
        Have_Sound = 0
    }
    if (input.lightLevel() > 30) {
        Have_light = 1
    } else {
        Have_light = 0
    }
    if (Have_light && Have_Sound) {
        Room_have_ppl_mins += 1
    } else {
        Room_have_ppl_mins = 0
    }
    basic.showNumber(Room_have_ppl_mins)
})
basic.forever(function () {
    if (Room_have_ppl_mins > 15) {
        music.setVolume(127)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.LoopingInBackground)
    }
})
