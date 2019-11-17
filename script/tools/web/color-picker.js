$('document').ready(function () {
    $('#toolContainer')[0].innerHTML = `
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text" id="colorInputLabel">Enter any color</span>
    </div>
    <input type="text" class="form-control" id="colorInput"
        placeholder="use any color format"
        aria-describedby="colorInputLabel" autocomplete="off">
  </div>
<div class="row">
  
  <div id="color-picker-codehost-cs" class="color-picker-codehost col-sm-12 col-md-6 col-lg-6 invisible">
    <h4>.NET Colors</h4>
    <pre><code class="known cs"></code></pre>
    <pre><code class="rgba cs"></code></pre>
  </div>
  <div id="color-picker-codehost-java" class="color-picker-codehost col-sm-12 col-md-6 col-lg-6 invisible">
    <h4>Java Colors</h4>
    <pre><code class="hexa java"></code></pre>
    <pre><code class="rgba java"></code></pre>
  </div>
  <div id="color-picker-codehost-css" class="color-picker-codehost col-sm-12 col-md-6 col-lg-6 invisible">
    <h4>Web Colors</h4>             
    <pre><code class="known css"></code></pre>
    <pre><code class="hex css"></code></pre>
    <pre><code class="rgba css"></code></pre>
    <pre><code class="hwb css"></code></pre>
    <pre><code class="cmyk css"></code></pre>
    <pre><code class="hsla css"></code></pre>
  </div>
  <div id="color-picker-codehost-xamarin" class="color-picker-codehost col-sm-12 col-md-6 col-lg-6 invisible">
    <h4>Xamarin Colors</h4>
    <pre><code class="hex cs"></code></pre>
    <pre><code class="rgba cs"></code></pre>
    <pre><code class="hsla cs"></code></pre>
  </div>
</div>
  `;

    function setTheme(color) {
        if (color != null) {
            let rgb = color.rgba;
            // http://www.w3.org/TR/AERT#color-contrast
            let o = Math.round(((parseInt(rgb[0]) * 299) +
                (parseInt(rgb[1]) * 587) +
                (parseInt(rgb[2]) * 114)) / 1000);
            let selectedColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
            let subheaderColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
            let calcColor = (o > 125) ? 'rgba(0,0,0)' : 'rgba(255,255,255)';
            if (rgb[3] != 1) {
                selectedColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + rgb[3] + ')';
                // https://en.wikipedia.org/wiki/Alpha_compositing#Alpha_blending
                let a0 = rgb[3], r0 = rgb[0], g0 = rgb[1], b0 = rgb[2];
                let a1 = 1, r1 = 255, g1 = 255, b1 = 255;
                let a01 = (1 - a0) * a1 + a0;
                let r01 = ((1 - a0) * a1 * r1 + a0 * r0) / a01;
                let g01 = ((1 - a0) * a1 * g1 + a0 * g0) / a01;
                let b01 = ((1 - a0) * a1 * b1 + a0 * b0) / a01
                o = Math.round(((parseInt(r01) * 299) +
                    (parseInt(g01) * 587) +
                    (parseInt(b01) * 114)) / 1000);
                calcColor = (o > 125) ? 'rgba(0,0,0,' + 1 + ')' : 'rgba(255,255,255,' + 1 + ')';
                if (o > 125) {
                }
                else {
                }

            } else {
                if (o > 125) {
                }
                else {
                }
            }
            $(".header").css("background-color", selectedColor);
            $(".header").css(`box-shadow`, `0px 2px 2px 0px ${selectedColor}`);
            //$("#color-picker-codehost").css(`box-shadow`, `0px 1px 4px 0px ${selectedColor}`);
            $("span.input-group-text").css("background-color", selectedColor);
            $("span.input-group-text").css("color", calcColor);
            $(".header > span > a").css("color", calcColor);
            if (o > 125) {
                $(".options > span").css("color", calcColor);
                $(".header > div > span > span > svg").css("fill", calcColor);
                $(".header > div > span > svg").css("fill", calcColor);
                $("input:focus").css("box-shadow", `0 0 4px ${calcColor}`);
                $("input:focus").css("border", `1px solid ${calcColor}`);
                $(".header > span > .selected").css("color", `0 0 4px ${calcColor}`);
            }
            else {
                $(".options > span").css("color", selectedColor);
                $(".header > div > span > span > svg").css("fill", selectedColor);
                $(".header > div > span > svg").css("fill", selectedColor);
                $("input:focus").css("box-shadow", `0 0 4px ${selectedColor}`);
                $("input:focus").css("border", `1px solid ${selectedColor}`);
                $(".header > span > .selected").css("color", `0 0 4px ${selectedColor}`);
            }
        } else {
        }
    }

    function setCodehost(color) {
        if (color != null) {
            document.getElementById("color-picker-codehost-css").classList.remove('invisible');
            document.getElementById("color-picker-codehost-cs").classList.remove('invisible');
            document.getElementById("color-picker-codehost-java").classList.remove('invisible');
            document.getElementById("color-picker-codehost-xamarin").classList.remove('invisible');
            for (var c in color) {
                switch (c) {
                    case "known": {
                        if (color[c] !== "Unknown") {
                            document.getElementById("color-picker-codehost-css")
                                .getElementsByClassName(c)[0].parentElement.classList.remove('invisible');
                            document.getElementById("color-picker-codehost-cs")
                                .getElementsByClassName(c)[0].parentElement.classList.remove('invisible');

                            document.getElementById("color-picker-codehost-css")
                                .getElementsByClassName(c)[0].innerHTML = `${color[c]}`;
                            document.getElementById("color-picker-codehost-cs")
                                .getElementsByClassName(c)[0].innerHTML =
                                `System.Drawing.Color.FromName("${color[c]}");`;
                        } else {
                            document.getElementById("color-picker-codehost-css")
                                .getElementsByClassName(c)[0].parentElement.classList.add('invisible');
                            document.getElementById("color-picker-codehost-cs")
                                .getElementsByClassName(c)[0].parentElement.classList.add('invisible');
                        }
                        break;
                    }
                    case "hex": {
                        document.getElementById("color-picker-codehost-css")
                            .getElementsByClassName(c)[0].innerHTML = `${color[c]}`;
                        document.getElementById("color-picker-codehost-xamarin")
                            .getElementsByClassName(c)[0].innerHTML =
                            `Xamarin.Forms.Color.FromHex("${color[c].replace('#', '')}")`;
                        break;
                    }
                    case "hexa": {
                        document.getElementById("color-picker-codehost-java")
                            .getElementsByClassName(c)[0].innerHTML =
                            `private final int _COLOR = ${color[c]};
text.setTextColor(_COLOR);`;
                        break;
                    }
                    case "rgba": {
                        document.getElementById("color-picker-codehost-css")
                            .getElementsByClassName(c)[0].innerHTML = `rgba(${color[c]})`;
                        document.getElementById("color-picker-codehost-cs")
                            .getElementsByClassName(c)[0].innerHTML =
                            `System.Drawing.Color.FromArgb(${color[c][3]}, ${color[c][0]}, ${color[c][1]}, ${color[c][2]});`;
                        document.getElementById("color-picker-codehost-xamarin")
                            .getElementsByClassName(c)[0].innerHTML =
                            `Xamarin.Forms.Color.FromRgba(${color[c][0]}, ${color[c][1]}, ${color[c][2]}, ${parseInt((color[c][3] * 255).toString())})`;
                        document.getElementById("color-picker-codehost-java")
                            .getElementsByClassName(c)[0].innerHTML =
                            `new java.awt.Color(${color[c]})`;
                        break;
                    }
                    case "hsla": {
                        document.getElementById("color-picker-codehost-css")
                            .getElementsByClassName(c)[0].innerHTML = `hsla(${color[c]})`;
                        document.getElementById("color-picker-codehost-xamarin")
                            .getElementsByClassName(c)[0].innerHTML =
                            `Xamarin.Forms.Color.FromHsla(${color[c]})`;
                        break;
                    }
                    case "hwb": {
                        document.getElementById("color-picker-codehost-css")
                            .getElementsByClassName(c)[0].innerHTML = `hwba(${color[c]})`;
                        break;
                    }
                    case "cmyk": {
                        document.getElementById("color-picker-codehost-css")
                            .getElementsByClassName(c)[0].innerHTML = `cmyk(${color[c]})`;
                        break;
                    }
                }
            }
            LoadCodes();
        } else {
            // document.getElementById("color-picker-codehost-css").classList.add('invisible');
            // document.getElementById("color-picker-codehost-cs").classList.add('invisible');
        }
    }
    // Basic instantiation:
    $('#colorInput').colorpicker();

    // Example using an event, to change the color of the .jumbotron background:
    $('#colorInput').on('colorpickerChange', function (event) {
    });
    var oldColor = null;
    $("#colorInput").on("change input", function (e) {
        if ($("#colorInput").val() !== oldColor) {
            oldColor = $("#colorInput").val();
            let color = ColorBuilder($("#colorInput").val());
            setCodehost(color);
            setTheme(color);
        }
    });



});

