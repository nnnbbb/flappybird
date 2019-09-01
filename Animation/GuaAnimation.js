class GuaAnimation {
    constructor(game) {
        this.game = game
        this.alive = true
        this.x = 150
        this.y = 150

        this.actions = {
            "ldie": [],
        }

        for (let i = 1; i < 4; i++) {
            let name = `bird${i}`
            let b = game.textureByName(name)
            this.actions["ldie"].push(b)
        }
        this.actionName = "ldie"
        this.frames = this.actions[this.actionName]

        this.texture = this.frames[1]
        this.w = this.texture.width
        this.h = this.texture.height

        this.frameIndex = 2
        this.frameCount = 4
        this.gy = 10
        this.vy = 0
        this.angle = 0
        this.count = 20
        this.start = true
        this.die = true
    }
    static new(game) {
        return new this(game)
    }
    collide() {
        let pipes = this.game.scene.pipes.pipes
        for (let i = 0; i < pipes.length; i++) {
            let a = this
            let b = pipes[i]
            if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
                if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                    this.die = false
                }
            }
        }
    }
    survival() {
        if (this.die) {
            return true
        }
        return false
    }
    update() {
        this.gravity()
        this.frame()
        // 最大下落高度
        let h = 843
        if (this.y > h) {
            this.y = h
            this.die = false
        }
        this.collide()

    }
    gravity() {
        this.count--

        if (this.start) {
            // 鸟的角度偏移
            if (this.angle < 90 && this.count < 0) {
                this.angle += 5
            }
            // 重力
            this.y += this.vy
            this.vy += this.gy * 0.1
        }
    }
    frame() {
        // 帧动画
        this.frameCount--
        if (this.frameCount == 0) {
            this.frameCount = 4
            this.frameIndex = (this.frameIndex + 1) % this.frames.length
            this.texture = this.frames[this.frameIndex]
        }
    }
    jump() {
        this.count = 20
        this.angle = -25
        this.vy = -10
    }
    draw() {
        let context = this.game.context
        context.save()
        let w2 = this.w / 2
        let h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.rotate(this.angle * Math.PI / 180)
        context.translate(-w2, -h2)
        context.drawImage(this.texture, 0, 0)
        context.restore()
    }
    move(x, keyStatus) {
        // this.changeAnimation()
        // if (keyStatus == "down") {
        //     this.changeAnimation("run")
        // } else if (keyStatus == "up") {
        //     this.changeAnimation("ldie")
        // }

        this.x += x
    }

    changeAnimation(name) {
        // if (name == "run") {
        //     this.frames = this.actions["run"]
        // } else if (name == "ldie") {
        //     this.frames = this.actions["ldie"]
        // }
        this.frames = this.actions[name]
    }
}