class Bird {
    constructor(game) {
        this.game = game
        this.actions = {
            "fly": []
        }
        for (let i = 1; i < 4; i++) {
            let name = `bird${i}`
            let b = game.textureByName(name)
            this.actions["fly"].push(b)
        }
        this.actionName = "fly"
        this.frames = this.actions[this.actionName]
        this.texture = this.frames[1]

    }
    static new(game) {
        return new this(game)
    }
    update() {

    }
    draw() {
        let context = this.game.context
        context.drawImage(this.texture, 0, 0)
    }
}