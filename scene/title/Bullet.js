
class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
        this.speed = config.bullet_speed
        this.speed = 2
    }
    update() {
        this.y -= this.speed
    }
}