class Scene_title extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.registerAction()
    }
    setup() {
        this.bg = GuaImage.new(this.game, 'bg')
        this.g = Ground.new(this.game)
        this.anima = GuaAnimation.new(this.game)
        // this.anima.x = 150
        // this.anima.y = 150
        this.pipes = Pipes.new(this.game)
        this.bird = Bird.new(this.game)
        this.addElement(this.bg)
        this.addElement(this.pipes)
        this.addElement(this.g)
        this.addElement(this.anima)
        // this.addElement(this.bird)
    }
    registerAction() {
        let m = 4
        let bird = this.anima
        this.game.registerAction("a", status => {
            bird.move(-m)
        })
        this.game.registerAction("d", status => {
            bird.move(m)
        })
        this.game.registerAction("j", status => {
            bird.jump()
        })

    }
    update() {
        super.update()
        // log("this.game.scene", this.game.scene)
    }
}