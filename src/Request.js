//Class pour faire des requêtes aux API, utilise la mécanique des promesses.
class Request{
    static send = (URI,method,data={}) => {
        return new Promise((resolve,reject)=>{
            const request = new XMLHttpRequest()
            request.onreadystatechange = ()=>{
                if (request.readyState == 4 && request.status == 200){
                    data = JSON.parse(request.responseText)
                    resolve(data)
                }
            }
            request.open(method,URI)
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            
            method == "POST" ? request.send(JSON.stringify(data)) : request.send()
            
        })
    }
}

export default Request