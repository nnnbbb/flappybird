class GuaGameStart {
    constructor(game, mainScene) {
        this.game = game
        this.mainScene = mainScene
        this.firstStart = false
        this.setup()
    }
    setup() {
        this.mainScene.pipes.roll = false
        let bird = this.mainScene.bird
        bird.roll = false

        // start
        this.game.registerAction(' ', (status) => {
            if (!this.firstStart) {
                bird.roll = true
                bird.changeAction('fly')
                this.mainScene.pipes.roll = true
                this.firstStart = true
            } else {
                bird.jump()
            }
        })
    }
    static new(...args) {
        let i = new this(...args)
        return i
    }
    update() {}
    draw() {}
}
