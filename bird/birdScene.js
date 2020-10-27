
class birdScene extends GuaScene {
    constructor(game) {
        super(game)
        
    }
    setupInputs() {
        let g = this.game
        let self = this
        g.registerAction('a', function (keyStatus) {
            self.w.move(-2, keyStatus)
        })
        g.registerAction('d', function (keyStatus) {
            self.w.move(2, keyStatus)
        })
    }
    // draw() {
    //     // this.game.context.fillText('按 k 开始游戏', 100, 190)
    //     // 调用父类方法
    //     super.draw()
    // }
}
