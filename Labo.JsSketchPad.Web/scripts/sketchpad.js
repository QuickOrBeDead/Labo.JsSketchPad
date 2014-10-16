var SketchPad;
(function (SketchPad, window) {

    SketchPad.SketchPadApp = (function (window) {
        
        function SketchPadApp() {
            this.mouseDown = false;
        }

        SketchPadApp.prototype.onMouseDown = function () {
            this.mouseDown = true;
        };

        SketchPadApp.prototype.onMouseUp = function () {
            this.mouseDown = false;
            this.paper.resetLastPositions();
        };
        
        SketchPadApp.prototype.onMouseMove = function (e) {
            var mousePosition = SketchPad.MouseTracker.getMousePosition(e);
            this.pen.setPosition(mousePosition.x, mousePosition.y);

            if (this.mouseDown) {
                this.pen.draw(this.paper);
            }
        };
        
        SketchPadApp.prototype.init = function (paperContainerId, width, height) {
            this.paper = new SketchPad.Paper(paperContainerId, width, height);
            this.pen = new SketchPad.Pen(new SketchPad.Color(0, 0, 0, 255), 3);

            var that = this;
            window.addEventListener("mouseup", function() {
                that.onMouseUp();
            });
            this.paper.addEventListener("mousedown", function() {
                that.onMouseDown();
            });
            this.paper.addEventListener("mousemove", function(e) {
                that.onMouseMove(e);
            });
        };

        SketchPadApp.prototype.setColor = function (colorHex) {
            if (this.pen) {
                this.pen.setColor(SketchPad.Color.fromHex(colorHex));
            }
        };
        
        SketchPadApp.prototype.setSize = function (size) {
            if (this.pen) {
                this.pen.setSize(size);
            }
        };

        SketchPadApp.prototype.clearPaper = function() {
            if (this.paper) {
                this.paper.clear();
            }
        };

        return SketchPadApp;
    })(window);

})(SketchPad || (SketchPad = {}), window);