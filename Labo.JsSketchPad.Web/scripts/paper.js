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
        
        Paper.prototype.clear = function () {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        };

        return Paper;
    })();

})(SketchPad || (SketchPad = {}), jQuery);