function ColorBuilder(_color) {

    this._color = _color;

    this.KnownColor = {
        indianred: '#cd5c5c',
        lightcoral: '#f08080',
        salmon: '#fa8072',
        darksalmon: '#e9967a',
        lightsalmon: '#ffa07a',
        crimson: '#dc143c',
        red: '#ff0000',
        firebrick: '#b22222',
        darkred: '#8b0000',
        pink: '#ffc0cb',
        lightpink: '#ffb6c1',
        hotpink: '#ff69b4',
        deeppink: '#ff1493',
        mediumvioletred: '#c71585',
        palevioletred: '#db7093',
        coral: '#ff7f50',
        tomato: '#ff6347',
        orangered: '#ff4500',
        darkorange: '#ff8c00',
        orange: '#ffa500',
        gold: '#ffd700',
        yellow: '#ffff00',
        lightyellow: '#ffffe0',
        lemonchiffon: '#fffacd',
        lightgoldenrodyellow: '#fafad2',
        papayawhip: '#ffefd5',
        moccasin: '#ffe4b5',
        peachpuff: '#ffdab9',
        palegoldenrod: '#eee8aa',
        khaki: '#f0e68c',
        darkkhaki: '#bdb76b',
        lavender: '#e6e6fa',
        thistle: '#d8bfd8',
        plum: '#dda0dd',
        violet: '#ee82ee',
        orchid: '#da70d6',
        fuchsia: '#ff00ff',
        magenta: '#ff00ff',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        blueviolet: '#8a2be2',
        darkviolet: '#9400d3',
        darkorchid: '#9932cc',
        darkmagenta: '#8b008b',
        purple: '#800080',
        rebeccapurple: '#663399',
        indigo: '#4b0082',
        mediumslateblue: '#7b68ee',
        slateblue: '#6a5acd',
        darkslateblue: '#483d8b',
        greenyellow: '#adff2f',
        chartreuse: '#7fff00',
        lawngreen: '#7cfc00',
        lime: '#00ff00',
        limegreen: '#32cd32',
        palegreen: '#98fb98',
        lightgreen: '#90ee90',
        mediumspringgreen: '#00fa9a',
        springgreen: '#00ff7f',
        mediumseagreen: '#3cb371',
        seagreen: '#2e8b57',
        forestgreen: '#228b22',
        green: '#008000',
        darkgreen: '#006400',
        yellowgreen: '#9acd32',
        olivedrab: '#6b8e23',
        olive: '#808000',
        darkolivegreen: '#556b2f',
        mediumaquamarine: '#66cdaa',
        darkseagreen: '#8fbc8f',
        lightseagreen: '#20b2aa',
        darkcyan: '#008b8b',
        teal: '#008080',
        aqua: '#00ffff',
        cyan: '#00ffff',
        lightcyan: '#e0ffff',
        paleturquoise: '#afeeee',
        aquamarine: '#7fffd4',
        turquoise: '#40e0d0',
        mediumturquoise: '#48d1cc',
        darkturquoise: '#00ced1',
        cadetblue: '#5f9ea0',
        steelblue: '#4682b4',
        lightsteelblue: '#b0c4de',
        powderblue: '#b0e0e6',
        lightblue: '#add8e6',
        skyblue: '#87ceeb',
        lightskyblue: '#87cefa',
        deepskyblue: '#00bfff',
        dodgerblue: '#1e90ff',
        cornflowerblue: '#6495ed',
        royalblue: '#4169e1',
        blue: '#0000ff',
        mediumblue: '#0000cd',
        darkblue: '#00008b',
        navy: '#000080',
        midnightblue: '#191970',
        cornsilk: '#fff8dc',
        blanchedalmond: '#ffebcd',
        bisque: '#ffe4c4',
        navajowhite: '#ffdead',
        wheat: '#f5deb3',
        burlywood: '#deb887',
        tan: '#d2b48c',
        rosybrown: '#bc8f8f',
        sandybrown: '#f4a460',
        goldenrod: '#daa520',
        darkgoldenrod: '#b8860b',
        peru: '#cd853f',
        chocolate: '#d2691e',
        saddlebrown: '#8b4513',
        sienna: '#a0522d',
        brown: '#a52a2a',
        maroon: '#800000',
        white: '#ffffff',
        snow: '#fffafa',
        honeydew: '#f0fff0',
        mintcream: '#f5fffa',
        azure: '#f0ffff',
        aliceblue: '#f0f8ff',
        ghostwhite: '#f8f8ff',
        whitesmoke: '#f5f5f5',
        seashell: '#fff5ee',
        beige: '#f5f5dc',
        oldlace: '#fdf5e6',
        floralwhite: '#fffaf0',
        ivory: '#fffff0',
        antiquewhite: '#faebd7',
        linen: '#faf0e6',
        lavenderblush: '#fff0f5',
        mistyrose: '#ffe4e1',
        gainsboro: '#dcdcdc',
        lightgray: '#d3d3d3',
        lightgrey: '#d3d3d3',
        silver: '#c0c0c0',
        darkgray: '#a9a9a9',
        darkgrey: '#a9a9a9',
        gray: '#808080',
        grey: '#808080',
        dimgray: '#696969',
        dimgrey: '#696969',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        slategray: '#708090',
        slategrey: '#708090',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        black: '#000000',
    }

    this.StringToRgba = function (color) {
        if (
            /rgba?\(\s*((?:2(?:5[0-5]|[0-4]\d)|1?\d?\d))\s*,\s*((?:2(?:5[0-5]|[0-4]\d)|1?\d?\d))\s*,\s*((?:2(?:5[0-5]|[0-4]\d)|1?\d?\d))(\s*,\s*[\d\.]*)?\s*\)/gim.test(color.toLowerCase())) {
            let items = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,?\s*(([\.\d]+))?\s*\)$/gim.exec(color.toLowerCase());
            let r = parseInt(items[1], 10);
            let g = parseInt(items[2], 10);
            let b = parseInt(items[3], 10);
            let a = parseFloat(items[4], 10);
            a = isNaN(a) ? 1 : a;
            return [Math.round(r), Math.round(g), Math.round(b), a];
        }
        return null;
    }

    this.StringToHex = function (color) {
        if (/^\#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/gim.test(color.toLowerCase())) {
            let items = /^\#?([0-9A-Fa-f][0-9A-Fa-f]?)([0-9A-Fa-f][0-9A-Fa-f]?)([0-9A-Fa-f][0-9A-Fa-f]?)$/gim.exec(color.toLowerCase());
            return `#${items[1]}${items[2]}${items[3]}`;
        }
        return null;
    }

    this.StringToHexa = function (color) {
        // 0xFFFF3300
        if (/^(0x)?([0-9A-Fa-f]{8})$/gim.test(color.toLowerCase())) {
            let items = /^0?x?([0-9A-Fa-f][0-9A-Fa-f]?)([0-9A-Fa-f][0-9A-Fa-f]?)([0-9A-Fa-f][0-9A-Fa-f]?)([0-9A-Fa-f][0-9A-Fa-f]?)$/gim.exec(color.toLowerCase());
            return `0x${items[1]}${items[2]}${items[3]}${items[4]}`;
        }
        return null;
    }

    this.StringToKnown = function (color) {
        if (this.KnownColor && this.KnownColor[color.toLowerCase()]) {
            return color;
        }
        return null;
    }

    this.StringToCmyk = function (color) {
        if ((/^cmyk\(\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/gim).test(color.toLowerCase())) {
            let items = /^cmyk\(\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)$/gim.exec(color.toLowerCase());
            let c = (parseInt(items[1], 10) / 100).toFixed(2);
            let m = (parseInt(items[2], 10) / 100).toFixed(2);
            let y = (parseInt(items[3], 10) / 100).toFixed(2);
            let k = (parseInt(items[4], 10) / 100).toFixed(2);
            return [c, m, y, k];
        }
        return null;
    }

    this.StringToHsla = function (color) {
        if (/^hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,?\s*(([\.\d]+))?\s*\)$/gim.test(color.toLowerCase())) {
            let items = /^hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,?\s*(([\.\d]+))?\s*\)$/gim.exec(color.toLowerCase());
            let h = parseFloat(items[1], 10);
            let s = parseFloat((parseInt(items[2], 10) / 100).toFixed(2));
            let l = parseFloat((parseInt(items[3], 10) / 100).toFixed(2));
            let a = parseFloat(items[4], 10);
            a = isNaN(a) ? 1 : a;
            return [h, s, l, a];
        }
        return null;
    }

    this.StringToHwb = function (color) {
        if (/^hwba?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,?\s*([\d\.]+)?\s*\)$/gim.test(color.toLowerCase())) {
            let items = /^hwba?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,?\s*([\d\.]+)?\s*\)$/gim.exec(color.toLowerCase());
            let h = parseInt(items[1], 10);
            let w = parseFloat((parseInt(items[2], 10) / 100).toFixed(2));
            let b = parseFloat((parseInt(items[3], 10) / 100).toFixed(2));
            let a = parseFloat(items[4], 10);
            a = isNaN(a) ? 1 : a;
            return [h, w, b, a];
        }
        return null;
    }

    this.RgbaToHex = function (color) {
        let h1 = color[0].toString(16);
        let h2 = color[1].toString(16);
        let h3 = color[2].toString(16);
        if (h1.length == 2 || h2.length == 2 || h3.length == 2) {
            if (h1.length < 2)
                h1 = `0${h1}`;
            if (h2.length < 2)
                h2 = `0${h2}`;
            if (h3.length < 2)
                h3 = `0${h3}`;
        }
        return `#${h1}${h2}${h3}`;
    }

    this.RgbaToHexa = function (color) {
        debugger;
        let h0 = parseInt((color[3] * 255).toString()).toString(16);
        let h1 = color[0].toString(16);
        let h2 = color[1].toString(16);
        let h3 = color[2].toString(16);
        if (h1.length == 2 || h2.length == 2 || h3.length == 2) {
            if (h1.length < 2)
                h1 = `0${h1}`;
            if (h2.length < 2)
                h2 = `0${h2}`;
            if (h3.length < 2)
                h3 = `0${h3}`;
        }
        return `0x${h0}${h1}${h2}${h3}`;
    }

    this.RgbaToKnown = function (color) {
        const hex = RgbaToHex(color);
        for (knownColor in this.KnownColor) {
            if (this.KnownColor[knownColor] === hex) {
                return knownColor;
            }
        }
        return "Unknown";
    }

    this.RgbaToCmyk = function (color) {

        let c = 0, m = 0, y = 0;
        let _r = color[0] / 255;
        let _g = color[1] / 255;
        let _b = color[2] / 255;
        max = Math.max(_r, _g, _b);
        k = 1 - max;
        if (k != 1) {
            c = (1 - _r - k) / (1 - k);
            m = (1 - _g - k) / (1 - k);
            y = (1 - _b - k) / (1 - k);
        }
        return [parseFloat(c.toFixed(2)),
        parseFloat(m.toFixed(2)),
        parseFloat(y.toFixed(2)),
        parseFloat(k.toFixed(2))];
    }

    this.RgbaToHsla = function (color) {
        let min, max, i, l, s, maxcolor, h, rgb = [];
        rgb[0] = color[0] / 255;
        rgb[1] = color[1] / 255;
        rgb[2] = color[2] / 255;
        min = rgb[0];
        max = rgb[0];
        maxcolor = 0;
        for (i = 0; i < rgb.length - 1; i++) {
            if (rgb[i + 1] <= min) {
                min = rgb[i + 1];
            }
            if (rgb[i + 1] >= max) {
                max = rgb[i + 1];
                maxcolor = i + 1;
            }
        }
        if (maxcolor == 0) {
            h = (rgb[1] - rgb[2]) / (max - min);
        }
        if (maxcolor == 1) {
            h = 2 + (rgb[2] - rgb[0]) / (max - min);
        }
        if (maxcolor == 2) {
            h = 4 + (rgb[0] - rgb[1]) / (max - min);
        }
        if (isNaN(h)) {
            h = 0;
        }
        h = h * 60;
        if (h < 0) {
            h = h + 360;
        }
        l = (min + max) / 2;
        if (min == max) {
            s = 0;
        } else {
            if (l < 0.5) {
                s = (max - min) / (max + min);
            } else {
                s = (max - min) / (2 - max - min);
            }
        }
        return [h.toFixed(2), s.toFixed(2), l.toFixed(2), color[3]];
    }

    this.RgbaToHwb = function (color) {
        let w, bl;
        let r = Math.round(color[0] / 255);
        let g = Math.round(color[1] / 255);
        let b = Math.round(color[2] / 255);
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        w = min;
        bl = 1 - max;
        return [RgbaToHsla(color)[0], w, bl, color[3]];
    }

    this.HexToRgba = function (color) {
        let items = /^\#?([0-9A-Fa-f][0-9A-Fa-f]?)([0-9A-Fa-f][0-9A-Fa-f]?)([0-9A-Fa-f][0-9A-Fa-f]?)$/gim.exec(color);
        let r = parseInt(items[1], 16);
        let g = parseInt(items[2], 16);
        let b = parseInt(items[3], 16);
        let a = 1;
        return [r, g, b, a];
    }

    this.HexaToRgba = function (color) {
        let items = /^0?x?([0-9A-Fa-f][0-9A-Fa-f]?)([0-9A-Fa-f][0-9A-Fa-f]?)([0-9A-Fa-f][0-9A-Fa-f]?)([0-9A-Fa-f][0-9A-Fa-f]?)$/gim.exec(color);
        let r = parseInt(items[2], 16);
        let g = parseInt(items[3], 16);
        let b = parseInt(items[4], 16);
        debugger;
        let a = (parseInt(items[1], 16) / 255);
        return [r, g, b, a];
    }

    this.KnownToRgba = function (color) {
        return HexToRgba(this.KnownColor[color.toString().toLowerCase()]);
    }

    this.HslaToRgba = function (color) {
        function hueToRgb(t1, t2, hue) {
            if (hue < 0) hue += 6;
            if (hue >= 6) hue -= 6;
            if (hue < 1) return (t2 - t1) * hue + t1;
            else if (hue < 3) return t2;
            else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
            else return t1;
        }
        let t1, t2, r, g, b;
        let hue = color[0] / 60;
        if (color[2] <= 0.5) {
            t2 = color[2] * (color[1] + 1);
        } else {
            t2 = color[2] + color[1] - (color[2] * color[1]);
        }
        t1 = color[2] * 2 - t2;
        r = hueToRgb(t1, t2, hue + 2) * 255;
        g = hueToRgb(t1, t2, hue) * 255;
        b = hueToRgb(t1, t2, hue - 2) * 255;
        return [Math.round(r), Math.round(g), Math.round(b), color[3]];

    }

    this.CmykToRgba = function (color) {
        [
            255 - ((Math.min(1, color[0] * (1 - color[3]) + color[3])) * 255),
            255 - ((Math.min(1, color[1] * (1 - color[3]) + color[3])) * 255),
            255 - ((Math.min(1, color[2] * (1 - color[3]) + color[3])) * 255),
            1
        ];
    }

    this.HwbToRgba = function (color) {
        let rgbArr = [],
            tot;
        let hue = color[0];
        let rgb = HslaToRgba([hue, 1, 0.50, 1]);
        rgbArr[0] = rgb[0] / 255;
        rgbArr[1] = rgb[1] / 255;
        rgbArr[2] = rgb[2] / 255;
        tot = color[1] + color[2];
        if (tot > 1) {
            color[1] = Number((color[1] / tot).toFixed(2));
            color[2] = Number((color[2] / tot).toFixed(2));
        }
        for (let i = 0; i < 3; i++) {
            rgbArr[i] *= (1 - (color[1]) - (color[2]));
            rgbArr[i] += (color[1]);
            rgbArr[i] = Number(rgbArr[i] * 255);
        }
        return [Math.round(rgbArr[0]),
        Math.round(rgbArr[1]),
        Math.round(rgbArr[2]), color[3]];
    }

    let color = {
        known: this.StringToKnown(this._color),
        hex: this.StringToHex(this._color),
        hexa: this.StringToHexa(this._color),
        rgba: this.StringToRgba(this._color),
        hsla: this.StringToHsla(this._color),
        cmyk: this.StringToCmyk(this._color),
        hwb: this.StringToHwb(this._color)
    };

    if (color.known != null) {
        color.rgba = this.KnownToRgba(color.known);
    } else if (color.hex != null) {
        color.rgba = this.HexToRgba(color.hex);
    } else if (color.hexa != null) {
        color.rgba = this.HexaToRgba(color.hexa);
    } else if (color.hsla != null) {
        color.rgba = this.HslaToRgba(color.hsla);
    } else if (color.cmyk != null) {
        color.rgba = this.CmykToRgba(color.cmyk);
    } else if (color.hwb != null) {
        color.rgba = this.HwbToRgba(color.hwb);
    }
    if (color.rgba != null) {
        color.known = color.known == null ? this.RgbaToKnown(color.rgba) : color.known;
        color.hex = color.hex == null ? this.RgbaToHex(color.rgba) : color.hex;
        color.hexa = color.hexa == null ? this.RgbaToHexa(color.rgba) : color.hexa;
        color.hsla = color.hsla == null ? this.RgbaToHsla(color.rgba) : color.hsla;
        color.cmyk = color.cmyk == null ? this.RgbaToCmyk(color.rgba) : color.cmyk;
        color.hwb = color.hwb == null ? this.RgbaToHwb(color.rgba) : color.hwb;
        return color;
    } else {
        return null;
    }
}