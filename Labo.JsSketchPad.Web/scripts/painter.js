var SketchPad;
(function (SketchPad) {
    var Painter = {};

    Painter.drawPoint = function (ctx, x, y, size, color) {
        // set color
        ctx.fillStyle = color.getRgba();

        // draw a filled circle
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
    };

    Painter.drawLine = function (ctx, x1, y1, x2, y2, size, color, lineCap, lineJoin) {

        // Select a fill style
        ctx.strokeStyle = color.getRgba();

        if (lineCap) {
            ctx.lineCap = lineCap;
        }
        if (lineJoin) {
            ctx.lineJoin = lineJoin;
        }

        // Draw a filled line
        ctx.beginPath();

        // First, move to the old (previous) position
        ctx.moveTo(x1, y1);

        // Now draw a line to the current touch/pointer position
        ctx.lineTo(x2, y2);

        // Set the line thickness and draw the line
        ctx.lineWidth = size;
        ctx.stroke();

        ctx.closePath();
    };

    SketchPad.Painter = Painter;

})(SketchPad || (SketchPad = {}));