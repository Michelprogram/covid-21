//Trie par ordre croissant
const croissant = (countries, parameter) => countries.sort( (a,b)=> a[parameter] - b[parameter] )

//Trie par ordre décroissant
const decroissant = (countries, parameter) =>countries.sort( (a,b)=> a[parameter] - b[parameter] ).reverse()

//Ajoute une fonction à l'objet Number, qui sépare les nombres tous les 3 digits pour faciliter la lecture.
Number.prototype.splitAtThree = function(){
    return this.toString().split("").reverse()
    .map((letter,index)=> (index % 3 === 0) && (index != 0) ? letter+" " : letter)
    .reverse().join("")
}

export {croissant, decroissant}