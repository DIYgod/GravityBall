/**
 * Created by DIYgod on 15/9/27.
 */
var balls = new Ball({
    num: 50,
    minWidth: 0,
    maxWidth: width,
    minHeight: 0,
    maxHeight: height * 0.2,
    minRadius: 10,
    maxRadius: 50,
    g: 2,
    minVx: -80,
    maxVx: 80,
    minVy: -80,
    maxVy: 80,
    rub: 0.8
});
balls.move();