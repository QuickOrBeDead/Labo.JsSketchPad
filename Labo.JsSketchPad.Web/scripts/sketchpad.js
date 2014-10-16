var SketchPad;
(function (SketchPad, window) {

    SketchPad.SketchPadApp = (function (window) {
        var mouseDown, pen, paper;
        
        function SketchPadApp() {
            mouseDown = false;
        }

        SketchPadApp.prototype.onMouseDown = function () {
            mouseDown = true;
        };

        SketchPadApp.prototype.onMouseUp = function () {
            mouseDown = false;
            if (pen) {
                pen.onMouseUp();
            }
        };
        
        SketchPadApp.prototype.onMouseMove = function (e) {
            var mousePosition = SketchPad.MouseTracker.getMousePosition(e);
            pen.setPosition(mousePosition.x, mousePosition.y);

            if (mouseDown) {
                pen.draw(paper);
            }
        };
        
        SketchPadApp.prototype.init = function (paperContainerId, width, height) {
            paper = new SketchPad.Paper(paperContainerId, width, height);
            pen = new SketchPad.Pen(new SketchPad.Color(0, 0, 0, 255), 3);

            var that = this;
            window.addEventListener("mouseup", function() {
                that.onMouseUp();
            });
            paper.addEventListener("mousedown", function() {
                that.onMouseDown();
            });
            paper.addEventListener("mousemove", function(e) {
                that.onMouseMove(e);
            });
        };

        SketchPadApp.prototype.setColor = function (colorHex) {
            if (pen) {
                pen.setColor(SketchPad.Color.fromHex(colorHex));
            }
        };
        
        SketchPadApp.prototype.setSize = function (size) {
            if (pen) {
                pen.setSize(size);
            }
        };

        SketchPadApp.prototype.clearPaper = function() {
            if (paper) {
                paper.clear();
            }
        };

        return SketchPadApp;
    })(window);

})(SketchPad || (SketchPad = {}), window);