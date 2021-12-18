import Request from "../src/Request";

//Simule un début de questionnaire avec ou sans localstorage
describe("Request des données à l'api", ()=>{

    it("Récupération des données du covid", async ()=>{

        const result = await Request.send("https://api.covid19api.com/summary","GET")

        console.log(result)

    })


})

