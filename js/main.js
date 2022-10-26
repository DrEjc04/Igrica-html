canvas.width=width;
canvas.height=height;
function update()
{
    ctx.clearRect(0,0,width,height);
    if (keys[39]) {
        if (player.velX < player.speed) {
        player.velX++;
        player.f = 1;
        }
        }
    if (keys[37]) {
    if (player.velX > -player.speed) {
        player.velX--;
        player.f = 3
        }
    }
    player.velX *= friction;
    player.velY += gravity;
    player.x += player.velX;
    ctx.fillStyle = "#333";
    ctx.beginPath();
    if(player.screen === 15){drawMyMap1000();}
    if(player.screen === 1){ drawMyMap();}
    if (player.screen < 15 && player.start === 0) {
        player.start = 1;
        }
    if (player.screen != 15){
        ctx.drawImage(wiz[player.f], player.x, player.y);
        }
    requestAnimationFrame(update);

}

window.addEventListener("load", function(){
    update();
});

document.body.addEventListener("keydown", function (e)
{
    keys[e.keyCode] = true;
}
);

document.body.addEventListener("keyup", function (e)
{
    keys[e.keyCode] = false;
}
);

