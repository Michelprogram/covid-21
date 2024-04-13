import dataManager from "./dataManager.js"
import domManager from "./domManager.js"
import Charts from "./graphic.js"

const data = new dataManager()
const charts = new Charts()

window.addEventListener('DOMContentLoaded', async (event)=>{

    //Récupère tous les données nécessaire
    let countries = await data.getFullData()

    //Charge le graphique
    charts.loadChart(countries)
    
    const dom = new domManager(countries)

    //Charge le tableau
    dom.initTable()

    //Trie les données en fonction des fléches cliqué
    dom.arrows.forEach( (el, index) =>{
        el.addEventListener('click', async () => {
    
            const trie = dom.updateArrow(el,index)

            countries = await data.order(index, trie)
    
            //Met à jour le tableau
            dom.updateTable(countries)
    
        })
    })


    //Click sur le bouton refresh
    dom.button.addEventListener('click', ()=> {
        charts.updateCharts(countries,dom.getInputValue())
        dom.filterTable()
    })

})