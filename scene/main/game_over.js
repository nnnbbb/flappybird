class GuaGameOver {
    constructor(game) {
        this.game = game
        // this.over = false
        this.registerJumpRestart = false
        this.firstRemoveAction = false
    }
    static new(...args) {
        let i = new this(...args)
        return i
    }
    removeAction() {
        if (!this.firstRemoveAction) {
            this.game.removeAction(' ')
            this.firstRemoveAction = true
        }
    }
    stopRoll() {
        let pipes = this.game.scene.pipes
        let ground = this.game.scene.ground
        pipes.roll = false
        ground.roll = false
    }
    GameOver() {
        let bird = this.game.scene.bird
        if (bird.collide()) {
            // window.paused = true
            this.caption()
            // this.over = true
            bird.changeAction('stand')
            this.stopRoll()
            // log('bird.y', bird.y)
            this.registerRestartAction()
        }
    }
    registerRestartAction() {
        let bird = this.game.scene.bird

        this.removeAction()
        if (bird.y == 830 && !this.registerJumpRestart) {
            let scene = SceneEnd.new(this.game, this.scene)
            this.game.replaceScene(scene)

            this.game.registerAction(' ', () => {
                log('restart')
                let s = MainScene.new(this.game)
                this.game.replaceScene(s)
            })

            this.registerJumpRestart = true
        }
    }
    caption() {
        this.addToLeaderboard = GuaImage.new(this.game, 'addToLeaderboard')
        this.addToLeaderboard.x = 130
        this.addToLeaderboard.y = 456
        this.game.scene.addElement(this.addToLeaderboard)

        this.restart = GuaImage.new(this.game, 'restart')
        this.restart.x = 130
        this.restart.y = 360
        this.game.scene.addElement(this.restart)
        // scoreBoard
        this.scoreBoard = GuaImage.new(this.game, 'scoreBoard')
        this.scoreBoard.x = 274
        this.scoreBoard.y = 103
        this.game.scene.addElement(this.scoreBoard)
        // score
        let scoreNumber = this.game.scene.score.content
        this.score = GuaText.new(this.game, scoreNumber, 350, 212)
        this.game.scene.addElement(this.score)

        this.share = GuaImage.new(this.game, 'share')
        this.share.x = 376
        this.share.y = 360
        this.game.scene.addElement(this.share)
    }
    update() {
        this.GameOver()
    }
    draw() {}
}
