/**
 * Created by DIYgod on 15/9/26.
 */

var ballEle = document.getElementById('gravity-ball');
var width = ballEle.clientWidth;
var height = ballEle.clientHeight;

var canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;
ballEle.appendChild(canvas);
var context = canvas.getContext('2d');

function Ball(options) {
    this.options = options || {
            num: 50,
            minWidth: 0,
            maxWidth: width,
            minHeight: 0,
            maxHeight: height * 0.2,
            minRadius: 10,
            maxRadius: 50,
            g: 2,
            minVx: 20,
            maxVx: 80,
            minVy: 20,
            maxVy: 80,
            rub: 0.8
        };
    this.init();
}

Ball.prototype.init = function () {
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    var balls = [];
    var options = this.options;
    for (var i = 0; i < options.num; i++) {
        var ball = {
            x: getRandom(options.minWidth, options.maxWidth),
            y: getRandom(options.minHeight, options.maxHeight),
            r: getRandom(options.minRadius, options.maxRadius),
            g: options.g,
            vx: getRandom(options.minVx, options.maxVx),
            vy: getRandom(options.minVy, options.maxVy),
            rub: options.rub,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            animationEnd: false
        };
        balls.push(ball);
    }
    this.balls = balls;
    this.end = 0;
};
Ball.prototype.draw = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < this.balls.length; i++) {
        var ball = this.balls[i];
        context.beginPath();
        context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
        context.closePath();
        context.fillStyle = ball.color;
        context.fill();
    }
};
Ball.prototype.move = function () {
    var _self = this;

    function updateBalls() {
        for (var i = 0; i < _self.balls.length; i++) {
            var ball = _self.balls[i];
            // 计算坐标
            ball.x += ball.vx;
            ball.y += ball.vy;

            // 碰撞处理
            if (ball.x <= ball.r) {
                ball.x = ball.r;
                ball.vx = -ball.vx;
            }
            else if (ball.x >= canvas.width - ball.r) {
                ball.x = canvas.width - ball.r;
                ball.vx = -ball.vx;
            }
            if (ball.y <= ball.r) {
                ball.y = ball.r;
                ball.vy = -ball.vy * ball.rub;
                ball.vx = ball.vx * ball.rub;
            }
            else if (ball.y >= canvas.height - ball.r) {
                ball.y = canvas.height - ball.r;
                ball.vy = -ball.vy * ball.rub;
                ball.vx = ball.vx * ball.rub;
                if (Math.abs(ball.vy) < ball.g) {
                    ball.vy = 0;
                    if (!ball.vx && ball.animationEnd === false) {
                        ball.animationEnd = true;
                        _self.end++;
                        if (_self.end >= _self.options.num) {
                            _self.stop();
                        }
                    }
                }
                if (Math.abs(ball.vx) < 0.1) {
                    ball.vx = 0;
                    if (!ball.vy && ball.animationEnd === false) {
                        ball.animationEnd = true;
                        _self.end++;
                        if (_self.end >= _self.options.num) {
                            _self.stop();
                        }
                    }
                }
            }

            // 加速度
            ball.vy += ball.g;
        }
    }

    this.timer = setInterval(function () {
        _self.draw();
        updateBalls();
    }, 30);
};
Ball.prototype.stop = function () {
    if (this.timer) {
        clearInterval(this.timer);
    }
};