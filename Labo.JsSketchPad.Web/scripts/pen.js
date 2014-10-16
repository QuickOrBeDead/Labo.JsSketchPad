var SketchPad;
(function (SketchPad) {

    SketchPad.Pen = (function () {
        function Pen(color, size) {
            this.x = 0, this.y = 0;
            this.color = color;
            this.size = size;
        }

        Pen.prototype.setColor = function(color) {
            this.color = color;
        };
        
        Pen.prototype.setSize = function (size) {
            this.size = size;
        };

        Pen.prototype.setPosition = function(x, y) {
            this.x = x;
            this.y = y;
        };

        Pen.prototype.draw = function(paper) {
            paper.drawLine(this.x, this.y, this.size, this.color);
        };

        return Pen;
    })();

})(SketchPad || (SketchPad = {}));