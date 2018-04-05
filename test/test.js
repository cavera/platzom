const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {
    it('si termina en "ar" se quitan esas 2 letras', function() {
        const translation = platzom('Programar')
        expect(translation).to.equal('Program')
    })
    it('si comienza con "z" se agrega "pe" al final', function() {
        const translation = platzom('Zumba')
        expect(translation).to.equal('Zumbape')
    })
    it('si tiene mas de 10 letras, partir a la mitad y unir con un guión', function() {
        const translation = platzom('abecedario')
        expect(translation).to.equal('abece-dario')
    })
    it('si es un palindromo, se alternan mayusculas y minusculas', function() {
        const translation = platzom('sometemos')
        expect(translation).to.equal('SoMeTeMoS')
    })
})