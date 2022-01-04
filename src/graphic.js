
const loadChart = (data) =>{
    google.charts.load('current',{packages:['corechart']});

    google.charts.setOnLoadCallback(() => drawChart(data));
}

function drawChart(data) {

    const newData = data.filter( el => el.pib != 0).map(el => [el.pib, el.totalDeCas])
    const flags = data.filter( el => el.pib != 0).map(el =>{
        let link = el.flag.replace('svg','png').split('/')
        link.splice(3, 0, "16x12")
        return link.join("/")
    })

    // Set Data
    var data = new google.visualization.DataTable()

    data.addColumn('number', 'PIB')
    data.addColumn('number', 'Nombre de cas')

    newData.forEach(element => {
        data.addRows([element])
    });

    // Set Options
    var options = {
    title: 'Nombre de cas du covid 19 en fonction du PIB dans le monde',
    hAxis: {title: 'Pib par habitants'},
    vAxis: {title: 'Nombre de cas'},
    legend: 'none',
    width: "100%",
    height: 800
    };
    // Draw
    const canvas = document.getElementById('myChart')
    var chart = new google.visualization.ScatterChart(canvas);

google.visualization.events.addListener(chart, 'ready', ()=>{
    const layout = chart.getChartLayoutInterface()

    for (let index = 0; index < data.getNumberOfRows(); index++) {
        
        const xAxis = layout.getXLocation(data.getValue(index,0))
        const yAxis = layout.getYLocation(data.getValue(index,1))
    
        const flag = canvas.appendChild(document.createElement('img'))
        flag.src =  flags[index]
    

        flag.className = "flagChart"

        flag.style.top = (yAxis - 7) + 'px';
        flag.style.left = (xAxis - 8) + 'px';
    }
})

chart.draw(data, options);

console.log(chart.data)
}

export default loadChart