class MainScene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        // this.registerAction()
    }
    setup() {
        this.bg = GuaImage.new(this.game, 'bg')
        this.ground = Ground.new(this.game)
        this.bird = GuaAnimation.new(this.game)
        this.pipes = Pipes.new(this.game)
        this.gameStart = GuaGameStart.new(this.game, this)
        this.score = GuaText.new(this.game, '0', 340, 224)
        this.gameOver = GuaGameOver.new(this.game)

        this.addElement(this.gameStart)
        this.addElement(this.bg)
        this.addElement(this.gameOver)
        this.addElement(this.pipes)
        this.addElement(this.bird)
        this.addElement(this.ground)
        this.addElement(this.score)

        // this.addElement(this.bird)
        this.game.canvas.addEventListener('mousedown', (event) => {
            var x = event.offsetX
            var y = event.offsetY
            log('this.game.actions', this.game.actions)

            // log('x, y', x, y)
        })
    }
    // registerAction() {
    //     let m = 4
    //     let bird = this.bird
    //     this.game.registerAction('a', (status) => {
    //         bird.move(-m)
    //     })
    //     this.game.registerAction('d', (status) => {
    //         bird.move(m)
    //     })
    //     this.game.registerAction(' ', (status) => {
    //         bird.jump()
    //     })
    //     window.addEventListener('click', (status) => {
    //         if (!this.gameOver.over) {
    //             bird.jump()
    //         }
    //     })
    // }
    update() {
        super.update()
        this.addScore()
        // log("this.game.scene", this.game.scene)
    }
    addScore() {
        let pipes = this.pipes.pipes
        // log('pipes.length', pipes.length)
        let bird = this.bird
        let birdX = bird.x
        for (let i = 0; i < pipes.length; i += 2) {
            const pipe = pipes[i]
            let pipeX = pipe.x
            if (pipeX == birdX) {
                let score = Number(this.score.content)
                score += 1
                this.score.updateContent(String(score))
            }
        }
    }
}
