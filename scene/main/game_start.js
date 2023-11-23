class GuaGameStart {
    constructor(game, mainScene) {
        this.game = game
        this.mainScene = mainScene
        this.firstStart = true
        this.setup()
    }
    setup() {
        this.mainScene.pipes.roll = false
        let bird = this.mainScene.bird
        bird.roll = false

        // start
      let start = (status) => {
        if (this.firstStart) {
          bird.roll = true
          bird.changeAction('fly')
          this.mainScene.pipes.roll = true
          this.firstStart = false
        } else {
          bird.jump()
        }
      }
      this.game.registerAction(' ', start)
      this.game.registerAction('mouse', start)
    }
    static new(...args) {
        let i = new this(...args)
        return i
    }
    update() {}
    draw() {}
}
