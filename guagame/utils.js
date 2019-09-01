var e = sel => document.querySelector(sel)

var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b) {
    var o = a
    if (b.y > o.y && b.y < o.y + o.image.height) {
        if (b.x > o.x && b.x < o.x + o.image.width) {
            return true
        }
    }
    return false
}


const randomBetween = function (start, end) {
    // Math.random() 函数返回一个浮点,  伪随机数在范围[0，1)
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}

var aInb = function (x, x1, x2) {
    return x >= x1 && x <= x2
}

