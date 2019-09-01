class GuaScene {
    constructor(game) {
        this.game = game
        this.debugModeEnable = false
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }
    delElement(img) {
        this.elements = this.elements.filter(e => e != img)
    }
    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            // this.game.drawImage(e)
            // elements是guaImage
            // if(e.alive){
            e.draw()
            // }
        }
    }
    update() {
        if (this.debugModeEnable) {
            for (var i = 0; i < this.elemements.length; i++) {
                var e = this.elemements[i]
                e.debug && e.debug()
            }
        }
        for (var i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            if (e.alive) {
                e.update()
            }
        }
        // log("Scene", this)
    }
}
