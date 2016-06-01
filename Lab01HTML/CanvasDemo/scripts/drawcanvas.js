alert("Hej")

$(document).ready(function () {
    draw();
    console.log("ready!");
});

function draw() {
    var canvas = document.getElementById('paint');
    var ctx = canvas.getContext('2d');
    ctx.fillRect(10, 20, 30, 200);
    ctx.fillRect(80, 20, 30, 200);
    ctx.fillRect(40,75,70,20)
}