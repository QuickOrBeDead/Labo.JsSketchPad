var SketchPad;
(function (SketchPad) {

    SketchPad.Pen = (function () {
        // Keep track of the old/last position when drawing a line
        // We set it to -1 at the start to indicate that we don't have a good value for it yet
        var lastX, lastY = -1;

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

        Pen.prototype.draw = function (paper) {
            // If lastX is not set, set lastX and lastY to the current position 
            if (lastX === -1) {
                lastX = x;
                lastY = y;
            }

            SketchPad.Painter.drawLine(paper.ctx, lastX, lastY, this.x, this.y, this.size, this.color, "round", "round");
            
            // Update the last position to reference the current position
            lastX = x;
            lastY = y;
        };

        Pen.prototype.onMouseUp = function() {
            lastX = -1, lastY = -1;
        };

        return Pen;
    })();
    
    SketchPad.Marker = (function (_super) {
        __extends(Marker, _super);

        function Marker(color, size) {
            _super.call(this, color, size);
        }
        
        Marker.prototype.draw = function (paper) {
        };
        
        return Marker;
    })(Pen);

})(SketchPad || (SketchPad = {}));