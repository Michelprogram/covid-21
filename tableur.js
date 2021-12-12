const divContainer = document.querySelector('.app')

const arrows = document.querySelectorAll('.arrow')

let countries = []

Number.prototype.splitAtThree = function(){
    return this.toString().split("").reverse()
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
        country.pib = Math.floor(pibForEachCountry[tempo][0])
    })

    return countries
}

const initData = async () =>{

    const result = await Request.send("https://api.covid19api.com/summary","GET")

    return [...result.Countries].map(country =>{
        return {
            nomDuPays : country.Country,
            codePaysISO2 : country.CountryCode,
            codePaysISO3 : dataCountry[country.CountryCode],
            flag : getFLagIcon(country.CountryCode),
            //flag : getFlagEmoji(country.CountryCode),
            totalDeCas : country.TotalConfirmed,
            totalDeMort : country.TotalDeaths,
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
                el.textContent = country.totalDeCas.splitAtThree()
            else if (index === 3)
                el.textContent= country.totalDeMort.splitAtThree()
            else
                el.textContent = country.pib == 0 ? "Introuvable" : country.pib.splitAtThree()
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
                th.innerHTML = element.totalDeCas.splitAtThree()
            else if (index === 3)
                th.innerHTML = element.totalDeMort.splitAtThree()
            else
                th.innerHTML = element.pib == 0 ? "Introuvable" : element.pib.splitAtThree()

            tr.appendChild(th)
            
        }

        table.appendChild(tr)

    })
}

const changeArrow = (element,index) =>{

    const flag = element.src.includes("tri1")

    if (index == 0){
        const flag = element.src.includes("trialpha1")
        console.log(flag)

        if(flag){
            element.src = element.src.replace("trialpha1","trialpha2")
            element.title = "Croissant"
        }
        else{
            element.src = element.src.replace("trialpha2","trialpha1")
            element.title = "Décroissant"
        }
    }

/*     if (flag){
        element.src = element.src.replace("tri1","tri2")
        element.title = "Croissant"
    }
    else{
        element.src = element.src.replace("tri2","tri1")
        element.title = "Décroissant"
    } */

    return element.title

}

const fetchAllData = async () =>{
    return await pibRequest(await initData())
}

const croissant = (countries, parameter) => countries.sort( (a,b)=> a[parameter] - b[parameter] )

const decroissant = (countries, parameter) =>countries.sort( (a,b)=> a[parameter] - b[parameter] ).reverse()

const main = async () =>{
    createTable(await fetchAllData())
}


arrows.forEach( (el, index) =>{
    el.addEventListener('click', async () => {

        const trie = changeArrow(el,index)

        let newData = await fetchAllData()

        if( index == 0){
            countries = trie === "Décroissant" ? decroissant(newData,"nomDuPays") : croissant(newData,"nomDuPays")
        }
        else if (index == 1){
            countries = trie === "Décroissant" ? decroissant(newData,"totalDeCas") : croissant(newData,"totalDeCas")
        }
        else if (index == 2){
            countries = trie === "Décroissant" ? decroissant(newData,"totalDeMort") : croissant(newData,"totalDeMort")
        }
        else if(index == 3){
            countries = trie === "Décroissant" ? decroissant(newData,"pib") : croissant(newData,"pib")
        }

        updateTable(countries)

    })
})

document.querySelector('button').addEventListener('click',(e)=>{

    const input = document.querySelector("input")
    const table = document.querySelector(".body-table")
    const span = document.querySelector('#nb-pays')

    const childrens = table.children
    if (input.value === ""){
        for (let index = 0; index < childrens.length; index++) {
            const element = childrens[index];
            element.style.display = "table-row"
        }
    }

    if ( !isNaN( parseInt(input.value) )){
       for (let index = parseInt(input.value) + 1; index < childrens.length; index++) {
           const element = childrens[index];
           element.style.display = "none"
       }
       span.innerHTML = input.value

    }
    else{
        span.innerHTML = "193"
    }

    input.value = ""

})

main()

//TODO revoir icone de trie ne sont pas à jour quand on clique