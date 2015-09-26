GravityBall

UI组件 -- 重力小球

----------

## Demo

https://www.anotherhome.net/file/balls/

## How it works

The following HTML structure is used for GravityBall:

`
    <div id="gravity-ball"></div>
    <!-- ... -->
    <script src="js/ball.js"></script>
`

And this is how GravityBalll is initialized in JS:

`
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
`

## Options

The following options are available:

`
    num: 50,
    minWidth: 0,
    maxWidth: 200,
    minHeight: 0,
    maxHeight: 200,
    minRadius: 10,
    maxRadius: 50,
    g: 2,        // gravity
    minVx: -80,
    maxVx: 80,
    minVy: -80,
    maxVy: 80,
    rub: 0.8     // the coefficient of friction
`

## API

`
    balls.draw();    // draw balls
    balls.move();    // balls move
    balls.stop();    // move stop
`

## LICENSE

(MIT License)

Copyright (c) DIYgod

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.