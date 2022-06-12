let Rain : game.LedSprite = null
basic.forever(function on_forever() {
    
    Rain = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 5; index++) {
        Rain.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    Rain.delete()
})
