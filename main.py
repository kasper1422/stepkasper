Rain: game.LedSprite = None

def on_forever():
    global Rain
    Rain = game.create_sprite(randint(0, 4), 0)
    for index in range(5):
        Rain.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    Rain.delete()
basic.forever(on_forever)
