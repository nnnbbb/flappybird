
class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }
    setup() {
        this.speed = 5
        this.cooldown = 0
    }
    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown--
        }
        this.collide()
        this.fire()
    }
    fire() {
        if (this.cooldown == 0) {
            this.cooldown = config.fire_cooldown
            var x = this.x + this.w / 2
            var y = this.y
            var b = Bullet.new(this.game)
            b.x = x
            b.y = y
            // this.scene.addElement(b)
            this.scene.addBullet(b)
        }
    }
    collide() {
        for (let i = 0; i < this.scene.enemies.length; i++) {
            var a = this
            var b = this.scene.enemies[i]
            if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
                if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                    this.kill()
                }
            }
        }
    }
    kill() {
        log("player is kill")
        this.alive = false
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}
