class Pipes {
    constructor(game) {
        this.alive = true
        this.roll = true
        this.game = game
        this.pipes = []
        // 一对管子之间的距离
        this.pipesWidth = 380
        // 上下两根管子的间距
        this.pipesHeight = 250

        this.setup()
    }
    setup() {
        for (let i = 0; i < 3; i++) {
            let p1 = GuaImage.new(this.game, 'pipe')
            let p2 = GuaImage.new(this.game, 'pipe')

            p1.x = i * this.pipesWidth + 1000
            p2.x = p1.x

            p1.flipY = true
            this.resetPipesPosition(p1, p2)

            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-700, -600)
        p2.y = p1.y + p1.h + this.pipesHeight
    }
    static new(game) {
        return new this(game)
    }
    update() {
        if (this.roll) {
            for (const p of this.pipes) {
                p.x -= 4

                if (p.x < -150) {
                    p.x = this.pipesWidth * 3
                }
            }
        }
    }
    draw() {
        let context = this.game.context
        for (const p of this.pipes) {
            context.save()
            let w2 = p.w / 2
            let h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            let scaleX = p.flipY ? -1 : 1
            let scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)

            context.translate(-w2, -h2)
            context.drawImage(p.texture, 0, 0)
            // log("this.texture", this.texture)

            context.restore()
        }
    }
}
