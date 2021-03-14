const escola = "Cod3r"

console.log(escola.charAt(4)) // Retornar o caractere na posição 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Retorna Ascii da posição 3
console.log(escola.indexOf("3")) // Retorna posição do caracter '3'

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3 , 'e'))

console.log('Ana,Maria,Pedro'.split(','))