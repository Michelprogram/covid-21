class domManager{

    constructor(countries){

        this.countries = countries
        this.table = document.querySelector('.body-table')
        this.arrows = document.querySelectorAll('.arrow')
        this.button = document.querySelector('#button-refresh')
        this.input = document.querySelector('#text-filter')
        this.span = document.querySelector('#nb-pays')
    }

    setCountries(newCountries){
        this.countries = newCountries
    }

    setSpanValue(value){
        this.span.textContent = value
    }

    getInputValue(){
        return this.input.value
    }

    filterTable(){

        const childrens = this.table.children

        if (this.getInputValue() === ""){
            for (let index = 0; index < childrens.length; index++) {
                childrens[index].style.display = "table-row"
            }
        }

        if ( !isNaN( parseInt(this.getInputValue()) )){
            for (let index = parseInt(this.getInputValue()) + 1; index < childrens.length; index++) {
                childrens[index].style.display = "none"
            }
            this.setSpanValue(this.getInputValue())
     
        }
        else{
            this.setSpanValue(this.countries.length)
        }

        this.input.value = ""

    }


    initTable(){
        this.countries.forEach( element =>{

            const tr = document.createElement("tr")
    
            for (let index = 0; index < 5; index++) {
                const th = document.createElement("th")
    
                if(index === 0){
                    const img = document.createElement('img')
                    img.setAttribute('class','flag-svg')
                    img.src = element.flag
                    th.appendChild(img)
                }
                else if (index === 1)
                    th.innerHTML = element.nomDuPays
                else if (index === 2)
                    th.innerHTML = element.totalDeCas.splitAtThree()
                else if (index === 3)
                    th.innerHTML = element.totalDeMort.splitAtThree()
                else
                    th.innerHTML = element.pib == 0 ? "Introuvable" : element.pib.splitAtThree()
    
                tr.appendChild(th)
                
            }
    
            this.table.appendChild(tr)
    
        })
    }

    updateTable(countries){

        const trs = this.table.children
        let jndex = 0
    
        for (let index = 1; index < trs.length; index++) {
            const element = trs.item(index)
    
            const country = countries[jndex]
    
            const ths = [...element.children]
    
            ths.forEach( (el,index) =>{
                if(index === 0)
                    el.children.item(0).src = country.flag
                else if (index === 1)
                    el.textContent = country.nomDuPays
                else if (index === 2)
                    el.textContent = country.totalDeCas.splitAtThree()
                else if (index === 3)
                    el.textContent= country.totalDeMort.splitAtThree()
                else
                    el.textContent = country.pib == 0 ? "Introuvable" : country.pib.splitAtThree()
            })
    
            jndex++
        }
    }


    updateArrow(element,index){
        if (index == 0){
            const flag = element.src.includes('trialpha1')
    
            if (flag){
                element.src = element.src.replace('trialpha1','trialpha2')
                element.title = "Décroissant"
            }
            else if(!flag){
                element.src = element.src.replace('trialpha2','trialpha1')
                element.title = "Croissant"
            }
        }
        else{
            const flag = element.src.includes('tri1')
    
            if (flag){
                element.src = element.src.replace("tri1","tri2")
                element.title = "Décroissant"
            }
            else{
                element.src = element.src.replace("tri2","tri1")
                element.title = "Croissant"
            }
        }
    
        return element.title
    }




}
