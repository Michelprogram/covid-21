class Charts{

    constructor(){
        this.canvas = document.getElementById('myChart')
        this.charts = null
    }

    //Charge le graphique
    loadChart = (data) =>{
        google.charts.load('current',{packages:['corechart']});

        google.charts.setOnLoadCallback(() => this._drawChart(data));
    }

    //Dessine le graphique
    _drawChart(data) {

        //Formate les données pour le graphique
        const newData = data.filter( el => el.pib != 0).map(el => [el.pib, el.totalDeCas])
        const flags = data.filter( el => el.pib != 0).map(el =>{
            let link = el.flag.replace('svg','png').split('/')
            link.splice(3, 0, "16x12")
            return link.join("/")
        })
    
        //Met en place le graphique
        const dataChars = new google.visualization.DataTable()
    
        dataChars.addColumn('number', 'PIB')
        dataChars.addColumn('number', 'Nombre de cas')
    
        //Ajoute les données
        newData.forEach(element => dataChars.addRows([element]))
    
        //Options du graphique
        const options = {
            title: 'Nombre de cas du covid 19 en fonction du PIB dans le monde',
            hAxis: { title: 'Pib par habitants'},
            vAxis: { title: 'Nombre de cas'},
            legend: 'none',
            width: "100%",
            height: 800
        };
    
        //Dessine le graphique
        const canvas = document.getElementById('myChart')
        this.charts = new google.visualization.ScatterChart(canvas);
    
        //Met des drapeaux au pays correspondant
        google.visualization.events.addListener(this.charts, 'ready', ()=>{
            const layout = this.charts.getChartLayoutInterface()
    
            for (let index = 0; index < dataChars.getNumberOfRows(); index++) {
                
                const xAxis = layout.getXLocation(dataChars.getValue(index,0))
                const yAxis = layout.getYLocation(dataChars.getValue(index,1))
            
                const flag = canvas.appendChild(document.createElement('img'))
                flag.src =  flags[index]
            
    
                flag.className = "flagChart"
    
                flag.style.top = (yAxis - 7) + 'px';
                flag.style.left = (xAxis - 8) + 'px';
            }
        })
    
        this.charts.draw(dataChars, options);
    }

    updateCharts(data, length = 0){

        data = length != 0 ? data.slice(0,length) : data

        this.charts.clearChart()
        this._drawChart(data)
    }
}




export default Charts