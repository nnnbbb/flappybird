class GuaGame {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        this.sceneList = {}
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector('#id-canvas')

        this.context = this.canvas.getContext('2d')
        // this.context.font = '50px serif';
        this.context.font = "55px 'flappy bird'"

        // events
        let self = this
        window.addEventListener('keydown', (event) => {
            // log('event.key', event)
            this.keydowns[event.key] = 'down'
        })
        window.addEventListener('keyup', function (event) {
            self.keydowns[event.key] = 'up'
        })
        window.addEventListener('mousedown', (event) => {
          this.keydowns['mouse'] = 'down'
        })
        window.addEventListener('mouseup', (event) => {
          this.keydowns['mouse'] = 'up'
        })

        this.init()
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(img) {
        // img 是一個 GuaImage
        this.context.drawImage(img.texture, img.x, img.y)
    }
    // update
    update() {
        if (window.paused) {
            return
        }
        this.scene.update()
    }
    // draw
    draw() {
        this.scene.draw()
    }
    //
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    removeAction(key) {
        delete this.actions[key]
    }
    events() {
        let g = this
        let actions = Object.keys(g.actions)
        for (let i = 0; i < actions.length; i++) {
            // console.log("actions", actions)
            let key = actions[i]
            let status = g.keydowns[key]
            // log("status", status)
            // log('key', key)
            if (status == 'down') {
                g.actions[key]('down')
                // delete g.actions[key]
            } else if (status == 'up') {
                g.actions[key]('up')
                // 删除这个key 的状态
                g.keydowns[key] = null
            }
            // if (g.keydowns[key]) {
            //     // 如果按键被按下, 调用注册的 action
            //     g.actions[key]()
            // }
        }
    }
    runloop() {
        let g = this

        // events
        g.events()

        // clear
        g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)

        // draw
        g.draw()

        // update
        g.update()
        // next run loop
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }
    textureByName(name) {
        let g = this
        // log('image by name', g.images)
        let img = g.images[name]

        return img
    }
    runWithScene(scene) {
        let g = this
        // let s = this.sceneList[scene]
        // console.log("s", s)
        g.scene = scene
        // 开始运行程序
        g.runloop()

        // setTimeout(function () {
        //     g.runloop()
        // }, 1000 / window.fps)
    }
    replaceScene(scene) {
        // TODO: 这里应该想办法 保存场景, 但是key要怎么办

        // let s = this.scene
        this.scene = scene
    }
    __start() {
        this.runCallback(this)
    }

    init() {
        let g = this
        // 预先加载所有场景
        // let sceneTitle = SceneTitle.new(g)
        // let sceneEnd = SceneEnd.new(g)

        // this.sceneList["SceneTitle"] = sceneTitle
        // this.sceneList["SceneEnd"] = sceneEnd

        let loads = []
        // 预先载入所有图片
        let names = Object.keys(g.images)
        for (let i = 0; i < names.length; i++) {
            let name = names[i]
            let path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function () {
                // 存入 g.images 中
                g.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                log('load images', loads.length, names.length)
                if (loads.length == names.length) {
                    log('load images', g.images)
                    g.__start()
                }
            }
        }
    }
}
