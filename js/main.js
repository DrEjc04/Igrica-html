canvas.width=width;
canvas.height=height;
function update()
{
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = "#333";
    ctx.beginPath();
    if(player.screen === 15){drawMyMap1000();}
    if(player.screen === 1){ drawMyMap();}
    requestAnimationFrame(update);

}

window.addEventListener("load", function(){
    update();
});

document.body.addEventListener("keydown", function (e)
{
    keys[e] = true;
}
);

document.body.addEventListener("keyup", function (e)
{
    keys[e] = false;
}
);