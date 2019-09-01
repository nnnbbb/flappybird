
class Enemy extends GuaImage {
    constructor(game) {
        var type = randomBetween(0, 4)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }
    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
    }
    update() {
        this.y += this.speed
        if (this.y > 500) {
            this.setup()
        }
        this.collide()
    }
    collide() {
        for (let i = 0; i < this.scene.Bullet.length; i++) {
            var a = this
            var b = this.scene.Bullet[i]
            if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
                if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                    this.kill()
                    log("被击中")
                    return
                }
            }
        }
    }
    kill() {
        log("this.scene.enemies", this.scene.enemies)
        var i = this.scene.enemies.indexOf(this)
        this.alive = false
        this.scene.enemies.splice(i, 1)
    }
}
