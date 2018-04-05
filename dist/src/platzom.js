'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;
    // si termina en 'ar' se quita

    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);
    }

    // si comienza con 'z' se agrega 'pe' al final

    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    // si tiene mas de 0 letras, partir a la mitad y unir con un guión
    var length = translation.length;
    if (length >= 10) {
        var half = Math.round(length / 2),
            firstHalf = translation.slice(0, half),
            secondHalf = translation.slice(half);

        translation = firstHalf + '-' + secondHalf;
    }

    // si es un palindromo, se alternan mayusculas y minusculas

    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    function minMay(str) {
        var length = str.length;
        var translation = '',
            capitalize = true;

        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }

    if (str == reverse(str)) {
        return minMay(str);
    }

    return translation;
}