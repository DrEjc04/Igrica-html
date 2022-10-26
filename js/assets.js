var canvas =document.querySelector("#canvas"),
    ctx=canvas.getContext("2d"),
    width=1152,
    height=704,
    player={
        screen: 15
    },
    press_s = {width: 500, height:40, f: 100},
    instruct = {x:126, y:300, w:900, h:57, f:103};
    keys = [],
    gravity = 0.3,
    friction = 0.8;

    player = {
        x: 608,
        y: height - 182,
        speed: 3,
        velX: 0,
        velY: 0,
        width: 35,
        height: 52,
        screen: 15,
        start: 0,
        f: 3
        }
        