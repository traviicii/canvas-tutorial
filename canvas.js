var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c stands for context
var c = canvas.getContext('2d');

// c.fillRect(x, y, width, height)
// c.fillStyle = "rgba(255, 0, 0, .5)"
// c.fillRect(100, 100, 100, 100)
// c.fillStyle = "rgba(255, 255, 0, .5)"
// c.fillRect(200, 200, 100, 100)
// c.fillStyle = "rgba(255, 0, 255, .5)"
// c.fillRect(300, 400, 100, 100)

// Line
// c.beginPath();
// // c.moveTo(x, y)
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = "orange"
// c.stroke()

// Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue'
// c.stroke();

// for (var i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
// c.beginPath();
// c.arc(x, y, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue'
// c.stroke();
// }

c.beginPath();
c.arc(200, 200, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue'
c.stroke();

var x = 200;
var y = 200;
var dx = 4;
var dy = 4;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }

    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}
animate()