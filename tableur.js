const divContainer = document.querySelector('.app')

const getFlagEmoji = countryCode =>{
    const a = [...countryCode.toUpperCase()].map(letter => 127397 + letter.charCodeAt() )
    return String.fromCodePoint(a[0],a[1])
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

        for (let index = 0; index < 4; index++) {
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
                th.innerHTML = element.pib

            tr.appendChild(th)
            
        }

        table.appendChild(tr)

    })
}

let countries = []

initTable()
.then(d => {
    countries = d
    createTable(countries)
})

document.querySelector("button").addEventListener('click',(e)=>{
    console.log(e)
    createTable
})