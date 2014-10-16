var SketchPad;
(function(SketchPad) {
    var MouseTracker = {};

    MouseTracker.getMousePosition = function(e) {
        if (!e) {
            e = event;
        }

        if (e.offsetX !== undefined) {
            return {
                x: e.offsetX,
                y: e.offsetY
            };
        } else if (e.layerX !== undefined) {
            return {
                x: e.layerX,
                y: e.layerY
            };
        }

        return {
            x: 0,
            y: 0
        };
    };

    SketchPad.MouseTracker = MouseTracker;

})(SketchPad || (SketchPad = {}));