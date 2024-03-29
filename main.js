let enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    // 全局變量window.paused
    window.paused = false
    window.addEventListener('keydown', function (event) {
        let k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function (event) {
        let input = event.target
        window.fps = Number(input.value)
    })
    game.canvas.addEventListener('click', function (event) {
        let x = event.offsetX
        let y = event.offsetY
        log('x', x, 'y', y)
    })
}

let __main = function () {
    let images = {
        bg: 'img/background.png',
        bird: 'img/bird.png',
        ground: 'img/ground.png',
        pipe: 'img/pipe.png',
        bird1: 'img/bird1.png',
        bird2: 'img/bird2.png',
        bird3: 'img/bird3.png',

        addToLeaderboard: 'img/add-to-leaderboard.png',
        restart: 'img/restart.png',
        scoreBoard: 'img/score.png',
        share: 'img/share.png',
    }
    let game = GuaGame.instance(60, images, function (g) {
        let s = MainScene.new(g)
        // let s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
