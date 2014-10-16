var SketchPad;
(function (SketchPad, $) {

    SketchPad.Paper = (function() {
        function Paper(paperContainerId, width, height) {
            this.width = width;
            this.height = height;
            
            // create the canvas element
            var canvas = this.canvas = document.createElement("canvas");
            $(canvas).attr("width", width);
            $(canvas).attr("height", height);
            $(canvas).attr("class", "sketch-canvas");

            $("#" + paperContainerId).append(canvas);
            
            // If the browser supports the canvas tag, get the 2d drawing context for this canvas
            if (canvas.getContext) {
                this.ctx = canvas.getContext('2d');
            }
        }

        Paper.prototype.addEventListener = function(name, callback) {
            this.canvas.addEventListener(name, callback);
        };

        Paper.prototype.drawPoint = function(x, y, size, color) {
            // set color
            this.ctx.fillStyle = color.getRgba();
            
            // draw a filled circle
            this.ctx.beginPath();
            this.ctx.arc(x, y, size, 0, Math.PI * 2, true);
            this.ctx.closePath();
            this.ctx.fill();
        };
        
        // Keep track of the old/last position when drawing a line
        // We set it to -1 at the start to indicate that we don't have a good value for it yet
        var lastX, lastY = -1;

        Paper.prototype.resetLastPositions = function() {
            lastX = -1, lastY = -1;
        };

        // Draws a line between the specified position on the supplied canvas name
        // Parameters are: A canvas context, the x position, the y position, the size of the dot
        Paper.prototype.drawLine = function(x, y, size, color) {

            // If lastX is not set, set lastX and lastY to the current position 
            if (lastX === -1) {
                lastX = x;
                lastY = y;
            }

            // Select a fill style
            this.ctx.strokeStyle = color.getRgba();

            // Set the line "cap" style to round, so lines at different angles can join into each other
            this.ctx.lineCap = "round";
            this.ctx.lineJoin = "round";

            // Draw a filled line
            this.ctx.beginPath();

            // First, move to the old (previous) position
            this.ctx.moveTo(lastX, lastY);

            // Now draw a line to the current touch/pointer position
            this.ctx.lineTo(x, y);

            // Set the line thickness and draw the line
            this.ctx.lineWidth = size;
            this.ctx.stroke();

            this.ctx.closePath();

            // Update the last position to reference the current position
            lastX = x;
            lastY = y;
        };
        
        Paper.prototype.clear = function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            lastX = -1, lastY = -1;
        };

        return Paper;
    })();

})(SketchPad || (SketchPad = {}), jQuery);