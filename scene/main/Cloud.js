class Cloud extends GuaImage {
    constructor(game) {
        super(game, 'cloud')
        this.setup()
    }
    setup() {
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 300)
    }
    update() {
        this.y += config.cloud_speed
        if (this.y > 500) {
            this.setup()
        }
    }
    debug() {
        this.speed = config.cloud_speed
    }
}