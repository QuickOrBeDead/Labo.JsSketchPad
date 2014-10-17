var SketchPad;
(function (SketchPad) {
    
    SketchPad.Color = (function () {
        var red = new Color(255, 0, 0, 255);
        var green = new Color(0, 255, 0, 255);
        var blue = new Color(0, 0, 255, 255);

        function Color(r, g, b, a) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }

        Color.prototype.getRgba = function() {
            return "rgba(" + this.r + "," + this.g + "," + this.b + "," + (this.a / 255) + ")";
        };

        Color.Red = red;
        Color.Green = green;
        Color.Blue = blue;

        Color.fromHex = function (hexColor, alpha) {
            // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            hexColor = hexColor.replace(shorthandRegex, function (m, r, g, b) {
                return r + r + g + g + b + b;
            });
            if (hexColor.length === 7) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

                return new SketchPad.Color(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), alpha !== undefined ? alpha : 255);
            }

            return new SketchPad.Color(0, 0, 0, 255);
        };

        return Color;
    })();

})(SketchPad || (SketchPad = {}));