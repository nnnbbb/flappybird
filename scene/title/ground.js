class Ground extends GuaImage {
    constructor(game) {
        super(game, "ground")
        this.skipCount = 6
        this.grounds = []
        this.setup()
        window.size = 790
    }
    setup() {
        for (let i = 0; i < 50; i++) {
            var g = GuaImage.new(this.game, 'ground')
            g.x = i * 37
            g.y = 890
            this.grounds.push(g)
        }
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    draw() {
        for (const g of this.grounds) {
            g.draw()
        }
    }
    update() {
        this.groundsUpdate()
        // let n = 5
        // var offset = -n
        // this.skipCount--

        // for (const g of this.grounds) {
        //     if (this.skipCount == 0) {
        //         this.skipCount = 4
        //         offset = n * 3
        //     }

        //     g.x += offset
        // }
    }
    groundsUpdate() {
        let offset = -5
        for (const g of this.grounds) {
            if (g.x < -37) {
                g.x = window.size
            }
            g.x += offset
        }

    }
}