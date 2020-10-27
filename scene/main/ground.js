class Ground extends GuaImage {
    constructor(game) {
        super(game, 'ground')
        this.skipCount = 6
        this.grounds = []
        this.setup()
        this.roll = true
        // window.size = 770
        window.size = config.ground
    }
    setup() {
        for (let i = 0; i < 45; i++) {
            let g = GuaImage.new(this.game, 'ground')
            g.x = i * 37
            g.y = 890
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
        let offset = -5
        for (const g of this.grounds) {
            if (g.x < -37) {
                g.x = config.ground
            }
            g.x += offset
        }
    }
}
