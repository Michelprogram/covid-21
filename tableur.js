const divContainer = document.querySelector('.app')

const getFlagEmoji = countryCode =>{
    const a = [...countryCode.toUpperCase()].map(letter => 127397 + letter.charCodeAt() )
    return String.fromCodePoint(a[0],a[1])
}

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
            flag : getFlagEmoji(country.CountryCode),
            totalDeCas : country.TotalConfirmed,
            totalDeMort : country.TotalDeaths,
            pib : 0
        }
    })

}

const createTable = (countries) =>{

    const table = document.querySelector(".body-table")

    countries.forEach( element =>{

        const tr = document.createElement("tr")

        for (let index = 0; index < 5; index++) {
            const th = document.createElement("th")

            if(index === 0)
                th.innerHTML = element.flag
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


const main = async () =>{
    let countries = await initTable()
    await pibRequest(countries)
    createTable(countries)
}


document.querySelector("button").addEventListener('click',(e)=>{
    console.log(e)
    createTable
})

main()

//TOOD Ajouter l'unité du PIB