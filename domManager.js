class domManager{

    constructor(app){

        this.app = app

        this.input = null
        this.label = null
        
        this.initInput()
    }

    initInput(){
        
        this.input = document.createElement('input')


        this.app.append(this.input)
    }


    initTable(){

    }

    setTable(array){

    }




}
