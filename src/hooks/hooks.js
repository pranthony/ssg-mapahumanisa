import React, { useState} from "react"


const useVistCounter =  ()=> {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isSended, setIsSended] = useState(false)
    
    if(!isSended){
        setIsSended(true)

        fetch('https://mapa.lavaperu.com/index.php/visit/list')
        .then(data=> data.json())
        .then(data => setData(data), setIsLoading(false))
        
    }
    

    return {data, isLoading}

}

export default useVistCounter