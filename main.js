var enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    // 全局變量window.paused
    window.paused = false
    window.addEventListener('keydown', function (event) {
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        var input = event.target
        window.fps = Number(input.value)
    })
}

var __main = function () {
    var images = {
        bg: 'img/background.png',
        bird: 'img/bird.png',
        ground: 'img/ground.png',
        pipe: 'img/pipe.png',
        bird1: 'img/bird1.png',
        bird2: 'img/bird2.png',
        bird3: 'img/bird3.png',
    }
    var game = GuaGame.instance(60, images, function (g) {
        var s = Scene_title.new(g)
        // var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
