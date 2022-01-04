import dataManager from "./dataManager.js"
import domManager from "./domManager.js"
import Charts from "./graphic.js"

const data = new dataManager()
const charts = new Charts()

window.addEventListener('DOMContentLoaded', async (event)=>{

    let countries = await data.getFullData()

    charts.loadChart(countries)

    const dom = new domManager(countries)

    dom.initTable()


    dom.arrows.forEach( (el, index) =>{
        el.addEventListener('click', async () => {
    
            const trie = dom.updateArrow(el,index)

            countries = await data.order(index, trie)
    
            dom.updateTable(countries)
    
        })
    })


    dom.button.addEventListener('click', ()=> {
        charts.updateCharts(countries,dom.getInputValue())
        dom.filterTable()
    })

})