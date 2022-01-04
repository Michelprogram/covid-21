import dataManager from "./dataManager.js"
import domManager from "./domManager.js"
import loadChart from "./graphic.js"

const data = new dataManager()

window.addEventListener('DOMContentLoaded', async (event)=>{

    const countries = await data.getFullData()

    loadChart(countries)

    const dom = new domManager(countries)

    dom.initTable()


    dom.arrows.forEach( (el, index) =>{
        el.addEventListener('click', async () => {
    
            const trie = dom.updateArrow(el,index)

            const countriesUpdateOrdered = await data.order(index, trie)
    
            dom.updateTable(countriesUpdateOrdered)
    
        })
    })


    dom.button.addEventListener('click', ()=> dom.filterTable())

})