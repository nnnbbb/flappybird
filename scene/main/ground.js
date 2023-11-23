class Ground extends GuaImage {
    constructor(game) {
        super(game, 'ground')
        this.skipCount = 6
        this.grounds = []
        this.setup()
        this.roll = true
        this.size = config.ground.value
    }
    setup() {
        for (let i = 0; i < 45; i++) {
            let g = GuaImage.new(this.game, 'ground')
            g.x = i * 37
            g.y = 700
            this.grounds.push(g)
        }
    }
    static new(game) {
        let i = new this(game)
        return i
    }
    draw() {
        for (const g of this.grounds) {
            g.draw()
        }
    }
    update() {
        if (this.roll) {
            this.updateGrounds()
        }

        // let n = 5
        // let offset = -n
        // this.skipCount--

        // for (const g of this.grounds) {
        //     if (this.skipCount == 0) {
        //         this.skipCount = 4
        //         offset = n * 3
        //     }

        //     g.x += offset
        // }
    }
    updateGrounds() {
        let offset = -4
        for (const g of this.grounds) {
            if (g.x <= -37) {
              g.x = config.ground.value
            }
            g.x += offset
        }
    }
}
