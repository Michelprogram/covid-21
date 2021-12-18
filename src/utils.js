const croissant = (countries, parameter) => countries.sort( (a,b)=> a[parameter] - b[parameter] )

const decroissant = (countries, parameter) =>countries.sort( (a,b)=> a[parameter] - b[parameter] ).reverse()

Number.prototype.splitAtThree = function(){
    return this.toString().split("").reverse()
    .map((letter,index)=> (index % 3 === 0) && (index != 0) ? letter+" " : letter)
    .reverse().join("")
}