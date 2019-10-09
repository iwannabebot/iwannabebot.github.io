function HexToRgb(hexstring) {
    if (/^\#?([0-9A-Fa-f]{6})$/gim.test(hexstring)) {
        let items = /^\#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/gim.exec(hexstring);
        return `rgb(${parseInt(items[1], 16)}, ${parseInt(items[2], 16)}, ${parseInt(items[3], 16)})`;
    } else if (/^\#?([0-9A-Fa-f]{3})$/gim.test(hexstring)) {
        let items = /^\#?([0-9A-Fa-f]{1})([0-9A-Fa-f]{1})([0-9A-Fa-f]{1})$/gim.exec(hexstring);
        return `rgb(${parseInt(items[1], 16)}, ${parseInt(items[2], 16)}, ${parseInt(items[3], 16)})`;
    } else {
        throw new Error("Given string is not a valid HEX");
    }
}

function HexToRgba(hexstring) {
    if (/^\#?([0-9A-Fa-f]{6})$/gim.test(hexstring)) {
        let items = /^\#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/gim.exec(hexstring);
        return `rgba(${parseInt(items[1], 16)}, ${parseInt(items[2], 16)}, ${parseInt(items[3], 16)}, 1)`;
    } else if (/^\#?([0-9A-Fa-f]{3})$/gim.test(hexstring)) {
        let items = /^\#?([0-9A-Fa-f]{1})([0-9A-Fa-f]{1})([0-9A-Fa-f]{1})$/gim.exec(hexstring);
        return `rgba(${parseInt(items[1], 16)}, ${parseInt(items[2], 16)}, ${parseInt(items[3], 16)}, 1)`;
    } else {
        throw new Error("Given string is not a valid HEX");
    }
}

function RgbToHex(rgb) {
    if (/rgba?\(\s*((?:2(?:5[0-5]|[0-4]\d)|1?\d?\d))\s*,\s*((?:2(?:5[0-5]|[0-4]\d)|1?\d?\d))\s*,\s*((?:2(?:5[0-5]|[0-4]\d)|1?\d?\d))(\s*,\s*[\d\.]*)?\s*\)/gim.test(rgb)) {
        let items = /rgba?\(\s*((?:2(?:5[0-5]|[0-4]\d)|1?\d?\d))\s*,\s*((?:2(?:5[0-5]|[0-4]\d)|1?\d?\d))\s*,\s*((?:2(?:5[0-5]|[0-4]\d)|1?\d?\d))(\s*,\s*[\d\.]*)?\s*\)/gim.exec(rgb);
        let r = parseInt(items[1], 10).toString(16);
        let g = parseInt(items[2], 10).toString(16);
        let b = parseInt(items[3], 10).toString(16);
        if (r.length == 2 || g.length == 2 || b.length == 2) {
            if (r.length < 2)
                r = `0${r}`;
            if (g.length < 2)
                g = `0${g}`;
            if (b.length < 2)
                b = `0${b}`;
        }
        return `#${r}${g}${b}`.toUpperCase();
    } else {
        throw new Error("Given string is not a valid rgba");
    }
}