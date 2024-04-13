import { describe, it, expect } from '@jest/globals'
import domManager from "../dist/domManager"

import "../dist/utils"



const countries = [
    {
        "nomDuPays": "Andorra",
        "codePaysISO2": "AD",
        "codePaysISO3": "AND",
        "flag": "https://flagcdn.com/ad.svg",
        "totalDeCas": 21730,
        "totalDeMort": 139,
        "pib": 0
    },
    {
        "nomDuPays": "Afghanistan",
        "codePaysISO2": "AF",
        "codePaysISO3": "AFG",
        "flag": "https://flagcdn.com/af.svg",
        "totalDeCas": 157895,
        "totalDeMort": 7349,
        "pib": 0
    },
    {
        "nomDuPays": "Bulgaria",
        "codePaysISO2": "BG",
        "codePaysISO3": "BGR",
        "flag": "https://flagcdn.com/bg.svg",
        "totalDeCas": 733882,
        "totalDeMort": 30528,
        "pib": 0
    },
    {
        "nomDuPays": "Canada",
        "codePaysISO2": "CA",
        "codePaysISO3": "CAN",
        "flag": "https://flagcdn.com/ca.svg",
        "totalDeCas": 1641178,
        "totalDeMort": 26903,
        "pib": 0
    }
]

const dom =  `
<p>Nombre(s) de pays affiché(s) : <span id="nb-pays">193</span></p>
<input id="text-filter" type="text">
<div class="table">
    <table>
        <tbody class="body-table">
            <tr>
                <th>Drapeau</th>
                <th>
                    <p>Nom du pays</p>
                    <img src="./assets/trialpha1.svg" alt="" class="arrow" title="Décroissant">
                </th>
                <th>
                    <p>Cas déclarés</p>
                    <img src="./assets/tri1.svg" alt="" class="arrow" title="Décroissant">
                </th>
                <th>
                    <p>Total de décés</p>
                    <img src="./assets/tri1.svg" alt="" class="arrow" title="Décroissant">
                </th>
                <th>
                    <p>Pib ($)</p>
                    <img src="./assets/tri1.svg" alt="" class="arrow" title="Décroissant">
                </th>
            </tr>
        </tbody>

    </table>
</div>`

describe("Fonctionnalité du tableau", ()=>{

    document.body.innerHTML = dom

    const table = document.querySelector('.body-table')

    const tab = new domManager(countries)

    it("Initialisation du tableau", ()=>{

        tab.initTable()
        
        //Non pas 4 mais 5 comprenant l'entête du tableau
        expect(table.children.length).toBe(5)


    })

    it("Nombre de pays à afficher", ()=>{

        document.querySelector('#text-filter').value = "2"

        tab.filterTable()

        const result = [...table.children].filter( child=> child.style.display != "none").length

        //De base 5 éléments sont afficher j'en cache 2 donc 5 - 2 = 3
        expect(result).toBe(3)

    })
})