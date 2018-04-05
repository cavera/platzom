export default function platzom(str) {
    let translation = str
        // si termina en 'ar' se quita

    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2)
    }

    // si comienza con 'z' se agrega 'pe' al final

    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe'
    }

    // si tiene mas de 10 letras, partir a la mitad y unir con un guión
    const length = translation.length
    if (length >= 10) {
        const half = Math.round(length / 2),
            firstHalf = translation.slice(0, half),
            secondHalf = translation.slice(half)

        translation = `${firstHalf}-${secondHalf}`
    }

    // si es un palindromo, se alternan mayusculas y minusculas

    const reverse = (str) => str.split('').reverse().join('')

    function minMay(str) {
        const length = str.length
        let translation = '',
            capitalize = true

        for (let i = 0; i < length; i++) {
            const char = str.charAt(i)
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            capitalize = !capitalize
        }
        return translation
    }

    if (str == reverse(str)) {
        return minMay(str)
    }

    return translation
}