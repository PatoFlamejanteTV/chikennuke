player.onChat("chikennuke", function () {
    for (let index = 0; index <= 99; index++) {
        mobs.spawn(CHICKEN, pos(index, 0, 0))
        player.say("Spawned chiken n" + index + "/100!")
    }
})
player.say("Type '/chikennuke' to start.")
