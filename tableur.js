const divContainer = document.querySelector('.app')

const arrows = document.querySelectorAll('.arrow')

let countries = []

String.prototype.splitAtThree = function(){
    return this.split("").reverse()
    .map((letter,index)=> (index % 3 === 0) && (index != 0) ? letter+" " : letter)
    .reverse().join("")
}

/* 
Ne marche pas sur tout les navigateurs
    const getFlagEmoji = countryCode =>{
        const a = [...countryCode.toUpperCase()].map(letter => 127397 + letter.charCodeAt() )
        return String.fromCodePoint(a[0],a[1])
} */

const getFLagIcon = countryCode => `https://flagcdn.com/${countryCode.toLowerCase()}.svg`

const pibRequest = async (countries) =>{

    const result = await Request.send("https://stats.oecd.org/SDMX-JSON/data/SNA_TABLE1/AUS+AUT+BEL+CAN+CHL+COL+CRI+CZE+DNK+EST+FIN+FRA+DEU+GRC+HUN+ISL+IRL+ISR+ITA+JPN+KOR+LTU+LVA+LUX+MEX+NLD+NZL+NOR+POL+PRT+SVK+SVN+ESP+SWE+CHE+TUR+GBR+USA+NMEC+ARG+BRA+BGR+CHN+HRV+CYP+IND+IDN+MLT+PER+ROU+RUS+SAU+ZAF+FRME+DEW.B1_GE.HCPC/all?startTime=2019&endTime=2019&dimensionAtObservation=allDimensions", "GET")
    const pibForEachCountry = result.dataSets[0].observations
    const ISOpib = result.structure.dimensions.observation[0].values

    ISOpib.forEach( (el,index) =>{
        const tempo = `${index}:0:0:0`
        const country = countries.find( count => count.codePaysISO3 === el.id)
        country.pib = pibForEachCountry[tempo][0]
    })
}

const initTable = async () =>{

    const result = await Request.send("https://api.covid19api.com/summary","GET")

    return [...result.Countries].map(country =>{
        return {
            nomDuPays : country.Country,
            codePaysISO2 : country.CountryCode,
            codePaysISO3 : dataCountry[country.CountryCode],
            flag : getFLagIcon(country.CountryCode),
            //flag : getFlagEmoji(country.CountryCode),
            totalDeCas : country.TotalConfirmed.toString().splitAtThree(),
            totalDeMort : country.TotalDeaths.toString().splitAtThree(),
            pib : 0
        }
    })

}

const updateTable = (countries) =>{

    const table = document.querySelector(".body-table")

    const trs = table.children
    let jndex = 0

    for (let index = 1; index < trs.length; index++) {
        const element = trs.item(index)

        const country = countries[jndex]

        const ths = [...element.children]

        ths.forEach( (el,index) =>{
            if(index === 0)
                el.children.item(0).src = country.flag
            else if (index === 1)
                el.textContent = country.nomDuPays
            else if (index === 2)
                el.textContent = country.totalDeCas
            else if (index === 3)
                el.textContent= country.totalDeMort
            else
                el.textContent = country.pib == 0 ? "Introuvable" : country.pib
        })

        jndex++
    }
}

const createTable = (countries) =>{

    const table = document.querySelector(".body-table")

    countries.forEach( element =>{

        const tr = document.createElement("tr")

        for (let index = 0; index < 5; index++) {
            const th = document.createElement("th")

            if(index === 0){
                //Pour les icones th.innerHTML = element.flag
                const img = document.createElement('img')
                img.setAttribute('class','flag-svg')
                img.src = element.flag
                th.appendChild(img)
            }
            else if (index === 1)
                th.innerHTML = element.nomDuPays
            else if (index === 2)
                th.innerHTML = element.totalDeCas
            else if (index === 3)
                th.innerHTML = element.totalDeMort
            else
                th.innerHTML = element.pib == 0 ? "Introuvable" : element.pib

            tr.appendChild(th)
            
        }

        table.appendChild(tr)

    })
}

const changeArrow = (element) =>{
    const flag = element.src.includes("tri1")

    if (flag){
        element.src = element.src.replace("tri1","tri2")
        element.title = "Croissant"
    }
    else{
        element.src = element.src.replace("tri2","tri1")
        element.title = "Décroissant"
    }

    return element.title

}

const croissant = (countries, parameter) =>{
    return countries.sort( (a,b)=> parseInt(a[parameter].replace(/\s+/g, '')) - parseInt(b[parameter].replace(/\s+/g, '')) )
}

const decroissant = (countries, parameter) =>{
    return countries.sort( (a,b)=> parseInt(a[parameter].replace(/\s+/g, '')) - parseInt(b[parameter].replace(/\s+/g, '')) )
    .reverse()
}

const main = async () =>{
    countries = await initTable()
    await pibRequest(countries)
    createTable(countries)
}


arrows.forEach( (el, index) =>{
    el.addEventListener('click', () => {

        const trie = changeArrow(el)

        switch(index){
            case 1:{
                countries = trie === "Décroissant" ? decroissant(countries,"totalDeCas") : croissant(countries,"totalDeCas")
            }
        }

        console.log(countries)

        updateTable(countries)
    })
})

document.querySelector('button').addEventListener('click',(e)=>{

    const input = document.querySelector("input").value
    const table = document.querySelector(".body-table")

    const childrens = table.children
    if (input === ""){
        for (let index = 0; index < childrens.length; index++) {
            const element = childrens[index];
            element.style.display = "table-row"
        }
    }

    if ( !isNaN( parseInt(input) )){
       for (let index = parseInt(input) + 1; index < childrens.length; index++) {
           const element = childrens[index];
           element.style.display = "none"
       }
    }
})

main()


//TOOD Ajouter l'unité du PIB
//Revoir le trie