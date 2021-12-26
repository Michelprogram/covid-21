import Request from "../dist/Request";
import dataManager from "../dist/dataManager";
import { describe, it, expect } from '@jest/globals'

const data = new dataManager()

//Simule un début de questionnaire avec ou sans localstorage
describe("Request des données à l'api", ()=>{

    it("Récupération des données du covid", async ()=>{

        const result = await Request.send("https://api.covid19api.com/summary","GET")

        expect(result.Countries.length).toBe(193)

    })

})

describe("Drapeau en fonction du code ISO", ()=>{

    it("Drapeau Français", ()=>{
        const result = data._getFLagIcon("FRA")

        expect(result).toBe(`https://flagcdn.com/fra.svg`)
    })

    it("Vérification code ISO2 vers code ISO3", ()=>{
        const result = data.countriesISO3["FR"]

        expect(result).toBe("FRA")
    })
})

