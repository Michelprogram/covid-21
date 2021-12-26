import {croissant, decroissant} from "../dist/utils";
import { describe, it, expect } from '@jest/globals'

describe("Méthode de trie", ()=>{

    const countries = [{nomDuPays: 'Afghanistan', codePaysISO2: 'AF', codePaysISO3: 'AFG', flag: 'https://flagcdn.com/af.svg', totalDeCas: 157895},
        {nomDuPays: 'Albania', codePaysISO2: 'AL', codePaysISO3: 'ALB', flag: 'https://flagcdn.com/al.svg', totalDeCas: 207542},
        {nomDuPays: 'Algeria', codePaysISO2: 'DZ', codePaysISO3: 'DZA', flag: 'https://flagcdn.com/dz.svg', totalDeCas: 216376},
        {nomDuPays: 'Andorra', codePaysISO2: 'AD', codePaysISO3: 'AND', flag: 'https://flagcdn.com/ad.svg', totalDeCas: 21730}
    ]

    it("Trie croissant par rapport au nombre total de cas", async ()=>{

        const result = croissant(countries, "totalDeCas")

        expect(result[0].nomDuPays).toBe("Andorra")

    })

    it("Trie décroissant par rapport au nombre total de cas", async ()=>{

        const result = decroissant(countries, "totalDeCas")

        expect(result[0].nomDuPays).toBe("Algeria")

    })


})

describe("Séparation des chiffres toute les 3 occurences" ,()=>{

    it("Split at three", ()=>{
        const number = 157895

        expect(number.splitAtThree()).toBe("157 895")
    })

    it("Split at three 2", ()=>{
        const number = 157
        expect(number.splitAtThree()).toBe("157")
    })
})

