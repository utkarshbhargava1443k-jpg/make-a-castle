player.onChat("run", function (num1, num2) {
    agent.attack(FORWARD)
    agent.collectAll()
    agent.collect(DIAMOND_SWORD)
})
gameplay.setWeather(CLEAR)
gameplay.setDifficulty(EASY)
player.say(":)")
blocks.place(CRAFTING_TABLE, pos(0, 0, 0))
castles.buildSimpleCastle(BRICKS)
castles.buildCastleTower(
84,
42,
COBBLESTONE
)
