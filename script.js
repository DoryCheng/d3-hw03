function random(n, m) {
    return Math.floor((Math.random() * (m - n)) + n);
}

function lunch() {
    var num = random(1911, 2016);
    d3.select("body>p").text(num);
}
