Have_light = 0
Have_Sound = 0
Room_have_ppl_mins = 0

def on_every_interval():
    global Have_Sound, Have_light, Room_have_ppl_mins
    if Have_Sound:
        Have_Sound = 1
    else:
        Have_Sound = 0
    if input.light_level() > 30:
        Have_light = 1
    else:
        Have_light = 0
    if Have_light and Have_Sound:
        Room_have_ppl_mins += 1
    else:
        Room_have_ppl_mins = 0
loops.every_interval(60000, on_every_interval)

def on_forever():
    basic.show_number(Room_have_ppl_mins)
    if Room_have_ppl_mins > 15:
        music.set_volume(127)
        music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
basic.forever(on_forever)
